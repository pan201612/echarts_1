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
            // item 表述 鼠标到饼图的每一项内容的时候 触发提示信息
            trigger: 'item',
            // a:series 选项下面的name
            // b:  series下面data中的name
            // c:  series下面data中的value
            // d:  当前value 占所以内容的比例
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


    // 解决echarts设置option后 ，图标特别小的情况
    //页面加载的时候 调用echarts实例对象的reszie（）方法
    // 必须使用时间监听


    window.addEventListener('load', function () {
        myChart.resize();
    });

    // 当屏幕重置大小的时候 继续调用echarts的重置大小方法
    // 自动适应当前屏幕
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})()



