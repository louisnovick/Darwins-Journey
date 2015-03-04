$().ready(function() {
	$('#video-bg').tubular({
		videoId: 'XREElnb_wlQ',
		start: 4
	}); 

	$('.slide-nav').mouseenter(function(){
		$( this ).css( "margin", "0px 0px" );
		$( this ).css("-webkit-transition","all 0.3s");
		$( this ).css("-moz-transition","all 0.3s");
		$( this ).css("-o-transition","all 0.3s");
		$( this ).css("transition","all 0.3s");
	});

	$('.slide-nav').mouseleave(function(){
		$( this ).css( "margin", "0px -110px" );
		$( this ).css("-webkit-transition","all 0.3s");
		$( this ).css("-moz-transition","all 0.3s");
		$( this ).css("-o-transition","all 0.3s");
		$( this ).css("transition","all 0.3s");
	});

});





