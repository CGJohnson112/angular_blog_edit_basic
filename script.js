$(document).ready(function(){
	$('#textOne').click(function(){
		$('#blog').removeClass();
		$('#blog').addClass('textOne');
		alert('this is text one');
	});

	$('#textTwo').click(function(){
		$('#blog').removeClass();
		$('#blog').addClass('textTwo');
		alert('this is text two');
	});

	$('#textThree').click(function(){
		$('#blog').removeClass();
		$('#blog').addClass('textThree');
		alert('this is text three');
	});
});