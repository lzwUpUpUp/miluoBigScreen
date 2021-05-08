// --------------初始化动画设置----------
$(".top").animate({
    top: '0px',
    opacity: 1,
}, 800, function() {
    $(".leftBox").each(function(i) {
        $(this).addClass('leftMenuAni');
        $(this).css("animation-delay", i * 0.5 + "s");
    })

    $(".rightBox").each(function(i) {
        $(this).addClass('rightMenuAni');
        $(this).css("animation-delay", i * 0.5 + "s");
    })
})

setTimeout(() => {
    $(".airStation").animate({
        top: '0px',
        opacity: 1,
    }, 1100)
}, 2300);

setTimeout(() => {
    $(".pollutionOnline").animate({
        top: '50%',
        opacity: 1,
    }, 1100)
}, 1900);


//--------------公共头部方法，时间和天气-----------
function showDateTime() {
    var sWeek = new Array('日', '一', '二', '三', '四', '五', '六');
    var myDate = new Date();
    var sYear = myDate.getFullYear();
    var sMonth = myDate.getMonth() + 1;
    var sDate = myDate.getDate();
    var sDay = sWeek[myDate.getDay()]; //获取当日为星期几
    var hour = myDate.getHours();
    var minutes = myDate.getMinutes();
    var second = myDate.getSeconds();

    h = formatTime(hour) //格式化小时，如果不足两位，则在前面加‘0’
    m = formatTime(minutes)
    s = formatTime(second)

    var lastDay = Number(sDate) - Number(1)
        //显示时间
    document.getElementById("topTime").innerHTML = (sYear + '.' + sMonth + '.' + sDate + '    ' + h + ":" + m + ":" + s);

    //设个定时器，一秒钟执行一次此方法
    setTimeout("showDateTime()", 1000);
}
showDateTime() //页面初始化时自调用


function formatTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}


//获取头部右侧天气信息
function weather() {
    var script = document.createElement('script') //动态创建一个<script>标签
    script.src = "http://wthrcdn.etouch.cn/weather_mini?city=岳阳&callback=handleResponse"; //src链接里面凭拼接一个回调函数
    document.body.insertBefore(script, document.body.firstChild) //插入body里面
}
weather()


//初始化的时候，缓慢进去地图
// setTimeout(function() {
//     cantrolZoom()
// }, 7000)
// var Time;

// function cantrolZoom() {
//     Time = setInterval(function() {
//         zoom = zoom + 0.2;
//         map.setZoomAndCenter(zoom, defaltPoint);
//         if (zoom > 13) {
//             clearInterval(Time)
//         }
//     }, 45)
// }





// // ---------------------水波纹----------
// var circles1;
// //初始化水波纹动画
// function initLeiDaZoom(Position, color) {
//     if (!circles1) {
//         pruductCircle(Position, color)
//     } else {
//         circles1.remove()
//         pruductCircle(Position, color)
//     }
// }
// //停止动画
// function removeLeiDaZoom() {
//     circles1.stop();
// }

// // 地图进行缩放的时候监听该函数
// // AMap.event.addListener(map, 'zoomend', function() {
// //     // removeLeiDaZoom();
// //     // initLeiDaZoom();
// //     // zoom = map.getZoom();
// // });

// function pruductCircle(Position, color) {
//     var circles1_point_lng = Position[0]
//     var circles1_point_lat = Position[1]
//     circles1 = new CircleShow(13 * 40, 4, [circles1_point_lng, circles1_point_lat], {
//         fillColor: color,
//         // fillColor: '#1fc315',
//         fillOpacity: 0.8
//     }, '');
//     circles1.start(500, 2000); //水波圆开始
// }
// map.AmbientLight = new AMap.Lights.AmbientLight([1, 1, 1], 1);
// map.DirectionLight = new AMap.Lights.DirectionLight([1, 0, -0.5], [1, 1, 1], 1);



// // ------------卫星图转换---
// //转换为卫星图+路况
// var layer1 = ''
// var layer2 = ''
// var layers = ''

// function satellite() {
//     layer1 = new AMap.TileLayer.Satellite(); // 卫星
//     layer2 = new AMap.TileLayer.RoadNet(); // 路网
//     layers = [
//             layer1,
//             layer2
//         ]
//         // 添加到地图上
//     map.add(layers);
// }

// //移除卫星图层+路况·
// function twice() {
//     map.remove(layers);
// }


// // ../images/ziyuan12.png
// // ---------------marker的生成及事件
// function markerProduct(data, num, type) {
//     var icon = new AMap.Icon({
//         image: './images/ziyuan' + num + '.png',
//         size: new AMap.Size(26, 38)
//     });
//     marker = new AMap.Marker({
//         icon: icon,
//         position: data.center.split(','),
//         offset: new AMap.Pixel(-12, -12),
//         zIndex: 101,
//         siteCode: data.siteCode,
//         title: data.name,
//         center: data.center.split(','),
//         type: type,
//         offset: new AMap.Pixel(-11, -32),
//         map: map
//     });
//     AMap.event.addListener(marker, 'click', function(e) {
//         var markerPosition = e.target.w.center; //当点击某一个marker的时候使其定位到地图中央
//         map.panTo(markerPosition);
//         var libs = []; //存入点坐标的经纬度
//         var lon = Number(e.target.w.center[0])
//         var lat = Number(e.target.w.center[1]);
//         libs.push(lon)
//         libs.push(lat)
//         initLeiDaZoom(libs, '#1cf3f3'); //开始创建水波纹
//         $.ajax({
//             url: url + '/envEnterprise/getEnterprisePollution',
//             type: 'get',
//             data: {
//                 type: e.target.w.type,
//                 siteCode: e.target.w.siteCode,
//             },
//             success: function(res) {
//                 var m = new Map([
//                     ['zd', '溶解氧(mg/L)'],
//                     ['kmn', '高锰酸盐(mg/L)'],
//                     ['nox', '氮氧化物(mg/m³)'],
//                     ['cu', '总铜(mg/L)'],
//                     ['pm25', 'PM₂.₅(μg/m³)'],
//                     ['co', 'CO(mg/m³)'],
//                     ['so2', '二氧化硫(μg/m³)'],
//                     ['pm10', 'PM₁₀(μg/m³)'],
//                     ['no2', 'NO₂(μg/m³)'],
//                     ['o3oneHour', 'O₃(μg/m³)'],
//                     ['dust', '烟尘(mg/L)'],
//                     ['o2', '氧气含量(%)'],
//                     ['temp', '温度(℃)'],
//                     ['press', '氧气压力(Kpa)'],
//                     ['sw', '水温(℃)'],
//                     ['flowVelocity', '烟气流速(m/s)'],
//                     ['rjy', '溶解氧(mg/L)'],
//                     ['nh3N', '氨氮(mg/L)'],
//                     ['pb', '铅(mg/L)'],
//                     ['shen', '砷(mg/L)'],
//                     ['cd', '总镉(mg/L)'],
//                     ['codmn', '化学耗氧量(mg/L)'],
//                     ['nh3', '氨氮(mg/L)'],
//                     ['cod', '化学耗氧量(mg/L)'],
//                     ['CODMn', '化学耗氧量(mg/L)'],
//                     ['chromium', '总铬(mg/L)'],
//                     ['tn', '总氮(mg/L)'],
//                     ['tp', '总磷(mg/L)'],
//                     ['cu', '总铜(mg/L)'],
//                     ['bo1', '污水(mg/L)'],
//                     ['zn', '总锌(mg/L)'],
//                     ['ddl', '电导率(us/cm)'],
//                     ['aqi', 'aqi'],
//                     ['comprehensiveToxicity', '综合毒性(mg/L)'],
//                     ['ph', 'ph'],
//                     ['primaryEp', '首要污染物'],
//                     ['tpb', '总铅(ug/L)'],
//                     ['tcd', '总镉(ug/L)'],
//                     ['tshen', '总砷(ug/L)'],
//                 ]);

//                 var objLibs = []
//                 $('.companyName').html(e.target.w.title)
//                 for (var key in res) {
//                     if (res[key]) {
//                         var obj = {}
//                         obj['item'] = m.get(key)
//                         obj['result'] = format(res[key])
//                         objLibs.push(obj)
//                     }
//                 }

//                 detailCreat(objLibs) //生成详细信息的html
//             }


//         })
//     })
// }

// //将后端返回来的数字改成下标
// function format(str) {
//     if (str == 'PM2.5' || str == 'PM10' || str == 'O2' || str == 'SO2' || str == 'O3') {
//         return str.replace(/\d/g, function(val) {
//             return (val + "").sub()
//         })
//     } else {
//         return str
//     }
// }




// function detailCreat(data) {
//     if (data.length > 0) {
//         $('.notRecord').css('display', 'none')
//         var html = data.map(function(item) {
//             return `
//         <tr>
//              <th>
//                 ${data.indexOf(item) + 1}
//              </th>
//              <th>
//                  ${item.item}
//              </th>
//              <th>
//                  ${item.result}
//              </th>
//         </tr>
//         `
//         }).join('')
//         document.querySelector('#detailBody').innerHTML = html
//     } else {
//         document.querySelector('#detailBody').innerHTML = ''
//         $('.notRecord').css('display', 'block')

//     }
// }



// //初始化的时候，缓慢进去地图
// setTimeout(function() {
//     cantrolZoom()
// }, 7000)
// var Time;

// function cantrolZoom() {
//     Time = setInterval(function() {
//         zoom = zoom + 0.1;
//         map.setZoomAndCenter(zoom, defaltPoint);
//         if (zoom > 13) {
//             clearInterval(Time)
//         }
//     }, 45)
// }