var rangeSlider = function(){
	var range = $('.range-slider_range');
	var value = $('.range-slider_value');
		
	value.each(function(){
		var value = $(this).prev().attr('value');
		$(this).html(value);
	});

	range.on('input', function(){
		$(this).next(value).html(this.value);
	});
};

rangeSlider();