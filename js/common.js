// JavaScript Document

var mySwiper = new Swiper('.forex-slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 2000,
  effect: 'slide',
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  }
});

/*--Strategy search--*/
$(function() {
  $('.strategy .btn-search').click(function() {
    var $searchBox = $('.strategy');
    var $searchTable = $('.strategy-table');
    var searchVal = $('.strategy input[type=search]').val();

    if (searchVal === '') {
      $searchBox.removeClass('active');
      $searchTable.removeClass('active');
    } else {
      $searchBox.addClass('active');
      $searchTable.addClass('active');
    }
  })
});

/*--trategy pagination--*/
$(function() {
  $('.strategy-table .pagination-block .item').click(function() {
    var items = $('.item');
    console.log(items);
    for (var i= 0; i < items.length; i++) {
      $(items[i]).removeClass('active');
    }

    $(this).addClass('active');
  })
});

// Change language flag
$(function(){

  $('.lang-select').click(function() {
    var list = $(this).find('.lang-list');

    if ( !($(list).hasClass('open')) ) {
      $(list).addClass('open');
    } else {
      $(list).removeClass('open');
    }

  })

  $('.lang-list li').click(function() {

    var flag = $(this).find('.flag-option').css('background-image');
    var lang = $(this).find('.lang-option').text();

    $('.lang-choose').text(lang);
    $('.flag').css('background-image', flag);

  })

});

/*---Formstyler--*/
$(function() {

    $('.input_check, .inp_radio, .inp_checkb, .select_drop, .select_drop2').styler({
    });
});


$(document).ready(function(){

$('.have_sub').append('<span class="open_sub">');

$("body").on("click",".to_link, .to_top", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;

		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1000);
	});


 $('.have_sub_f').click(function () {
     $(this).parents('.wr_have').find('.sub_filtr').slideToggle('400');
     $(this).parents('.wr_have').find('.have_sub_f').toggleClass('active');

});

 $('.open_sub').click(function () {
     $(this).parents('.have_sub').find('.sub-menu').slideToggle('400');
     $(this).parents('.have_sub').find('.open_sub').toggleClass('active');

});

 $('.open_body_txt').click(function () {
     $(this).parents('.ex_item_body').find('.main_body_txt').slideToggle('400');
     $(this).parents('.ex_item_body').find('.open_body_txt').toggleClass('active');
    $(this).parents('.ex_item_body').find('.close_ex').toggleClass('active');
});


 $('.close_ex').click(function () {
     $(this).parents('.ex_item_body').find('.main_body_txt').slideToggle('400');
     $(this).parents('.ex_item_body').find('.open_body_txt').toggleClass('active');
    $(this).parents('.ex_item_body').find('.close_ex').toggleClass('active');
});

$('.active_op2').click(function () {
     $(this).parents('.swiper-slide').find('.hide2').addClass('hide');
    $(this).parents('.swiper-slide').find('.active_op2').removeClass('active').find('.active_op1').removeClass('active');
     $(this).parents('.swiper-slide').find('.active_op1').removeClass('active');
});

 $('.active_op1').click(function () {
     $(this).parents('.swiper-slide').find('.hide').removeClass('hide').addClass('hide2');
    $(this).parents('.swiper-slide').find('.active_op1').addClass('active');
     $(this).parents('.swiper-slide').find('.active_op2').addClass('active');
});

 $('.more_hist').click(function () {
     $(this).parents('.wrap_body_line_item').find('.body_line_item2').removeClass('hide');
     $(this).parents('.wrap_body_line_item').find('.more_hist').toggleClass('active');

});

 $('.more_hist').click(function () {
     $(this).parents('.wrap_choise_ticket').find('.hide').slideToggle('400');
     $(this).parents('.wrap_choise_ticket').find('.more_hist').toggleClass('active');

});


/*---mobileMENU---*/

var menu_active = 0;
$('.pull').click(function(){
  if (!$('.wrap_menu').hasClass('active')) {
    $('.wrapper').addClass('active');
	 $('.pull').addClass('active');
	$('.wrap_menu').addClass('active');


    menu_active = 1;
  } else{
    $('.wrap_menu').removeClass('active');
	   $('.pull').removeClass('active');
	 $('.wrapper').removeClass('active');


    menu_active = 0;
  }
});
$('.closed_menu').click(function(){
  if (menu_active == 1) {
    $('.wrap_menu').removeClass('active');
	 $('.wrapper').removeClass('active');
	$('.pull').removeClass('active');


    menu_active = 0;
  }
});
$('.to_link').click(function(){
  if (menu_active == 1) {
    $('.wrap_menu').removeClass('active');
	 $('.wrapper').removeClass('active');
	$('.pull').removeClass('active');


    menu_active = 0;
  }
});
$('.close').click(function(){
  if (menu_active == 1) {
    $('.wrap_menu').removeClass('active');
	 $('.wrapper').removeClass('active');
	$('.pull').removeClass('active');


    menu_active = 0;
  }
});


$('.filtr_mob').click(function(){
  if (!$('.wr_filtr').hasClass('active')) {
    $('.wrapper').addClass('active');
	 $('.filtr_mob').addClass('active');
	$('.wr_filtr').addClass('active');


    menu_active2 = 1;
  } else{
    $('.wr_filtr').removeClass('active');
	   $('.filtr_mob').removeClass('active');
	 $('.wrapper').removeClass('active');


    menu_active2 = 0;
  }
});
$('.closed_menu').click(function(){
  if (menu_active2 == 1) {
    $('.wr_filtr').removeClass('active');
	 $('.wrapper').removeClass('active');
	$('.filtr_mob').removeClass('active');


    menu_active2 = 0;
  }
});
$('.filtr_close').click(function(){
  if (menu_active2 == 1) {
    $('.wr_filtr').removeClass('active');
	 $('.wrapper').removeClass('active');
	$('.filtr_mob').removeClass('active');


    menu_active2 = 0;
  }
});


/*---heightblock---*/
function setEqualHeight(columns){
	var tallestcolumn=0;
	columns.each(
		function(){
			currentHeight=$(this).height();
			if(currentHeight>tallestcolumn) {
				tallestcolumn=currentHeight;
			}
		}
	);
	columns.height(tallestcolumn);
}

$(window).resize(function() {
	$('.pre_img').css('height','auto'); //solve for all you browser stretchers out there!
        setEqualHeight($('.pre_img'));

});
$(window).load(function() {
	setEqualHeight($(".pre_img"));
});

$(window).resize(function() {
	$('.brand_img').css('height','auto'); //solve for all you browser stretchers out there!
        setEqualHeight($('.brand_img'));

});
$(window).load(function() {
	setEqualHeight($(".brand_img"));
});

$(window).resize(function() {
	$('.filtr_list_ic').css('height','auto'); //solve for all you browser stretchers out there!
        setEqualHeight($('.filtr_list_ic'));

});
$(window).load(function() {
	setEqualHeight($(".filtr_list_ic"));
});

$(window).resize(function() {
	$('.h_comp_img').css('height','auto'); //solve for all you browser stretchers out there!
        setEqualHeight($('.h_comp_img'));

});
$(window).load(function() {
	setEqualHeight($(".h_comp_img"));
});

$(window).resize(function() {
	$('.list_ticket').css('height','auto'); //solve for all you browser stretchers out there!
        setEqualHeight($('.list_ticket'));

});
$(window).load(function() {
	setEqualHeight($(".list_ticket"));
});

/*--swiper--*/



var tileSlider2 = $('.main_slider_in');
tileSlider2.each(function(){
    var mySwiper = new Swiper(this, {

        loop:true,
        slidesPerView: 1,
      spaceBetween: 0,
       speed:1200,
         navigation: {
        nextEl:  $(this).parent().find('.ar_slide_next')[0],
        prevEl: $(this).parent().find('.ar_slide_prev')[0],
      },
        pagination: {
        el: $(this).parent().find('.pag_item')[0],
       clickable: true,

      }




    });
});

var tileSlider3 = $('.main_slider_in2');
tileSlider3.each(function(){
    var mySwiper = new Swiper(this, {

        loop:true,
        slidesPerView: 3,
      spaceBetween: 0,
       speed:1200,
         navigation: {
        nextEl:  $(this).parent().find('.ar_slide_next2')[0],
        prevEl: $(this).parent().find('.ar_slide_prev2')[0],
      },
        pagination: {
        el: $(this).parent().find('.pag_item2')[0],
       clickable: true,

      },
        breakpoints: {
        1099: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        899: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        767: {
          slidesPerView: 1,
          spaceBetween:0,
        }
       }




    });
});

var typeslider = $('.tickets_slider');
typeslider.each(function(){
    var mySwiper = new Swiper(this, {
        speed:1500,
        loop:true,
        slidesPerView: 1,
      spaceBetween: 0,
        allowTouchMove:false,

        navigation: {
        nextEl:  $(this).parent().find('.ar_it2_next')[0],
        prevEl: $(this).parent().find('.ar_it2_prev')[0],
      }





    });
});

/*--mask--*/
$(".inp_phone").mask("+7 (ppp) ppp-pp-pp");


/*--fancybox--*/

$('.open_fancy').fancybox({


});

 $('.tabbing_cat').mTab({
		 navigation: ".tabNav_cat"
		,container: ".tabContainer_cat"
		,activeTab: 1
		,activeClass: "active"
		,scrollOffset: true
		,accordScreen: 667
		,toggleClose: true
		,animation: false
		,openWithUrl: true
		,callbackonclick:  function() {  }
		,callback: function() {  }
	});


});

;
$(function(){
/* выбор города */
$('.delivery_list').click(function(){
$(this).parents('.delivery_block').find(".cities_list").slideToggle('fast');
});
$('ul.cities_list li').click(function(){
var tx = $(this).html();
var tv = $(this).attr('alt');
$(this).parents('.delivery_block').find(".cities_list").slideUp('fast');
$(this).parents('.delivery_block').find(".delivery_list span").html(tx).addClass('active');
$(this).parents('.delivery_block').find(".delivery_text").html(tv);
});
});

var HeaderTop = $('.menu').offset().top;

$(window).scroll(function(){
		if( $(window).scrollTop() > 800 ) {
				$('.to_top').addClass('active');

					} else {
							$('.to_top').removeClass('active');
					}
			});



// tabs
(function($) {
    $(function() {
        $('ul.tabs_caption').on('click', 'li:not(.active)', function() {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.wrap_tabs').find('div.tabs_content').removeClass('active').eq($(this).index()).addClass('active');
        });
        var tabIndex = window.location.hash.replace('#tab','')-1;
        if (tabIndex != -1) $('ul.tabs_caption li').eq(tabIndex).click();

    });
})(jQuery);