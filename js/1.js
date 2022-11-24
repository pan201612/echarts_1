//滚动数据
(function () {
    var fault = document.getElementsByClassName('fault');
    var box2 = document.getElementsByClassName('box2');
    for (var i = 0; i < fault.length; i++) {
        fault[i].setAttribute('index', i);
        fault[i].onclick = function () {
            var index = this.getAttribute('index');
            for (var j = 0; j < fault.length; j++) {
                fault[j].classList.remove('active');
                fault[index].classList.add('active');
            }
            for (var l = 0; l < box2.length; l++) {
                box2[l].style.display = 'none';
                box2[index].style.display = 'block';

            }
        }

    }
})();


//点位分布统计图
(function () {
    var myChart = echarts.init(document.getElementsByClassName('left')[0]);

    var option = {
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [
            {
                name: '老陈学员分布',
                // pie 饼图
                type: 'pie',
                // 百分比 具体指都可以  百分比加一号
                // 1：内圆的半径  2 外圆的半径
                radius: ['15%', '90%'],
                // 设置水平方向  垂直方法  50% 居中
                center: ['50%', '50%'],
                roseType: 'radius',
                itemStyle: {
                    borderRadius: 5
                },
                label: {
                    fontSize: 10
                },
                labelLine: {
                    length: 4,
                    length2: 8
                },
                data: [
                    { value: 20, name: '云南' },
                    { value: 26, name: '北京' },
                    { value: 24, name: '山东' },
                    { value: 25, name: '河北' },
                    { value: 20, name: '江苏' },
                    { value: 25, name: '浙江' },
                    { value: 30, name: '四川' },
                    { value: 42, name: '河南' }
                ]
            }
        ]
    };

    myChart.setOption(option);


    window.addEventListener('load', function () {
        myChart.resize();
    });

    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();

(function () {

})();


// 用户统计图
(function () {
    var myChart = echarts.init(document.getElementsByClassName('stat')[0]);


    var option = {
        color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
                { offset: 0, color: '#00fffb' }, // 0 起始颜色
                { offset: 1, color: '#0061ce' }  // 1 结束颜色
            ],
            global: false

        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {

                type: 'none'
            }
        },
        grid: {
            top: '4%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
            show: true,
            borderColor: 'rgba(0, 240, 255, 0.3)'
        },
        xAxis: [
            {
                type: 'category',
                data: ['郑州', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
                axisTick: {
                    alignWithLabel: false
                },
                axisLabel: {
                    color: "#71f2fb"
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(0, 240, 255, 0.3)'
                    }
                }
            }

        ],
        yAxis: [
            {
                type: 'value',
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: "#71f2fb"
                },
                splitLine: {
                    lineStyle: {
                        // 使用深浅的间隔色
                        color: 'rgba(0, 240, 255, 0.3)'
                    }
                }
            }
        ],

        series: [
            {
                name: 'Direct',
                type: 'bar',
                barWidth: '60%',
                data: [2100, 1900, 1700, 1560, 1400, {
                    value: 1200,
                    itemStyle: {
                        color: '#254065'
                    }
                }, {
                        value: 1200,
                        itemStyle: {
                            color: '#254065'
                        }
                    }, {
                        value: 1200,
                        itemStyle: {
                            color: '#254065'
                        }
                    }, 900, 750, 600, 480, 240]
            },

        ]
    };



    myChart.setOption(option);


    window.addEventListener('load', function () {
        myChart.resize();
    });

    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();




