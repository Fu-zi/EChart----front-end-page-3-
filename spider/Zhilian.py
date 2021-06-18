import urllib.request
import urllib.parse
from lxml import etree
from bs4 import BeautifulSoup
import xlwt
import ssl
ssl._create_default_https_context = ssl._create_unverified_context


class Zhilian(object):
    #初始化操作
    def __init__(self,city,job,spage,epage):
        self.headers={'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.84 Safari/537.36'}
        self.base_url ='https://sou.zhaopin.com/jobs/searchresult.ashx?'
        self.city=city
        self.job=job
        self.start_page = spage
        self.end_page = epage
        self.items =[]
        self.items_list=[['职位','公司名称','薪资','地点','发布日期']]


    #url拼接函数
    def url_handle(self,page):
        data = {
            'jl':self.city,
            'kw':self.job,
            'p': page,
        }
        data = urllib.parse.urlencode(data)
        url = self.base_url+data
        return url

    #构造request
    def request_handle(self,url):

        request = urllib.request.Request(url=url,headers=self.headers)
        return request

    #获取html页面
    def get_html(self,request):
        response = urllib.request.urlopen(request)
        html = response.read()
        return html

    #解析页面，获取数据
    def get_data(self,html):
        soup = BeautifulSoup(html,'lxml')
        tables_list = soup.select('.newlist_list_content > table')[1:]

        for item in tables_list:
            info={}
            job_name = item.select('.zwmc > div > a')[0].text
            complay_name = item.select('.gsmc > a')[0].string
            salary = item.select('.zwyx')[0].string
            location = item.select('.gzdd')[0].string
            time = item.select('.gxsj > span')[0].text
            info['职位']=job_name
            info['公司名称']=complay_name
            info['薪资']=salary
            info['地点']=location
            info['发布日期']=time
            self.items.append(info)
            self.items_list.append([job_name, complay_name, salary, location, time])

    #将数据保存为excel文件
    def sav_csv(self,data):
        workbook = xlwt.Workbook(encoding='utf-8')
        #添加表，指定表名
        booksheet = workbook.add_sheet(self.job, cell_overwrite_ok=True)
        for i, row in enumerate(data):
            for j, col in enumerate(row):
                booksheet.write(i, j, col)
        workbook.save(self.city+'.xls')

#启动爬虫
def start_spider(obj,page_list):
    for page in page_list:
       # print('开始下载第%d页' % page)
        url = obj.url_handle(page)
        request = obj.request_handle(url)
        html = obj.get_html(request)
        data = obj.get_data(html)
       # print('第%d页下载完成' % page)
    return obj.items_list

def main():
    city = input('请输入查询的城市名：')
    job =input('请输入查询的岗位：')
    spage = int(input('请输入起始页码：'))
    epage = int(input('请输入结束页面：'))

    page_list = range(spage,epage)
    #创建爬取智联的爬虫对象
    spider = Zhilian(city=city,job=job,spage=spage,epage=epage)

    #启动爬虫，用result接收结果
    result = start_spider(spider,page_list)

    #保存至本地
    spider.sav_csv(result)
    print('下载完成，一共下载%d页，已保存至本地！'%epage)


if __name__ == '__main__':
    main()
