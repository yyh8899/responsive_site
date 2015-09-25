$(function(){
	//initiate the Carousel 
	$('.carousel').carousel({
	   interval: 5000,
	   pause: true
	});
    

    //Set up the correct color for menuOne to start with. The default is in expand state
	$('#menuOne a.heading').css('color','#e75640');
   
    //on click event to toggle the color and arrow
	$("a.heading").click(function(){
		    //find the parent id and find the first class
            var thisID = $(this).closest("div").attr("id"),  
	   		    thisClass = $(this).attr("class"),
	   		    firstClass = thisClass.substr(0, thisClass.indexOf(" "))||thisClass;
    	
    		//Set timeout to wait for the jQuery style toggle in, then reset the color and arrow
            setTimeout(function(){  
            	var myclass='#'+thisID +' .'+firstClass;
			    if ($("#"+thisID).next().hasClass("in")==true){ //if expanding
		      			$(targetClass).css('color','#e75640');		      		
		      			$(targetClass).find('span').remove();
		      			$(targetClass).append("<span class='glyphicon glyphicon-triangle-bottom'></span>");
		   		}else{//collapsed
		   				$(targetClass).css('color','#fff');
		   				$(targetClass).find('span').remove();
		   				$(targetClass).append("<span class='glyphicon glyphicon-triangle-right'></span>");   			
		   		}
		   		//check the rest of menu to reset according
		   		if ($('a.heading').hasClass('collapsed')==true){
		   				$('a.heading').not(targetClass).css('color','#fff');
		   				$('a.heading').not(targetClass).find('span').remove();
		   				$('a.heading').not(targetClass).append("<span class='glyphicon glyphicon-triangle-right'></span>"); 
		   		}

	   },500);
   	})	
});

