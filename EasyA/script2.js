var rangeSlider1 = function(){
	var letterGrade = $('.letter_grade');
	var finalNumber = $('.final_number');


	var slider1 = $('.slider1');
	var range1 = $('#range1');
	var value1 = $('#value1');
	var finalNumber1 = 94.7;

	var slider2 = $('.slider2');
	var range2 = $('#range2');
	var value2 = $('#value2');
	var finalNumber2 = 90.3;

	var slider3 = $('.slider3');
	var range3 = $('#range3');
	var value3 = $('#value3');
	var finalNumber3 = 93;


	value1.each(function(){
		var value1 = $(this).prev().attr('value');
		$(this).html(value1);
	});

	value2.each(function(){
		var value2 = $(this).prev().attr('value');
		$(this).html(value2);
	});

	value3.each(function(){
		var value3 = $(this).prev().attr('value');
		$(this).html(value3);
	});


	setInterval(function() {
		range1.on('input', function(){
			$(this).next(value1).html(this.value);
			return finalNumber1 = this.value;
		});
		// console.log(finalNumber1);

		range2.on('input', function(){
			$(this).next(value2).html(this.value);
			return finalNumber2 = this.value;
		});
		// console.log(finalNumber2);

		range3.on('input', function(){
			$(this).next(value3).html(this.value);
			return finalNumber3 = this.value;
		});
		// console.log(finalNumber3);

		if (finalNumber3 >= 93) {
			letterGrade.html("A");
			// console.log("A");
		}
		else if (finalNumber3 >= 90 && finalNumber3 < 93){
			letterGrade.html("A-");
			// console.log("A-");
		}
		else if (finalNumber3 >= 87 && finalNumber3 < 90){
			letterGrade.html("B+");
			// console.log("B+");
		}
		else if (finalNumber3 >= 83 && finalNumber3 < 87){
			letterGrade.html("B");
			// console.log("B");
		}
		else if (finalNumber3 >= 80 && finalNumber3 < 83){
			letterGrade.html("B-");
			// console.log("B-");
		}
		else if (finalNumber3 >= 77 && finalNumber3 < 80){
			letterGrade.html("C+");
			// console.log("C+");
		}
		else if (finalNumber3 >= 73 && finalNumber3 < 77){
			letterGrade.html("C");
			// console.log("C");
		}
		else if (finalNumber3 >= 70 && finalNumber3 < 73){
			letterGrade.html("C-");
			// console.log("C-");
		}

		var finalInt = (3 * finalNumber3) - (+finalNumber1 + +finalNumber2);
		console.log(finalInt);
		finalNumber.html(finalInt);
	}, 10)
};

rangeSlider1();