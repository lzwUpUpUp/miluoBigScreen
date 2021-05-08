// -------------空气质量实况-------

/*
 *  统一 圆形的大小  
 *  _inner 内圈
 *  _outer 外圈
 * _innerFontA 内部a字体大小
 * _innerFontB 内部b字体大小
 * _outerFont 外部字体大小
 */
let _inner = 15;
let _outer = 18;
let _innerFontA = 10;
let _innerFontB = 10;
let _outerFont = 10;

var max = 100; //满刻度大小
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


// --pm2.5--圆
var data1 = 78; //数值大小
var WaterPic = document.getElementById('WaterPic');
var WaterYuan = echarts.init(WaterPic)

let Wateroption = comCircle(data1, 1, "℃")


// --浊度--圆
var data2 = 8; //数值大小
var TurbidPic = document.getElementById('TurbidPic')
var TurbidYuan = echarts.init(TurbidPic)

let TurbidOption = comCircle(data2, 2, "NTU")


// --电导率--圆
var data3 = 19; //数值大小
var ConductPic = document.getElementById('ConductPic');
var ConductYuan = echarts.init(ConductPic);


let ConductOption = comCircle(data3, 1, "mg/m³")


// --CODMn--圆
var data4 = 32; //数值大小
var CODPic = document.getElementById('CODPic')
var CODYuan = echarts.init(CODPic)


let CODOption = comCircle(data4, 2, "mg/L")


// --LeadPic--圆
var data5 = 22; //数值大小
var LeadPic = document.getElementById('LeadPic')
var LeadYuan = echarts.init(LeadPic)


let LeadOption = comCircle(data5, 1, "")



// --DOPic--圆
var data6 = 74; //数值大小

var DOPic = document.getElementById('DOPic')
var DOYuan = echarts.init(DOPic)
let DOoption = comCircle(data6, 2, "mg/L")

// -PHPic--圆
var data7 = 74; //数值大小

var PHPic = document.getElementById('PHPic')
var PHYuan = echarts.init(PHPic)
let PHOption = comCircle(data7, 1, "")


// 砷
var data8 = 74; //数值大小

var ARSPic = document.getElementById('ARSPic')
var ARSYuan = echarts.init(ARSPic)
let ARSOption = comCircle(data8, 2, "mg/L")

// 氨氮
var data9 = 74; //数值大小

var ANPic = document.getElementById('ANPic');
var ANYuan = echarts.init(ANPic);
let ANOption = comCircle(data9, 1, "mg/L");


// --Tox--圆
var data10 = 32; //数值大小
var toxicityPic = document.getElementById('toxicityPic')
var ToxYuan = echarts.init(toxicityPic)


let toxOption = comCircle(data10, 2, "%");


// --Phosphorus--圆
var data11 = 32; //数值大小
var PhosphorusPic = document.getElementById('PhosphorusPic')
var PhosphorusYuan = echarts.init(PhosphorusPic)


let PhosphorusOption = comCircle(data11, 1, "mg/L");


// --ChromePic--圆
var data12 = 32; //数值大小
var ChromePic = document.getElementById('ChromePic')
var ChromeYuan = echarts.init(ChromePic)


let ChromeOption = comCircle(data12, 2, "");


// --CadmiumPic--圆
var data13 = 32; //数值大小
var CadmiumPic = document.getElementById('CadmiumPic');
var CadmiumYuan = echarts.init(CadmiumPic);

let CadmiumOption = comCircle(data13, 1, "");

// --PermanganatePic--圆
var data14 = 32; //数值大小
var PermanganatePic = document.getElementById('PermanganatePic');
var PermanganateYuan = echarts.init(PermanganatePic);

let PermanganateOption = comCircle(data14, 2, "");


// --InTemperaturePic--圆
var data15 = 32; //数值大小
var InTemperaturePic = document.getElementById('InTemperaturePic');
var InTemperatureYuan = echarts.init(InTemperaturePic);

let InTemperatureOption = comCircle(data15, 1, "℃");

// --HumidityPic--圆
var data16 = 68; //数值大小
var HumidityPic = document.getElementById('HumidityPic');
var HumidityYuan = echarts.init(HumidityPic);

let HumidityOption = comCircle(data16, 2, "mg/L");


/*
 * 公共圆形的构建方法
 * @data 参数
 * @oddEven 奇偶判断
 * 
 */
function comCircle(data, oddEven, unit) {
    // 奇偶数
    let colors = oddEven == 1 ? "exemptcolor" : "examNumcolor";

    let option = {
        series: [{
            name: "圆环",
            type: 'pie',
            clockWise: false,
            radius: [_inner, _outer],
            color: eval(colors),
            itemStyle: dataStyle,
            hoverAnimation: false,
            center: ['50%', '50%'],
            data: [{
                    value: data,
                    label: {
                        normal: {
                            rich: {
                                a: {
                                    color: '#fff',
                                    align: 'center',
                                    fontSize: _innerFontA,
                                    fontWeight: "bold",
                                    padding: 0
                                },
                                b: {
                                    color: '#fff',
                                    align: 'center',
                                    fontSize: _innerFontB
                                }
                            },
                            formatter: function(params) {

                                // return "{b|在线统计}\n\n" + "{a|" + params.value + "}";
                                return "{a|" + params.value + "}\n" + "{b|" + unit + "}";
                            },
                            position: 'center',
                            show: true,
                            textStyle: {
                                fontSize: _outerFont,
                                fontWeight: 'normal',
                                color: '#fff'
                            }
                        }
                    },

                },
                {
                    value: max - data,
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

    return option;
}


function airQuarity() {
    $.ajax({
        method: 'get',
        url: url + '/envAutoAir/leastDate',
        success: function(res) {



            // 水温
            Wateroption.series[0].data[0].value = res.entity.pm25
            Wateroption.series[0].data[1].value = 100 - res.entity.pm25
            console.log(res)
            setTimeout(() => {
                WaterYuan.setOption(Wateroption)
            }, 2000);


            // 浊度
            TurbidOption.series[0].data[0].value = res.entity.pm10
            TurbidOption.series[0].data[1].value = 100 - res.entity.pm10
            setTimeout(() => {
                TurbidYuan.setOption(TurbidOption)
            }, 2500);


            // 电导率
            ConductOption.series[0].data[0].value = res.entity.so2
            ConductOption.series[0].data[1].value = 100 - res.entity.so2
            setTimeout(() => {
                ConductYuan.setOption(ConductOption)
            }, 3000);

            // CODMn
            CODOption.series[0].data[0].value = res.entity.no2
            CODOption.series[0].data[1].value = 100 - res.entity.no2
            setTimeout(() => {
                CODYuan.setOption(CODOption)
            }, 3500);


            // 铅
            LeadOption.series[0].data[0].value = res.entity.co
            LeadOption.series[0].data[1].value = 100 - res.entity.co
            setTimeout(() => {
                LeadYuan.setOption(LeadOption)
            }, 4000);

            // DO 溶解氧
            DOoption.series[0].data[0].value = parseInt(res.entity.o3oneHour) //去除小数，取整数部分
            DOoption.series[0].data[1].value = 100 - res.entity.o3oneHour
            setTimeout(() => {
                DOYuan.setOption(DOoption)
            }, 4500);

            // PH
            PHOption.series[0].data[0].value = parseInt(res.entity.o3oneHour) //去除小数，取整数部分
            PHOption.series[0].data[1].value = 100 - res.entity.o3oneHour
            setTimeout(() => {
                PHYuan.setOption(PHOption)
            }, 5000);

            // 砷
            ARSOption.series[0].data[0].value = parseInt(res.entity.o3oneHour) //去除小数，取整数部分
            ARSOption.series[0].data[1].value = 100 - res.entity.o3oneHour
            setTimeout(() => {
                ARSYuan.setOption(ARSOption)
            }, 5500);

            //氨氮
            ANOption.series[0].data[0].value = parseInt(res.entity.o3oneHour) //去除小数，取整数部分
            ANOption.series[0].data[1].value = 100 - res.entity.o3oneHour
            setTimeout(() => {
                ANYuan.setOption(ANOption)
            }, 6000);

            //综合毒性
            toxOption.series[0].data[0].value = parseInt(res.entity.o3oneHour) //去除小数，取整数部分
            toxOption.series[0].data[1].value = 100 - res.entity.o3oneHour
            setTimeout(() => {
                ToxYuan.setOption(toxOption)
            }, 6000);


            //总磷
            PhosphorusOption.series[0].data[0].value = parseInt(res.entity.o3oneHour) //去除小数，取整数部分
            PhosphorusOption.series[0].data[1].value = 100 - res.entity.o3oneHour
            setTimeout(() => {
                PhosphorusYuan.setOption(PhosphorusOption)
            }, 6000);

            //总铬
            ChromeOption.series[0].data[0].value = parseInt(res.entity.o3oneHour) //去除小数，取整数部分
            ChromeOption.series[0].data[1].value = 100 - res.entity.o3oneHour
            setTimeout(() => {
                ChromeYuan.setOption(ChromeOption)
            }, 6000);

            //镉
            CadmiumOption.series[0].data[0].value = parseInt(res.entity.o3oneHour) //去除小数，取整数部分
            CadmiumOption.series[0].data[1].value = 100 - res.entity.o3oneHour
            setTimeout(() => {
                CadmiumYuan.setOption(CadmiumOption)
            }, 6000);

            //高锰酸盐指数
            PermanganateOption.series[0].data[0].value = parseInt(res.entity.o3oneHour) //去除小数，取整数部分
            PermanganateOption.series[0].data[1].value = 100 - res.entity.o3oneHour
            setTimeout(() => {
                PermanganateYuan.setOption(PermanganateOption)
            }, 6000);

            //室温
            InTemperatureOption.series[0].data[0].value = parseInt(res.entity.o3oneHour) //去除小数，取整数部分
            InTemperatureOption.series[0].data[1].value = 100 - res.entity.o3oneHour
            setTimeout(() => {
                InTemperatureYuan.setOption(InTemperatureOption)
            }, 6000);

            //湿度
            HumidityOption.series[0].data[0].value = parseInt(res.entity.o3oneHour) //去除小数，取整数部分
            HumidityOption.series[0].data[1].value = 100 - res.entity.o3oneHour;

            setTimeout(() => {
                HumidityYuan.setOption(HumidityOption)
            }, 6000);



        }
    })
}
airQuarity()







// ----------本年优良率与去年同期对比---
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
            data: safeList
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
            data: danger
        }
    ],
    animationDuration: 4000, //控制渲染速度

};
setTimeout(() => {
    excellentRatePic.setOption(excellentRateOption)
}, 1200);



// ----------最近24小时质透分析---
//请求最近24小时的质透数据
// var timesArray = [] //存放后台传过来的时间数据
// function thoroughAjax() {
//     $.ajax({
//         url: url + '/envAutoAir/leastAnalysis',
//         type: 'get',
//         success: function(res) {
//             for (var i = 0; i < res.time.length; i++) {
//                 timesArray.push(res.time[i].slice(11, 13)) //截取时间存入时间数组
//             }
//             for (var i = 0; i < res.entity.length; i++) {
//                 thoroughOption.series[0].data.push(res.entity[i].co) //存入co数据
//                 thoroughOption.series[1].data.push(res.entity[i].no2) //存入no2数据
//                 thoroughOption.series[2].data.push(res.entity[i].o3oneHour) //存入o3oneHour数据
//                 thoroughOption.series[3].data.push(res.entity[i].pm10)
//                 thoroughOption.series[4].data.push(res.entity[i].pm25)
//                 thoroughOption.series[5].data.push(res.entity[i].so2)
//             }

//             thoroughOption.xAxis[0].data = timesArray; //将data转为存后的时间数组
//             var thorough = document.getElementById('thorough-analyze') //开始渲染质透分析图
//             var thoroughAna = echarts.init(thorough)
//             thoroughAna.setOption(thoroughOption, true)
//         }
//     })
// }
// thoroughAjax()


// 自动监测站实时联网情况
var thorough = document.getElementById('thorough-analyze'); //开始渲染质透分析图
var thoroughAna = echarts.init(thorough);

var _thoroughColor = [
    ['#848484', '#848484'],
    ['#00f0ff', '#0060ff'],
    // ['#00f0ff', '#ffd200']
]

var _thoroughdata = {

    dataAge: [{
        name: '在线点位',
        value: '98',
        itemStyle: {
            normal: {
                color: { // 完成的圆环的颜色
                    colorStops: [{
                        offset: 0,
                        color: '#EF6E18' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#FCC204' // 100% 处的颜色
                    }]
                },
            }
        }
    }, {
        name: '离线点位',
        value: '33',

    }, ]
};

thoroughOption = {
    grid: {
        left: '20%'
    },
    title: [{
        text: '招标方式',
        x: 'center',
        y: 'center',
        textStyle: {
            color: '#FFFFFF',
            fontSize: 10,
        }
    }, ],
    // color: ['#FCC204', '#848484', '#35C96E'],
    legend: {
        x: 'center',
        orient: 'horizontal', //vertical
        bottom: 0,
        data: ['在线点位', '离线点位'],
        textStyle: {
            color: '#00FFFF'
        },
        itemWidth: 8,
        itemHeight: 8,
    },
    series: [{
        color: ['#848484', '#FCC204'],
        type: 'pie',
        radius: ['48%', '66%'],
        labelLine: {
            normal: {
                length: 8,
                length2: 40,
                lineStyle: {
                    type: 'solid'
                }
            }

        },
        label: {
            normal: {
                formatter: (params) => {

                    return '{b| ' + params.name + '} \n ' + '{c|' + params.value + '个}'
                },
                borderWidth: 0,
                borderRadius: 4,
                padding: [0, -40],
                height: 65,
                fontSize: 10,
                align: 'center',
                color: '#FCC204',
                rich: {
                    b: {
                        fontSize: 9,
                        lineHeight: 22,
                        color: '#FFFFFF',
                        padding: [0, 0, 5, 0]
                    },
                    c: {
                        fontSize: 12,
                        lineHeight: 10,
                        color: (params) => { return '#3494BD' }
                    }

                }
            }
        },
        data: _thoroughdata.dataAge,
    }, ],
    animationDuration: 8000, //控制渲染速度
};
thoroughAna.setOption(thoroughOption, true)



// -------------自动监测站数据上传率------------------


var RightBottomBox = document.querySelector("#lastQuality");
var RightBottomEchart = echarts.init(RightBottomBox);

var difData = [
    { value: 10, name: 'A区' },
    { value: 5, name: 'B区' },
    { value: 15, name: 'C区' },
    { value: 25, name: 'D区' },
    { value: 20, name: 'E区' },
    { value: 35, name: 'F区' },
    { value: 30, name: 'G区' },
]
difOption = {

    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x: '60',
        orient: 'vertical',
        y: 'center',
        data: ['A区', 'B区', 'C区', 'D区', 'E区'],
        textStyle: {
            color: '#00D9D5'
        },
        itemWidth: 10,
        itemHeight: 8,
    },
    //设置饼状图每个颜色块的颜色
    color: ['#FFDB5C', '#F6990E', '#2569F3', '#09B99C', '#2173BE', '#00FFFF', '#1D9DFF'],
    calculable: true,
    series: [{
            name: '上传率',
            type: 'pie',
            radius: ['20%', '90%'],
            center: ['50%', '50%'],
            roseType: 'area',
            labelLine: { //折线问题
                normal: {
                    length: 5,
                    length2: 6,
                    lineStyle: {
                        type: 'solid'
                    }
                }
            },
            label: {
                normal: {
                    //饼形图显示格式
                    formatter: '{per|{d}%}',
                    rich: {
                        //设置百分比数字颜色
                        per: {
                            color: '#03D3D3',
                            fontSize: 10,
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
                }
            },
            data: difData,
        },

    ],
    animationDuration: 9000, //控制渲染速度
};

RightBottomEchart.setOption(difOption, true);


console.log(difOption);


// 饼图的自动播放
var startCharts;
var isSet = true // 为了做判断：当鼠标移动上去的时候，自动高亮就被取消
var charPie3currentIndex = 0
RightBottomEchart.on('mouseover', function(param) {
        isSet = false
        clearInterval(startCharts)
            // 取消之前高亮的图形
        RightBottomEchart.dispatchAction({
                type: 'downplay',
                seriesIndex: 0,
                dataIndex: charPie3currentIndex
            })
            // 高亮当前图形
        RightBottomEchart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: param.dataIndex
            })
            // 显示 tooltip
        RightBottomEchart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: param.dataIndex
        })
    })
    // 3、自动高亮展示
var chartHover = function() {
    var dataLen = difOption.series[0].data.length

    // 取消之前高亮的图形
    RightBottomEchart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: charPie3currentIndex
    })
    charPie3currentIndex = (charPie3currentIndex + 1) % dataLen
        // 高亮当前图形
    RightBottomEchart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: charPie3currentIndex
        })
        // 显示 tooltip
    RightBottomEchart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: charPie3currentIndex
    })

}
startCharts = setInterval(chartHover, 2000)
    // 4、鼠标移出之后，恢复自动高亮
RightBottomEchart.on('mouseout', function(param) {
    if (!isSet) {
        RightBottomEchart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: param.dataIndex
        })
        startCharts = setInterval(chartHover, 2000)
        isSet = true
    }

})







// -------------空气小微站------------

// function airStation() {
//     $.ajax({
//         type: 'get',
//         url: '../testData/data.json',
//         success: function(res) {
//             console.log('json', res)
//         }
//     })
// }
// airStation()





// -------------污染源在线------------


var Envchoose = document.querySelectorAll(".EnvChooseRight span")

for (let i = 0; i < Envchoose.length; i++) {
    Envchoose[i].onclick = function() {
        for (var k = 0; k < Envchoose.length; k++) {
            Envchoose[k].id = ""
        }
        this.id = 'timeSelect';
    }
}

setTimeout(function() {
    var table = document.getElementById("pollutionDetail");
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
        }, 40);
    }
    setTimeout(play, 500);
    table.onmouseover = function() {
        clearInterval(timer)
    };
    table.onmouseout = play;

}, 4000);

// 水质检测任务完成情况
setTimeout(function() {
    var table = document.getElementById("waterQualityDetail");
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
        }, 40);
    }
    setTimeout(play, 500);
    table.onmouseover = function() {
        clearInterval(timer)
    };
    table.onmouseout = play;

}, 4000);


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



// -------------近七天全市AQI指数变化----------
// 天、月、季、年选择 高亮状态
var chooseTime = document.querySelectorAll(".timeChoose span")

for (let i = 0; i < chooseTime.length; i++) {
    chooseTime[i].onclick = function() {
        for (var k = 0; k < chooseTime.length; k++) {
            chooseTime[k].id = ""
        }
        this.id = 'timeSelect'
    }
}



// 水质采集最近24小时数据
var AQIchange = document.getElementById('AQIchangePic');
var AQIchangePic = echarts.init(AQIchange);

var xData = ["14:00", "16:00", "18:00", "20:00", '22:00', '24:00', '2:00', '4:00', '6:00', '8:00', '10:00', '12:00'];
var cityData = ['水温', '浊度', '电导率', 'CODMn', '铅', '溶解氧', 'PH',
    '砷', '氨氮 ', '综合毒性', '总磷', '总铬', '镉', '高锰酸盐指数', '室温', '湿度'
];
var seriesData = [];

for (var i = 0; i < cityData.length; i++) {
    var subData = [];
    var total = parseInt(Math.random() * -10);
    if (total < 10) {
        total += 5;
    }
    subData.push(total);
    total = total + parseInt(Math.random() * 10);
    if (total < 20) {
        total += 10;
    }
    subData.push(total);
    total = total + parseInt(Math.random() * 10);
    if (total < 0) {
        total += 5;
    }
    subData.push(total);
    total = total + parseInt(Math.random() * 10);
    if (total < 0) {
        total += 5;
    }
    subData.push(total);

    total = total + parseInt(Math.random() * 10);
    if (total < 0) {
        total += 5;
    }
    subData.push(total);
    total = total + parseInt(Math.random() * 10);
    if (total < 0) {
        total += 10;
    }
    subData.push(total);
    total = total + parseInt(Math.random() * 10);
    if (total < 0) {
        total += 10;
    }
    subData.push(total);
    total = total + parseInt(Math.random() * 10);
    if (total < 0) {
        total += 5;
    }
    subData.push(total);

    total = total + parseInt(Math.random() * 10);
    if (total < 0) {
        total += 5;
    }
    subData.push(total);
    total = total + parseInt(Math.random() * 10);
    if (total < 0) {
        total += 10;
    }
    subData.push(total);
    seriesData.push(subData);
}


let AQIColorList = ['#ED1C24', '#F26522', '#F7941D', '#FFF200', '#8DC63F', '#39B54A', '#00A651', '#00A99D', '#00AEEF', '#0072BC', '#0054A6', '#2E3192', '#662D91', '#92278F', '#EC008C', '#ED145B']

var series = [];
for (var i = 0; i < cityData.length; i++) {
    series.push({
        name: cityData[i],
        type: 'line',
        data: seriesData[i],
    });
}

var AQIchangeOption = {

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    color: AQIColorList,
    legend: {
        x: 'center',
        textStyle: {
            color: '#f2f2f2',
            fontSize: 10,
        },
        itemGap: 5,
        itemHeight: 5,
        itemWidth: 15,
        data: cityData
    },
    grid: {
        right: '5',
        bottom: '3',
        left: '5',
        top: '40',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: xData,
        nameTextStyle: {
            color: '#d4ffff'
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0.2)'
            }
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#dfdfdf",
                fontSize: 10,
            },
        },
    }],
    yAxis: [{
            type: 'value',
            name: '',
            min: -10,
            max: 50,
            symbolSize: 1, //拐点大小
            lineStyle: {
                normal: {
                    width: '1' //折线粗细
                }
            },

            animation: false, //false: hover圆点不缩放 .true:hover圆点默认缩放
            nameTextStyle: {
                color: '#d4ffff'
            },
            position: 'left',
            axisLine: {
                show: false
            },
            splitLine: {

                lineStyle: {
                    color: "rgba(255,255,255,0.2)",
                }

            },
            axisLabel: {
                color: '#dfdfdf',
                fontSize: 10,
            }
        },
        {
            type: 'value',
            name: '电导率',
            animation: false, //false: hover圆点不缩放 .true:hover圆点默认缩放
            min: 0,
            max: 120,
            symbolSize: 1, //拐点大小
            nameTextStyle: {
                color: '#FFFFFF',
                fontSize: 10,
                padding: [-5, -8, 0, 0]
            },
            lineStyle: {
                normal: {
                    width: '1' //折线粗细
                }
            },
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: '#FFFFFF'
                }
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#11366e'
                }
            },
            axisLabel: {
                color: '#dfdfdf',
                fontSize: 10,
            },


        }
    ],
    series: series,
    animationDuration: 6000, //控制渲染速度

};

AQIchangePic.setOption(AQIchangeOption);



// 水质采集最近24小时数据
var choose = document.querySelectorAll(".timeChooseRight span")

for (let i = 0; i < choose.length; i++) {
    choose[i].onclick = function() {
        for (var k = 0; k < choose.length; k++) {
            choose[k].id = ""
        }
        this.id = 'timeSelect';
    }
}

// -------------------------水环境质量情况-------------
var environmentalquality = document.getElementById('airRankPic');
var waterEnvironmentalQuality = echarts.init(environmentalquality);


waterEnvironmentalOption = {
    backgroundColor: '',
    series: [{
        type: 'liquidFill',
        //data: [0.6, 0.5, 0.4, 0.3],
        data: [0.6, 0.5, 0.4, 0.3],
        radius: '60%',
        // 水球颜色
        color: ['#49d088', '#38b470', '#2aaf66'],
        center: ['16%', '42%'],
        // outline  外边
        outline: {
            // show: false
            borderDistance: 5,
            itemStyle: {
                borderWidth: 2,
                borderColor: '#13FDCE',
            },
        },
        label: {
            normal: {
                // textStyle: {
                color: 'red',
                insideColor: 'yellow',
                fontSize: 100
                    // }
            }
        },
        // 内图 背景色 边
        backgroundStyle: {
            color: 'rgba(4,24,74,0.8)',
            // borderWidth: 5,
            // borderColor: 'red',
        }
    }, {
        type: 'liquidFill',
        //data: [0.6, 0.5, 0.4, 0.3],
        data: [0.3, 0.2, 0.1, 0.05],
        radius: '60%',
        // 水球颜色
        color: ['#FE5555', '#F07581', '#FB5E61'],
        center: ['50%', '42%'],
        // outline  外边
        outline: {
            // show: false
            borderDistance: 5,
            itemStyle: {
                borderWidth: 2,
                borderColor: '#FE5555',
            },
        },
        label: {
            normal: {
                textStyle: {
                    color: 'red',
                    insideColor: 'yellow',
                    fontSize: 100
                }
            }
        },
        // 内图 背景色 边
        backgroundStyle: {
            color: 'rgba(4,24,74,0.8)',
            // borderWidth: 5,
            // borderColor: 'red',
        }
    }, {
        type: 'liquidFill',
        data: [0.1, 0.05, 0.25],
        radius: '60%',
        // 水球颜色
        color: ['#FFBF11', '#F4B30E', '#EACE36'],
        center: ['84%', '42%'],
        // outline  外边
        outline: {
            // show: false
            borderDistance: 5,
            itemStyle: {
                borderWidth: 2,
                borderColor: '#FFBF11',
            },
        },
        label: {
            normal: {
                textStyle: {
                    color: 'red',
                    insideColor: 'yellow',
                    fontSize: 100
                }
            }
        },
        // 内图 背景色 边
        backgroundStyle: {
            color: 'rgba(4,24,74,0.8)',
            // borderWidth: 5,
            // borderColor: 'red',
        }
    }]
};

waterEnvironmentalQuality.setOption(waterEnvironmentalOption)



// ---------------中间高德地图--------------


var zoom = 1
var defaltPoint = [113.06711, 28.80642];
var map;
setTimeout(() => {
    map = new AMap.Map('map', {
        zoom: zoom, //级别,
        mapStyle: 'amap://styles/1549585b22779c511c443c7a6dc499a6', //设置地图的显示样式
        center: defaltPoint, //中心点坐标 28.8064200000,113.0671100000
    });
}, 1500)


//初始化的时候，缓慢进去地图
setTimeout(function() {
    cantrolZoom()
    $('.mapChoose').css('display', 'block')
}, 7000)
var Time;

function cantrolZoom() {
    Time = setInterval(function() {
        zoom = zoom + 0.15;
        map.setZoomAndCenter(zoom, defaltPoint);
        if (zoom > 13) {
            clearInterval(Time)
        }
    }, 45)
}

//地图选项高亮选择
var mapChoose = document.querySelectorAll(".mapChoose li")

for (let i = 0; i < mapChoose.length; i++) {
    mapChoose[i].onclick = function() {
        for (var k = 0; k < mapChoose.length; k++) {
            mapChoose[k].id = ""
        }
        this.id = 'singleBtn';
    }
}


//-------echart图例自适应js----------
window.onresize = function () {
    WaterYuan.resize()
    TurbidYuan.resize()
    ConductYuan.resize()
    CODYuan.resize()
    LeadYuan.resize()
    DOYuan.resize()
    PHYuan.resize()
    ARSYuan.resize()
    ANYuan.resize()
    ToxYuan.resize()
    PhosphorusYuan.resize()
    CadmiumYuan.resize()
    PermanganateYuan.resize()
    InTemperatureYuan.resize()
    HumidityYuan.resize()
    excellentRatePic.resize()
    thoroughAna.resize()
    RightBottomEchart.resize()
    AQIchangePic.resize()
    waterEnvironmentalQuality.resize()
  
}