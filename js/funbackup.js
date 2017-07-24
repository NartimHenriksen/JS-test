
var main = function() {

  var menu_clicked = 0;
  var menu_pos = 0;
  var name = "You";
  var helpmsg = 0;
  //wodry
  $('.wodry').wodry({

    animation: 'rotateY',
    delay: 0,
    animationDuration: 1000

  });


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
	//touch menu
	$(".menu").mouseover(function(){
		$('.menu').animate({
			left: "-285px"
		}, 200);
		$('body').animate({
			left: "0px"
		}, 200);
		menu_pos=0;


	});
	$( 'body' ).mousemove(function() {
		if (menu_clicked==1){
			//far away
			if(event.pageX > 1000 && menu_pos!=2){
				$('.menu').animate({
					left: "0px"
				}, 200);
				$('body').animate({
					left: "285px"
				}, 200);
				menu_pos=2;

			}
			//middle
			if(event.pageX > 300 && event.pageX < 1000 && menu_pos!=1){
				$('.menu').animate({
					left: "-145px"
				}, 200);
				$('body').animate({
					left: "140px"
				}, 200);
				menu_pos=1;

			}
			//close
			if(event.pageX < 300 && menu_pos!=0){
				$('.menu').animate({
					left: "-285px"
				}, 200);
				$('body').animate({
					left: "0px"
				}, 200);
				menu_pos=0;

				setTimeout(function(){
					if (helpmsg==1){
						$('.menu > ul > li:nth-child(2) > a > span').html("<font color=\"red\">Help me "+name+', I am trapped! For gods sake I am trapped in the (clue on picture)!</font>');
            //$('.menu').style.background-image = 'url(../img/menu_bg.jpg)';
            /*Name is NVLVS*/
					}
				},200);




			}



			//var msg = "Handler for .mousemove() called at ";
			//msg += event.pageX + ", " + event.pageY;
			//$( "#log" ).append( "<div>" + msg + "</div>" );
		}
	});





	/* Then push them back*/
	$('.icon-close').click(function() {
		$('.menu').animate({
			left: "-285px"
		}, 200);

		$('body').animate({
			left: "0px"
		}, 200);
	});



  $('.new-menu').click(function(){
    if (helpmsg==1){
      alert("Site broken. Please refresh. Do not use the menu.");
    }
    else{
    alert("ERROR CODE 666: Demonic powers not supported.\nPlease do not attempt to use the menu.");
    //put menu right side
    helpmsg = 1;
    }
  });

	alert("Hello, and welcome.");
  name = prompt("What is your name?", "Alice");
	if (name == 'null'){
	    name = 'Cancel'
	}
	alert("Nice to meet you " + name + "! You can call me the gatekeeper. Now, please return to the front page. Nothing to see here.");
};


$(document).ready(main);
