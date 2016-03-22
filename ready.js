$(document).ready(function(){
    $("#myButton").click(function(){
    $("#revealDiv").fadeIn(1000);
    var div = $("#contact");
    div.animate({top: '100px'}, "slow");
    div.animate({fontSize: '1.5em'}, "slow");
}); 
}); 

