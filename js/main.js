"use strict";

$(document).ready(function(){
	let append = true;
	let flag = 0;

	//click numbers
	$('.keys button').on('click', function(){
		//take value of keys button 
		let value = $(this).val();

		//not take 0 as the first number because js will understand as Octal number
		if($('#calculation').text() == "" && value == 0){
			value = "";
		}

		//return value as random if click button random
		if(value == "random"){
			do{
				value = Math.floor(Math.random() * 9); 
			}
			while($('#calculation').text() == "" && value == 0) //not take random 0 as the first number
			
		}

		//delete old calculation
		if(flag === 1){
			$('#calculation').text("");
		}

		//set flag so user can keep append numbers
		flag = 0;

		//append numbers
		$('#calculation').append(value);
	});

	//click arithmetic operators
	$('.func button').on('click', function(){
		let value = $(this).val();
		//set flag so user can add numbers normally
		flag = 0;
		$('#calculation').append(value);
	});

	//click equal
	$('button[name="equals"]').on('click', function(){
		//take the current calculation
		let calc = $('#calculation').text();

		//execute calculation
		let answer = eval(calc);

		//set flag so if user click number after equal, there'll be a new calculation
		flag = 1;

		//print out the result
		$('#answer').text(answer);

		//if user uses append, return the reuslt as the begining of the new calculation 
		if(append !== true){
			$('#calculation').text(answer);
		}
	});


	//delete everything
	$('button[name="clear"]').on('click',function(){
		//clear the current calculation
		$('#calculation').text("");
		
		//clear the current answer
		$('#answer').text("");

		//set flag so user can add numbers normally
		flag = 0;
	})

	$('button[name="append"]').on('click',function(){
		//set flag so user can add numbers normally
		flag = 0;

		//set append on and off
		if(append === true){
			append = false;
		} 
		else{
			append = true;
		}

		//appear diffirent append button's color if user uses append
		$(this).toggleClass('active');
		
	})

	//delete the last input
	$('button[name="back"]').on('click',function(){
		//set flag so user can add numbers normally
		flag = 0;

		//take the current calculation
		let calc = $('#calculation').text();

		//delete the last element
		let shortString = calc.substring(0,calc.length - 1);
		
		//return the calculation
		$('#calculation').text(shortString);
	})
});