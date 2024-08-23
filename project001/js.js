$(document).ready(function(){


    $(function() {
        $("#datepicker").datepicker();
    });


   

    // intro section dot 설정
    $('.intro .listBox .content li').mouseenter(function() {
        var content = $(this).index(); // 현재 li 요소의 인덱스를 가져옴
        // console.log(content); // 인덱스 확인
    
        // 모든 .dot>div 요소에서 'on' 클래스를 제거
        $('.intro .listBox .dot li>div').removeClass('on');
    
        // 해당 순번에 맞는 .dot>div에 'on' 클래스를 추가
        $('.intro .listBox .dot li>div').eq(content).addClass('on');
    });

    $('.intro .listBox .content li').mouseleave(function() {

        // 모든 .dot>div 요소에서 'on' 클래스를 제거
        $('.intro .listBox .dot li>div').removeClass('on');
  
    });




    // 배너 설정
    // dot을 클릭하면 해당 이미지가 left 0
    // dot addClass

    $('.notice .dot li').click(function(){

        var banner = $(this).index()
        // console.log(banner)
       
    

        $('.notice_inner .imgBox .banner ul li').css({'left': '0'}).stop().animate({ 'left': '-100%' })
        $('.notice_inner .imgBox .banner ul li').eq(banner).css({ 'left': '100%' }).stop().animate({ 'left': '0' })

        $('.notice .dot li').removeClass('on')
        $(this).addClass('on')



    })


    let a = 0


    let slide = setInterval(timer, 1500);


    function timer() {
        a++;
        if (a == 2) a = 0;

        $('.notice .dot li').eq(a).trigger('click')

    }




    // 갤러리 설정

    // 초기화면 left 버튼 안보이게 하기
    // $('.left_hover').hide();

    // $('.photo .listBox .left_hover i').click(function(){
    //     $('.photo .listBox .above').stop().animate({'left':'0'})
    //     $('.photo .listBox .under').stop().animate({'left':'5%'})

    //     $('.right_hover').fadeIn()

    // })

    // $('.photo .listBox .right_hover i').click(function(){
    //     // left 버튼 보이게 하기
    //     $('.left_hover').show();

    //     $('.photo .listBox .above').stop().animate({'left':'-75%'})
    //     $('.photo .listBox .under').stop().animate({'left':'-70%'})
    //     $('.right_hover').fadeOut();
       



    // })

      // 초기 상태 설정
      $('.left_hover').hide(); // 왼쪽 화살표 숨기기
      var moveAmount = $(window).width() * 0.2; // 20%의 실제 화면 너비
      var positionAbove = 0; // 'above' 요소의 초기 위치
      var positionUnder = 5; // 'under' 요소의 초기 위치
  
      function updateMoveAmount() {
          moveAmount = $(window).width() * 0.2; // 화면 크기에 따라 이동 거리 업데이트
      }
  
      // 윈도우 크기 조정 시 이동 거리 업데이트
      $(window).resize(function() {
          updateMoveAmount();
      });
  
      $('.photo .listBox .left_hover i').click(function() {
          // 20%씩 오른쪽으로 이동 (이전 위치로 돌아가기)
          positionAbove += moveAmount;
          positionUnder += moveAmount;
  
          if (positionAbove >= 0) {
              positionAbove = 0;
              positionUnder = 5;
              $('.left_hover').hide(); // 처음 위치로 돌아오면 왼쪽 화살표 숨기기
          }
  
          // 애니메이션 적용
          $('.photo .listBox .above').stop().animate({'left': positionAbove});
          $('.photo .listBox .under').stop().animate({'left': positionUnder});
  
          // 오른쪽 화살표 보이게 하기
          $('.right_hover').fadeIn();
      });
  
      $('.photo .listBox .right_hover i').click(function() {
          // 20%씩 왼쪽으로 이동
          positionAbove -= moveAmount;
          positionUnder -= moveAmount;
  
          if (positionAbove <= -($('.photo .listBox .above').width() - $(window).width())) {
              positionAbove = -($('.photo .listBox .above').width() - $(window).width());
              positionUnder = -($('.photo .listBox .under').width() - $(window).width());
              $('.right_hover').fadeOut(); // 마지막 위치에 도달하면 오른쪽 화살표 숨기기
          }
  
          // 애니메이션 적용
          $('.photo .listBox .above').stop().animate({'left': positionAbove});
          $('.photo .listBox .under').stop().animate({'left': positionUnder});
  
          // 왼쪽 화살표 보이게 하기
          $('.left_hover').fadeIn();
      });



    // 체험하기 설정
    // 체험하기 시간 클릭

    var time =  $('.booking_inner .times span').index()
    $('.booking_inner .times span').click(function(){
        $('.booking_inner .times span').css({
            'background-color': '', 
            'color': '', 
            'border-color': '',
            'font-weight': ''
        });


        $(this).eq(time).css({'background-color':'#F47C7D', 'color':'#1E1E1E', ' border-color':'#1E1E1E','font-weight':'bold'})



    })


    // 리뷰 슬라이드 (임시)
    new Swiper(".swiper", {
        direction: 'vertical',
        autoplay: {
            delay: 3000,
            disableOnInteraction: false, // 사용자가 슬라이드와 상호작용해도 자동 재생 유지
        },
        loop: true,
        on: {
            init: function () {
                // Swiper 초기화 후 슬라이드 위치 조정
                this.update(); // Swiper 업데이트 호출
            },
        },
    });





    //  모바일 슬라이드
    let slickInitialized = false; // Slick이 초기화되었는지 여부

    function initializeSlick() {
        const windowWidth = $(window).width();
        const breakpoint = 440; // Slick Slider를 활성화할 화면 너비
    
        if (windowWidth <= breakpoint) {
            if (!slickInitialized) {
                $('.listBox .content').slick({
                    infinite: false, // 무한 루프 비활성화
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false, // 기본 dots 숨기기
                    autoplay: true, // 자동 슬라이드 활성화
                    autoplaySpeed: 2500 
                });
    
                // .dot li 클릭 시 해당 슬라이드로 이동
                $('.intro .dot li').on('click', function() {
                    const index = $(this).index(); // 클릭된 dot의 인덱스
                    $('.listBox .content').slick('slickGoTo', index); // 해당 슬라이드로 이동
                    
                    // 기존의 active 클래스를 제거하고 새롭게 클릭된 dot에 추가
                    $('.intro .dot li>div').removeClass('on'); 
                    $(this).find('div').addClass('on');
                });
    
                slickInitialized = true; // Slick이 초기화되었음을 기록
            }
        } else {
            if (slickInitialized) {
                $('.listBox .content').slick('unslick'); // Slick 비활성화
                slickInitialized = false; // Slick 초기화 상태를 업데이트
            }
        }
    }
    
    // 초기화 및 리사이즈 핸들러 설정
    $(document).ready(function() {
        initializeSlick();
        $(window).resize(initializeSlick);
    
        // Slick Slider 슬라이드 변경 시 dot 클래스 동기화
        $('.listBox .content').on('afterChange', function(event, slick, currentSlide) {
            $('.intro .dot li > div').removeClass('on'); // 모든 dot의 on 클래스 제거
            $('.intro .dot li').eq(currentSlide).find('div').addClass('on'); // 현재 슬라이드에 해당하는 dot에 on 클래스 추가
        });
    
        // 페이지 로드 시 첫 번째 dot에 .on 클래스 추가
        $('.intro .dot li:first-child > div').addClass('on');
    });


  


    // 예약확인 팝업창
    // 여기서부터 수정--------------------------------


    $('.fixed').hide();
    let selectedTime = '';
    $('.times span').on('click', function() {
        selectedTime = $(this).text();  // 클릭된 시간 값을 저장
        console.log(selectedTime);  // 선택된 시간 확인 (디버깅 용도)
    });
      // 변수만들기


        // 버튼을 클릭했을 시, 변수로 지정한 내용을 저장하기
        $('.form').find('.button').click(function(){
           $('.fixed').show();

        //     // 날짜를 찾아오기
             let selectDate = $('#datepicker').datepicker('getDate');
             let selectMon = selectDate.getMonth();
             let selectDay = selectDate.getDate();

             console.log(selectMon + 1) //달은 0부터 시작
             console.log(selectDay)


            //  이름 불러오기
            let name = $('#no1').val()
            console.log(name)

            // 전화번호 불러오기
            let phoneNumber = $('#no2').val()
            console.log(phoneNumber)
            
             // 인원수 불러오기
             let peo = $('#no4').val()
             console.log(peo)

             // 프로그램명 불러오기
             let pro = $('input[name="booking"]:checked').next('label').text();

             console.log(pro)

            // 시간 불러오기
            console.log(selectedTime);



            
             $('.fixed').show()
             $('.fixed li').eq(0).find('span').text((selectMon + 1) + '월' + selectDay)
             $('.fixed li').eq(1).find('span').text(name)
             $('.fixed li').eq(2).find('span').text(phoneNumber)
             $('.fixed li').eq(3).find('span').text(pro)
             $('.fixed li').eq(4).find('span').text(peo)
             $('.fixed li').eq(5).find('span').text(selectedTime); 
            
             




         })

         $('.fixed p').click(function(){

             $('.fixed').hide()


        })
    

   




    












}) //끝 --------------------------------