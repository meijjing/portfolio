/* 
JavaScript Document
main.js
 */

jQuery(document).ready(function () {

  /* 하이퍼링크 */
  $("a[href='#']").click(function (e) {
    e.preventDefault();
  });
});

// 모바일 네비
function openNav() {
  $('nav').toggleClass('show_on_mobile');
};

function closeNav() {
  $('nav').removeClass('show_on_mobile');
};

// scroll gnb
function Move(obj) {
  if ($(window).width() >= 768) {
    $('html, body').animate({
      scrollTop: $(obj).offset().top - 20
    }, 500);
  }

  if ($(window).width() < 768) {
    $('html, body').animate({
      scrollTop: $(obj).offset().top - 40
    }, 500);
    $('nav').removeClass('show_on_mobile');
  }
};


// header scroll down
$(window).scroll(function () {
  if ($(window).scrollTop() > 70) {
    $('.header').addClass('down');
  } else {
    $('.header').removeClass('down');
  }
});


//portfolio
$(function () {

  //var
  // var $list = $('#portfolio>.container>.mnu>li>a');
  // var $listImg = $('#portfolio>.container>.view>li');

  var $viewOpen = $('.viewOpen');
  var $viewClose = $('.viewClose');
  var $viewImg = $('#portfolio .portfolio_bg .portfolio_img');
  var $view = $('#portfolio .portfolio_bg');

  // $list.on('click', function (event) {
  //   event.preventDefault();
  //   nowIdx = $list.index(this);

  //   $list.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

  //   $listImg.fadeOut();
  //   $listImg.eq(nowIdx).fadeIn();
  // });
  $viewOpen.on('click', function (event) {

    event.preventDefault();
    var src = $(this).attr('href');

    $viewImg.find('a').css({
      backgroundImage: 'url(' + src + ')'
    });

    $viewImg.parent().fadeIn();
  });

  $viewClose.on('click', function (event) {
    event.preventDefault();
    $viewImg.scrollTop(0)
    $view.fadeOut();
  });

  $view.on('click', function () {
    $viewImg.scrollTop(0)
    $view.fadeOut();
  });
  //end of portfolio
});