//左边柱状图
;(function(){
    //实例化对象
    var myChart = echarts.init(document.querySelector('.bar .chart'))
    //指定配置项
   var option = {
       
        color: ['#3398DB'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        //图表大小
        grid: {
            left: '0%',
            right: '0%',
            top:'10px',
            bottom: '4%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['上海', '东莞', '南京', '广州', '杭州', '深圳', '苏州'],
                axisTick: {
                    alignWithLabel: true
                },
                //修改刻度标签相关样式
                axisLabel:{
                    color:'rgba(255,255,255,.6)',
                    fontSize:"12"

                },
                //不显示x轴样式
                axisLine:{
                    show:false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel:{
                    color:'rgba(255,255,255,.6)',
                    fontSize:"12"
    
                },
                //y轴样式
                axisLine:{
                    lineStyle:{
                        color:"rgba(255,255,255,.1)",
                        width:2
                    }
                },
                //y轴分割线
                splitLine:{
                    lineStyle:{
                        color:"rgba(255,255,255,.1)"
                    }
                }
            },
            
        ],
        series: [
            {
                name: '直接访问',
                type: 'bar',
                barWidth: '35%',
                data: [117, 18, 18, 18, 90, 54, 27],
                itemStyle:{
                    //修改柱子圆角
                    barBorderRadius:5
                }
            }
        ]
    };
    //将配置给实例对象
    myChart.setOption(option)
    //图表适应屏幕
    window.addEventListener('resize',function(){
        myChart.resize()
    })
    
})();

//右边横向柱状图

;(function(){
    //颜色
    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
    //实例化对象
    var myChart = echarts.init(document.querySelector('.bar2 .chart'))
   var  option = {
  
        grid: {
            left: '10%',
            right: '22%',
            bottom: '10%',
            // containLabel: true
        },
        xAxis: {
            show:false//x轴取消显示
            
        },
        yAxis: [
            //y轴两个数据一个条一个状
            {
                type: 'category',
                inverse:true,
                data: ['上海', '嘉兴', '无锡', '苏州', '重庆'],
                //不显示y轴线与刻度
                axisLine:{
                    show:false
                },
                axisTick:{
                    show:false
                },
                //刻度标签文字颜色
                axisLabel:{
                    color:'#fff'
                }
    
            },
            {
                show:true,
                inverse:true,
                type: 'category',
                data: [456,677,783,134,455],
                //不显示y轴线与刻度
                axisLine:{
                    show:false
                },
                axisTick:{
                    show:false
                },
                //刻度标签文字颜色
                axisLabel:{
                    textStyle:{
                        fontSize:12,
                        color:'#fff'
                    }
                    
                }
    
            },
        ],
        series: [
            {
                name: '条',
                type: 'bar',
                data: [70,34,60,78,69],
                //柱子层叠，使框框包住条
                yAxisIndex:0,
                //柱子之间的距离
                barCategoryGap:50,
                //柱子宽度
                barWidth:10,
                //柱子圆角
                itemStyle:{
                    normal:{
                        barBorderRadius:20,
                        //每个柱子不同颜色
                        color:function(params){
                            //将柱子索引与颜色一一对应
                            return myColor[params.dataIndex]
                        }
                    }
                },//柱子内文字控制
                label:{
                    show:true,
                    position:'inside',
                    formatter:'{c}%'
                }

            },
            {
               //第二框状
                name: '框',
                type: 'bar',
                barCategoryGap:50,
                 //柱子层叠，使框框包住条
                 yAxisIndex:1,
                barWidth:15,
                itemStyle:{
                    color:'none',
                    borderColor:'#00c1de',
                    borderWidth:3,
                    barBorderRadius:15
                },
                data: [100,100,100,100,100]
            }
        ]
    };
     //将配置给实例对象
     myChart.setOption(option)
     //图表适应屏幕
     window.addEventListener('resize',function(){
         myChart.resize()
     })
})();

//左边折线图

;(function(){
    var yearData = [
        {
          year: "2020", // 年份
          data: [
            // 两个数组是因为有两条线
              [3,4,5,6,7,8,9,10,11,12,16,17],
            [9,90,45,45, 72,36,27,18,9,27,9,18]
          ]
        },
        {
          year: "2021", // 年份
          data: [
            // 两个数组是因为有两条线
            [12, 17, 11, 19, 12, 60, 98, 21, 43, 64, 76, 38],
            [14, 13, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
          ]
        }
      ];
     //实例化对象
    var myChart = echarts.init(document.querySelector('.line .chart'))
    var option = {
        color:['#00f2f1','#ed3f35'],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            textStyle:{
                color:'#4c9bdf',
            },
        right:'10%'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top:'20%',
            show:true,//显示边框
            borderColor:'#012f4a',
            containLabel: true
        },
        xAxis: { 
            type: 'category',
            boundaryGap: false,//取消内间距
            data: ['一月', '二月','二月','三月','四月','五月','六月','七月'],
            axisTick:{
                show:false//取除刻度线
            },
            axisLabel:{
                color:'#4c9bfd'//文本颜色 
            },
            axisLine:{
                show:false//取消轴线
            }
        },
        yAxis: {
            type: 'value',
            axisTick:{
                show:false//取除刻度线
            },
            axisLabel:{
                color:'#4c9bfd'//文本颜色 
            },
            axisLine:{
                show:false//取消轴线
            },
            //分割线颜色
            splitLine:{
                lineStyle:{
                    color:'#012f4a'
                }
            }
        },
        series: [
            {
                name: '岗位需求',
                type: 'line',
                stack: '总量',
                smooth:true,//平滑曲线
                data:yearData[0].data[0]
            },
            {
                name: '岗位应聘',
                type: 'line',
                stack: '总量',
                smooth:true,//平滑曲线
                data: yearData[0].data[1]
            },
       
        ]
    };
    //将配置给实例对象
    myChart.setOption(option)
   
    //tab切换效果
    $('.line h2').on('click','a',function(){
        var obj = yearData[$(this).index()]
        option.series[0].data = obj.data[0]
        option.series[1].data = obj.data[1]
         //将配置给实例对象 重新渲染
        myChart.setOption(option)
    })
     //图表适应屏幕
     window.addEventListener('resize',function(){
        myChart.resize()
    })

})()

//右边折线图（2）

;(function(){
    var myChart = echarts.init(document.querySelector('.line2 .chart'))
   var option = {

        tooltip: {
            trigger: 'axis'
        },
        legend: {
            top:'0%',
            textStyle:{
                color:'rgba(255,255,255,.5)',
                fontSize:'12'
            }
            
        },
        grid: {
            left: '10',
            right: '10',
            top:'30',
            bottom: '10',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                axisLabel:{
                    textStyle:{
                        color:'rgba(255,255,255,.6)',
                        fontSize:12
                    }
                },
                axisLine:{
                    lineStyle:{
                        color:'rgba(255,255,255,.2)'
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisTick:{show:false},
                axisLabel:{
                    textStyle:{
                        color:'rgba(255,255,255,.6)',
                        fontSize:12
                    }
                },
                axisLine:{
                    lineStyle:{
                        color:'rgba(255,255,255,.1)'
                    }
                },
                //修改分割线的颜色
                splitLine:{
                    lineStyle:{
                        color:'rgba(255,255,255,.1)'
                    }
                }
            }
        ],
        series: [
            {
                name: '岗位需求',
                type: 'line',
                smooth:true,
                stack: '总量',
                areaStyle: {
                    //填充区域渐变色
                    color: new echarts.graphic.LinearGradient(
                      0,
                      0,
                      0,
                      1,
                      [
                        {
                          offset: 0,
                          color: "rgba(1, 132, 213, 0.4)" // 渐变色的起始颜色
                        },
                        {
                          offset: 0.8,
                          color: "rgba(1, 132, 213, 0.1)" // 渐变线的结束颜色
                        }
                      ],
                      false
                    ),
                    shadowColor: "rgba(0, 0, 0, 0.1)"
                  },
                // 设置拐点
                symbol: "circle",
                // 拐点大小
                symbolSize: 8,
                // 开始不显示拐点， 鼠标经过显示
                showSymbol: false,
                // 设置拐点颜色以及边框
                itemStyle: {
                    color: "#0184d5",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 12
                },
                data: [120, 132, 101, 134, 90, 230, 210],
                //线条样式
                lineStyle:{
                    color:'#0184d5',
                    width:2
                }
            },
            {
                name: '应聘需求',
                type: 'line',
                smooth:true,
                stack: '总量',
                areaStyle: {
                    normal: {
                      color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                          {
                            offset: 0,
                            color: "rgba(0, 216, 135, 0.4)"
                          },
                          {
                            offset: 0.8,
                            color: "rgba(0, 216, 135, 0.1)"
                          }
                        ],
                        false
                      ),
                      shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                  },
                    // 设置拐点 小圆点
                symbol: "circle",
                // 拐点大小
                symbolSize: 5,
                // 设置拐点颜色以及边框
                itemStyle: {
                    color: "#00d887",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 12
                },
                // 开始不显示拐点， 鼠标经过显示
                showSymbol: false,
                data: [220, 182, 191, 234, 290, 330, 310],
                lineStyle:{
                    color:'#0184d5',
                    width:2
                }
            }
        ]
    };
     //将配置给实例对象
     myChart.setOption(option)
     //图表适应屏幕
     window.addEventListener('resize',function(){
         myChart.resize()
     })
    
})()

//左边饼图
;(function() {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".pie .chart"));
    // 2.指定配置
    var option = {
      color: ["#065aab", "#066eab", "#0682ab", "#0696ab", "#06a0ab"],
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
  
      legend: {
        bottom: "0%",
        // 修改小图标的大小
        itemWidth: 8,
        itemHeight: 8,
        // 修改图例组件的文字为 12px
        textStyle: {
          color: "rgba(255,255,255,.5)",
          fontSize: "12"
        }
      },
      series: [
        {
          name: "年龄分布",
          type: "pie",
          // 这个radius可以修改饼形图的大小
          // radius 第一个值是内圆的半径 第二个值是外圆的半径
          radius: ["40%", "60%"],
          center: ["50%", "45%"],
          avoidLabelOverlap: false,
          // 图形上的文字
          label: {
            show: false,
            position: "center"
          },
          // 链接文字和图形的线是否显示
          labelLine: {
            show: false
          },
          data: [
            { value: 1, name: "0岁以下" },
            { value: 4, name: "20-29岁" },
            { value: 2, name: "30-39岁" },
            { value: 2, name: "40-49岁" },
            { value: 1, name: "50岁以上" }
          ]
        }
      ]
    };
  
    // 3. 把配置给实例对象
    myChart.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();
  

//右边饼图(2)

;(function(){

    var myChart = echarts.init(document.querySelector(".pie2 .chart"));
    option = {
        color: [
            "#006cff",
            "#60cda0",
            "#ed8884",
            "#ff9f7f",
            "#0096ff",
            "#9fe6b8",
            "#32c5e9",
            "#1d9dff"
        ],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        // legend: {
        //     bottom: "0%",
        //     itemWidth: 10,
        //     itemHeight: 10,
        //     textStyle: {
        //       color: "rgba(255,255,255,.5)",
        //       fontSize: "12"
        //     }
        //   },
        series: [
            {
              name: "地区分布",
              type: "pie",
              radius: ["10%", "70%"],
              center: ["50%", "50%"],
              roseType: "radius",
              // 图形的文字标签
              label: {
                fontSize: 10
              },
              // 链接图形和文字的线条
              labelLine: {
                // length 链接图形的线条
                length: 6,
                // length2 链接文字的线条
                length2: 8
              },
              data: [
                { value: 20, name: "云南" },
                { value: 26, name: "北京" },
                { value: 24, name: "山东" },
                { value: 25, name: "河北" },
                { value: 20, name: "江苏" },
                { value: 25, name: "浙江" },
                { value: 30, name: "四川" },
                { value: 42, name: "湖北" }
              ]
            }
          ]
    };
      // 3. 把配置给实例对象
      myChart.setOption(option);
      // 4. 让图表跟随屏幕自动的去适应
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    
})()

//中间飞行图
// 模拟飞行路线模块地图模块
;(function() {
    var myChart = echarts.init(document.querySelector(".map .chart"));
    var geoCoordMap = {
      上海: [121.4648, 31.2891],
      东莞: [113.8953, 22.901],
      东营: [118.7073, 37.5513],
      中山: [113.4229, 22.478],
      临汾: [111.4783, 36.1615],
      临沂: [118.3118, 35.2936],
      丹东: [124.541, 40.4242],
      丽水: [119.5642, 28.1854],
      乌鲁木齐: [87.9236, 43.5883],
      佛山: [112.8955, 23.1097],
      保定: [115.0488, 39.0948],
      兰州: [103.5901, 36.3043],
      包头: [110.3467, 41.4899],
      北京: [116.4551, 40.2539],
      北海: [109.314, 21.6211],
      南京: [118.8062, 31.9208],
      南宁: [108.479, 23.1152],
      南昌: [116.0046, 28.6633],
      南通: [121.1023, 32.1625],
      厦门: [118.1689, 24.6478],
      台州: [121.1353, 28.6688],
      合肥: [117.29, 32.0581],
      呼和浩特: [111.4124, 40.4901],
      咸阳: [108.4131, 34.8706],
      哈尔滨: [127.9688, 45.368],
      唐山: [118.4766, 39.6826],
      嘉兴: [120.9155, 30.6354],
      大同: [113.7854, 39.8035],
      大连: [122.2229, 39.4409],
      天津: [117.4219, 39.4189],
      太原: [112.3352, 37.9413],
      威海: [121.9482, 37.1393],
      宁波: [121.5967, 29.6466],
      宝鸡: [107.1826, 34.3433],
      宿迁: [118.5535, 33.7775],
      常州: [119.4543, 31.5582],
      广州: [113.5107, 23.2196],
      廊坊: [116.521, 39.0509],
      延安: [109.1052, 36.4252],
      张家口: [115.1477, 40.8527],
      徐州: [117.5208, 34.3268],
      德州: [116.6858, 37.2107],
      惠州: [114.6204, 23.1647],
      成都: [103.9526, 30.7617],
      扬州: [119.4653, 32.8162],
      承德: [117.5757, 41.4075],
      拉萨: [91.1865, 30.1465],
      无锡: [120.3442, 31.5527],
      日照: [119.2786, 35.5023],
      昆明: [102.9199, 25.4663],
      杭州: [119.5313, 29.8773],
      枣庄: [117.323, 34.8926],
      柳州: [109.3799, 24.9774],
      株洲: [113.5327, 27.0319],
      武汉: [114.3896, 30.6628],
      汕头: [117.1692, 23.3405],
      江门: [112.6318, 22.1484],
      沈阳: [123.1238, 42.1216],
      沧州: [116.8286, 38.2104],
      河源: [114.917, 23.9722],
      泉州: [118.3228, 25.1147],
      泰安: [117.0264, 36.0516],
      泰州: [120.0586, 32.5525],
      济南: [117.1582, 36.8701],
      济宁: [116.8286, 35.3375],
      海口: [110.3893, 19.8516],
      淄博: [118.0371, 36.6064],
      淮安: [118.927, 33.4039],
      深圳: [114.5435, 22.5439],
      清远: [112.9175, 24.3292],
      温州: [120.498, 27.8119],
      渭南: [109.7864, 35.0299],
      湖州: [119.8608, 30.7782],
      湘潭: [112.5439, 27.7075],
      滨州: [117.8174, 37.4963],
      潍坊: [119.0918, 36.524],
      烟台: [120.7397, 37.5128],
      玉溪: [101.9312, 23.8898],
      珠海: [113.7305, 22.1155],
      盐城: [120.2234, 33.5577],
      盘锦: [121.9482, 41.0449],
      石家庄: [114.4995, 38.1006],
      福州: [119.4543, 25.9222],
      秦皇岛: [119.2126, 40.0232],
      绍兴: [120.564, 29.7565],
      聊城: [115.9167, 36.4032],
      肇庆: [112.1265, 23.5822],
      舟山: [122.2559, 30.2234],
      苏州: [120.6519, 31.3989],
      莱芜: [117.6526, 36.2714],
      菏泽: [115.6201, 35.2057],
      营口: [122.4316, 40.4297],
      葫芦岛: [120.1575, 40.578],
      衡水: [115.8838, 37.7161],
      衢州: [118.6853, 28.8666],
      西宁: [101.4038, 36.8207],
      西安: [109.1162, 34.2004],
      贵阳: [106.6992, 26.7682],
      连云港: [119.1248, 34.552],
      邢台: [114.8071, 37.2821],
      邯郸: [114.4775, 36.535],
      郑州: [113.4668, 34.6234],
      鄂尔多斯: [108.9734, 39.2487],
      重庆: [107.7539, 30.1904],
      金华: [120.0037, 29.1028],
      铜川: [109.0393, 35.1947],
      银川: [106.3586, 38.1775],
      镇江: [119.4763, 31.9702],
      长春: [125.8154, 44.2584],
      长沙: [113.0823, 28.2568],
      长治: [112.8625, 36.4746],
      阳泉: [113.4778, 38.0951],
      青岛: [120.4651, 36.3373],
      韶关: [113.7964, 24.7028]
    };
  
    var XAData = [
      [{ name: "上海" }, { name: "深圳", value: 100 }],
      [{ name: "上海" }, { name: "上海", value: 100 }],
      [{ name: "上海" }, { name: "广州", value: 100 }],
      [{ name: "上海" }, { name: "南京", value: 100 }],
      [{ name: "上海" }, { name: "苏州", value: 100 }]
    ];

    var XNData = [
      [{ name: "杭州" }, { name: "深圳", value: 100 }],
      [{ name: "杭州" }, { name: "上海", value: 100 }],
      [{ name: "杭州" }, { name: "广州", value: 100 }],
      [{ name: "杭州" }, { name: "北京", value: 100 }],
      [{ name: "杭州" }, { name: "长沙", value: 100 }]
    ];
  
    var YCData = [
      [{ name: "深圳" }, { name: "东莞", value: 100 }],
      [{ name: "深圳" }, { name: "广州", value: 100 }],
      [{ name: "深圳" }, { name: "上海", value: 100 }],
      [{ name: "苏州" }, { name: "广州", value: 100 }],
      [{ name: "苏州" }, { name: "北京", value: 100 }]
    ];
  
    var planePath =
      "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
    //var planePath = 'arrow';
    var convertData = function(data) {
      var res = [];
      for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
  
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
          res.push({
            fromName: dataItem[0].name,
            toName: dataItem[1].name,
            coords: [fromCoord, toCoord],
            value: dataItem[1].value
          });
        }
      }
      return res;
    };


    var color = ["#a6c84c", "#ffa022", "#46bee9"]; //航线的颜色
    var series = [];
    [
      ["上海", XAData],
      ["杭州", XNData],
      ["深圳", YCData]
    ].forEach(function(item, i) {
      series.push(
        {
          name: item[0] + " Top1",
          type: "lines",
          zlevel: 1,
          effect: {
            show: true,
            period: 6,
            trailLength: 0.7,
            color: "red", //arrow箭头的颜色
            symbolSize: 3
          },
          lineStyle: {
            normal: {
              color: color[i],
              width: 0,
              curveness: 0.2
            }
          },
          data: convertData(item[1])
        },
        {
          name: item[0] + " Top2",
          type: "lines",
          zlevel: 2,
          symbol: ["none", "arrow"],
          symbolSize: 10,
          effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: planePath,
            symbolSize: 15
          },
          lineStyle: {
            normal: {
              color: color[i],
              width: 1,
              opacity: 0.6,
              curveness: 0.2
            }
          },
          data: convertData(item[1])
        },
        {
          name: item[0] + " Top3",
          type: "effectScatter",
          coordinateSystem: "geo",
          zlevel: 2,
          rippleEffect: {
            brushType: "stroke"
          },
          label: {
            normal: {
              show: true,
              position: "right",
              formatter: "{b}"
            }
          },
          symbolSize: function(val) {
            return val[2] / 8;
          },
          itemStyle: {
            normal: {
              color: color[i]
            },
            emphasis: {
              areaColor: "#2B91B7"
            }
          },
          data: item[1].map(function(dataItem) {
            return {
              name: dataItem[1].name,
              value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
            };
          })
        }
      );
    });
    var option = {
      tooltip: {
        trigger: "item",
        formatter: function(params, ticket, callback) {
          if (params.seriesType == "effectScatter") {
            return "线路：" + params.data.name + "" + params.data.value[2];
          } else if (params.seriesType == "lines") {
            return (
              params.data.fromName +
              ">" +
              params.data.toName +
              "<br />" +
              params.data.value
            );
          } else {
            return params.name;
          }
        }
      },
      legend: {
        orient: "vertical",
        top: "bottom",
        left: "right",
        data: ["上海 Top1", "杭州 Top2", "深圳 Top3"],
        textStyle: {
          color: "#fff"
        },
        selectedMode: "multiple"
      },
      geo: {
        map: "china",
        label: {
          emphasis: {
            show: true,
            color: "#fff"
          }
        },
        // 把中国地图放大了1.2倍
        zoom: 1.2,
        roam: true,
        itemStyle: {
          normal: {
            // 地图省份的背景颜色
            areaColor: "rgba(20, 41, 87,0.6)",
            borderColor: "#195BB9",
            borderWidth: 1
          },
          emphasis: {
            areaColor: "#2B91B7"
          }
        }
      },
      series: series
    };
    myChart.setOption(option);
    // 监听浏览器缩放，图表对象调用缩放resize函数
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();
  