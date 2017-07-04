$(document).ready(function(){
	//Store height and width of project images
	var projectImageHeight = $(".project-images").height();
	var projectImageWidth = $("project-images").width();

	//For smooth scrolling on click of nav-bar
	$("a").on('click', function(event){
		if(this.hash != ""){
			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){
				window.location.hash = hash;
			});

		}
	});

	//Enlarge image when hovered
	$(".project-images").hover(
		function(){
			$(this).css('cursor','pointer');
			$(this).animate({"width" : "40%", "height" : "40%"}, 100);
		},
		function(){
			$(this).css('cursor','pointer');
			$(this).animate({"width" : "20%", "height" : "20%"}, 100);
		});

});



