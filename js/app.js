_app = function(){
	return {
		sliderResize:function(){
			var sHeadW = $('.slide-head').width();
			var w = window.innerWidth;
			var wCenter = $('header .wrapper').width()/2;
			var pos = (w/2-wCenter);
			$('.swiper-pagination').css('left',wCenter-$('.swiper-pagination').width()/2+'px');
			$('.slide-head').css('left',pos+'px');
		}

	}
}
$(document).ready(function(){
	_app().sliderResize();
});