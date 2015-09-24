$(function(){
	//initiate the Carousel 
	$('.carousel').carousel({
	   interval: 5000,
	   pause: true
	});
    
    //check the state of menuOne since it is in default expand when loading
	if ($('div[arialabelledby="menuOne"]').hasClass("in")==true){
      		$('#menuOne a.heading').css('color','#e75640');     		
   	}else{
   		$('#menuOne a.heading').css('color','#fff');
   	};
	
	//OnClick event to change the heading color and arrow color and direction
	//Need to set the time out because need to wait for the class added after click
	var myfunc = function(){
	   		if ($('div[arialabelledby="menuOne"]').hasClass("in")==true){
	      			$('#menuOne a.heading').css('color','#e75640');
	      			$('head').append("<style>#menuOne a.heading::after{ content:'▼'; float: 'right';}</style>");
	   		}else{
	   			$('#menuOne a.heading').css('color','#fff');
	   			$('head').append("<style>#menuOne a.heading::after{ content:'▶'; float: 'right';}</style>");   			
	   		};
	};

	$("#menuOne a.heading").click(function(){
	   setTimeout(myfunc,500);
   	});
		
	
});

