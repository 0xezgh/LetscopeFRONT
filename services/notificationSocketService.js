(function(){
    'use strict';

    angular
        .module('letscope')
        .factory('notificationSocket',NotificationSocket);

    function NotificationSocket(socketFactory) {
        var socket = socketFactory();
        socket.forward('notification');
        return socket;
    };

})();