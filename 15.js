var fileName = "";

$(".file-upload-icon").on('drag dragstart dragend dragover dragenter dragleave drop', function(e) {
	e.preventDefault();
	e.stopPropagation();
})
	.on('dragover dragenter', function() {
	$(".file-upload-icon").addClass('is-dragover');
})
	.on('dragleave dragend drop', function() {
	$(".file-upload-icon").removeClass('is-dragover');
})
	.on('drop', function(e) {
	droppedFiles = e.originalEvent.dataTransfer.files;
	var fileName = "";
	fileName = droppedFiles[0]['name'];
	$('#file-selected').html(fileName);
	$('.cloud').hide();
}); 


$('#fileUpload').change(function (){
	fileName = $(this)[0].files[0].name;
	$('#file-selected').html(fileName);
	$('.cloud').hide();
});

$(".bttn").bind("click", function(){
		$('#file-selected').hide();
		$(".load").addClass("active");
		$(".tick").addClass("active");
		$(".header").addClass("active");
})
