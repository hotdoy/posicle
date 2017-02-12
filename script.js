$(document).ready(function() {
	console.log( "ApplicationStart" );
	$( ".loader-bg" ).fadeOut( 1000, function() {});
});

$(function(){
    var sound = $("#sound")[0];
    $("#pop").click(function(){
    	sound.play();
    });
});

