/*Attempt to load CSS dynamically*/

/*function loadjscssfile(filename, filetype){
    if (filetype=="js"){ //if filename is a external JavaScript file
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename)
    }
    else if (filetype=="css"){ //if filename is an external CSS file
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref!="undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)
}*/



var main = function() {

  var menu_clicked = 0;
  var menu_pos = 0;
  var name = "You";
  var helpmsg = 0;
  var musicon = 0;
  //wodry
  $('.wodry').wodry({

    animation: 'rotateY',
    delay: 0,
    animationDuration: 1000

  });



	//touch menu
	//$(".menu").mouseover(function(){
	//	$('.menu').animate({
	//		left: "-285px"
	//	}, 200);
	//	$('body').animate({
	//		left: "0px"
	//	}, 200);
	//	menu_pos=0;

	//});

  var rightopen = function(){
    //clicked
		$('.right-menu').animate({
			right: "0px"
		}, 200);

		$('body').animate({
			left: "-285px"
		}, 200);
		menu_pos = 2;
		menu_clicked=1;


  };


	var leftopen = function() {
		$('.menu').animate({
			left: "0px"
		}, 200);

		$('body').animate({
			left: "285px"
		}, 200);
	};


	$('.leftb').click(leftopen);

	$('.icon-close').click(function() {
		$('.menu').animate({
			left: "-285px"
		}, 200);

		$('body').animate({
			left: "0px"
		}, 200);
	});




	$( 'body' ).mousemove(function(event) {
    if(helpmsg==3 && musicon==0 && menu_pos!=0){
        musicon=1
        myAudio = new Audio('../mp3/creepy.mp3');
        myAudio.loop = true;
        myAudio.play();
    }
		if (menu_clicked==1){
			//far away


			if(event.pageX < 450 && menu_pos!=2){
				$('.right-menu').animate({
					right: "0px"
				}, 200);
				$('body').animate({
					left: "-285px"
				}, 200);
				menu_pos=2;
      }
			//middle
			if(event.pageX > 450 && event.pageX < 1150 && menu_pos!=1){

				$('.right-menu').animate({
					right: "-145px"
				}, 200);
				$('body').animate({
					left: "-140px"
				}, 200);
				menu_pos=1;

			}
      //close
			if(event.pageX > 1150 && menu_pos!=0){
				$('.right-menu').animate({
					right: "-285px"
				}, 200);
				$('body').animate({
					left: "0"
				}, 200);
				menu_pos=0;

				setTimeout(function(){
					if (helpmsg==1){
            helpmsg=2;
          }
					else if (helpmsg==2){
            helpmsg=3;
						$('.right-menu > ul > li:nth-child(1) > a').html('<font color=\"red\" face=\"YouMurderer\" size=\"7\"> \{\} </font>');
            //MUSIC when it comes out


          }
          //
          //, I am trapped! For gods sake I am trapped in the (clue on picture)!
					else if (helpmsg==3){
            helpmsg=4;
						$('.right-menu > ul > li:nth-child(2) > a').html('<font color=\"red\" face=\"YouMurderer\" size=\"7\"> Oh god help me '+name+' </font>');

          }

					else if (helpmsg==4){
            helpmsg=5;
						$('.right-menu > ul > li:nth-child(3) > a').html('<font color=\"red\" face=\"YouMurderer\" size=\"7\"> It burns something something clue</font>');

          }
					else if (helpmsg==5){
            helpmsg=6;
						$('.right-menu > ul > li:nth-child(4) > a').html('<font color="red" face="YouMurderer" size="7"> My name is</font> <font face="MetalMacabre" color="silver">NVLVS</font>');/*Make the NVLVS font epic and powerful*/

          }
				},200);

			}



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



  $('.numpos').click(function(){
    if (helpmsg!=0){
      alert("Site broken. Please refresh. Do not use the menu. If you do, you could discover my terrible secret- UHH I mean seatbelt. Don't use it or you might discover my terrible seatbelt. Please leave now.");
    }
    else{
      alert("ERROR CODE 666: Demonic powers not supported.\nPlease do not attempt to use the menu.");
      //put menu right side
      helpmsg = 1;
	    $('.leftb').remove();//right-menu underneath. Switch to right menu
	    $('.rightb').click(rightopen);

    }
  });
  setTimeout(function(){
      alert("Hello, and welcome.");
      name = prompt("What is your name?", "Alice");
	    if (name == 'null'){
	      name = 'Cancel'
    	}
    	alert("Nice to meet you " + name + ". You can call me the gatekeeper. Now, please return to the front page. Nothing to see here.");

      //loadjscssfile("../css/fun2.css", "css") //dynamic loading doesnt work yet
      },1);//3000);
	};


$(document).ready(main);
