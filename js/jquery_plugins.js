$(document).on('ready', function(){
	
	/*
	--- Inicialización de Plugin de filtrado de elementos
		Plugin: MixItUp - Sitio Web: https://mixitup.kunkalabs.com/	
	*/
	$('#contenedor').mixItUp();


	/*
	--- Inicialización de Plugin de Efectos MouseOver sobre Imágenes
		Plugin: Adipoli - Sitio Web: https://cube3x.com/adipoli-jquery-image-hover-plugin/	
	*/
	$('article figure img').adipoli({
	    'startEffect' : 'normal',
	    'hoverEffect' : 'popout'
	});


	/*
	--- Inicialización de Plugin de Efecto Lupa
		Plugin: MagnifyMe - Sitio Web: http://www.codepunker.com/blog/magnify-me-jquery-image-magnifier-plugin	
	*/
    jQuery('.magnifyMe').magnifyMe('lupa');

});