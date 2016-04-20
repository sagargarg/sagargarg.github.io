var rangeSlider1 = function(){
	var tri1 = $('.tri1');
	var tri2 = $('.tri2');
	var tri3 = $('.tri3');
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
	var finalNumber3 = 92.5;

	var slider4 = $('.slider4');
	var range4 = $('#range4');
	var value4 = $('#value4');
	var finalNumber4 = 7;


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

	value4.each(function(){
		var value4 = $(this).prev().attr('value');
		$(this).html(value4);
	});


	setInterval(function() {
		range1.on('input', function(){
			$(this).next(value1).html(this.value);
			return finalNumber1 = this.value;
		});
		// console.log(finalNumber1);
		tri1.html(finalNumber1);

		range2.on('input', function(){
			$(this).next(value2).html(this.value);
			return finalNumber2 = this.value;
		});
		// console.log(finalNumber2);
		tri2.html(finalNumber2);

		range3.on('input', function(){
			$(this).next(value3).html(this.value);
			return finalNumber3 = this.value;
		});
		// console.log(finalNumber3);
		tri3.html(finalNumber3);

		range4.on('input', function(){
			$(this).next(value4).html(this.value);
			return finalNumber4 = this.value;
		});
		// console.log(finalNumber4);

		var bigNum4;

		if (finalNumber4 == 7) {
			letterGrade.html("A");
			bigNum4 = 93;
			// console.log("A");
		}
		else if (finalNumber4 == 6){
			letterGrade.html("A-");
			bigNum4 = 90;
			// console.log("A-");
		}
		else if (finalNumber4 == 5){
			letterGrade.html("B+");
			bigNum4 = 87;
			// console.log("B+");
		}
		else if (finalNumber4 == 4){
			letterGrade.html("B");
			bigNum4 = 83;
			// console.log("B");
		}
		else if (finalNumber4 == 3){
			letterGrade.html("B-");
			bigNum4 = 80;
			// console.log("B-");
		}
		else if (finalNumber4 == 2){
			letterGrade.html("C+");
			bigNum4 = 77;
			// console.log("C+");
		}
		else if (finalNumber4 == 1){
			letterGrade.html("C");
			bigNum4 = 73;
			// console.log("C");
		}
		else if (finalNumber4 == 0){
			letterGrade.html("C-");
			bigNum4 = 70;
			// console.log("C-");
		}
		else {
			letterGrade.html("N/A");
			bigNum4 = 100;
			// console.log("N/A");
		}

		var finalInt = (4 * bigNum4) - (+finalNumber1 + +finalNumber2 + +finalNumber3);
		// console.log(finalInt);
		var finalIntRound = finalInt.toFixed(1);
		// console.log(finalIntRound);
		finalNumber.html(finalIntRound);
	}, 50)
};

rangeSlider1();