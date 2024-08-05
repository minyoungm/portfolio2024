$(document).ready(function () {


    // 서브페이지로 넘어가게 하기----------------------------------------
    // .product 안에 있는 subCon의 a를 클릭했을 때, sub이 보이고, main이 사라져라
    $('.product .slider .pro1 .wild a, .product .slider .pro1 .subCon a, .product .slider .pro1 .daisyp a, .product .slider .pro2 .love a,.product .slider .pro2 .intense a,.product .slider .pro2 .fresh a').click(function (e) {
        e.preventDefault()
        $('.sub').fadeIn()
        $('.main').fadeOut(function () {
            $('html, body').scrollTop(0);
        })

    })




    // 슬라이드 설정 --------------------------------------------------


      
    // btn을 클릭했을 때 slide li가 이동
    $('.landing .no>li').click(function () {
        
        var a = $(this).index();

        // 모든 .bg>li 요소를 fade out
        $('.landing .bg>li').stop().fadeOut(500);

        // 선택된 인덱스의 .bg>li 요소만 fade in
        $('.landing .bg>li').eq(a).stop().fadeIn(500);

        // 선택된 버튼 강조
        $('.landing .no>li').removeClass('on');
        $(this).addClass('on');
    });

    $('.landing .bg>li').eq(0).show()

    // 일정시간 간격으로 버튼을 순차적으로 자동으로 클릭
    var c = 0;
    var slide = setInterval(timer, 2000);

    function timer() {
        c++;
        if (c == 3) c = 0;

        $('.landing .no>li').eq(c).trigger('click');
    }






    // 팝업 설정 ----------------------------------------------------
    // .buy span a를 클릭했을 때, .popUp이 떠라

    $('.buy span a').click(function (e) {
        e.preventDefault();
        $('.popUp').stop().show();
    })

    // .popUp에 span을 클릭했을 때 .popUp이 닫혀라
    $('.popUp span').click(function () {
        $('.popUp').stop().hide()
    })



    // .util .cart a를 클릭했을 때, .cart_popUp이 떠라
    $('.util .cart a').click(function (e) {
        e.preventDefault();
        $('.cart_popUp').css({ 'display': 'flex' });
    })

    // .cart_popUp.close을 클릭했을 때 .cart_popUp.close이 닫혀라
    $('.cart_popUp .close').click(function () {
        $('.cart_popUp').hide()
    })




    // 서브페이지 이미지 슬라이드 설정 -------------------------------------
    $('.slide li').click(function () {
        var i = $(this).index()
        console.log(i)

        //$('.bigImg li').css({'opacity':'1'}).stop().animate({'opacity':'0'})
        //$('.bigImg li').eq(i).css({'opacity':'0'}).stop().animate({'opacity':'1'})



        $('.bigImg li').css({ 'display': 'none' });
        $('.bigImg li').eq(i).css({ 'display': 'flex' });


        $('.bigImg li').removeClass('first')
        $(this).eq(i).addClass('first')

    })


    // 히스토리 섹션 이벤트 - ------------------------------



    $(window).scroll(function () {

        var sc = $(this).scrollTop();
        var windowh = $(window).height();
        var sectionoffset = $('.history').offset().top;
        var historyHeight = $('.history').outerHeight();
        var scrollPercent = (sc - sectionoffset) / (historyHeight - windowh);

        var landingh = $('.landing').height();
        var landinhalfh = landingh / 2;

     

        if(sc >= landinhalfh) {
            $('.cart_popUp').fadeOut()
        }



        // .history 섹션이 스크롤 이벤트
        if (sc + windowh > sectionoffset && sc < sectionoffset + historyHeight) {
            var translate1 = scrollPercent * -1000; // ul의 이동 값
            var translate2 = scrollPercent * 1000; 

            $('.history01').css('transform', 'translateY(' + (translate1 - 50) + 'px)');
            $('.history02').css('transform', 'translateY(' + (translate2 + 100) + 'px)');
        } else {
            // .history 섹션이 뷰포트에 없을 때 위치 초기화
            $('.history01').css('transform', 'translateY(-10px)');
            $('.history02').css('transform', 'translateY(0px)');
        }


        // 스크롤 했을 때, 꽃 이미지 회전 이벤트
        $('.flower1').css('transform' , 'rotate(' + sc + 'deg)');
        $('.flower2').css('transform' , 'rotate(' + (-sc) + 'deg)');



        // 스크롤 했을 때, 프로덕트 타이틀이 보여라
         if(sc >= landinhalfh){
            $('.product .title').css({'opacity':'1'})
         }







    });





    // 프로덕트 화살표 클릭 이벤트 ------------------------------------------------------------
    $('.product .right').click(function(){

        $('.pro2').css({'left':'130%'}).stop().animate({'left':'0'},900)
        $('.pro1').css({'left':'0'}).stop().animate({'left':'-130%'},900)

        $('.product .right').fadeOut();
        $('.product .left').fadeIn();

    })

    
    $('.product .left').click(function(){

        $('.pro2').css({'left':'0'}).stop().animate({'left':'100%'},900)
        $('.pro1').css({'left':'-100%'}).stop().animate({'left':'0'},900)

        $('.product .right').fadeIn();
        $('.product .left').fadeOut();

    })

    // 화살표 기본 설정
    $('.product .left').hide();
    $('.product .right').show();





    // 장바구니 설정===============================================
    // .product .txt i 를 클릭했을 때, .util ul li .cart span 수량 변경
    // .cart_popUp div h3 em 수량 변경

    var cartnum = 0;
    $('.product .slider i').click(function(e){
        e.preventDefault()
        cartnum++;

        // console.log(cartnum)
        
        $('.util .cart a').find('span').text(cartnum)
        $('.cart_popUp div').find('em').text(cartnum)


        $('.cart_add').stop().show()


        // 나의 부모 안에서 p 안에 있는 img의 태그를 출력해라
        // // shop 에 list 에 txt를 계속 누적되게 출력해라
        
        
       


        let name = $(this).parents('.txt').find('h6').text()
        let image = $(this).closest('.txt').siblings('.img').find('.bottle').html();
        console.log(name)
        
        
        // 장바구니에 list가 출력되게 하기
        $('.cart_popUp').find('.shoplist').append('<div>' + (image + name) + '</div>')
    
    
       


    })


    // remove all 을 클릭하면 수량이 사라져라
    $('.cart_popUp .remove_btn').click(function(){
        cartnum = 0;
        $('.util .cart a').find('span').text(cartnum)
        $('.cart_popUp div').find('em').text(cartnum)

        $('.cart_popUp').find('.shoplist').empty()

    })

    // 장바구니 추가 확인 팝업창 설정
    $('.cart_add .close').click(function(){
        $('.cart_add').stop().hide()


    })


    // 서브페이지 설정 ===================================
    // 장바구니 추가 설정 --------
    // .price .cart a 클릭했을 때, cart 숫자 올라가기

    $('.sub .price .cart a').click(function(e){
      e.preventDefault()
        cartnum++ ;

        $('.util .cart a').find('span').text(cartnum)
        $('.cart_popUp div').find('em').text(cartnum)

        $('.cart_add').stop().show()

        
        


        let dream = $(this).parents('.price').find('h1').text()
        let dreamimg = $('.main .product .subCon .img').find('.bottle').html()



     // 장바구니에 list가 출력되게 하기
       $('.cart_popUp').find('.shoplist').append('<div>' + (dreamimg + dream) + '</div>')


    })

  


    // 추천탭 장바구니에 수량 증가되게 하기
    $('.sub .recommend .text span a').click(function(e){
        e.preventDefault()

        cartnum++ ;

        $('.util .cart a').find('span').text(cartnum)
        $('.cart_popUp div').find('em').text(cartnum)

        $('.cart_add').stop().show()

        let recom = $(this).parents('li').find('h2').text()

        let index = $(this).closest('li').index();


        let recomimg = $('.recommend .img ul li').eq(index).find('a').html();

        // 장바구니에 list가 출력되게 하기
        $('.cart_popUp').find('.shoplist').append('<div class="cart-item">' + recomimg + recom + '</div>');

    })



    // 수량 증가
    let items = 0;
    $('.sub .price .plus').click(function(){
        items++;

        $('.sub .price').find('.number').text(items)


    })

    // 수량 감소
      
    $('.sub .price .minus').click(function(){
        if (items > 1) {
            items--;

            $('.sub .price').find('.number').text(items);
        }
    })
  
    




}) //끝 --------------------------------------------------