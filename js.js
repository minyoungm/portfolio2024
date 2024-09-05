// $(document).ready(function () {


//     $('.profile, .project001, .project002, .project003').hide();

//     $('.profile .profile_letter .paper').css({ 'top': '90%' })






//     // home 버튼 설정
//     $('.home').click(function () {
//         $('.intro').stop().fadeIn();
//         $('.sub_header').hide();




//         $('.profile, .project001, .project002, .project003').hide();

//         $('.main .main_letter').css({ 'bottom': '-50%' });
//         $('.main_header .pro').css({ 'top': '-10%' });
//         $('.main_header .pro1').css({ 'top': '-10%' });
//         $('.main_header .pro2').css({ 'top': '-10%' });
//         $('.main_header .pro3').css({ 'top': '-10%' });
//     })





//     // intro enter 버튼 설정
//     $('.intro .enter').click(function () {

//         $('.profile, .project001, .project002, .project003').hide();


//         $('.intro').stop().fadeOut(function () {
//             $('.main').stop().fadeIn();
//             $('.main_header').stop().fadeIn();
//         });

//         $('.main .main_letter').stop().animate({ 'bottom': '0' }, 800)
//         $('.main_header .pro').stop().animate({ 'top': '40%' }, 900)
//         $('.main_header .pro1').stop().animate({ 'top': '40%' }, 1000)
//         $('.main_header .pro2').stop().animate({ 'top': '50%' }, 1100)
//         $('.main_header .pro3').stop().animate({ 'top': '30%' }, 1200)

//     });



//     // 메인헤더 설정
//     $('.main_header .pro').click(function () {

//         $('.profile').show()
//         $('.project001, .project002, .project003').hide()

//         // .profile 요소를 먼저 보여주기
//         $('.profile').css({ 'left': '100%' }).stop().animate({ 'left': '0' }, 800, function () {


//             $(this).stop().animate({ 'left': '0' }, 300, function () {
//                 // .profile이 완전히 왼쪽으로 이동한 후 .paper의 top 변경
//                 setTimeout(function () {
//                     $('.profile .paper').css({ 'top': '90%' }); // 초기 상태로 돌려놓음
//                     $('.profile .paper').stop().animate({ 'top': '10%' }, 300); // 부드럽게 10%로 이동
//                 }, 0); // 약간의 지연시간을 둠
//             });
//         });
//         // 서브 헤더 보이게 하기
//         $('.main_header').hide()
//         $('.sub_header').stop().fadeIn()

//         // 서브헤더 addClass
//         $('.sub_header ul li').removeClass('on');
//         $('.sub_header ul li').eq(0).addClass('on');




//     })






//     $('.main_header .pro1').click(function () {



//         // 헤더 보이게 하기
//         $('.main_header').hide();
//         $('.sub_header').stop(true, true).fadeIn();

//         // 서브 헤더 addClass
//         $('.sub_header ul li').removeClass('on');
//         $('.sub_header ul li').eq(1).addClass('on');

//         $('.project001').css({ 'left': '100%' }).stop().animate({ 'left': '0%' }, 500, function () {
//             // 애니메이션 완료 후 top 값을 10%로 변경
//             $('.project001 .film').removeClass('tilt-in-right-1'); // 이전 클래스 제거
//             setTimeout(function() {
//                 $('.project001 .film').addClass('tilt-in-right-1'); // 새로운 클래스 추가
//             }, 500);
            

//         }).show();
//         $('.profile, .project002, .project003').hide();
        
//     });




//     $('.main_header .pro2').click(function () {

//         // 헤더 보이게 하기
//         $('.main_header').hide();
//         $('.sub_header').stop(true, true).fadeIn();

//         // 서브 헤더 addClass
//         $('.sub_header ul li').removeClass('on');
//         $('.sub_header ul li').eq(2).addClass('on');

//         $('.project002').css({ 'left': '100%' }).stop().animate({ 'left': '0%' }, 500, function () {
//             $('.project002 .film').removeClass('tilt-in-right-1'); // 이전 클래스 제거
//             setTimeout(function() {
//                 $('.project002 .film').addClass('tilt-in-right-1'); // 새로운 클래스 추가
//             }, 500);
//         }).show();
//         $('.profile, .project001, .project003').hide();
//     });




//     $('.main_header .pro3').click(function () {

//         // 헤더 보이게 하기
//         $('.main_header').hide();
//         $('.sub_header').stop(true, true).fadeIn();

//         // 서브 헤더 addClass
//         $('.sub_header ul li').removeClass('on');
//         $('.sub_header ul li').eq(3).addClass('on');

//         $('.project003').css({ 'left': '100%' }).stop().animate({ 'left': '0%' }, 500, function () {
//             $('.project003 .film').removeClass('tilt-in-right-1'); // 이전 클래스 제거
//             setTimeout(function() {
//                 $('.project003 .film').addClass('tilt-in-right-1'); // 새로운 클래스 추가
//             }, 500);
//         }).show();
//         $('.profile, .project001, .project002').hide();
//     });





//     // 서브 헤더 설정
//     $('.sub_header li').click(function () {
//         var index = $(this).index();

//         // 모든 요소를 숨김
//         $('.profile, .project001, .project002, .project003').hide();

//         // 클릭한 li에 대응하는 요소만 보여주고 애니메이션 실행
//         if (index === 0) {
//             $('.profile').css({ 'left': '100%' }).stop().animate({ 'left': '0%' }, 500, function () {
//                 // 애니메이션 완료 후 top 값을 10%로 변경
//                 $('.profile_letter .paper').css({'top':'90%'}).stop().animate({ 'top': '10%' }, 500);
//             }).show();
//             $('.project001, .project002, .project003').hide();
//             $('.project001 .detail').removeClass()
//             $('.project001 .detail').addClass('tilt-in-right-1')

//         } else if (index === 1) {
//             $('.project001').css({ 'left': '100%' }).stop().animate({ 'left': '0%' }, 500, function () {
//                 // 애니메이션 완료 후 top 값을 10%로 변경
//                 $('.project001 .film').removeClass('tilt-in-right-1'); // 이전 클래스 제거
//                 setTimeout(function() {
//                     $('.project001 .film').addClass('tilt-in-right-1'); // 새로운 클래스 추가
//                 }, 500);
                

//             }).show();
//             $('.profile, .project002, .project003').hide();

//         } else if (index === 2) {
//             $('.project002').css({ 'left': '100%' }).stop().animate({ 'left': '0%' }, 500, function () {
//                 $('.project002 .film').removeClass('tilt-in-right-1'); // 이전 클래스 제거
//                 setTimeout(function() {
//                     $('.project002 .film').addClass('tilt-in-right-1'); // 새로운 클래스 추가
//                 }, 500);
//             }).show();
//             $('.profile, .project001, .project003').hide();

//         } else if (index === 3) {
//             $('.project003').css({ 'left': '100%' }).stop().animate({ 'left': '0%' }, 500, function () {
//                 $('.project003 .film').removeClass('tilt-in-right-1'); // 이전 클래스 제거
//                 setTimeout(function() {
//                     $('.project003 .film').addClass('tilt-in-right-1'); // 새로운 클래스 추가
//                 }, 500);
//             }).show();
//             $('.profile, .project001, .project002').hide();
//         }

//         // 모든 li 요소에서 on 클래스 제거
//         $('.sub_header li').removeClass('on');
//         // 클릭한 li에 on 클래스 추가
//         $(this).addClass('on');
//     });




//     // 디테일 뷰 팝업설정
//     $('.pro01_popup,.pro02_popup,.pro03_popup').hide()


//     // 프로젝트1
//     $('.project001 .project001_inner .detail .btn li').eq(0).click(function () {
//         $('.pro01_popup').show()
//         $('.pro01_popup .imgBox .imgInner').scrollTop('0')
//     })


//     $('.close').click(function () {
//         $('.pro01_popup, .pro02_popup, .pro03_popup').hide()

//     })


//     // 프로젝트2
//     $('.project002 .project002_inner .detail .btn li').eq(0).click(function () {
//         $('.pro02_popup').show()
//         $('.pro02_popup .imgBox .imgInner').scrollTop('0')
//     })


//     // 프로젝트3
//     $('.project003 .project003_inner .detail .btn li').eq(0).click(function () {
//         $('.pro03_popup').show()
//         $('.pro03_popup .imgBox .imgInner').scrollTop('0')
//     })



// }); // 끝------------------------------------------






$(document).ready(function () {

    // 처음에 숨기는 설정
    $('.profile, .project001, .project002, .project003').hide();
    $('.profile .profile_letter .paper').css({ 'top': '90%' });

    // home 버튼 설정
    $('.home').click(function () {
        $('.intro').stop().fadeIn();
        $('.sub_header').hide();
        $('.profile, .project001, .project002, .project003').hide();
        $('.main .main_letter').css({ 'bottom': '-50%' });
        $('.main_header .pro, .main_header .pro1, .main_header .pro2, .main_header .pro3').css({ 'top': '-10%' });
    });

    // intro enter 버튼 설정
    $('.intro .enter').click(function () {
        $('.profile, .project001, .project002, .project003').hide();
        $('.intro').stop().fadeOut(function () {
            $('.main').stop().fadeIn();
            $('.main_header').stop().fadeIn();
        });
        $('.main .main_letter').stop().animate({ 'bottom': '0' }, 800);
        $('.main_header .pro').stop().animate({ 'top': '40%' }, 900);
        $('.main_header .pro1').stop().animate({ 'top': '40%' }, 1000);
        $('.main_header .pro2').stop().animate({ 'top': '50%' }, 1100);
        $('.main_header .pro3').stop().animate({ 'top': '30%' }, 1200);
    });

    // 메인 헤더 설정
    $('.main_header .pro').click(function () {
        $('.profile').show().css({ 'left': '100%' }).stop().animate({ 'left': '0' }, 800, function () {
            $('.profile .paper').css({ 'top': '90%' }).stop().animate({ 'top': '10%' }, 300);
        });
        $('.project001, .project002, .project003').hide();
        $('.main_header').hide();
        $('.sub_header').stop().fadeIn();
        $('.sub_header ul li').removeClass('on').eq(0).addClass('on');
    });

    $('.main_header .pro1').click(function () {
        $('.project001').show().css({ 'left': '100%' }).stop().animate({ 'left': '0%' }, 500, function () {
            $('.project001 .film').removeClass('tilt-in-right-1'); 
            setTimeout(function() {
                $('.project001 .film').addClass('tilt-in-right-1');
            }, 500);
        });
        $('.profile, .project002, .project003').hide();
        $('.main_header').hide();
        $('.sub_header').stop(true, true).fadeIn();
        $('.sub_header ul li').removeClass('on').eq(1).addClass('on');
    });

    $('.main_header .pro2').click(function () {
        $('.project002').show().css({ 'left': '100%' }).stop().animate({ 'left': '0%' }, 500, function () {
            $('.project002 .film').removeClass('tilt-in-right-1');
            setTimeout(function() {
                $('.project002 .film').addClass('tilt-in-right-1');
            }, 500);
        });
        $('.profile, .project001, .project003').hide();
        $('.main_header').hide();
        $('.sub_header').stop(true, true).fadeIn();
        $('.sub_header ul li').removeClass('on').eq(2).addClass('on');
    });

    $('.main_header .pro3').click(function () {
        $('.project003').show().css({ 'left': '100%' }).stop().animate({ 'left': '0%' }, 500, function () {
            $('.project003 .film').removeClass('tilt-in-right-1');
            setTimeout(function() {
                $('.project003 .film').addClass('tilt-in-right-1');
            }, 500);
        });
        $('.profile, .project001, .project002').hide();
        $('.main_header').hide();
        $('.sub_header').stop(true, true).fadeIn();
        $('.sub_header ul li').removeClass('on').eq(3).addClass('on');
    });

    // 서브 헤더 설정
    $('.sub_header li').click(function () {
        var index = $(this).index();
        $('.profile, .project001, .project002, .project003').hide();

        switch (index) {
            case 0:
                $('.profile').show().css({ 'left': '100%' }).stop().animate({ 'left': '0%' }, 500, function () {
                    $('.profile_letter .paper').css({'top':'90%'}).stop().animate({ 'top': '10%' }, 500);
                });
                break;
            case 1:
                $('.project001').show().css({ 'left': '100%' }).stop().animate({ 'left': '0%' }, 500, function () {
                    $('.project001 .film').removeClass('tilt-in-right-1');
                    setTimeout(function() {
                        $('.project001 .film').addClass('tilt-in-right-1');
                    }, 500);
                });
                break;
            case 2:
                $('.project002').show().css({ 'left': '100%' }).stop().animate({ 'left': '0%' }, 500, function () {
                    $('.project002 .film').removeClass('tilt-in-right-1');
                    setTimeout(function() {
                        $('.project002 .film').addClass('tilt-in-right-1');
                    }, 500);
                });
                break;
            case 3:
                $('.project003').show().css({ 'left': '100%' }).stop().animate({ 'left': '0%' }, 500, function () {
                    $('.project003 .film').removeClass('tilt-in-right-1');
                    setTimeout(function() {
                        $('.project003 .film').addClass('tilt-in-right-1');
                    }, 500);
                });
                break;
        }

        $('.sub_header li').removeClass('on');
        $(this).addClass('on');
    });

    // 팝업 설정
    $('.pro01_popup, .pro02_popup, .pro03_popup').hide();

    $('.project001 .detail .btn li').eq(0).click(function () {
        $('.pro01_popup').show().find('.imgBox .imgInner').scrollTop(0);
    });

    $('.project002 .detail .btn li').eq(0).click(function () {
        $('.pro02_popup').show().find('.imgBox .imgInner').scrollTop(0);
    });

    $('.project003 .detail .btn li').eq(0).click(function () {
        $('.pro03_popup').show().find('.imgBox .imgInner').scrollTop(0);
    });

    $('.close').click(function () {
        $('.pro01_popup, .pro02_popup, .pro03_popup').hide();
    });

});