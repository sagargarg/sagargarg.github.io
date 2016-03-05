var rangeSlider = function(){
	var slider = $('.range-slider');
	var range = $('.range-slider_range');
	var value = $('.range-slider_value');
		
	slider.each(function(){
		// count++;
		value.each(function(){
			var value = $(this).prev().attr('value');
			$(this).html(value);
		});

		range.on('input', function(){
			$(this).next(value).html(this.value);
		});
	});
};

rangeSlider();