 // -------------空气质量实况-------

 var max = 100; //满刻度大小
 // --pm2.5--圆
 var data1 = 78; //数值大小
 var PM25Pic = document.getElementById('PM25Pic')
 var PM25Yuan = echarts.init(PM25Pic)

 var examNumcolor = [{
     type: 'linear',
     x: 0,
     y: 0,
     x2: 0,
     y2: 0.6,
     colorStops: [{
         offset: 0.2,
         color: 'rgba(57, 255, 220, 0.2)', // 0% 处的颜色

     }, {
         offset: 1,
         color: 'rgba(57, 255, 220, 1)', // 100% 处的颜色

     }],
     globalCoord: false, // 缺省为 false,
 }, 'none'];

 var exemptcolor = [{ //偶数圆环
     type: 'linear',
     x: 0,
     y: 0,
     x2: 0,
     y2: 1,
     colorStops: [{
         offset: 0.2,
         color: 'rgba(255, 234, 15, 0.2)', // 0% 处的颜色

     }, {
         offset: 1,
         color: 'rgba(255, 234, 15, 1)',

     }],
     globalCoord: false // 缺省为 false
 }, 'none'];

 var dataStyle = {
     normal: {
         label: {
             show: false
         },
         labelLine: {
             show: false
         },
         shadowBlur: 10,
         shadowColor: 'rgba(142, 152, 241, 0.6)',
     }
 };
 PM25option = {
     series: [{
         name: '第一个圆环',
         type: 'pie',
         clockWise: false,
         radius: [30, 33],
         color: examNumcolor,
         itemStyle: dataStyle,
         hoverAnimation: false,
         center: ['50%', '50%'],
         data: [{
                 value: data1,
                 label: {
                     normal: {
                         rich: {
                             a: {
                                 color: '#fff',
                                 align: 'center',
                                 fontSize: 18,
                                 fontWeight: "bold"
                             },
                             b: {
                                 color: '#fff',
                                 align: 'center',
                                 fontSize: 10
                             }
                         },
                         formatter: function(params) {
                             return "{a|" + params.value + "}\n" + "{b|μg/m³}";
                         },
                         position: 'center',
                         show: true,
                         textStyle: {
                             fontSize: '14',
                             fontWeight: 'normal',
                             color: '#fff'
                         }
                     }
                 },

             },
             // { //画中间的图标
             //     name: "",
             //     value: 0,
             //     label: {
             //         position: 'inside',
             //         backgroundColor: {
             //             image: 'data:image/png;base64,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'
             //         },
             //         width: 10,
             //         height: 10,
             //         // borderRadius: 10,
             //         // padding: 10
             //     }
             // },
             {
                 value: max - data1,
                 name: 'invisible',
                 itemStyle: {
                     normal: {
                         color: '#24375c',
                         'borderWidth': 2,
                     },
                     emphasis: {
                         color: '#24375c',
                         "borderColor": 'rgba(0,0,0,0)',
                         "borderWidth": 0
                     }
                 }
             },

         ],

     }, ],
     animationDuration: 7000, //控制渲染速度

 }


 // --PM10--圆
 var data2 = 8; //数值大小
 var PM10Pic = document.getElementById('PM10Pic')
 var PM10Yuan = echarts.init(PM10Pic)

 PM10option = {
     series: [{
         name: '第二个圆环',
         type: 'pie',
         clockWise: false,
         radius: [30, 33],
         color: exemptcolor,
         itemStyle: dataStyle,
         hoverAnimation: false,
         center: ['50%', '50%'],
         data: [{
                 value: data2,
                 label: {
                     normal: {
                         rich: {
                             a: {
                                 color: '#fff',
                                 align: 'center',
                                 fontSize: 18,
                                 fontWeight: "bold",
                                 padding: 0
                             },
                             b: {
                                 color: '#fff',
                                 align: 'center',
                                 fontSize: 10
                             }
                         },
                         formatter: function(params) {
                             // return "{b|在线统计}\n\n" + "{a|" + params.value + "}";
                             return "{a|" + params.value + "}\n" + "{b|μg/m³}";
                         },
                         position: 'center',
                         show: true,
                         textStyle: {
                             fontSize: '14',
                             fontWeight: 'normal',
                             color: '#fff'
                         }
                     }
                 },

             },

             {
                 value: max - data2,
                 name: 'invisible',
                 itemStyle: {
                     normal: {
                         color: '#24375c',
                         'borderWidth': 2,
                     },
                     emphasis: {
                         color: '#24375c',
                         "borderColor": 'rgba(0,0,0,0)',
                         "borderWidth": 0
                     }
                 }
             },

         ]
     }, ],
     animationDuration: 7000, //控制渲染速度

 }



 // --SO2--圆
 var data3 = 19; //数值大小
    var SO2Pic = document.getElementById('So2Pic')
    var SO2Yuan = echarts.init(SO2Pic)




 SO2option = {
     series: [{
         name: '第三个圆环',
         type: 'pie',
         clockWise: false,
         radius: [30, 33],
         color: examNumcolor,
         itemStyle: dataStyle,
         hoverAnimation: false,
         center: ['50%', '50%'],
         data: [{
                 value: data3,
                 label: {
                     normal: {
                         rich: {
                             a: {
                                 color: '#fff',
                                 align: 'center',
                                 fontSize: 18,
                                 fontWeight: "bold",
                                 padding: 0
                             },
                             b: {
                                 color: '#fff',
                                 align: 'center',
                                 fontSize: 10
                             }
                         },
                         formatter: function(params) {
                             // return "{b|在线统计}\n\n" + "{a|" + params.value + "}";
                             return "{a|" + params.value + "}\n" + "{b|μg/m³}";
                         },
                         position: 'center',
                         show: true,
                         textStyle: {
                             fontSize: '14',
                             fontWeight: 'normal',
                             color: '#fff'
                         }
                     }
                 },

             },

             {
                 value: max - data3,
                 name: 'invisible',
                 itemStyle: {
                     normal: {
                         color: '#24375c',
                         'borderWidth': 2,
                     },
                     emphasis: {
                         color: '#24375c',
                         "borderColor": 'rgba(0,0,0,0)',
                         "borderWidth": 0
                     }
                 }
             },

         ]
     }, ],
     animationDuration: 7000, //控制渲染速度

 }


 // --No2--圆
 var data4 = 32; //数值大小
 var NO2Pic = document.getElementById('No2Pic')
 var NO2Yuan = echarts.init(NO2Pic)


 NO2option = {
     series: [{
         name: '第三个圆环',
         type: 'pie',
         clockWise: false,
         radius: [30, 33],
         color: exemptcolor,
         itemStyle: dataStyle,
         hoverAnimation: false,
         center: ['50%', '50%'],
         data: [{
                 value: data4,
                 label: {
                     normal: {
                         rich: {
                             a: {
                                 color: '#fff',
                                 align: 'center',
                                 fontSize: 18,
                                 fontWeight: "bold",
                                 padding: 0
                             },
                             b: {
                                 color: '#fff',
                                 align: 'center',
                                 fontSize: 10
                             }
                         },
                         formatter: function(params) {
                             // return "{b|在线统计}\n\n" + "{a|" + params.value + "}";
                             return "{a|" + params.value + "}\n" + "{b|μg/m³}";
                         },
                         position: 'center',
                         show: true,
                         textStyle: {
                             fontSize: '14',
                             fontWeight: 'normal',
                             color: '#fff'
                         }
                     }
                 },

             },
             {
                 value: max - data4,
                 name: 'invisible',
                 itemStyle: {
                     normal: {
                         color: '#24375c',
                         'borderWidth': 2,
                     },
                     emphasis: {
                         color: '#24375c',
                         "borderColor": 'rgba(0,0,0,0)',
                         "borderWidth": 0
                     }
                 }
             },

         ]
     }, ],
     animationDuration: 7000, //控制渲染速度
 }


 // --CO--圆
 var data5 = 22; //数值大小
 var COPic = document.getElementById('CoPic')
 var COYuan = echarts.init(COPic)


 COoption = {
     series: [{
         name: '第三个圆环',
         type: 'pie',
         clockWise: false,
         radius: [30, 33],
         color: examNumcolor,
         itemStyle: dataStyle,
         hoverAnimation: false,
         center: ['50%', '50%'],
         data: [{
                 value: data5,
                 label: {
                     normal: {
                         rich: {
                             a: {
                                 color: '#fff',
                                 align: 'center',
                                 fontSize: 18,
                                 fontWeight: "bold",
                                 padding: 0
                             },
                             b: {
                                 color: '#fff',
                                 align: 'center',
                                 fontSize: 10
                             }
                         },
                         formatter: function(params) {
                             // return "{b|在线统计}\n\n" + "{a|" + params.value + "}";
                             return "{a|" + params.value + "}\n" + "{b|mg/m³}";
                         },
                         position: 'center',
                         show: true,
                         textStyle: {
                             fontSize: '14',
                             fontWeight: 'normal',
                             color: '#fff'
                         }
                     }
                 },

             },
             {
                 value: max - data5,
                 name: 'invisible',
                 itemStyle: {
                     normal: {
                         color: '#24375c',
                         'borderWidth': 2,
                     },
                     emphasis: {
                         color: '#24375c',
                         "borderColor": 'rgba(0,0,0,0)',
                         "borderWidth": 0
                     }
                 }
             },

         ]
     }, ],
     animationDuration: 7000, //控制渲染速度
 }




 // --o3--圆
 var data6 = 74; //数值大小

 var O3Pic = document.getElementById('O3Pic')
 var O3Yuan = echarts.init(O3Pic)
 O3option = {
     series: [{
         name: '第六个圆环',
         type: 'pie',
         clockWise: false,
         radius: [30, 33],
         color: exemptcolor,
         itemStyle: dataStyle,
         hoverAnimation: false,
         center: ['50%', '50%'],
         data: [{
                 value: data6,
                 label: {
                     normal: {
                         rich: {
                             a: {
                                 color: '#fff',
                                 align: 'center',
                                 fontSize: 18,
                                 fontWeight: "bold",
                                 padding: 0
                             },
                             b: {
                                 color: '#fff',
                                 align: 'center',
                                 fontSize: 10
                             }
                         },
                         formatter: function(params) {
                             // return "{b|在线统计}\n\n" + "{a|" + params.value + "}";
                             return "{a|" + params.value + "}\n" + "{b|μg/m³}";
                         },
                         position: 'center',
                         show: true,
                         textStyle: {
                             fontSize: '14',
                             fontWeight: 'normal',
                             color: '#fff'
                         }
                     }
                 },

             },
             {
                 value: max - data6,
                 name: 'invisible',
                 itemStyle: {
                     normal: {
                         color: '#24375c',
                         'borderWidth': 2,
                     },
                     emphasis: {
                         color: '#24375c',
                         "borderColor": 'rgba(0,0,0,0)',
                         "borderWidth": 0
                     }
                 }
             },

         ]
     }, ],
     animationDuration: 7000, //控制渲染速度
 }



 function airQuarity() {
     $.ajax({
         method: 'get',
         url: url + '/envAutoAir/leastDate',
         success: function(res) {
             $('.releaseTime').html(res.entity.queryTime + '发布') //发布时间
             $('.mianPollutionName').html(res.entity.primaryEp) //首要污染物

             if (res.entity.aqi < 50) {
                 $('.pollutionDegree').html('优')
             } else if (51 < res.entity.aqi < 100) {
                 $('.pollutionDegree').html('良')
             } else if (101 < res.entity.aqi < 150) {
                 $('.pollutionDegree').html('轻度污染')
             } else if (151 < res.entity.aqi < 200) {
                 $('.pollutionDegree').html('中度污染')
             } else if (201 < res.entity.aqi < 300) {
                 $('.pollutionDegree').html('重度污染')
             } else if (301 < res.entity.aqi) {
                 $('.pollutionDegree').html('重度污染')
             }


             // pm25
             PM25option.series[0].data[0].value = res.entity.pm25
             PM25option.series[0].data[1].value = 100 - res.entity.pm25
             setTimeout(() => {
                 PM25Yuan.setOption(PM25option)
             }, 2000);


             // pm10
             PM10option.series[0].data[0].value = res.entity.pm10
             PM10option.series[0].data[1].value = 100 - res.entity.pm10
             setTimeout(() => {
                 PM10Yuan.setOption(PM10option)
             }, 2500);


             // so2
             SO2option.series[0].data[0].value = res.entity.so2
             SO2option.series[0].data[1].value = 100 - res.entity.so2
             setTimeout(() => {
                 SO2Yuan.setOption(SO2option)
             }, 3000);

             // no2
             NO2option.series[0].data[0].value = res.entity.no2
             NO2option.series[0].data[1].value = 100 - res.entity.no2
             setTimeout(() => {
                 NO2Yuan.setOption(NO2option)
             }, 3500);


             // co
             COoption.series[0].data[0].value = res.entity.co
             COoption.series[0].data[1].value = 100 - res.entity.co
             setTimeout(() => {
                 COYuan.setOption(COoption)
             }, 4000);

             // o3
             O3option.series[0].data[0].value = parseInt(res.entity.o3oneHour) //去除小数，取整数部分
             O3option.series[0].data[1].value = 100 - res.entity.o3oneHour
             setTimeout(() => {
                 O3Yuan.setOption(O3option)
             }, 4500);


         }
     })
 }
 airQuarity()







 // ----------本年优良率与去年同期对比---
 function contrast() {
     $.ajax({
         type: 'get',
         url: url + '/envAutoAir/yearOnYearAqi',
         success: function(res) {
             for (var i = 0; i < res.lastYear.length; i++) {
                 excellentRateOption.series[1].data.push(res.lastYear[i].aqi)
             }
             for (var i = 0; i < res.thisYear.length; i++) {
                 excellentRateOption.series[0].data.push(res.thisYear[i].aqi)
             }
             setTimeout(() => {
                 excellentRatePic.setOption(excellentRateOption)
             }, 1200);
         }
     })
 }
 contrast()


 var excellentRate = document.getElementById('excellentRate')
 var excellentRatePic = echarts.init(excellentRate)
 var fontColor = 'RGBA(47, 213, 188, 1)';
 let RateData = [{
         name: '2020年',
         list: [
             { enName: "1月", value: "88" },
             { enName: "2月", value: "98" },
             { enName: "3月", value: "90" },
             { enName: "4月", value: "95" },
             { enName: "5月", value: "" },
             { enName: "6月", value: "" },
             { enName: "7月", value: "" },
             { enName: "8月", value: "" },
             { enName: "9月", value: "" },
             { enName: "10月", value: "" },
             { enName: "11月", value: "" },
             { enName: "12月", value: "" },
         ]

     },
     {
         name: '2019年',
         list: [
             { enName: "1月", value: "90" },
             { enName: "2月", value: "87" },
             { enName: "3月", value: "92" },
             { enName: "4月", value: "94" },
             { enName: "5月", value: "95" },
             { enName: "6月", value: "96" },
             { enName: "7月", value: "93" },
             { enName: "8月", value: "89" },
             { enName: "9月", value: "85" },
             { enName: "10月", value: "90" },
             { enName: "11月", value: "82" },
             { enName: "12月", value: "90" },
         ]
     },
 ];
 let datelist = [];
 let safeList = [];
 let danger = [];
 RateData[0].list.forEach(function(value, index) {
     datelist.push(RateData[0].list[index].enName);
     safeList.push(RateData[0].list[index].value);
     danger.push(RateData[1].list[index].value);
 });
 excellentRateOption = {
     grid: {
         left: '1%',
         right: '5%',
         top: '20%',
         bottom: '5%',
         containLabel: true
     },
     tooltip: {
         show: true,
         trigger: 'item'
     },
     legend: {
         show: true,
         x: 'center',
         y: '2',
         icon: 'stack',
         itemWidth: 15,
         itemHeight: 5,
         textStyle: {
             color: 'rgba(255,255,255,1)',
             fontSize: 12
         },
         nameTextStyle: {
             color: 'rgba(255,255,255,1)'
         },
         data: [RateData[0].name, RateData[1].name]
     },
     xAxis: [{
         type: 'category',
         boundaryGap: false,
         axisLabel: {
             color: fontColor,
             fontSize: 10
         },
         axisLine: {
             show: true,
             lineStyle: {
                 color: 'rgba(255,255,255,0.1)',
             }
         },
         axisTick: {
             show: false,
         },
         splitLine: {
             show: true,
             lineStyle: {
                 color: 'rgba(255,255,255,0.05)',
             }
         },
         data: datelist
     }],
     yAxis: [{
         type: 'value',
         name: '',
         nameTextStyle: {
             color: 'RGBA(47, 213, 188, 1)',
             fontSize: 10
         },
         axisLabel: {
             formatter: '{value}' + '%',
             textStyle: {
                 color: fontColor,
                 fontSize: 10
             }
         },
         axisLine: {
             lineStyle: {
                 color: 'rgba(255,255,255,0.1)',
             }
         },
         axisTick: {
             show: false,
         },
         splitLine: {
             show: true,
             lineStyle: {
                 color: 'rgba(255,255,255,0.05)',
             }
         }
     }],
     series: [{
             name: RateData[0].name,
             type: 'line',
             smooth: true, //true 为平滑曲线，false为直线
             // smooth:true,  //这个是把线变成曲线
             itemStyle: {
                 normal: {
                     color: '#0092f6',
                     lineStyle: {
                         color: "#0092f6",
                         width: 1
                     },
                     areaStyle: {
                         color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                             offset: 0,
                             color: 'rgba(0,255,255,0)'
                         }, {
                             offset: 1,
                             color: 'rgba(0,255,255,1)'
                         }]),
                     }
                 }
             },
             data: []
         },
         {
             name: RateData[1].name,
             type: 'line',
             smooth: true, //true 为平滑曲线，false为直线
             itemStyle: {
                 normal: {
                     color: 'RGBA(251, 233, 32, 1)',
                     lineStyle: {
                         color: "RGBA(244, 226, 22, 1)",
                         width: 1
                     },
                     areaStyle: {
                         //color: '#94C9EC'
                         color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                             offset: 0,
                             color: 'RGBA(244, 226, 22, 0)'
                         }, {
                             offset: 1,
                             color: 'RGBA(251, 233, 32, 1)'
                         }]),
                     }
                 }
             },
             data: []
         }
     ],
     animationDuration: 4000, //控制渲染速度

 };




 // ----------最近24小时质透分析---
 //请求最近24小时的质透数据
 var timesArray = [] //存放后台传过来的时间数据
 function thoroughAjax() {
     $.ajax({
         url: url + '/envAutoAir/leastAnalysis',
         type: 'get',
         success: function(res) {
             for (var i = 0; i < res.time.length; i++) {
                 timesArray.push(res.time[i].slice(11, 13)) //截取时间存入时间数组
             }
             for (var i = 0; i < res.entity.length; i++) {
                 thoroughOption.series[0].data.push(res.entity[i].co) //存入co数据
                 thoroughOption.series[1].data.push(res.entity[i].no2) //存入no2数据
                 thoroughOption.series[2].data.push(res.entity[i].o3oneHour) //存入o3oneHour数据
                 thoroughOption.series[3].data.push(res.entity[i].pm10)
                 thoroughOption.series[4].data.push(res.entity[i].pm25)
                 thoroughOption.series[5].data.push(res.entity[i].so2)
             }

             thoroughOption.xAxis[0].data = timesArray; //将data转为存后的时间数组
             var thorough = document.getElementById('thorough-analyze') //开始渲染质透分析图
             var thoroughAna = echarts.init(thorough)
             thoroughAna.setOption(thoroughOption, true)
         }
     })
 }
 thoroughAjax()

 // var thorough = document.getElementById('thorough-analyze') //开始渲染质透分析图
 // var thoroughAna = echarts.init(thorough)

 thoroughOption = {
     tooltip: { //这个为悬浮框
         trigger: 'axis',
         axisPointer: { // 坐标轴指示器，坐标轴触发有效
             type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
         },
         formatter: function(params) {
             var relVal = params[0].name + ' 时';
             var relValOne = '<br/>' + params[0].seriesName + ' : ' + params[0].value + " mg/m³"
             var relValTwo = '';
             for (var i = 1, l = params.length; i < l; i++) {
                 relValTwo += '<br/>' + params[i].seriesName + ' : ' + params[i].value + " μg/m³";
             }
             relVal += relValOne += relValTwo
             return relVal;
         }
     },
     legend: {
         data: ['CO', 'NO₂', 'O₃', 'PM₁₀', 'PM₂.₅', 'SO₂'],
         // align: 'left',
         // orient: 'vertical',
         // x: 'right',
         y: 'top',
         top: '0%',
         textStyle: { //图例文字的样式
             color: '#fff',
             fontSize: 12
         },
         icon: "circle",
         itemWidth: 6, // 设置宽度

         itemHeight: 6, // 设置高度

         itemGap: 10 // 设置间距
     },
     grid: {
         left: '0%',
         right: '0%',
         bottom: '8%',
         top: '10%',
         containLabel: true
     },
     xAxis: [{
         type: 'category',
         data: [],
         axisLabel: {
             show: true,
             interval: 0,
             textStyle: {
                 color: 'RGBA(0, 222, 224, 1)' //设置字体颜色
             }
         },
         axisLine: { //X轴线的宽度及颜色
             show: true,
             lineStyle: {
                 color: 'rgba(255,255,255,0.1)',
             }
         },
         axisTick: {
             //y轴不显示刻度线，
             show: false
         },

     }],
     yAxis: [{
         type: 'value',
         axisLabel: {
             show: true,
             textStyle: {
                 color: 'RGBA(0, 222, 224, 1)', //设置字体颜色
                 fontSize: 10
             }
         },
         splitLine: { //Y轴网格线
             show: true,
             lineStyle: {
                 color: 'rgba(255,255,255,0.05)',
             }
         },
         axisTick: {
             //y轴不显示刻度线，
             show: false
         },
         axisLine: { //Y轴线的颜色
             show: false,
             lineStyle: {
                 color: 'rgba(255,255,255,0.1)',
             }
         },
     }],
     series: [{
             name: 'CO',
             type: 'bar',
             stack: '广告',
             data: [],
             itemStyle: {
                 normal: {
                     color: 'RGBA(247, 255, 22, 1)',
                     barBorderRadius: [0, 0, 4, 4], //柱状图圆角设置
                 }
             },
             barWidth: 6, //柱状图宽度
             animationDelay: function(idx) {
                 return idx * 600;
             }
         },
         {
             name: 'NO₂',
             type: 'bar',
             stack: '广告',
             data: [],
             itemStyle: {
                 normal: {
                     color: 'RGBA(253, 203, 79, 1)'
                 }
             },
             animationDelay: function(idx) {
                 return idx * 600;
             }
         },
         {
             name: 'O₃',
             type: 'bar',
             stack: '广告',
             data: [],
             itemStyle: {
                 normal: {
                     color: 'RGBA(255, 101, 26, 1)'
                 }
             },
             animationDelay: function(idx) {
                 return idx * 600;
             }
         },
         {
             name: 'PM₁₀',
             type: 'bar',
             barWidth: 8,
             stack: '广告',
             data: [],
             itemStyle: {
                 normal: {
                     color: 'RGBA(162, 152, 255, 1)'
                 }
             },
             animationDelay: function(idx) {
                 return idx * 600;
             }
         },
         {
             name: 'PM₂.₅',
             type: 'bar',
             stack: '广告',
             data: [],
             itemStyle: {
                 normal: {
                     color: 'RGBA(103, 234, 240, 1)'
                 }
             },
             animationDelay: function(idx) {
                 return idx * 600;
             }
         },
         {
             name: 'SO₂',
             type: 'bar',
             stack: '广告',
             data: [],
             itemStyle: {
                 normal: {
                     color: 'RGBA(0, 116, 191, 1)',
                     barBorderRadius: [4, 4, 0, 0], //柱状图圆角设置
                 }
             },
             animationDelay: function(idx) {
                 return idx * 600;
             }
         },

     ],
     animationEasing: 'elasticOut',

 };





 // -------------过去12个月空气质量------------------
 function lastMonth() {
     $.ajax({
         type: 'get',
         url: url + '/envAutoAir/lastYearAqi',
         success: function(res) {
             for (var i = 0; i < res.length; i++) {
                 difOption.xAxis.data.push(res[i].queryTime.split('-')[1] + '月');
                 difOption.series[0].data.push(res[i].aqi)
             }

             setTimeout(() => {
                 RightBottomEchart.setOption(difOption);
             }, 1800);
         }
     })
 }
 lastMonth()

 // var testData = [30, 261, 191, 249, 201, 262, 210, 361, 218, 302, 252, 46]
 // var timeData = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
 var RightBottomBox = document.querySelector("#lastQuality");
 var RightBottomEchart = echarts.init(RightBottomBox);
 difOption = {
     legend: {
         data: ['误差'],
         textStyle: {
             color: '#ffffff',
             fontSize: 14,
             fontFamily: 'PingFangSC',
             fontWeight: 300
         }

     },
     tooltip: {
         show: true,
         trigger: 'item'
     },
     grid: {
         left: '2%',
         right: '3%',
         bottom: '2%',
         top: '10%',
         containLabel: true
     },
     xAxis: {
         type: 'category',
         boundaryGap: false,
         data: [],
         interval: 0,
         // "min": 1567753200000,
         // "max": 1567854000000,
         axisTick: {
             show: false, //去掉刻度线
             lineStyle: {
                 color: '#10899A'
             }
         },
         axisLine: {
             show: false,
             lineStyle: {
                 color: '#06D3CD'
             }
         },
         axisLabel: {
             rotate: 0,
             color: '#06D3CD',
             fontFamily: 'PingFangSC',
             fontSize: 10,
             fontWeight: 300,
             interval: 0,
         }
     },
     yAxis: {
         type: 'value',
         name: '个',
         // max: ,
         splitNumber: 6,
         splitLine: { //Y轴网格线
             show: true,
             lineStyle: {
                 color: 'rgba(255,255,255,0.05)',
             }
         },
         axisTick: {
             show: false, //去掉刻度线
             lineStyle: {
                 color: '#10899A'
             }
         },
         axisLine: {
             show: false,
             lineStyle: {
                 color: '#06D3CD'
             }
         },
         axisLabel: {
             showMaxLabel: false,
             color: '#06D3CD',
             fontFamily: 'PingFangSC',
             fontSize: 10,
             fontWeight: 300
         },
         visualMap: { //区间内控制显示颜色
             show: false,
             dimension: 1,
             pieces: [{ gte: 7, lte: 300, color: 'green' }],
             outOfRange: {
                 color: 'red'
             }
         }

     },
     series: [{
         name: 'Aqi',
         data: [],
         type: 'line',
         smooth: 0.4,
         symbolSize: 6,
         lineStyle: {
             color: 'transparent'
         },
         itemStyle: {
             borderWidth: 1,
             borderColor: '#FF5624'
         },
         areaStyle: {
             normal: {
                 color: new echarts.graphic.LinearGradient(
                     0, 0, 0, 1, [{
                             offset: 0,
                             color: 'rgba(255, 33, 31, 1)'
                         },
                         {
                             offset: 0.5,
                             color: 'rgba(57, 255, 220, 0.7)'
                         },
                         {
                             offset: 1,
                             color: 'rgba(255, 255, 255, 0)'
                         }
                     ])
             }
         },

     }],
     animationDuration: 4000, //控制渲染速度
 };






 // -------------空气小微站------------

 function airStation() {
     $.ajax({
         type: 'get',
         url: url + '/envAutoAir/leastList',
         success: function(res) {
             airStationDrawing(res)
         }
     })
 }
 airStation()

 function airStationDrawing(res) {
     var airStationHtml = res.map(function(item) {
         return `
        <li>
        <span style="width: 16%" title = ${item.name}>${item.name}</span>
        <span style="width: 8%"> ${item.tsp}</span>
        <span style="width: 8%">${item.pm25}</span>
        <span style="width: 10%">${item.pm10}</span>
        <span style="width: 10%">${item.noise}</span>
        <span style="width: 8%">${item.humi}</span>
        <span style="width: 10%">${item.temp}</span>
        <span style="width: 10%">${item.press}</span>
        <span style="width: 8%">${item.ws}</span>
        <span style="width: 10%">${item.wd}</span>
    </li>
        `
     }).join('');

     document.querySelector('.airStationDetailText').innerHTML = airStationHtml
     outTime("airStationDetail", 4000)
 }




 // -------------污染源在线------------

 function SourceLine() {
     $.ajax({
         type: 'get',
         url: url + '/envAutoMonitorAir/leastList',
         success: function(res) {
             SourceLineDrawing(res)
         }
     })
 }
 SourceLine()

 function SourceLineDrawing(res) {
     var SourceLineHtml = res.map(function(item) {
         return `
        <li>
        <span style="width: 11%;" title ="${item.name}">${item.name}</span>
        <span style="width: 10%;">${item.nox}</span>
        <span style="width: 10%;">${item.so2}</span>
        <span style="width: 13.5%;">${item.o2}</span>
        <span style="width: 13%;">${item.flowVelocity}</span>
        <span style="width: 12%;">${item.temp}</span>
        <span style="width: 12%;">${item.press}</span>
        <span style="width: 14%;">${item.exhaust}</span>
    </li>
        `
     }).join('');

     document.querySelector('.pollutionDetailText').innerHTML = SourceLineHtml
     outTime("pollutionDetail", 4000)
 }




 //------------各区实时质量排名------
 // 市/省选择 高亮状态
 var chooseZone = document.querySelectorAll(".zoneChoose span")

 for (let i = 0; i < chooseZone.length; i++) {
     chooseZone[i].onclick = function() {
         for (var k = 0; k < chooseZone.length; k++) {
             chooseZone[k].className = ""
         }
         this.className = 'beenSelect'
     }
 }

 function airRank() {
     var resLibs = []
     var topLinbs = [] //前三名
     var normalLins = [] //第四名至最后一名
     $.ajax({
         type: 'get',
         url: url + '/envAutoAir/hourData',
         success: function(res) {

             for (var i = 0; i < res.length; i++) {
                 for (var key in res[i]) {
                     // console.log(key);
                     res[i][key]['name'] = key
                     resLibs.push(res[i][key])
                 }
             }

          
             for (var i = 0; i < resLibs.length; i++) {
                 normalLins.push(resLibs[i])
             }

             airRankDrawing(normalLins)
         }
     })
 }
 airRank()

 function airRankDrawing( normalLins) {
    //  var ExcellentHtml = topLinbs.map(function(item, index) {
    //      return `
    //     <li>
    //     <span id="rank_${index}" style="width: 6%;height: 100%;display: inline-block">&nbsp;</span>
    //     <span style="width: 12%;">${item.name}</span>
    //     <span style="width: 10%">${item.AQI}</span>
    //     <span style="width: 10%">${item.PM25OneHour}</span>
    //     <span style="width: 10%">${item.PM10OneHour}</span>
    //     <span style="width: 8%">${item.O3OneHour}</span>
    //     <span style="width: 8%;">${item.NO2OneHour}</span>
    //     <span style="width: 8%;">${item.SO2OneHour}</span>
    //     <span style="width: 8%">${item.COOneHour}</span>
    //     <span style="width: 18%"  title="${item.time}">${item.time}</span>
    // </li>
    //     `
    //  }).join('');


     var normalHtml = normalLins.map(function(item, index) {
         return `
        <li>
        <span id="rank" style="width: 6%;height: 100%;display: inline-block">${index+1}</span>
        <span style="width: 12%;">${item.name}</span>
        <span style="width: 10%">${item.AQI}</span>
        <span style="width: 10%">${item.PM25OneHour}</span>
        <span style="width: 10%">${item.PM10OneHour}</span>
        <span style="width: 8%">${item.O3OneHour}</span>
        <span style="width: 8%;">${item.NO2OneHour}</span>
        <span style="width: 8%;">${item.SO2OneHour}</span>
        <span style="width: 8%">${item.COOneHour}</span>
        <span style="width: 18%" title="${item.time}">${item.time}</span>
    </li>
        `
     }).join('');

     document.querySelector('.airRankDetailText').innerHTML = normalHtml

     outTime("airRankDetail", 4000)
 }


//  -------------向上滚动-----------
 function outTime(name, time) {
     setTimeout(function() {
         var table = document.getElementById(name);
         var timer = null;
         table.scrollTop = 0;
         table.innerHTML += table.innerHTML;

         function play() {
             clearInterval(timer);
             timer = setInterval(function() {
                 table.scrollTop++;
                 if (table.scrollTop >= table.scrollHeight / 2) {
                     table.scrollTop = 0;
                 }
             }, 100);
         }
         setTimeout(play, 500);
         table.onmouseover = function() {
             clearInterval(timer)
         };
         table.onmouseout = play;

     }, time)
 }

 // -------------近七天全市AQI指数变化----------
 // 天、月、季、年选择 高亮状态
 var chooseTime = document.querySelectorAll(".timeChoose span")

 for (let i = 0; i < chooseTime.length; i++) {
     chooseTime[i].onclick = function() {
         for (var k = 0; k < chooseTime.length; k++) {
             chooseTime[k].id = ""
         }
         this.id = 'timeSelect'
         AQIchangeFunction(i)
     }
 }


 function AQIchangeFunction(num) {
     $.ajax({
         type: 'get',
         url: url + '/envAutoAir/daysDate?type=' + num,
         success: function(res) {
             AQIchangeOption.xAxis.data = [] //清空数据
             AQIchangeOption.series[0].data = [] //清空数据
             if (num == 0) {
                 for (var i = res.time.length - 1; i > res.time.length - 8; i--) {
                     AQIchangeOption.xAxis.data.unshift(res.time[i].slice(5, 11))
                     AQIchangeOption.series[0].data.unshift(res.entity[i])
                 }
             } else {
                 for (var i = 0; i < res.time.length; i++) {
                     AQIchangeOption.xAxis.data.unshift(res.time[i])
                     AQIchangeOption.series[0].data.unshift(res.entity[i])
                 }
             }
             AQIchangePic.setOption(AQIchangeOption)
                 // console.log(AQIchangeOption);

         }
     })
 }
 AQIchangeFunction(0)



 var AQIchange = document.getElementById('AQIchangePic')
 var AQIchangePic = echarts.init(AQIchange)

 var imgDatUrl = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAADmCAYAAAAk2P6SAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCMUQzNzQzM0E2QTcxMUU5QjQ4Mzk5OTAxNTZCNjgwOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCMUQzNzQzNEE2QTcxMUU5QjQ4Mzk5OTAxNTZCNjgwOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkIxRDM3NDMxQTZBNzExRTlCNDgzOTk5MDE1NkI2ODA4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkIxRDM3NDMyQTZBNzExRTlCNDgzOTk5MDE1NkI2ODA4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+N35XuwAAASdJREFUeNrs3D1KA1EUgNHJT5XeHWQPAatgaSHY2LkAS1cSRHAJWmmjYGuXLEGIIohNMKVg53gHXyBEY/XeVOfCx8wwxWF4t55O/XpZbZmT6KLKNB/L+UN3y7uD6DwntHi8G/+FjaKrqJcTau43sWF0Gw1yQ5vYTnSfrtmhdWyQvmhYClphvXRGo5LQCpuk7SsKNdOpp4d1rhV/fnn79323anFgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWCwVuYrOu23AH1Gx9F1aWxZ/fwtfdo8lMSeov1oXvrMZtHuOlQKu4n2ovfS23gWHaWl+DXfAgwAF05NA55JDM4AAAAASUVORK5CYII='
     // var dimensions = ['公交', '地铁', '长途客车', '出租', '铁路', '航空', '机场大巴'];
     // var currentMonth = [42, 36, 13, 56, 9, 28, 33];
 var AQIchangeOption = {
     backgroundColor: '',
     grid: {
         left: '4%',
         right: '5%',
         top: '5%',
         bottom: '5%',
         containLabel: true
     },
     xAxis: {
         data: [],
         axisTick: {
             show: false
         },
         axisLine: {
             show: false
         },
         axisLabel: {
             textStyle: {
                 color: 'RGBA(0, 222, 224, 1)' //设置X轴字体颜色
             },
             margin: 20, //刻度标签与轴线之间的距离。
         },

     },
     yAxis: {
         splitLine: { //Y轴网格线
             show: true,
             lineStyle: {
                 color: 'rgba(255,255,255,0.05)',
             }
         },
         axisTick: {
             show: false
         },
         axisLine: {
             show: false
         },
         axisLabel: {
             textStyle: {
                 color: 'RGBA(0, 222, 224, 1)' //设置X轴字体颜色
             },
         }
     },
     series: [{
         name: '本月',
         type: 'pictorialBar',
         symbol: imgDatUrl,
         barGap: 0,
         symbolSize: ['30%', '100%'],
         data: []
     }],
     // animationDuration: 7000, //控制渲染速度
 };







 // // ---------------中间高德地图--------------

 var zoom = 1
 var defaltPoint = [113.06711, 28.80642];
 var map;
 setTimeout(() => {
     map = new AMap.Map('map', {
         zoom: zoom, //级别,
         mapStyle: 'amap://styles/1549585b22779c511c443c7a6dc499a6', //设置地图的显示样式
         center: defaltPoint, //中心点坐标 28.8064200000,113.0671100000
     });
 }, 500)


 //初始化的时候，缓慢进去地图
 setTimeout(function() {
     cantrolZoom()
 }, 1000)
 var Time;

 function cantrolZoom() {
     Time = setInterval(function() {
         zoom = zoom + 0.2;
         map.setZoomAndCenter(zoom, defaltPoint);
         if (zoom > 13) {
             clearInterval(Time)
         }
     }, 45)
 }

 function mapDataGet() {
     $.ajax({
         type: 'get',
         url: url + '/envAutoSite/data1',
         success: function(res) {

             for (var i = 0; i < res.length; i++) {
                 res[i]['center'] = res[i].longitude + ',' + res[i].latitude
             }
             sessionStorage.setItem('mapData', JSON.stringify(res))
             setTimeout(function() {
                 allType(res)
             }, 4000)
         }
     })
 }
 mapDataGet()

 function allType(data) {
     for (var k = 0; k < data.length; k++) {
         if (data[k].type == '空气站') {
             markerProduct(data[k], 1)
         } else if (data[k].type == '污染源企业') {
             markerProduct(data[k], 2)
         }
     }
 }


 function markerProduct(data, num) { //渲染点,插入图片和title
     var icon = new AMap.Icon({
         image: './img/point_' + num + '.png',
         size: new AMap.Size(26, 38)
     });
     marker = new AMap.Marker({
         icon: icon,
         position: data.center.split(','),
         offset: new AMap.Pixel(-12, -12),
         zIndex: 101,
         offset: new AMap.Pixel(-11, -32),
         title: data.name,
         map: map
     });
 }


 //选择类型的高亮选择和类型的改变
 var type = document.querySelectorAll('.typeLibs li')
 for (let i = 0; i < type.length; i++) {
     type[i].onclick = function() {
         for (var k = 0; k < type.length; k++) {
             type[k].className = ""
         }
         this.className = 'typeSelect'
         var data = JSON.parse(sessionStorage.getItem('mapData'))
         if (i == 1) { //空氣站
             map.clearMap();
             for (var k = 0; k < data.length; k++) {
                 if (data[k].type == '空气站') {
                     markerProduct(data[k], 1)
                 }
             }
         } else if (i == 0) { //全部
             map.clearMap();
             allType(data)

         } else if (i == 2) { //污染源企业
             map.clearMap();
             for (var k = 0; k < data.length; k++) {
                 if (data[k].type == '污染源企业') {
                     markerProduct(data[k], 2)
                 }
             }
         }
     }
 }



//  

//-------echart图例自适应js----------
window.onresize = function() {
    PM25Yuan.resize()
    PM10Yuan.resize()
    SO2Yuan.resize()
    NO2Yuan.resize()
    COYuan.resize()
    O3Yuan.resize()
    excellentRatePic.resize()
    thoroughAna.resize()
    AQIchangePic.resize()
    RightBottomEchart.resize()

}