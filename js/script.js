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
        $('#page004').css('display', 'none');
        $('#page005').css('display', 'none');
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
                console.log("error");
            } else if (flag == 4) {
                $('#content-link-member').css('background', 'rgba(250,250,250,0.9)');
                $('#content-link-member').children('p').css('color', 'rgb(255, 87, 34)');                
            } else if (flag == 5) {
                $('#content-link-ob').css('background', 'rgba(250,250,250,0.9)');
                $('#content-link-ob').children('p').css('color', 'rgb(255, 87, 34)');                
            }
        }
    );

    $('#content-link-about').on('click', function () {
        flag = 2;
        $('#page001').css('display', 'none');
        $('#page002').css('display', 'block');
        $('#page004').css('display', 'none');
        $('#page005').css('display', 'none');            
        window.scrollTo(0, 0);
        contentLinkReset();
        $(this).css('background', 'rgba(250,250,250,0.9)');
        $(this).children('p').css('color', 'rgb(255, 87, 34)');
    });

    $('#content-link-member').on('click', function () {
        flag = 4;
        $('#page001').css('display', 'none');
        $('#page002').css('display', 'none');
        $('#page004').css('display', 'block');
        $('#page005').css('display', 'none');                
        window.scrollTo(0, 0);        
        contentLinkReset();        
        $(this).css('background', 'rgba(250,250,250,0.9)');
        $(this).children('p').css('color', 'rgb(255, 87, 34)');
    });

    $('#content-link-ob').on('click', function () {
        flag = 5;
        $('#page001').css('display', 'none');
        $('#page002').css('display', 'none');
        $('#page004').css('display', 'none');
        $('#page005').css('display', 'block');                
        window.scrollTo(0, 0);        
        contentLinkReset();        
        $(this).css('background', 'rgba(250,250,250,0.9)');
        $(this).children('p').css('color', 'rgb(255, 87, 34)');
    });

    $('#area-button-member').hover(
        function(e) {
            $(this).css('background', '#FFFFFF');
            $('#text-button-member').css('color', '#FF5722');
        },
        function(e) {
            $(this).css('background', '#FF5722');
            $('#text-button-member').css('color', '#FFFFFF');
        }
    );
});

function contentLinkReset() {
    $('.content-link').css('background', 'rgba(255,87,34,0.9)');
    $('.content-link').children('p').css('color', 'rgb(255, 255, 255)');
}