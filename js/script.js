$(function() {
    var flag = 1;    
    
    $('#area-myname').hover(
        function(e) {
            $(this).css('background', 'rgba(255,255,255,0.9)');
            $('#title-text').css('color', 'rgb(255,87,34)');
        },
        function(e) {
            $(this).css('background', 'rgba(255,87,34,0.9)');
            $('#title-text').css('color', 'rgb(255,255,255)');
        }
    );

    $('#area-myname').on('click', function () {
        flag = 1;
        $('#page001').css('display', 'block');
        $('#page002').css('display', 'none');
        $('#page003').css('display', 'none');
        window.scrollTo(0, 0);                
        contentLinkReset();
    });

    $('#area-twitter').hover(
        function(e) {
            $(this).css('background', 'rgba(255,255,255,0.9)');
            $('#header-twitter').css('color', 'rgb(29,161,242)');
        },
        function(e) {
            $(this).css('background', 'rgba(29,161,242,0.9)');
            $('#header-twitter').css('color', 'rgb(255,255,255)');
        }
    );

    $('#area-twitter').on('click', function() {
        window.open('https://twitter.com/set_official');
        $(this).css('background', 'rgba(29,161,242,0.9)');
        $('#header-twitter').css('color', 'rgb(255,255,255)');
    });

    $('#area-github').hover(
        function(e) {
            $(this).css('background', 'rgba(255,255,255,0.9)');
            $('#header-github').css('color', 'rgb(36,41,46)');
        },
        function(e) {
            $(this).css('background', 'rgba(36,41,46,0.9)');
            $('#header-github').css('color', 'rgb(255,255,255)');
        }
    );

    $('#area-github').on('click', function() {
        window.open('https://github.com/SystemEngineeringTeam');
        $(this).css('background', 'rgba(36,41,46,0.9)');
        $('#header-github').css('color', 'rgb(255,255,255)');
    });

    $('#area-blog').hover(
        function(e) {
            $(this).css('background', 'rgba(255,255,255,0.9)');
            $('#header-blog').css('color', 'rgb(175,180,43)');
        },
        function(e) {
            $(this).css('background', 'rgba(175,180,43,0.9)');
            $('#header-blog').css('color', 'rgb(255,255,255)');
        }
    );

    $('#area-product').hover(
        function(e) {
            $(this).css('background', 'rgba(255,255,255,0.9)');
            $('#header-product').css('color', 'rgb(0,121,107)');
        },
        function(e) {
            $(this).css('background', 'rgba(0,121,107,0.9)');
            $('#header-product').css('color', 'rgb(255,255,255)');
        }
    );

    $('#area-infomation-title').hover(
        function(e) {
            $(this).css('background', '#fff');
            $('#text-infomation-title').css('color', '#F44336');
        },
        function(e) {
            $(this).css('background', '#F44336');
            $('#text-infomation-title').css('color', '#fff');
        }
    );

    $('.area-infomation').hover(
        function(e) {
            $(this).css('background', '#FFF176');
        },
        function(e) {
            $(this).css('background', '#F0F0F0');
        }
    );

    $('.content-link').hover(
        function(e) {
            $(this).css('background', 'rgba(250,250,250,0.9)');
            $(this).children('p').css('color', 'rgb(255, 87, 34)');
        },
        function(e) {
            $(this).css('background', 'rgba(255,87,34,0.9)');
            $(this).children('p').css('color', 'rgb(255, 255, 255)');

            if (flag == 2) {
                $('#content-link-about').css('background', 'rgba(250,250,250,0.9)');
                $('#content-link-about').children('p').css('color', 'rgb(255, 87, 34)');
            } else if (flag == 3) {
                $('#content-link-new').css('background', 'rgba(250,250,250,0.9)');
                $('#content-link-new').children('p').css('color', 'rgb(255, 87, 34)');
            }
        }
    );

    $('#content-link-about').on('click', function () {
        flag = 2;
        $('#page001').css('display', 'none');
        $('#page002').css('display', 'block');
        $('#page003').css('display', 'none');
        window.scrollTo(0, 0);
        contentLinkReset();
        $(this).css('background', 'rgba(250,250,250,0.9)');
        $(this).children('p').css('color', 'rgb(255, 87, 34)');
    });

    $('#content-link-new').on('click', function () {
        flag = 3;
        $('#page001').css('display', 'none');
        $('#page002').css('display', 'none');
        $('#page003').css('display', 'block');
        window.scrollTo(0, 0);        
        contentLinkReset();        
        $(this).css('background', 'rgba(250,250,250,0.9)');
        $(this).children('p').css('color', 'rgb(255, 87, 34)');
    });

    $('#area-page003-title-sub').on('click', function () {
        window.open('https://www.amazon.co.jp/%E3%81%BF%E3%81%AA%E3%81%BF%E3%81%91-%E3%82%B3%E3%83%9F%E3%83%83%E3%82%AF-1-14%E5%B7%BB%E3%82%BB%E3%83%83%E3%83%88-%E3%83%A4%E3%83%B3%E3%83%9E%E3%82%ACKC%E3%82%B9%E3%83%9A%E3%82%B7%E3%83%A3%E3%83%AB-%E3%82%B3%E3%83%8F%E3%83%AB/dp/B01EIWC8ZK/ref=sr_1_4?ie=UTF8&qid=1489122963&sr=8-4&keywords=%E3%81%BF%E3%81%AA%E3%81%BF%E3%81%91');
    });
});

function contentLinkReset() {
    $('.content-link').css('background', 'rgba(255,87,34,0.9)');
    $('.content-link').children('p').css('color', 'rgb(255, 255, 255)');
}