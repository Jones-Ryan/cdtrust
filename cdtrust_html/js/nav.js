// 顶部导航换颜色
$(document).scroll(function () {
    var scrollTop = $(document).scrollTop();
    console.log(scrollTop);
    if (scrollTop > '0') {
        $('.header').css('boxShadow','0px 4px 10px 0px rgba(0,0,0,.05)')
    } else {
        $('.header').css('backgroundColor','#fff')
    }
});