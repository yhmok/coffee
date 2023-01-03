$(function(){
    let duration = 300;
    /**************버튼 1 ****************/
    //1행
    $('#buttons1 button:nth-child(-n+4)') //1->3, 2->2, 3->1, 4->0, 5->-1, 6 -> -2....3n
       .on('mouseenter', function(){
            $(this).stop(true).animate({
                backgroundColor: '#ae5e9b',
                color: '#fff'
            }, duration);
       })
       .on('mouseleave', function(){
            $(this).stop(true).animate({
                backgroundColor: '#fff',
                color: '#ebc000'
            }, duration);
       });
    //2행
    $('#buttons1 button:nth-child(n+5):nth-child(-n+8)')
        .on('mouseenter', function(){
            $(this).stop(true).animate({
                borderWidth: '12px',
                color: "#ae5e9b"
            }, duration);
        })
        .on('mouseleave', function(){
            $(this).stop(true).animate({
                borderWidth: '0px',
                color: "#ebc000"
            }, duration);
        }); 
    //3행
    $('#buttons1 button:nth-child(n+9)')
        .on('mouseenter', function(){
            $(this).find('>span').stop().animate({width: '100%'}, duration);
        })
        .on('mouseleave', function(){
            $(this).find('>span').stop().animate({width: '0%'}, duration);
        }); 

    let $images = $('#images p');
    //첫번째 이미지
    $images.filter(':nth-child(1)')
        .on('mouseover', function(){
            $(this).find('strong, span').stop().animate({opacity: 1}, duration);
        })
        .on('mouseout', function(){
            $(this).find('strong, span').stop().animate({opacity: 0}, duration);
        });

    /**************버튼 2 ****************/
    //buttons2의 top위치를 조절
    $('#buttons2 button').each(function(index){ //each:반복문
        let pos = index*40-40;
        $(this).css('top', pos);
    })
    .on('mouseover', function(){
        let $btn = $(this).stop(true).animate({
            backgroundColor: '#faee00',
            color: '#000'
        }, duration);
        $btn.find('img:first-child').stop(true).animate({opacity: 0}, duration);
        $btn.find('img:nth-child(2)').stop(true).animate({opacity: 1}, duration);
    })
    .on('mouseout', function(){
        let $btn = $(this).stop().animate({
            backgroundColor: '#fff',
            color: '#01b169'
        }, duration);
        $btn.find('img:first-child').stop().animate({opacity: 1}, duration);
        $btn.find('img:nth-child(2)').stop().animate({opacity: 0}, duration);
    });
    /**************이미지 ****************/
    //두번째 이미지
    $images.filter(':nth-child(2)')
    .on('mouseover', function(){
        $(this).find('strong').stop().animate({opacity: 1, left: '0%'}, duration);
        $(this).find('span').stop().animate({opacity: 1}, duration);
    })
    .on('mouseout', function(){
        $(this).find('strong').stop().animate({opacity: 0, left: '-200%'}, duration);
        $(this).find('span').stop().animate({opacity: 0}, duration);
    });

    //세번째 이미지
    $images.filter(':nth-child(3)')
    .on('mouseover', function(){
        $(this).find('strong').stop().animate({bottom: '0px'}, duration);
        $(this).find('span').stop().animate({opacity: 1}, duration);
        $(this).find('img').stop().animate({top: '-20px'}, duration*1.3);
    })
    .on('mouseout', function(){
        $(this).find('strong').stop().animate({bottom: '-80px'}, duration);
        $(this).find('span').stop().animate({opacity: 0}, duration);
        $(this).find('img').stop().animate({top: '0px'}, duration*1.3);
    });

    /************ aside  *****************/
    let $aside = $('.page-main > aside');
    let $asideButton = $aside.find('button')
                    .on('click', function(){
                        $aside.toggleClass('open');
                        if($aside.hasClass('open')){ //hasclass:class여부 확인
                            $aside.stop().animate({left: '-70px'}, duration, 'easeOutBack');
                            $asideButton.find('img').attr('src', 'img/btn_close.png');
                        } else {
                            $aside.stop().animate({left: '-350px'}, duration, 'easeInBack');
                            $asideButton.find('img').attr('src', 'img/btn_open.png');
                        }
                    });
       
});