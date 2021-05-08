// ------------企业类型数量统计------

$.ajax({
    method: 'get',
    url: url + '/wasteScreen/companyInfo?year=2019',
    success: function (res) {
        for (var key in res) {
            // console.log(res[key])  //循环取键值
            CompanyOption.series[0].data.push(res[key])
        }
        // console.log(Object.keys(res)); //取的是键
        setTimeout(() => {
            companyNum.setOption(CompanyOption)
        }, 1500)
    }
})

var testArr = {
    1: 'a',
    2: 'b',
    3: 'c'
}
console.log(Object.keys(testArr));



var company = document.getElementById('companyNum')
var companyNum = echarts.init(company)


var colorArr = [{
    top: '#FED701', //黄色
    bottom: '#FC9501'
},
{
    top: '#0282DE', //蓝色
    bottom: '#3F28D0'
}
];
CompanyOption = {
    grid: {
        top: '12%',
        right: '6%',
        left: '6%',
        bottom: '18%'
    },
    xAxis: [{
        type: 'category',
        color: '#59588D',
        data: ['工业危废源 ', '一般工业固废源 ', '危废产生单位 ', '非工业废源 ', '城镇生活污水厂 ', '危险经营单位',],
        axisLabel: {
            interval: 0,
            // rotate: 25,
            textStyle: {
                color: 'RGBA(0, 222, 224, 1)',
                fontSize: 12,
            }
        },
        axisLine: { //X轴线的宽度及颜色
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.1)',
            }
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
        // min: 0,
        // max: 100,
        // name: '家',
        axisLabel: {
            interval: 0,
            textStyle: {
                color: 'RGBA(0, 222, 224, 1)',
                fontSize: 12,
            }
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false
        },
        splitLine: { //Y轴网格线
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.05)',
            }
        },
    }],
    series: [{
        type: 'bar',
        data: [],
        barWidth: '30%',
        itemStyle: {
            normal: {
                color: function (params) {
                    let num = colorArr.length;
                    return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: colorArr[params.dataIndex % num].top // 0% 处的颜色
                    }, { //可根据具体情况决定哪根柱子显示哪种颜色
                        offset: 1,
                        color: colorArr[params.dataIndex % num].bottom // 100% 处的颜色
                    }], false)
                },
                // barBorderRadius: [30, 30, 0, 0],
            }
        },
        animationDelay: function (idx) {
            return idx * 800;
        },
        label: { //柱子头部字体
            normal: {
                show: true,
                fontSize: 12,
                // fontWeight: 'bold',
                color: 'RGBA(0, 222, 224, 1)',
                position: 'top',
            }
        }
    }],
    animationEasing: 'elasticOut',

};



// ---------转移联单数量统计------------------
function transferNum() {
    $.ajax({
        method: 'get',
        url: url + '/wasteScreen/transferInfo?year=2019',
        success: function (res) {
            var result = JSON.parse(res.dict)
            var obj = {}
            for (var i in res.data) {
                var item = res.data[i]
                obj['town_' + item.town] = item.cnt
            }
            for (var k = 0; k < result.length; k++) {
                var name = result[k].name
                var key = result[k].value
                var num = obj['town_' + key] ? obj['town_' + key] : 0
                transferOption.series[0].data.push(num)
                transferOption.xAxis[0].data.push(name)
            }

            setTimeout(() => {
                transferNum.setOption(transferOption)
            }, 2000)
        }
    })
}
transferNum()



var transfer = document.getElementById('transferNum')
var transferNum = echarts.init(transfer)

transferOption = {
    grid: {
        top: '5%',
        right: '4%',
        left: '6%',
        bottom: '36%'
    },
    tooltip: {
        show: true,
        trigger: 'item',
        backgroundColor: 'rgba(0,0,0,0.5)',
        axisPointer: {
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#FFD56E'
                    }, {
                        offset: 0.5,
                        color: '#fff',
                    }, {
                        offset: 1,
                        color: '#FFD56E'
                    }],
                    global: false
                }
            },
        }
    },
    legend: {
        right: 20,
        top: 0,
        itemGap: 10, // 各个item之间的间隔，单位px，默认为10，
        itemWidth: 30, // 图例图形宽度
        itemHeight: 10, // 图例图形高度
        textStyle: {
            color: 'red',
            fontWeight: 'normal',
            fontSize: 14
        },
    },

    xAxis: [{
        type: 'category',
        data: [],
        axisTick: {
            show: false // 是否显示坐标轴轴线
        },
        axisLabel: {
            show: true,
            interval: 0,
            textStyle: {
                color: 'RGBA(0, 222, 224, 1)' //设置字体颜色
            },
            rotate: 40, //X轴字体的倾斜角度
        },
        splitLine: {
            show: false
        },
        boundaryGap: true,
        axisLine: { //X轴线的宽度及颜色
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.1)',
            }
        },
    },],

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
        type: 'bar',
        barMaxWidth: 8,
        zlevel: 10,
        // barGap: '100%',
        data: [],
        itemStyle: {
            normal: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#08F4F9'
                    }, {
                        offset: 1,
                        color: '#003B40'
                    }]
                },
                barBorderRadius: [30, 30, 0, 0],
            }
        },
        animationDelay: function (idx) {
            return idx * 600;
        },
    },
        // {
        //     type: 'bar',
        //     itemStyle: {
        //         normal: {
        //             color: 'rgba(255,153,51,0.1)',
        //         }
        //     },
        //     silent: true,
        //     barWidth: 10,
        //     barGap: '-125%',
        //     data: [120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120]
        // },
    ],
    animationEasing: 'elasticOut',

};



// 月 季选择高亮状态
var chooseTime = document.querySelectorAll(".monthSeason span")

for (let i = 0; i < chooseTime.length; i++) {
    chooseTime[i].onclick = function () {
        for (var k = 0; k < chooseTime.length; k++) {
            chooseTime[k].id = ""
        }
        this.id = 'timeSelect'
    }
}



// -----------------国民经济分类----------------
var Eclassification = document.getElementById('economic')
var economic = echarts.init(Eclassification)


var chartName = ['服装', '娱乐', '海鲜', '互联网', '地产'];
var chartData = [53.83, 50.42, 32.37, 40, 36];
var chartColor = ['#FFD900', '#24C768', '#FF7E00', '#00A1E4', '#08F4F9'];

function econimyType() {
    // $.ajax({
    //     method: 'get',
    //     url: url + '/wasteScreen/economicInfo?year=2019',
    //     success: function (res) {

    //         for (var i = 0; i < res.data.length; i++) {
    //             var tmp = {
    //                 "value": res.data[i].cnt,
    //                 "name": res.data[i].enveconomic,
    //                 "itemStyle": {
    //                     "normal": {
    //                         "color": chartColor[i]
    //                     }
    //                 }
    //             };
    //             economicOption.series[0].data.push(tmp)
    //             economicOption.legend.data.push(res.data[i].enveconomic)
    //         }
    //         for (var i = 0; i < res.data.length; i++) {
    //             var tmp = {
    //                 "value": 0,
    //                 "name": "",
    //                 "label": {
    //                     show: false
    //                 },
    //                 "labelLine": {
    //                     "show": false,
    //                 }
    //             };
    //             economicOption.series[0].data.push(tmp)
    //         }
    //         setTimeout(() => {
    //             economic.setOption(economicOption)
    //         }, 2500);

    //     }
    // })

    let color = ["#2ec7c9", "#b6a2de", "#5ab1ef", "#F5BF3C", "#DC6255"]
    let data = [
        { name: '事项1', value: 20 },
        { name: '事项2', value: 30 },
        { name: '事项3', value: 60 },
        { name: '事项4', value: 120 },
        { name: '事项5', value: 120 },
    ]
    let max = Math.max(...data.map(item => item.value));
    let sum = eval(data.map(item => item.value).join('+'))
    option = {
        backgroundColor: '#000',
        angleAxis: {
            show: 0,
            clockwise: false,
            max: max + max / 3
        },
        radiusAxis: {
            type: 'category',
            data: data.map(item => {
                return item.name + ':' + '(' + (item.value / sum * 100).toFixed(1) + '%)'
            }),
            z: 10,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                interval: 0,
                color: '#fff',
                align: 'left',
                margin: -10
            }
        },
        polar: {
            show: 0,
            center: ['50%', '50%']
        },
        series: [{
            type: 'bar',
            data: data.map((item, index) => {
                return {
                    value: item.value,
                    name: item.name,
                    itemStyle: {
                        color: color[index]
                    }
                }
            }),
            label: {
                show: true,
                position: 'top',
            },
            barWidth: 10,
            coordinateSystem: 'polar',
        }]
 
     
    };
    economic.setOption(option)
    console.log('option',option);
}
econimyType()


economicOption = {
    tooltip: {
        trigger: "item",
        formatter: "{b}"
    },

    calculable: true,
    legend: {
        icon: "rect",
        orient: 'vertical',
        x: '4%',
        y: '10%',

        // data: chartName,
        data: [],
        textStyle: {
            "color": "#fff"
        },
        itemWidth: 20,
        itemHeight: 4,

    },
    series: [{
        name: "XX线索",
        type: "pie",
        radius: [
            20,
            138
        ],
        avoidLabelOverlap: false,
        startAngle: 0,
        center: [
            "50.1%",
            "34%"
        ],
        roseType: "area",
        selectedMode: "single",
        label: {
            normal: {
                "show": true,
                formatter: "{d}%"
            },
            emphasis: {
                "show": true
            }
        },
        labelLine: { //设置指示线的长度
            "normal": {
                show: true,
                smooth: false,
                length: 2,
                length2: 1,
            },
            emphasis: {
                show: true
            }
        },
        center: ['50% ', '2% '], //设置饼图的位置
        // data: economicData,
        data: [],
        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: function (idx) {
            return idx * 800;
        }
    },]
};



// 饼图的自动播放
var startCharts;
var isSet = true // 为了做判断：当鼠标移动上去的时候，自动高亮就被取消
var charPie3currentIndex = 0
economic.on('mouseover', function (param) {
    isSet = false
    clearInterval(startCharts)
    // 取消之前高亮的图形
    economic.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: charPie3currentIndex
    })
    // 高亮当前图形
    economic.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: param.dataIndex
    })
    // 显示 tooltip
    economic.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: param.dataIndex
    })
})
// 3、自动高亮展示
var chartHover = function () {
    var dataLen = economicOption.series[0].data.length

    // 取消之前高亮的图形
    economic.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: charPie3currentIndex
    })
    charPie3currentIndex = (charPie3currentIndex + 1) % dataLen
    // 高亮当前图形
    economic.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: charPie3currentIndex
    })
    // 显示 tooltip
    economic.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: charPie3currentIndex
    })

}
startCharts = setInterval(chartHover, 2000)
// 4、鼠标移出之后，恢复自动高亮
economic.on('mouseout', function (param) {
    if (!isSet) {
        economic.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: param.dataIndex
        })
        startCharts = setInterval(chartHover, 2000)
        isSet = true
    }

})

// ----------------一般工业固体废物综合利用率-----------------------


function solidWasteRate() {
    $.ajax({
        method: 'get',
        url: url + '/wasteScreen/handleInfo?year=2019',
        success: function (res) {
            solidUsingOption.series[0].data.push((res.data[0].yearproduction / 10000).toFixed(2), (res.data[0].yearstorage / 10000).toFixed(2), (res.data[0].yearuse / 10000).toFixed(2))
            setTimeout(() => {
                solidUsing.setOption(solidUsingOption)
            }, 3500)

            var utilization = (res.data[0].yearuse / res.data[0].yearproduction).toFixed(2)
            for (var i = 0; i < 5; i++) {
                utilizationOption.series[0].data.push(utilization)
            }
            utilizationOption.series[0].label.normal.formatter = utilization * 100 + '%'
            setTimeout(() => {
                utilizationRate.setOption(utilizationOption)
            }, 2000);

        }
    })
}
solidWasteRate()


var solid = document.getElementById('solidUsing')
var solidUsing = echarts.init(solid)

let colorList = [
    ['rgba(247, 107, 28,1)', 'rgba(250, 217, 97,0.5)'],
    ['rgba(77, 124, 254,1)', ' rgba(81, 192, 248,0.5)'],
    ['rgba(0, 150, 175,1)', 'rgba(0, 214, 190,0.5)'],
]

solidUsingOption = {
    grid: {
        left: '16%',
        top: '18%',
        bottom: '14%',
        right: '4%'
    },
    tooltip: {
        trigger: 'axis',
        formatter: '{b}<br /> {c}' + "万吨",
    },
    xAxis: {
        data: ['产生量', '贮存量', '利用量'],
        axisTick: {
            show: false
        },
        axisLine: { //X轴线的宽度及颜色
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.1)',
            }
        },
        axisLabel: {
            textStyle: {
                color: 'RGBA(0, 222, 224, 1)',
                fontSize: 12
            }
        }
    },
    yAxis: [{
        name: '万吨',
        nameTextStyle: {
            color: 'RGBA(0, 222, 224, 1)',
            padding: [0, 25, 0, 0]
        },
        axisTick: {
            show: false
        },
        splitLine: { //Y轴网格线
            show: true,
            lineStyle: {
                color: 'rgba(255, 255, 255, 0.1)',
            }
        },
        axisLabel: {
            textStyle: {
                color: 'RGBA(0, 222, 224, 1)',
                fontSize: 12
            }
        },
        axisLine: { //Y轴线的颜色
            show: false,
            lineStyle: {
                color: 'rgba(255,255,255,0.1)',
            }
        },
    }],
    series: [{
        type: 'pictorialBar',
        barCategoryGap: '0%',
        symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
        label: {
            show: true,
            position: 'top',
            distance: 4,
            color: 'RGBA(0, 222, 224, 1)',
            fontWeight: '400',
            fontSize: 14,
        },
        barWidth: '65%',
        itemStyle: {
            color: function (params) {
                let itemColor = colorList[params.dataIndex];
                let curColor = '';
                if (Array.isArray(itemColor)) {
                    curColor = {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: itemColor[0] //  0%  处的颜色
                        },
                        {
                            offset: 1,
                            color: itemColor[1] ? itemColor[1] : itemColor[0] //  100%  处的颜色
                        }
                        ],
                        global: false //  缺省为  false
                    }
                } else {
                    curColor = itemColor;
                }
                return curColor
            }

        },
        data: [],
        z: 10,
        animationDelay: function (idx) {
            return idx * 800;
        }
    }],
    animationEasing: 'elasticOut',
};



var utilization = document.getElementById('utilizationRate')
var utilizationRate = echarts.init(utilization)


var utilizationOption = {
    backgroundColor: '',
    title: {
        text: '综合利用率',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 14,
            color: '#ffffff'
        }
    },
    series: [{
        type: 'liquidFill',
        radius: '90%',
        // data: utilizationData
        data: [],
        color: ['#2aaf66', '#38b470', '#49d088'],
        backgroundStyle: {
            borderWidth: 2,
            borderColor: 'rgb(214, 193, 0)',
            color: 'rgb(255,0,255,0.01)'
        },
        outline: { //外边
            // show: false
            borderDistance: 5,
            itemStyle: {
                borderWidth: 4,
                borderColor: 'rgb(25, 230, 117)',
            },
        },
        label: {
            normal: {
                // formatter: (utilizationValue * 100).toFixed(0) + '%',
                formatter: "",
                textStyle: {
                    fontSize: 12
                }
            }
        }
    }],
}


// ------------------一般固体统计情况-------------

function normalWasteGet() {
    $.ajax({
        method: 'get',
        url: url + '/wasteScreen/wasteInfo?year=2019&type=1',
        success: function (res) {

            for (var i = 0; i < res.length; i++) {
                var dataObj = {}
                dataObj['value'] = res[i].yearproduction
                dataObj['symbolPosition'] = 'end'
                solidOption.series[0].data.push(dataObj)
                solidOption.series[1].data.push(res[i].yearproduction)
                var name = res[i].name ? res[i].name : ' '
                solidOption.xAxis[0].data.push(name)
            }
            setTimeout(() => {
                solidStatistics.setOption(solidOption)
            }, 2000);
        }
    })
}
normalWasteGet()

var solid = document.getElementById('solidStatistics')
var solidStatistics = echarts.init(solid)


var SolidColorList = [{
    top: 'rgba(255, 216, 0, 0.65)', //黄色
    bottom: 'rgba(255, 216, 0, 0.1)'
},
{
    top: 'rgba(0, 213, 233, 0.65)', //蓝色
    bottom: 'rgba(0, 213, 233, 0.1)'
}
];

solidOption = {
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        left: '2%',
        right: '2%',
        bottom: '8%',
        top: '10%',
        containLabel: true
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        axisTick: {
            //X轴不显示刻度线，
            show: false
        },
        axisLine: { //X轴线的宽度及颜色
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.1)',
            }
        },
        axisLabel: {
            interval: 0, // 解决x轴名称过长问题
            textStyle: {
                color: 'RGBA(0, 222, 224, 1)'
            }
        },
        data: [],

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
    series: [

        {
            name: '',
            type: 'pictorialBar',
            symbol: 'rect',
            symbolSize: [17, 6],
            symbolOffset: [0, 0],
            z: 2,
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: function (params) {
                        let num = SolidColorList.length;
                        return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: SolidColorList[params.dataIndex % num].top // 0% 处的颜色
                        }, { //可根据具体情况决定哪根柱子显示哪种颜色
                            offset: 1,
                            color: SolidColorList[params.dataIndex % num].bottom // 100% 处的颜色
                        }], false)
                    },
                }
            },
            data: [],
            animationDelay: function (idx) {
                return idx * 600;
            }
        },

        {
            name: '',
            type: 'bar',
            barWidth: 18,

            z: 1,
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#c8d8e3'
                }
            },
            itemStyle: {
                normal: {
                    color: function (params) {
                        let num = SolidColorList.length;
                        return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: SolidColorList[params.dataIndex % num].top // 0% 处的颜色
                        }, { //可根据具体情况决定哪根柱子显示哪种颜色
                            offset: 1,
                            color: SolidColorList[params.dataIndex % num].bottom // 100% 处的颜色
                        }], false)
                    },
                    // barBorderRadius: [30, 30, 0, 0],
                }

            },
            // data: [22, 14, 17, 23, 25, 26, 13, 16, 22, 20, 16, 13],
            data: [],
            animationDelay: function (idx) {
                return idx * 600;
            }
        },
    ],
    animationEasing: 'elasticOut',
};


// 一般固体统计情况----月 季选择高亮状态
var chooseTime = document.querySelectorAll(".solidTime span")

for (let i = 0; i < chooseTime.length; i++) {
    chooseTime[i].onclick = function () {
        for (var k = 0; k < chooseTime.length; k++) {
            chooseTime[k].id = ""
        }
        this.id = 'timeSelect'
    }
}




// --------------------危险废物统计情况-----------------


function dangrousWastGet() {
    $.ajax({
        method: 'get',
        url: url + '/wasteScreen/dangerWasteInfo?year=2019&type=2',
        success: function (res) {

            for (var i in res) {
                DangrousOption.series[0].data.push(res[i].yearproduction)
                DangrousOption.yAxis[0].data.push(res[i].code + res[i].name)
            }

            setTimeout(() => {
                dangrousSolid.setOption(DangrousOption)
            }, 3500)

        }
    })
}
dangrousWastGet()


var dangrous = document.getElementById('dangrousSolid')
var dangrousSolid = echarts.init(dangrous)


var colorArray = [{
    top: 'rgba(117, 74, 191, 1)', //红
    bottom: 'rgba(247, 82, 113, 1)'
}, {
    top: 'rgba(0, 204, 255, 1)', //蓝
    bottom: 'rgba(42, 84, 180, 1)'
},
{
    top: 'rgba(39, 141, 101, 1)', //绿
    bottom: 'rgba(98, 196, 103, 1)'
}, {
    top: 'rgba(246, 104, 0, 1)', //深黄
    bottom: 'rgba(255, 180, 0, 1)'
},
{
    top: 'rgba(188, 53, 53, 1)', //深红
    bottom: 'rgba(255, 91, 122, 1)'
}
];
DangrousOption = {
    tooltip: {
        show: true,
        formatter: "{b}:{c}"
    },
    grid: {
        left: '2%',
        top: '0%',
        right: '3%',
        bottom: '2%',
        containLabel: true
    },

    xAxis: {
        type: 'value',
        show: false,
        position: 'top',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#fff',
            }
        },
        splitLine: {
            show: false
        },
    },
    yAxis: [{
        type: 'category',
        axisTick: {
            show: false,
            alignWithLabel: false,
            length: 5,

        },
        splitLine: { //Y轴网格线
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.05)',
            }
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: 'RGBA(0, 222, 224, 1)', //设置字体颜色
                fontSize: 12
            }
        },
        inverse: 'true', //排序
        axisLine: {
            show: false,
            lineStyle: {
                color: '#fff',
            }
        },
        data: []
    }

    ],
    series: [{
        name: '能耗值',
        type: 'bar',
        barWidth: 6,
        label: {
            normal: {
                show: true,
                position: 'right',
                formatter: '{c}',
                textStyle: {
                    color: 'RGBA(0, 222, 224, 1)' //color of value   //value值颜色
                }
            }
        },
        itemStyle: {
            normal: {
                show: true,
                color: function (params) {
                    let num = colorArray.length;
                    return {
                        type: 'linear',
                        colorStops: [{
                            offset: 0,
                            color: colorArray[params.dataIndex % num].bottom
                        }, {
                            offset: 1,
                            color: colorArray[params.dataIndex % num].top
                        }, {
                            offset: 0,
                            color: colorArray[params.dataIndex % num].bottom
                        }, {
                            offset: 1,
                            color: colorArray[params.dataIndex % num].top
                        }, {
                            offset: 0,
                            color: colorArray[params.dataIndex % num].bottom
                        }, {
                            offset: 1,
                            color: colorArray[params.dataIndex % num].top
                        }, {
                            offset: 0,
                            color: colorArray[params.dataIndex % num].bottom
                        }, {
                            offset: 1,
                            color: colorArray[params.dataIndex % num].top
                        }, {
                            offset: 0,
                            color: colorArray[params.dataIndex % num].bottom
                        }, {
                            offset: 1,
                            color: colorArray[params.dataIndex % num].top
                        }, {
                            offset: 0,
                            color: colorArray[params.dataIndex % num].bottom
                        }, {
                            offset: 1,
                            color: colorArray[params.dataIndex % num].top
                        }],
                        //globalCoord: false
                    }
                },
                barBorderRadius: 70,
                borderWidth: 0,
                borderColor: '#333',
            }
        },
        barGap: '0%',
        barCategoryGap: '50%',
        data: [],
        animationDelay: function (idx) {
            return idx * 600;
        }
    }

    ],
    animationEasing: 'elasticOut',
};




// ---------------------年度转移重量统计----------------


function transferWeight() {
    $.ajax({
        method: 'get',
        url: url + '/wasteScreen/wasteTrans?year=2019',
        success: function (res) {
            for (var i in res) {
                weightOption.series[0].data.push(res[i].reportamount / 10000)
                weightOption.xAxis[0].data.push(res[i].month + '月')
            }
            setTimeout(() => {
                weightTransfer.setOption(weightOption)
            }, 2500);
        }
    })
}
transferWeight()

var Transfers = document.getElementById('weightTransfer')
var weightTransfer = echarts.init(Transfers)

var weightColorArr = [{
    top: 'rgba(17, 102, 255, 1)', //黄色
    bottom: 'rgba(0, 162, 255, 1)'
},
{
    top: 'rgba(38, 159, 184, 1)', //蓝色
    bottom: 'rgba(71, 221, 245, 1)'
}
];

var weightOption = {
    tooltip: { //提示框组件
        trigger: 'axis',
        formatter: '{b}<br /> {c}' + "万吨",
        axisPointer: {
            type: 'shadow',
            label: {
                backgroundColor: '#6a7985'
            }
        },
        textStyle: {
            color: '#fff',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 12,
        }
    },
    grid: {
        left: '2%',
        top: '20%',
        right: '2%',
        bottom: '4%',
        containLabel: true,
    },
    xAxis: [{
        type: 'category',
        //	boundaryGap: true,//坐标轴两边留白
        data: [],
        axisLabel: { //坐标轴刻度标签的相关设置。
            //		interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
            //	margin:15,
            textStyle: {
                color: 'RGBA(0, 222, 224, 1)',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 12,
            },
        },
        axisTick: { //坐标轴刻度相关设置。
            show: false,
        },
        axisLine: { //坐标轴轴线相关设置
            lineStyle: {
                color: '#fff',
                opacity: 0.2
            }
        },
        splitLine: { //坐标轴在 grid 区域中的分隔线。
            show: false,
        }
    }],
    yAxis: [{
        type: 'value',
        name: "万吨",
        nameTextStyle: { //name的颜色
            color: 'RGBA(0, 222, 224, 1)',
            fontSize: 12
        },
        axisLabel: {
            textStyle: {
                color: 'RGBA(0, 222, 224, 1)',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 12,
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#fff'],
                opacity: 0.06
            }
        }

    }],
    series: [{
        name: '',
        type: 'bar',
        data: [],
        barWidth: 8,
        barGap: 0, //柱间距离
        itemStyle: {
            normal: {
                show: true,
                color: function (params) {
                    let num = weightColorArr.length;
                    return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: weightColorArr[params.dataIndex % num].top // 0% 处的颜色
                    }, { //可根据具体情况决定哪根柱子显示哪种颜色
                        offset: 1,
                        color: weightColorArr[params.dataIndex % num].bottom // 100% 处的颜色
                    }], false)
                },
                barBorderRadius: 50,
                borderWidth: 0,
            }
        },
        animationDelay: function (idx) {
            return idx * 600;
        }
    },],
    animationEasing: 'elasticOut',
};



// ------------------危废转移数量统计---------------
var combination = document.getElementById('combinationType')
var combinationType = echarts.init(combination)


function StatisticsNumber() {
    $.ajax({
        method: 'get',
        url: url + '/wasteScreen/tranTypeInfo?year=2019',
        success: function (res) {

            var inProvince = parseInt(res.inprovincecnt / (res.outprovincecnt + res.inprovincecnt) * 100) //跨省转移-转入
            var outProvince = 100 - inProvince //跨省转移-转出

            var IntercityIn = parseInt(res.incitycnt2 / (res.incitycnt2 + res.outcitycnt2) * 100) //跨市转移-转入
            var IntercityOut = 100 - IntercityIn //跨市转移-转出

            var cityTransferIn = parseInt(res.incitycnt1 / (res.incitycnt1 + res.outcitycnt1) * 100) //市内转移-转入
            var cityTransferOut = 100 - cityTransferIn //市内转移-转出

            combinationOption.series[0].data[0].value = outProvince //跨省转出
            combinationOption.series[0].data[1].label.normal.formatter = inProvince + '%' //跨省转入Label
            combinationOption.series[0].data[1].value = inProvince //跨省转入

            combinationOption.series[1].data[0].value = IntercityOut //跨市转出
            combinationOption.series[1].data[1].label.normal.formatter = IntercityIn + '%' //跨市转入Label
            combinationOption.series[1].data[1].value = IntercityIn //跨市转入

            combinationOption.series[2].data[0].value = cityTransferOut //市内转出
            combinationOption.series[2].data[1].label.normal.formatter = cityTransferIn + '%' //跨市转入Label
            combinationOption.series[2].data[1].value = cityTransferIn //市内转入

        }
    })
}
StatisticsNumber()

/**
 * 图标所需数据
 */
var data = {
    value: 24.2,
    text: '-',
    color: ['rgba(157, 96, 255, 1)', 'rgba(252, 142, 108, 1)', 'rgba(125, 227, 246, 1)'],
    xAxis: ['跨省转移', '跨市转移', '市内转移'],
    values: ['76', '78', '22'],
}

var seriesData = []
var titleData = []
data.values.forEach(function (item, index) {
    titleData.push({
        text: '转入' + '\n\n',
        left: 26 * (index + 1) - .5 + '%',
        top: '48%',
        textAlign: 'center',
        textStyle: {
            fontSize: '12',
            color: 'rgba(255, 255, 255, 0.8)',
            fontWeight: '400',
        },
        subtext: data.xAxis[index],
        subtextStyle: {
            fontSize: '16',
            color: 'rgba(255, 255, 255, 0.8)',
            fontWeight: '400',
        },
    })
    seriesData.push({
        type: 'pie',
        radius: ['46%', '52%'],
        center: [26 * (index + 1) + '%', '38%'],
        hoverAnimation: false,
        label: {
            normal: {
                position: 'center'
            },
        },
        data: [{
            // value: item,
            value: '',
            name: data.text,
            itemStyle: {
                normal: {
                    color: data.color[index],
                }
            },
            label: {
                normal: {
                    position: 'outer', // 设置标签位置，默认在饼状图外 可选值：'outer' ¦ 'inner（饼状图上）'
                    // formatter: '{a} {b} : {c}个 ({d}%)'   设置标签显示内容 ，默认显示{b}
                    // {a}指series.name  {b}指series.data的name
                    // {c}指series.data的value  {d}%指这一部分占总数的百分比
                    formatter: '转出' + '{c}%',
                    textStyle: {
                        fontSize: 16,
                        color: 'rgba(255,255,255,0.8)',
                    }
                }
            },
            labelLine: { //设置指示线的长度
                "normal": {
                    show: true,
                    smooth: false,
                    length: 16,
                    length2: 1,
                },
                emphasis: {
                    show: true
                }
            },

        },
        {
            // value: 100 - item,
            value: '',
            name: '占位',
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: 'rgba(185, 192, 192, 0.3)',
                }
            },
            label: {
                normal: {
                    // formatter: 100 - item + '%',
                    formatter: '',
                    textStyle: {
                        fontSize: 28,
                        color: 'rgba(255,255,255,1)',
                    }
                },

            }
        }
        ]
    })
})

////////////////////////////////////////

let value = data.value || 0
combinationOption = {
    title: titleData,
    series: seriesData,
    grid: {
        left: '2%',
        top: '2%',
        right: '2%',
        bottom: '4%',
        containLabel: true,
    },
    animationDuration: 7000, //控制渲染速度
}

setInterval(() => {
    combinationType.setOption(combinationOption)
}, 2500)


// --------------------危险废物处置率----------------
var installation = document.getElementById('DisposalInstallation')
var DisposalInstallation = echarts.init(installation)



function DisposalRate() {
    $.ajax({
        method: 'get',
        url: url + '/wasteScreen/dangerWasteHandlerInfo?year=2019&type=2',
        success: function (res) {
            installationOption.series[0].data.push((res.yearproduction / 10000).toFixed(2), (res.yearstorage / 10000).toFixed(2), (res.yearhandle / 10000).toFixed(2))
            setTimeout(() => {
                DisposalInstallation.setOption(installationOption)
            }, 3500)

            var utilization = (res.yearhandle / res.yearproduction).toFixed(2)
            for (var i = 0; i < 5; i++) {
                WasteRateOption.series[0].data.push(utilization)
            }
            WasteRateOption.series[0].label.normal.formatter = utilization * 100 + '%'
            setTimeout(() => {
                hazardousWasteRate.setOption(WasteRateOption)

            }, 2000);

        }
    })
}
DisposalRate()



installationOption = {
    grid: {
        left: '6%',
        top: '18%',
        bottom: '14%',
        right: '4%'
    },
    tooltip: {
        trigger: 'axis',
        formatter: '{b}<br /> {c}' + "万吨",
    },
    xAxis: {
        data: ['产生量', '贮存量', '处置量'],
        axisTick: {
            show: false
        },
        axisLine: { //X轴线的宽度及颜色
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.1)',
            }
        },
        axisLabel: {
            textStyle: {
                color: 'RGBA(0, 222, 224, 1)',
                fontSize: 12
            }
        }
    },
    yAxis: [{
        name: '万吨',
        nameTextStyle: {
            color: 'RGBA(0, 222, 224, 1)',
            padding: [0, 25, 0, 0]
        },
        axisTick: {
            show: false
        },
        splitLine: { //Y轴网格线
            show: true,
            lineStyle: {
                color: 'rgba(255, 255, 255, 0.1)',
            }
        },
        axisLabel: {
            textStyle: {
                color: 'RGBA(0, 222, 224, 1)',
                fontSize: 12
            }
        },
        axisLine: { //Y轴线的颜色
            show: false,
            lineStyle: {
                color: 'rgba(255,255,255,0.1)',
            }
        },
    }],
    series: [{
        type: 'pictorialBar',
        barCategoryGap: '0%',
        symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
        label: {
            show: true,
            position: 'top',
            distance: 4,
            color: 'RGBA(0, 222, 224, 1)',
            fontWeight: '400',
            fontSize: 14,
        },
        barWidth: '65%',
        itemStyle: {
            color: function (params) {
                let itemColor = colorList[params.dataIndex];
                let curColor = '';
                if (Array.isArray(itemColor)) {
                    curColor = {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: itemColor[0] //  0%  处的颜色
                        },
                        {
                            offset: 1,
                            color: itemColor[1] ? itemColor[1] : itemColor[0] //  100%  处的颜色
                        }
                        ],
                        global: false //  缺省为  false
                    }
                } else {
                    curColor = itemColor;
                }
                return curColor
            }

        },
        data: [],
        z: 10,
        animationDelay: function (idx) {
            return idx * 800;
        }
    }],
    animationEasing: 'elasticOut',
};



var hazardousWaste = document.getElementById('hazardousWasteRate')
var hazardousWasteRate = echarts.init(hazardousWaste)


var WasteRateOption = {
    backgroundColor: '',
    title: {
        text: '危险废物处置率',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 14,
            color: '#ffffff'
        }
    },
    series: [{
        type: 'liquidFill',
        radius: '90%',
        // data: WasteRateData,
        data: [],
        color: ['#FFBF11', '#F4B30E', '#EACE36'],
        backgroundStyle: {
            borderWidth: 2,
            borderColor: 'rgb(25, 230, 117)',
            color: 'rgb(255,0,255,0.01)'
        },
        outline: { //外边
            // show: false
            borderDistance: 5,
            itemStyle: {
                borderWidth: 4,
                borderColor: '#FFBF11',
            },
        },
        label: {
            normal: {
                // formatter: (WasteRateValue * 100).toFixed(0) + '%',
                formatter: "",
                textStyle: {
                    fontSize: 12
                }
            }
        }
    }],
}



// ---------------------产废数量规模统计----------------
var hazardous = document.getElementById('hazardousWaste')
var hazardousWaste = echarts.init(hazardous)

function scaleStatistics() {
    $.ajax({
        method: 'get',
        url: url + '/wasteScreen/dangerWasteEntInfo?year=2019',
        success: function (res) {

            var totalNumn = res.gt100 + res.lt1 + res.lt10 + res.lt100

            var following = parseInt((res.lt1 / totalNumn) * 100) //10t一下
            var between = parseInt(((res.lt10 + res.lt100) / totalNumn) * 100) //10t一100t
            var above = parseInt((res.gt100 / totalNumn) * 100) // 100t以上


            hazardousOption.series[0].data[0].value = following //10t一下
            hazardousOption.series[0].data[1].value = 100 - following

            hazardousOption.series[1].data[0].value = between //10t一100t
            hazardousOption.series[1].data[1].value = 100 - between

            hazardousOption.series[2].data[0].value = above // 100t以上
            hazardousOption.series[2].data[1].value = 100 - above

            setTimeout(() => {
                hazardousWaste.setOption(hazardousOption)

            }, 1000)

        }
    })
}
scaleStatistics()


var hazardousData = {
    value: 24.2,
    text: '-',
    xAxis: ['10t以下', '10t-100t', '100t以上'],
    color: ['rgba(99, 57, 255, 1)', 'rgba(57, 255, 220, 1)', 'rgba(125, 227, 246, 1)'],
    values: [26, 58, 62],
}

var hazardousSeries = []
var hazardousTitle = []


hazardousData.values.forEach(function (item, index) {
    hazardousTitle.push({
        text: hazardousData.xAxis[index],
        // left: 24.5 * (index + 1) - .5 + '%',
        // x: 'center',
        // y: 'bottom',
        left: 26 * (index + 1) - .5 + '%',
        top: '78%',
        textAlign: 'center',
        textStyle: {
            fontSize: '15',
            color: 'rgba(255, 255, 255, 0.8)',
            fontWeight: '400',
        },
    })
    hazardousSeries.push({
        type: 'pie',
        clockWise: false,
        radius: ['48%', ' 52% '],
        hoverAnimation: false,
        center: [26 * (index + 1) + '%', '38%'],
        silent: true,
        itemStyle: {
            normal: {
                labelLine: {
                    show: false,
                },
            }
        },
        data: [{
            // value: item,
            value: '',
            label: {
                normal: {
                    show: true,
                    position: "center",
                    formatter: "{c}%",
                    fontSize: 14,
                    fontWeight: 900,
                    color: "white",
                }
            },
            itemStyle: {
                normal: {
                    color: '#139FBE',
                    shadowColor: hazardousData.color[index],
                    borderWidth: 4,
                    borderColor: hazardousData.color[index],
                    shadowBlur: 6
                }
            }
        }, {
            // value: 100 - item,
            value: '',
            itemStyle: {
                normal: {
                    color: '#ffffff',
                    // color:'#82ffff',
                }
            }
        }]
    },

    )
})


// let value = data.value || 0
hazardousOption = {
    title: hazardousTitle,
    series: hazardousSeries,
    grid: {
        left: '2%',
        top: '2%',
        right: '2%',
        bottom: '4%',
        containLabel: true,
    },
    animationDuration: 7000, //控制渲染速度
}



// -----------------------中间地图 全国与湖南省的 切换-------------------
// 全国 和湖南省选择高亮状态
var chooseTime = document.querySelectorAll(".place span")
var allMap = document.querySelectorAll(".allMap")

for (let i = 0; i < chooseTime.length; i++) {
    chooseTime[i].onclick = function () {
        for (var k = 0; k < chooseTime.length; k++) {
            chooseTime[k].id = ""
            $(allMap[k]).animate({
                opacity: '0',
            }, 800, function () {
                $(allMap[k]).css({ 'visibility': 'hidden', 'z-index': '' })
            })
        }
        this.id = 'placeSelect'
        $(allMap[i]).css({ 'visibility': 'visible', 'z-index': '8888' })
        $(allMap[i]).animate({
            opacity: '1',
        }, 800)
    }
}




//-------echart图例自适应js----------
window.onresize = function () {
    companyNum.resize()
    transferNum.resize()
    economic.resize()
    solidUsing.resize()
    utilizationRate.resize()
    solidStatistics.resize()
    dangrousSolid.resize()
    weightTransfer.resize()
    combinationType.resize()
    DisposalInstallation.resize()
    hazardousWasteRate.resize()
    hazardousWaste.resize()


    map.resize()
    hunanMigration.resize()
}