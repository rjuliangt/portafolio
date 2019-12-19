$('document').ready(function () {
    var iconExit = $('.header-chat .exit');
    var formChat = $('#formChat');
    var Chat = $('#chatFloat');
    var spacechat = $('#container-chat');

    iconExit.click(function () {
            formChat.removeClass('show');
            Chat.removeClass('show');

    });

    Chat.click(function(){
            formChat.addClass('show');
            Chat.addClass('show');
        
    })

});