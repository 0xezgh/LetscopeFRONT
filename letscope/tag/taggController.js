(function(){
    'use strict';

    angular
        .module('letscope')
        .controller('tagController',tagController);

    tagController.$inject = ['tagService','$scope','$location','$rootScope'];




    function taggController(tagService,$scope,$location,$rootScope){


        tagService.GetTags(function (response) {

            $scope.modernBrowsers = [
                { icon: "<img src=[..]/opera.png.. />",               name: "Opera",              maker: "(Opera Software)",        ticked: true  },
                { icon: "<img src=[..]/internet_explorer.png.. />",   name: "Internet Explorer",  maker: "(Microsoft)",             ticked: false },
                { icon: "<img src=[..]/firefox-icon.png.. />",        name: "Firefox",            maker: "(Mozilla Foundation)",    ticked: true  },
                { icon: "<img src=[..]/safari_browser.png.. />",      name: "Safari",             maker: "(Apple)",                 ticked: false },
                { icon: "<img src=[..]/chrome.png.. />",              name: "Chrome",             maker: "(Google)",                ticked: true  }
            ];
        });









    }

})();


