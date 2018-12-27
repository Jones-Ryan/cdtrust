function getId(ele) {
    return document.getElementById(ele);
}
var box = getId("box");
var inner = getId("inner");

var ul = inner.children[0];
var ol = inner.children[1];
console.log(ul)
var liArr = ul.getElementsByTagName("li");
var liOlArr = ol.getElementsByTagName("li");

var btnArr = getId("btnArr");
var leftBtn = getId("leftBtn");
var rightBtn = getId("rightBtn");
liArr[0].style.zIndex = 10;
var num = 0;

function show(n) {

    for (var i = 0; i < liArr.length; i++) {
        liArr[i].style.opacity = 0;
        liOlArr[i].className = "";
    }
    liArr[n].style.opacity = 1;
    liOlArr[n].className = "cur";
}

function autoStep() {
    num++;
    if (num > liArr.length - 1) {
        num = 0;
    }
    show(num);
}
var timer = setInterval(autoStep, 3000)
box.onmouseover = function () {
    clearInterval(timer);
}

box.onmouseout = function () {
    timer = setInterval(autoStep, 3000);
}
for (var m = 0; m < liOlArr.length; m++) {
    liOlArr[m].index = m;
    liOlArr[m].onmouseover = function () {
        console.log(this.index);

        // console.log(event.target.index);
        show(this.index);
    }
}

