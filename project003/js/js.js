$(document).ready(function () {



    // 브라우저의 높이값을 찾아라
    var winht = $(window).height()
    $('article').height(winht)
    // 화면이 리사이징 될 때마다, 브라우저의 화면높이를 찾아라
    $(window).resize(function () {
        var winht2 = $(window).height()
        $('article').height(winht2)
    })

    // console.log(winht)

    


    // nav li를 클릭했을 때, 순번을 찾고 addClass.
    // article의 높이 값에 곱해서 scrollTop을 움직여라

    $('nav li').click(function () {
        var ht = $('article').height()
        var i = $(this).index()

        $('nav li').removeClass('on')
        $('nav li').eq(i).addClass('on')

        $('html,body').stop().animate({ 'scrollTop': ht * i }, 1000);
    })




    // 스크롤 했을 때 nav addClass on
    $(window).scroll(function(){
        var sc = $(this).scrollTop()
        var sht = $(window).height()
        var ht = $('article').height()
        var photoTop = $('.photo').offset().top;

        console.log(photoTop - sc)

        if (sc >= photoTop) {
            $('.photo').addClass('fixed')
            $('.photo').find('ul').css({'top' : photoTop - sc})
        }
        else {
            $('.photo').removeClass('fixed')
        };

         if(sc >= photoTop){
             $('.photo .bigImg').css({
                 'position': 'fixed',
                 'top': 0,
                 'left': 0
             });
             $('.photo .thumb').css({'top':sc-photoTop})

         }else{
             $('.photo .bigImg').css({
                 'position': 'absolute',
                 'top' : 0,
                 'left' : 0
             });
         }


    
        
        for (var a = 0; a <= 5; a++) {
            if (sc >= sht * a && sc < sht * (a + 1)) {
                $('nav li').removeClass('on');
                $('nav li').eq(a).addClass('on');

            }
        }
    })


    // article에서 마우스휠 했을 때, 화면이 움직인다.
    $('article').mousewheel(function (e, delta) {
        e.preventDefault()

        if (delta > 0) {
            // 마우스를 올리면 이전 화면으로
            var prev = $(this).prev().offset().top;
            $('html,body').stop().animate({ 'scrollTop': prev }, 1000, 'easeInOutQuint')
        }

        if (delta < 0) {
            // 마우스를 내리면 다음 화면으로
            var next = $(this).next().offset().top;
            $('html,body').stop().animate({ 'scrollTop': next }, 1000, 'easeInOutQuint')
        }

    })



    // 애니메이션 -------------
    // 메인페이지를 열었을 때 애니메이션 작동하기
    $(window).on('scroll', function(){

        
         var sc = $(window).scrollTop()
         var ht = $('article').height()

         if(sc >= 0) {
             $('.main .imgBox li').addClass('animate')
         }
         if(sc >= ht) {
            $('.about .left_txt li').addClass('animate2')
            $('.about .right_txt li').addClass('animate2')
            $('.about .popup1 .attention').addClass('slideIn2')
            $('.about .popup1 .heart').addClass('slideIn2')
            $('.about .popup1 .reminder').addClass('slideIn2')
            $('.about .popup2').addClass('slideIn1')
         }

         if(sc >= ht * 3){
            $('.group .above li').addClass('animate2')
            $('.group .under li').addClass('animate2')
        }
     })

    var sc = $(window).scrollTop()
    if(sc >= 0) {
        $('.main .imgBox li').addClass('animate')
    }


    // about 페이지로 넘어왔을 때 애니메이션 작동하기
    var ht = $('article').height()
    if(sc >= ht) {
        $('.about .left_txt li').addClass('animate2')
        $('.about .right_txt li').addClass('animate2')
        $('.about .popup1 .attention').addClass('slideIn2')
        $('.about .popup1 .heart').addClass('slideIn2')
        $('.about .popup1 .reminder').addClass('slideIn2')
        $('.about .popup2').addClass('slideIn1')
    }

    // about 동영상 설정
    // 마우스가 frame 안에 들어갔을 때 video pause/ 나갔을 때 play
        $('.about .iphone .frame').mouseenter(function(){
            $('.about .iphone .vid video').get(0).pause();
        });
        $('.about .iphone .frame').mouseleave(function(){
            $('.about .iphone .vid video').get(0).play();
        });
    
    // group 페이지로 넘어왔을 때 애니메이션 작동하기
    if(sc >= ht * 3){
        $('.group .above li').addClass('animation2')
        $('.group .under li').addClass('animation2')
    }





    // playlist 설정
    // playlist 의 date의 li를 클릭했을 때, left_img의 li가 바껴라
    $('.playlist .date li').click(function () {
        var a = $(this).index();


        $('.playlist .left_img li').removeClass('on')
        $('.playlist .left_img li').eq(a + 1).addClass('on')

        $('.playlist .date li').removeClass('on')
        $('.playlist .date li').eq(a).addClass('on')

        $('.playlist .date div').removeClass('on')
        $('.playlist .date div').eq(a).addClass('on')

        
        // 클릭한 요소에 해당하는 애니메이션 클래스 추가
        $('.playlist .left_img li .chat_box .bubble').removeClass('slideIn1');
        $('.playlist .left_img li .chat_box .chat').removeClass('slideIn2');

        $('.playlist .left_img li').eq(a + 1).find('.chat_box .bubble').addClass('slideIn1');
        $('.playlist .left_img li').eq(a + 1).find('.chat_box .chat').addClass('slideIn2');


    })






     // 갤러리 썸네일 설정
    // .photo .thumb li 클릭하면 addClass on

    $('.photo .thumb ul li').click(function(){

        var i = $(this).index()
       console.log(i)

        $('.photo .thumb ul li').removeClass('on');
        $(this).addClass('on');

        // 갤러리 큰이미지 설정
        $('.photo .bigImg li').removeClass('on')
        $('.photo .bigImg li').eq(i).addClass('on')

    });





    // 그룹 폴더 팝업 설정
    // .group .above ul li eq(0)을 클릭했을 때, .popup1_pic, .popup1_text가 뜬다.
    $('.group .above ul li').eq(0).click(function () {
        $('.popup1_pic').stop().show()
        $('.popup1_text').stop().show()

    })

    $('.popup1_pic .close span').click(function () {
        $('.popup1_pic').stop().hide()
        $('.popup1_text').stop().hide()
    })
    $('.popup1_text .close span').click(function () {
        $('.popup1_pic').stop().hide()
        $('.popup1_text').stop().hide()
    })


    // nct u 팝업
    $('.group .above ul li').eq(1).click(function () {
        $('.popup2_pic').stop().show()
        $('.popup2_text').stop().show()
        $('.popup2_1_pic').stop().show()


    })

    $('.popup2_pic .close span').click(function () {
        $('.popup2_pic').stop().hide()
        $('.popup2_1_pic').stop().hide()
        $('.popup2_text').stop().hide()
    })
    $('.popup2_1_pic .close span').click(function () {
        $('.popup2_pic').stop().hide()
        $('.popup2_1_pic').stop().hide()
        $('.popup2_text').stop().hide()
    })
    $('.popup2_text .close span').click(function () {
        $('.popup2_pic').stop().hide()
        $('.popup2_1_pic').stop().hide()
        $('.popup2_text').stop().hide()
    })


    // 슈퍼엠 팝업
    $('.group .above ul li').eq(2).click(function () {
        $('.popup3_pic').stop().show()
        $('.popup3_text').stop().show()

    })

    $('.popup3_pic .close span').click(function () {
        $('.popup3_pic').stop().hide()
        $('.popup3_text').stop().hide()
    })
    $('.popup3_text .close span').click(function () {
        $('.popup3_pic').stop().hide()
        $('.popup3_text').stop().hide()
    })




    // 127 팝업
    $('.group .under ul li').eq(0).click(function () {
        $('.popup4_pic').stop().show()
        $('.popup4_text').stop().show()

    })

    $('.popup4_pic .close span').click(function () {
        $('.popup4_pic').stop().hide()
        $('.popup4_text').stop().hide()
    })
    $('.popup4_text .close span').click(function () {
        $('.popup4_pic').stop().hide()
        $('.popup4_text').stop().hide()
    })


    // 드림 팝업
    $('.group .under ul li').eq(1).click(function () {
        $('.popup5_pic').stop().show()
        $('.popup5_text').stop().show()

    })

    $('.popup5_pic .close span').click(function () {
        $('.popup5_pic').stop().hide()
        $('.popup5_text').stop().hide()
    })
    $('.popup5_text .close span').click(function () {
        $('.popup5_pic').stop().hide()
        $('.popup5_text').stop().hide()
    })




    // 스크롤 움직이면 팝업창 사라짐
    $(window).scroll(function () {
        var sc = $(window).scrollTop();
        var ht = $('article').height();

        if (sc >= ht * 4 || sc <= ht * 3) {
            $('.popup1_pic, .popup1_text, .popup2_pic, .popup2_1_pic, .popup2_text, .popup3_pic, .popup3_text, .popup4_pic, .popup4_text, .popup5_pic, .popup5_text').fadeOut();
        }
    });

    // 인트로 설정
    // .click .txt .btn span을 클릭했을 때, intro가 fadeOut 돼라
    // intro span을 클릭하면 section이 보여라
    $('.click .txt .btn span').click(function() {
         $('.intro').fadeOut()
         $('section').addClass('show');
     })













}) //끝------------------------------------------