"use strict";

var FUNCTION = function () {
  var homeSlider = function homeSlider() {
    $('.home__slider-list').owlCarousel({
      margin: 0,
      loop: true,
      items: 1,
      nav: true,
      dots: false
    });
  };

  var searchForm = function searchForm() {
    $(".header-search").click(function (e) {
      e.preventDefault();
      $(".search-form").addClass('open');
    });
    $('.close-btn').click(function () {
      $(".search-form").removeClass('open');
    }); //

    $(".header-bar-btn").click(function (e) {
      e.preventDefault();
      $(".sidebar__right").addClass('open');
    });
    $('.close-btn').click(function () {
      $(".sidebar__right").removeClass('open');
    });
  };

  var backTop = function backTop() {
    var btn = $('#backtop');
    $(window).scroll(function () {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });
    btn.on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, '300');
    });
  };

  var fixedHeader = function fixedHeader() {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 800) {
        $('.header__main').addClass('fixed-header');
      } else {
        $('.header__main').removeClass('fixed-header');
      }
    });
  };

  var menuMobile = function menuMobile() {
    $(window).ready(function () {
      $('.menu-btn').click(function () {
        $('.menu-mb-items').slideToggle();
        $(this).parent().removeClass('active');
        $(".container").children().siblings().toggleClass('active');
        return false;
      });
    });
  };

  var widthContent = function widthContent() {
    (function ($) {
      var $window = $(window),
          $wrapContent = $('.wrap-content');
      $window.resize(function resize() {
        if ($window.width() <= 991) {
          return $wrapContent.addClass('wrap-content-item');
        } else {
          $wrapContent.removeClass('wrap-content-item');
        }
      }).trigger('resize');
    })(jQuery);
  };

  var relatedNews = function relatedNews() {
    $('.related__news-list').owlCarousel({
      loop: true,
      margin: 20,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 3
        }
      }
    });
  };

  return {
    _: function _() {
      homeSlider();
      searchForm();
      backTop();
      fixedHeader();
      menuMobile();
      widthContent();
      relatedNews();
    }
  };
}();

$(function () {
  FUNCTION._();
}); //tab

function openTab(evt, tabContent) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-content");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tab-link");

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" current", "");
  }

  document.getElementById(tabContent).style.display = "block";
  evt.currentTarget.className += " current";
}

$(".defaut-btn").click(function (event) {
  event.preventDefault();
});