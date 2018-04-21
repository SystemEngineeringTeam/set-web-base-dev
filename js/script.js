$(function () {
  var flag = 1;

  var selectFlag = 1;
  if (($(location).attr('pathname') === '/member/index.html') ||
    ($(location).attr('pathname') === '/member/')) {
    flag = 2;
    $('#page002').css('display', 'block');
  }

  $('#area-myname').hover(
    function (e) {
      $(this).css('background', 'rgba(255,255,255,0.9)');
      $('#title-text').css('color', 'rgb(255,87,34)');
    },
    function (e) {
      $(this).css('background', 'rgba(255,87,34,0.9)');
      $('#title-text').css('color', 'rgb(255,255,255)');
    }
  );

  $('#area-myname').on('click', function () {
    if (($(location).attr('pathname') === '/index.html') ||
      ($(location).attr('pathname') === '/')) {
      flag = 1;
      $('#page001').css('display', 'block');
      $('#page002').css('display', 'none');
      $('#page004').css('display', 'none');
      $('#page005').css('display', 'none');
      $('#page006').css('display', 'none');
      window.scrollTo(0, 0);
      contentLinkReset();
    } else {
      window.open('/', "myWindow");
    }
  });

  $('#area-twitter').hover(
    function (e) {
      $(this).css('background', 'rgba(255,255,255,0.9)');
      $('#header-twitter').css('color', 'rgb(29,161,242)');
    },
    function (e) {
      $(this).css('background', 'rgba(29,161,242,0.9)');
      $('#header-twitter').css('color', 'rgb(255,255,255)');
    }
  );

  $('#area-twitter').on('click', function () {
    window.open('https://twitter.com/set_official');
    $(this).css('background', 'rgba(29,161,242,0.9)');
    $('#header-twitter').css('color', 'rgb(255,255,255)');
  });

  $('#area-github').hover(
    function (e) {
      $(this).css('background', 'rgba(255,255,255,0.9)');
      $('#header-github').css('color', 'rgb(36,41,46)');
    },
    function (e) {
      $(this).css('background', 'rgba(36,41,46,0.9)');
      $('#header-github').css('color', 'rgb(255,255,255)');
    }
  );

  $('#area-github').on('click', function () {
    window.open('https://github.com/SystemEngineeringTeam');
    $(this).css('background', 'rgba(36,41,46,0.9)');
    $('#header-github').css('color', 'rgb(255,255,255)');
  });

  $('#area-blog').hover(
    function (e) {
      $(this).css('background', 'rgba(255,255,255,0.9)');
      $('#header-blog').css('color', 'rgb(224,67,54)');
    },
    function (e) {
      $(this).css('background', 'rgba(224,67,54,0.9)');
      $('#header-blog').css('color', 'rgb(255,255,255)');
    }
  );

  $('#area-blog').on('click', function () {
    window.open('/blog');
    $(this).css('background', 'rgba(224,67,54,0.9)');
    $('#header-github').css('color', 'rgb(255,255,255)');
  });

  $('#area-portfolio').hover(
    function (e) {
      $(this).css('background', 'rgba(255,255,255,0.9)');
      $('#header-portfolio').css('color', 'rgb(0,121,107)');
    },
    function (e) {
      if (flag != 6) {
        $(this).css('background', 'rgba(0,121,107,0.9)');
        $('#header-portfolio').css('color', 'rgb(255,255,255)');
      }
    }
  );

  $('#area-bbs').hover(
    function (e) {
      $(this).css('background', 'rgba(255,255,255,0.9)');
      $('#header-bbs').css('color', 'rgb(175,180,43)');
    },
    function (e) {
      $(this).css('background', 'rgba(175,180,43,0.9)');
      $('#header-bbs').css('color', 'rgb(255,255,255)');
    }
  );

  $('#area-bbs').on('click', function () {
    window.open('/bbs');
    $(this).css('background', 'rgba(175,180,43,0.9)');
    $('#header-bbs').css('color', 'rgb(255,255,255)');
  });

  $('#area-information-title').hover(
    function (e) {
      $(this).css('background', '#fff');
      $('#text-information-title').css('color', '#F44336');
    },
    function (e) {
      $(this).css('background', '#F44336');
      $('#text-information-title').css('color', '#fff');
    }
  );

  $('.area-information').hover(
    function (e) {
      $(this).css('background', '#FFF176');
    },
    function (e) {
      $(this).css('background', '#F0F0F0');
    }
  );

  $('.content-link').hover(
    function (e) {
      $(this).css('background', 'rgba(250,250,250,0.9)');
      $(this).children('p').css('color', 'rgb(230, 74, 25)');
    },
    function (e) {
      $(this).css('background', 'rgba(255,87,34,0.9)');
      $(this).children('p').css('color', 'rgb(255, 255, 255)');

      if (flag == 2) {
        $('#content-link-about').css('background', 'rgba(250,250,250,0.9)');
        $('#content-link-about').children('p').css('color', 'rgb(230, 74, 25)');
      } else if (flag == 3) {
        console.log("error");
      } else if (flag == 4) {
        $('#content-link-member').css('background', 'rgba(250,250,250,0.9)');
        $('#content-link-member').children('p').css('color', 'rgb(230, 74, 25)');
      } else if (flag == 5) {
        $('#content-link-ob').css('background', 'rgba(250,250,250,0.9)');
        $('#content-link-ob').children('p').css('color', 'rgb(230, 74, 25)');
      }
    }
  );

  $('#content-link-about').on('click', function () {
    flag = 2;
    $('#page001').css('display', 'none');
    $('#page002').css('display', 'block');
    $('#page004').css('display', 'none');
    $('#page005').css('display', 'none');
    $('#page006').css('display', 'none');
    window.scrollTo(0, 0);
    contentLinkReset();
    $(this).css('background', 'rgba(250,250,250,0.9)');
    $(this).children('p').css('color', 'rgb(230, 74, 25)');
  });

  $('#content-link-member').on('click', function () {
    flag = 4;
    $('#page001').css('display', 'none');
    $('#page002').css('display', 'none');
    $('#page004').css('display', 'block');
    $('#page005').css('display', 'none');
    $('#page006').css('display', 'none');
    window.scrollTo(0, 0);
    contentLinkReset();
    $(this).css('background', 'rgba(250,250,250,0.9)');
    $(this).children('p').css('color', 'rgb(230, 74, 25)');
  });

  $('#content-link-ob').on('click', function () {
    flag = 5;
    $('#page001').css('display', 'none');
    $('#page002').css('display', 'none');
    $('#page004').css('display', 'none');
    $('#page005').css('display', 'block');
    $('#page006').css('display', 'none');
    window.scrollTo(0, 0);
    contentLinkReset();
    $(this).css('background', 'rgba(250,250,250,0.9)');
    $(this).children('p').css('color', 'rgb(230, 74, 25)');
  });

  $('#area-button-member').hover(
    function (e) {
      $(this).css('background', '#FFFFFF');
      $('#text-button-member').css('color', '#E64A19');
    },
    function (e) {
      $(this).css('background', '#E64A19');
      $('#text-button-member').css('color', '#FFFFFF');
    }
  );

  $('#area-button-member').hover(
    function (e) {
      $(this).css('background', '#FFFFFF');
      $('#text-button-member').css('color', '#E64A19');
    },
    function (e) {
      $(this).css('background', '#E64A19');
      $('#text-button-member').css('color', '#FFFFFF');
    }
  );

  $('.area-content-portfolio').hover(
    function (e) {
      $(this).css('background', '#FFFFFF');
      $(this).children('p').css('color', '#E64A19');
    },
    function (e) {
      $(this).css('background', '#E64A19');
      $(this).children('p').css('color', '#FFFFFF');
    }
  );

  $('#area-content-portfolio-001').on('click', function () {
    window.open('/koukaten2016');
    $(this).css('background', 'rgba(230, 74, 25, 0.9)');
    $('#header-github').css('color', 'rgb(255,255,255)');
  });

  $('#area-portfolio').on('click', function () {
    flag = 6;
    $('#page001').css('display', 'none');
    $('#page002').css('display', 'none');
    $('#page004').css('display', 'none');
    $('#page005').css('display', 'none');
    $('#page006').css('display', 'block');
    window.scrollTo(0, 0);
    contentLinkReset();
    $(this).css('background', 'rgba(250,250,250,0.9)');
    $(this).children('p').css('color', 'rgb(0,121, 107)');
  });
});

$('#area-information-002').on('click', function () {
  window.open('/koukaten2017');
});
$('#area-content-portfolio-002').on('click', function () {
  window.open('/koukaten2017');
  $(this).css('background', 'rgba(230, 74, 25, 0.9)');
  $('#header-github').css('color', 'rgb(255,255,255)');
});

$('#area-button-member').on('click', function () {
  window.open('/member');
});

function contentLinkReset() {
  $('.content-link').css('background', 'rgba(255,87,34,0.9)');
  $('.content-link').children('p').css('color', 'rgb(255, 255, 255)');
  $('#area-portfolio').css('background', 'rgba(0,121,107,0.9)');
  $('#header-portfolio').css('color', 'rgb(255,255,255)');
}
