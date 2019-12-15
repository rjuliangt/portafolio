$('document').ready(function(){
    var btnmenu = $('.menu-items');
    var menu = $('.navegation ul');
    // var card = $('#card');
      
    btnmenu.click(function () { 
        if(menu.hasClass('show') /*card.hasClass('show')*/){
            menu.removeClass('show');
            // card.removeClass('show');
        }else{
            menu.addClass('show');
            // card.addClass('show');   
        }
    });

});
