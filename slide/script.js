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

// var rangeSlider = function(){
// 	var slider = $('.range-slider');
// 	var slider1 = $('.slider1');
// 	var slider2 = $('.slider2');
// 	var slider3 = $('.slider3');
// 	var range = $('.range-slider_range');
// 	var value = $('.range-slider_value');
// 	var finalNumber = $('.final_number');
// 	var array = [94.7, 90.2, 93];
		
// 	slider.each(function(){
// 		value.each(function(){
// 			var value = $(this).prev().attr('value');
// 			$(this).html(value);

// 			// array.push(value);
// 		});

// 		range.on('input', function(){
// 			$(this).next(value).html(this.value);

// 			console.log(slider1);
// 			console.log(slider1.selector);
// 			console.log(slider2.selector);
// 			if (slider1.selector == ".slider1"){
// 				array[0] = this.value;
// 				console.log("This worked 1");
// 			}
// 			if (slider2.selector == ".slider2"){
// 				array[1] = this.value;
// 				console.log("This worked 2");
// 			}
// 			console.log(array);
// 		});
// 	});
// 	setInterval(function() {
// 		console.log(array)
// 		var finalInt = (array[2]*3) - array[0] - array[1];
// 		console.log(finalInt);
// 		finalNumber.html(finalInt);
// 		// add the values
// 		// set the html of a p element as the sum of the values
// 	}, 1000)
// };

// rangeSlider();