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

})()


//点位分布图


