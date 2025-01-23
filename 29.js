$('.search-bar').keyup(function() {
	if( $('.search-bar').val() !== ""){
		$(".search-result").html("").addClass("active");
		$(".search-result").append( $("<li />", {html: "<b>" + $('.search-bar').val() + "</b>"}) );
		$(".search-result").append( $("<li />", {html: "Veritatis et <b>" + $('.search-bar').val() + "</b>"}) );
		$(".search-result").append( $("<li />", {html: "ut aliquid ex <b>" + $('.search-bar').val() + "</b> vero eos"}) );
	} else{
		$(".search-result").html("").removeClass("active");
	}
});
