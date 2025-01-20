$(".button-1").bind("click", function() {
		$("#1").toggleClass("active")
		$("#1").toggleClass("inactive")
		$("#2").toggleClass("active")
		if($("#2").hasClass("inactive")){
		$("#2").toggleClass("inactive")
		}
})

$(".button-2").bind("click", function() {
	$("#2").toggleClass("inactive")
	$("#2").toggleClass("active")
	$("#3").toggleClass("active")
	if($("#3").hasClass("inactive")){
		$("#3").toggleClass("inactive")
	}
})

$(".button-3").bind("click", function() {
	$("#3").toggleClass("active")
	$("#3").toggleClass("inactive")
	$("#1").toggleClass("active")
	if($("#1").hasClass("inactive")){
		$("#1").toggleClass("inactive")
	}
})
