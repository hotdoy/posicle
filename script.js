$(document).ready(function() {
	console.log( "ApplicationStart" );
	$( ".loader-bg" ).fadeOut( 1000, function() {});
});

$(function(){
    var pop     = $('#pop');
        var birdaudio = pop.find('audio')[0];

    pop.hover(function(){
       birdaudio.play();
    }, function(){
       birdaudio.stop();
    });
});

