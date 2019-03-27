$(function() {

	$('input, textarea').focus(function(){
		$(this).siblings('p').css('opacity','1').addClass('focus');
	})
	$('input, textarea').blur(function(){
		$(this).siblings('p').css('opacity','0');
	});
	$('#faq .carousel').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		infinite: false,
		prevArrow: '<button class="slick-prev"><img src="img/prev.png"></button>',
		nextArrow: '<button class="slick-next"><img src="img/next.png"></button>',
		responsive:[
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	});
	$('#articles .carousel').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		infinite: false,
		dots: true,
		prevArrow: '<button class="slick-prev"><p>&lsaquo;</p></button>',
		nextArrow: '<button class="slick-next"><p>&rsaquo;</p></button>',
		responsive:[
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					arrows: false
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1.2,
					slidesToScroll: 1,
					arrows: false
				}
			}
		]
	});

	$('.buy').on('click', function(){
		$(this).css('opacity', 0);
		$(this).next('.calc').show();
	});
	$('.plus').click(function(){
		let newVal = parseInt($(event.target).siblings('.plus-minus').val()) + 1;
		$(event.target).siblings('.plus-minus').val(newVal)
	});
	$('.minus').click(function(){
		let newVal = parseInt($(event.target).siblings('.plus-minus').val()) - 1;
		if(parseInt($(event.target).siblings('.plus-minus').val())>1){
			$(event.target).siblings('.plus-minus').val(newVal)
		} else{
			$(this).closest('.calc').hide();
			$(this).closest(':has(.buy)').children('.buy').css('opacity', 1);
		}
	});
	$('.articles-carousel').slick({
		rows: 2,
		slidesPerRow: 2,
		infinite: false,
		dots: true,
		customPaging: function(slider, i) {
			var thumb = $(slider.$slides[i]).data();
			return '<a>'+(i+1)+'</a>';
			},
		prevArrow: '<button class="slick-prev"><p>&lsaquo;</p></button>',
		nextArrow: '<button class="slick-next"><p>&rsaquo;</p></button>',
		responsive:[
			{
				breakpoint: 992,
				settings: {
					rows: 3,
					slidesPerRow: 1,
				}
			}
		]
	});
	$('.to-the-last').on('click', function(){
		$('.articles-carousel').slick('slickGoTo', 10)
	});
	$('.show-all').on('click', function(e){
		e.preventDefault();
		$('.articles-carousel').slick('unslick');
		$('.show-all, .to-the-last').hide()
	})
	if ($(window).width() < 992){
		$('[src="img/search.png"]').on('click', function(e){
			e.stopPropagation();
			$('.navbar.articles .dropdown, .breadcrumb').hide();
			$('.navbar-dark form').show();
		});
		$(window).click(function() {
			$('.navbar-dark form').hide();
			$('.navbar.articles .dropdown, .breadcrumb').show();
		});
	}
	$('.navbar-dark form').click(function(e){
		e.stopPropagation();
	})
});
