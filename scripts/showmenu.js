$('document').ready(function(){
    var btnmenu = $('.menu-items');
    var menu = $('.navegation ul');

    btnmenu.click(function () { 
        if(menu.hasClass('show') ){
            menu.removeClass('show');
           
        }else{
            menu.addClass('show');
           
        }
    });

});
