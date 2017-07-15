

var menu_clicked = 0;
var menu_pos = 0;
var name = "You";
var namegotten = 0;
var main = function() {
	alert("Welcome to my page. It\'s hard to navigate.");
	setTimeout(function(){
		name = prompt("What is your name?", "Dr. Gert");
		alert("sup " + name + "?");
		namegotten = 1;
		

	},11000);//set to 11000
	//clicked
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
	//hide
	$(".menu").mouseover(function(){
		$('.menu').animate({
			left: "-285px"
		}, 200);
		$('body').animate({
			left: "0px"
		}, 200);
		
		
	});
	
	$( 'body' ).mousemove(function() {
		if (menu_clicked==1){
			if(event.pageX > 1000 && menu_pos!=2){
				$('.menu').animate({
					left: "0px"
				}, 200);
				$('body').animate({
					left: "285px"
				}, 200);
				menu_pos=2;
				
			}
			
			if(event.pageX > 300 && event.pageX < 1000 && menu_pos!=1){
				$('.menu').animate({
					left: "-145px"
				}, 200);
				$('body').animate({
					left: "140px"
				}, 200);
				menu_pos=1;
				
			}
			if(event.pageX < 300 && menu_pos!=0){
				$('.menu').animate({
					left: "-285px"
				}, 200);
				$('body').animate({
					left: "0px"
				}, 200);
				menu_pos=0;
				
				setTimeout(function(){
					if (namegotten==1){
						$('.menu > ul > li:nth-child(2) > a > span').text(name+' is a fart! Haha!');
					}
				},200);
				
				
							
				
			}
			
			
			
			//var msg = "Handler for .mousemove() called at ";
			//msg += event.pageX + ", " + event.pageY;
			//$( "#log" ).append( "<div>" + msg + "</div>" );
		}
	});
	

	


	/* Then push them back */
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
