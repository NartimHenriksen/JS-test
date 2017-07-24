

var menu_clicked = 0;
var menu_pos = 0;
var name = "You";
var namegotten = 0;
var main = function() {


$('.menu > ul > li:nth-child(2) > a > span').click(function(){
	alert("nothing here yet");

});

$('.menu > ul > li:nth-child(3) > a').click(function(){


  alert("nothing here yet");

  //open menu
});
	$('.icon-menu').click(function() {
		$('.menu').animate({
			left: "0px"
		}, 200);

		$('body').animate({
			left: "285px"
		}, 200);
		setTimeout(function () {
			menu_clicked=1;
		}, 200);
		menu_pos = 2;
	});





	/* close menu */
	$('.icon-close').click(function() {
		$('.menu').animate({
			left: "-285px"
		}, 200);

		$('body').animate({
			left: "0px"
		}, 200);
	});
};


$(document).ready(main);
