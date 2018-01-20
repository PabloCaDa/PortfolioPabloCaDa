//--->Load
document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");
    $("#dashboard").load("views/web.html");
});

//--Display changes

$(".nav_web").click(function(){
    clean();
	$(".nav_web").addClass('active');
	$("#dashboard").load("views/web.html");

});

$(".nav_about").click(function(){
	clean();
	$(".nav_about").addClass('active');
	$("#dashboard").load("views/about.html");


});

$(".nav_contact").click(function(){
	clean();
	$(".nav_contact").addClass('active');
	$("#dashboard").load("views/contact.html");
});

//--Class cleaners

function clean(){
	$(".nav_web").removeClass('active');
	$(".nav_about").removeClass('active');
	$(".nav_contact").removeClass('active');
}





