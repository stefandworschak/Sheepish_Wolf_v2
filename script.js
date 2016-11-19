$(document).ready(function(){
    
   $(".thumb").click(function(){
       
       var $width = $(window).width();
              
       $("#img_overlay").parent().css('position','relative');
       $("#img_overlay").css('top', '50%') 
                        .css('position','fixed')
                        .css('left', $width*0.25) 
                        .css('top','100px');
       $("#img_overlay").fadeIn(500);
       
   }); 
    
    
    $("#closed").click(function(){
        
       $("#img_overlay").fadeOut(500); 
        
    })

    
    
    
});