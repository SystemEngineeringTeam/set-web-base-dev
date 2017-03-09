$(function() {
    var flag = 1;

    $('#area-myname').hover(
        function(e) {
            $(this).css('background', 'rgba(255,255,255,0.8)');
            $('#title-text').css('color', 'rgb(255,87,34)');
        },
        function(e) {
            $(this).css('background', 'rgba(255,87,34,0.8)');
            $('#title-text').css('color', 'rgb(255,255,255)');
        }
    );

    $('#area-twitter').hover(
        function(e) {
            $(this).css('background', 'rgba(255,255,255,0.8)');
            $('#header-twitter').css('color', 'rgb(29,161,242)');
        },
        function(e) {
            $(this).css('background', 'rgba(29,161,242,0.8)');
            $('#header-twitter').css('color', 'rgb(255,255,255)');
        }
    );

    $('#area-twitter').on('click', function() {
        window.open('https://twitter.com/set_official');
        $(this).css('background', 'rgba(29,161,242,0.8)');
        $('#header-twitter').css('color', 'rgb(255,255,255)');
    });

    $('#area-github').hover(
        function(e) {
            $(this).css('background', 'rgba(255,255,255,0.8)');
            $('#header-github').css('color', 'rgb(36,41,46)');
        },
        function(e) {
            $(this).css('background', 'rgba(36,41,46,0.8)');
            $('#header-github').css('color', 'rgb(255,255,255)');
        }
    );

    $('#area-github').on('click', function() {
        window.open('https://github.com/SystemEngineeringTeam');
        $(this).css('background', 'rgba(36,41,46,0.8)');
        $('#header-github').css('color', 'rgb(255,255,255)');
    });

    $('#area-blog').hover(
        function(e) {
            $(this).css('background', 'rgba(255,255,255,0.8)');
            $('#header-blog').css('color', 'rgb(175,180,43)');
        },
        function(e) {
            $(this).css('background', 'rgba(175,180,43,0.8)');
            $('#header-blog').css('color', 'rgb(255,255,255)');
        }
    );

    $('#area-product').hover(
        function(e) {
            $(this).css('background', 'rgba(255,255,255,0.8)');
            $('#header-product').css('color', 'rgb(0,121,107)');
        },
        function(e) {
            $(this).css('background', 'rgba(0,121,107,0.8)');
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
            $(this).css('background', 'rgba(250,250,250,0.8)');
            $(this).children('p').css('color', 'rgb(255, 87, 34)');
        },
        function(e) {
            $(this).css('background', 'rgba(255,87,34,0.8)');
            $(this).children('p').css('color', 'rgb(255, 255, 255)');
        }
    );
});
