$('document').ready(function () {
    var imgItems = $('.slider li').length; // Numero de Slides
	var imgPos = 1;

	// Agregando icono
	for(i = 1; i <= imgItems; i++){
		$('.pagination-slider').append('<li><i class="fas fa-circle"></i></li>');
	} 
	//------------------------

	$('.slider li').hide(); // Ocultanos todos los slides
	$('.slider li:first').show(); // Mostramos el primer slide
	$('.pagination-slider li:first').css({'color': '#000'}); // Damos estilos al primer item de la paginacion

	// Ejecutamos todas las funciones
	$('.pagination-slider li').click(pagination);
	$('.arrow-right i').click(nextSlider);
	$('.arrow-left i').click(prevSlider);


	setInterval(function(){
		nextSlider();
	}, 4000);

	// FUNCIONES =========================================================

	function pagination(){
		var paginationPos = $(this).index() + 1; // Posicion de la paginacion seleccionada

		$('.slider li').hide(); // Ocultamos todos los slides
		$('.slider li:nth-child('+ paginationPos +')').fadeIn(); // Mostramos el Slide seleccionado

		// Dandole estilos a la paginacion seleccionada
		$('.pagination-slider li').css({'color': '#9a9c9cd7'});
		$(this).css({'color': '#000'});

		imgPos = paginationPos;

	}

	function nextSlider(){
		if( imgPos >= imgItems){imgPos = 1;} 
		else {imgPos++;}

		$('.pagination-slider li').css({'color': '#9a9c9cd7'});
		$('.pagination-slider li:nth-child(' + imgPos +')').css({'color': '#000'});

		$('.slider li').hide(); // Ocultamos todos los slides
		$('.slider li:nth-child('+ imgPos +')').fadeIn(); // Mostramos el Slide seleccionado

	}

	function prevSlider(){
		if( imgPos <= 1){imgPos = imgItems;} 
		else {imgPos--;}

		$('.pagination-slider li').css({'color': '#9a9c9cd7'});
		$('.pagination-slider li:nth-child(' + imgPos +')').css({'color': '#000'});

		$('.slider li').hide(); // Ocultamos todos los slides
		$('.slider li:nth-child('+ imgPos +')').fadeIn(); // Mostramos el Slide seleccionado
	}
});