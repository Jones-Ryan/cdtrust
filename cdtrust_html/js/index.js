$(".radius-one").hover(function () {
    $(this).siblings().css({
        "background-color": "#4d4d4d",
        "opacity": " 1",
        "transform": "translateY(-210px)",
        "color": "#37b5b6"
    });
}, function () {
    $(this).siblings().css({
        "background-color": "#4d4d4d",
        "opacity": " 0",
        "transform": "translateY(0px)",
        "color": "#37b5b6",
        "transition": " all 0.5s ease 0s"
    });

});
//animate-box动画
var animateFn = function(){
    var i = 0;
    $('.animate-box').waypoint(function (direction) {
        
        if (direction === 'up' || !$(this.element).hasClass('animated-fast')) {
            i++;
            $(this.element).addClass('item-animate');
            setTimeout(function () {
                $('body .animate-box.item-animate').each(function (k) {
                    var el = $(this);
                    setTimeout(function () {
                        var effect = el.data('animate-effect');
                        if (effect === 'fadeIn') {
                            el.addClass('fadeIn animated-fast');
                        } else if (effect === 'fadeInLeft') {
                            el.addClass('fadeInLeft animated-fast');
                        } else if (effect === 'fadeInRight') {
                            el.addClass('fadeInRight animated-fast');
                        } else {
                            el.addClass('fadeInUp animated-fast');
                        } 
                        el.removeClass('item-animate');
                    }, k * 200, 'easeInOutExpo'); //根据顺序分别为每个元素添加过渡动画时间
                });
            }, 100);
        }
    }, {
        offset: '85%'
    });
}
//页面回到顶部
var goTop = function(){
    
        $(window).scroll(function () {
            if ($(window).scrollTop() > 150) {
                $("#sidebar").fadeIn();
            }
            else {
                $("#sidebar").fadeOut();
            }
        });
        $("#sidebar .gototop").click(function () {
            $('html,body').animate({ 'scrollTop': 0 }, 500);
        });
}
//关闭video遮罩层暂停

$(function () {
    goTop();
    animateFn();
    
    $('.news-video').on('click', function () {
        $('.video-bg').show();
        $('.video').show();
    })
    $('.close-btn').on('click', function () {
        $('.video-bg').hide();
        $('.video').hide();
        $('#video-box').get(0).pause();
    })
})
