$('.container').bind('click', function() {
	$(this).toggleClass('active');
  if ($(this).attr("class") !== "container active") {
    $(this).find('span').removeClass('animate');
  } else{
        $(this).find('span').addClass('animate');
  }
});
