var rangeSlider1 = function(){
	var tri1 = $('.tri1');
	var tri2 = $('.tri2');
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
	var finalNumber3 = 7;


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

		var bigNum3;

		if (finalNumber3 == 7) {
			letterGrade.html("A");
			bigNum3 = 93;
			// console.log("A");
		}
		else if (finalNumber3 == 6){
			letterGrade.html("A-");
			bigNum3 = 90;
			// console.log("A-");
		}
		else if (finalNumber3 == 5){
			letterGrade.html("B+");
			bigNum3 = 87;
			// console.log("B+");
		}
		else if (finalNumber3 == 4){
			letterGrade.html("B");
			bigNum3 = 83;
			// console.log("B");
		}
		else if (finalNumber3 == 3){
			letterGrade.html("B-");
			bigNum3 = 80;
			// console.log("B-");
		}
		else if (finalNumber3 == 2){
			letterGrade.html("C+");
			bigNum3 = 77;
			// console.log("C+");
		}
		else if (finalNumber3 == 1){
			letterGrade.html("C");
			bigNum3 = 73;
			// console.log("C");
		}
		else if (finalNumber3 == 0){
			letterGrade.html("C-");
			bigNum3 = 70;
			// console.log("C-");
		}
		else {
			letterGrade.html("N/A");
			bigNum3 = 100;
			// console.log("N/A");
		}

		var finalInt = (3 * bigNum3) - (+finalNumber1 + +finalNumber2);
		// console.log(finalInt);
		var finalIntRound = finalInt.toFixed(1);
		// console.log(finalIntRound);
		finalNumber.html(finalIntRound);
	}, 10)
};

rangeSlider1();