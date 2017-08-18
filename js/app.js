$('.red,.blue,.purple,.yellow').mouseenter(function(){
	$(this).css({
		width: '105px',
		transition: '0.3s',
		height: '105px',
		'cursor':'pointer'
	});
});

$('.red,.blue,.purple,.yellow').mouseleave(function(){
	$(this).css({
		width: '90px',
		transition: '0.3s',
		height: '90px'
	});
});

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12];



var random1 = Math.floor(Math.random() * 12);
var random2 = Math.floor(Math.random() * 12);
var random3 = Math.floor(Math.random() * 12);
var random4 = Math.floor(Math.random() * 12);
var totalScoreRandom = Math.floor(Math.random() * 100)+ 15;

var getNewRandom = function(){
	Math.floor(Math.random() * 100)+ 15;
}

var red = $('.red');
var blue = $('.blue');
var purple = $('.purple');
var yellow = $('.yellow');

// $('.red,.blue,.purple,.yellow').click(function(){

	
// 	blue = numbers[random2];
// 	purple = numbers[random3];
// 	yellow = numbers[random4];

// 	console.log(red);
// 	console.log(blue);
// 	console.log(purple);
// 	console.log(yellow);
// });

var result = $("#result");
result = 0;

$('.red').click(function(){

	red = numbers[random1];
	result += red;
	$('#result').html("Result: " + result);
	console.log(red);
});

$('.blue').click(function(){
	
	blue = numbers[random2];
	result += blue;
	$('#result').html("Result: " + result);
	console.log(blue);
});


$('.purple').click(function(){
	
	purple = numbers[random3];
	result += purple;
	$('#result').html("Result: " + result);
	console.log(purple);
});


$('.yellow').click(function(){
	
	yellow = numbers[random4];
	result += yellow;
	$('#result').html("Result: " + result);
	console.log(yellow);
});




var totalScore = $("#totalScore");

totalScore = totalScoreRandom;

document.getElementById("totalScore").innerHTML = "Total Score: " + totalScoreRandom;

var wins = 0;
var loses = 0;
// var lost = function(){
// 	$(loses).html("Loses: " + 1);
// }


$('.red,.blue,.purple,.yellow').click(function(){

if(result == totalScore){
	console.log("You won!");
	result = 0;
	totalScoreRandom = Math.floor(Math.random() * 100)+ 15;
	$("#totalScore").html("Total Score: " + totalScoreRandom);
	wins++;
	$("#wins").html("Wins: " + wins);
	random1 = Math.floor(Math.random() * 12);
	random2 = Math.floor(Math.random() * 12);
	random3 = Math.floor(Math.random() * 12);
	random4 = Math.floor(Math.random() * 12);
	red = numbers[random1];
	blue = numbers[random2];
	purple = numbers[random3];
	yellow = numbers[random4];

}else if(result > totalScoreRandom){
	console.log("You lose");
	result = 0;
	totalScoreRandom = Math.floor(Math.random() * 100)+ 15;
	$("#totalScore").html("Total Score: " + totalScoreRandom);
	loses++;
	 $("#loses").html("Loses: " + loses);
	random1 = Math.floor(Math.random() * 12);
	random2 = Math.floor(Math.random() * 12);
	random3 = Math.floor(Math.random() * 12);
	random4 = Math.floor(Math.random() * 12);
	red = numbers[random1];
	blue = numbers[random2];
	purple = numbers[random3];
	yellow = numbers[random4];

	
}
});





