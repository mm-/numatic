jQuery( document ).ready( function( $ ) {
	
	$( ".controls li" ).on( 'mouseenter', function() {

		$( this ).addClass( 'active' ).find( 'span' ).addClass( 'active' );

	}).on( 'mouseleave', function() {

		$( this ).removeClass( 'active' ).find( 'span' ).removeClass( 'active' );

	});

});