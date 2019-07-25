$(document).ready(function(){

	// function will hide page_cont
	// then will reveal page_cont
	//function cycle(){
	// hides page_cont
	// delay(amount of time before video shown)
		$('.page_cont').fadeIn('slow').delay(10000).show().fadeOut('slow');
	// re-displays page_cont
	// delay(amount of time video should be seen)
		$('.page_cont').fadeOut('slow').delay(10000).show().fadeIn('slow');
		//$('.page_cont').delay(5000).show().fadeIn('slow');
	//}

	//setInterval(cycle,20000);




});