$(function(){
	//$(".accordion").click(function(){
	$( "#container" ).find(".accordion").click(function(){
      	$(this).next().slideToggle('fast'); //only the div after it
        $(this).siblings(".accordion").next().slideUp("fast");
		//$(".panel").not($(this).next()).slideUp('fast');

	});
	
}); //end jQuery code

