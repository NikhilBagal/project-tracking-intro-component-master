$(document).ready(function(){
    $("#open-icon").on('click',function(){
        $('ul').css("visibility","visible");
        
        $('#open-icon').css("display","none");
        $('#close-icon').css('display',"block");
    })
    $("#close-icon").on('click',function(){
        $('ul').css('visibility',"hidden");
        
        $("#close-icon").css("display","none");
        $("#open-icon").css("display","block");
    })
   
})