angular.module('Pow')
    
    .directive('myMenu', function ($rootScope) {
        return {
            restrict: 'ECMA',
            transclude: false,
            link: function (scope, el, attr) {
                var navMenu = angular.element(el).find('nav');
                var open = false;

                $rootScope.$on('OPEN_NAV_MENU', function () {
                    navMenu.addClass('open');
                });

                $rootScope.$on('CLOSE_NAV_MENU', function () {
                    navMenu.removeClass('open');
                });


            }
        }
    })
    .directive('toggleMenu', function ($rootScope) {
        return {
            restrict: 'ECMA',
            transclude: false,
            link: function (scope, el, attr) {
                console.log('blabla')
                angular.element(el).on('click', function () {
                    var menuEl = document.querySelectorAll('my-menu'),
                        menuHasOpen = angular.element(menuEl).find('nav').hasClass('open');

                    if (!menuHasOpen) {
                        $rootScope.$broadcast('OPEN_NAV_MENU');
                    } else {
                        $rootScope.$broadcast('CLOSE_NAV_MENU');
                    }
                });


            }
        }
    })
    .directive('closeMenu', function ($rootScope) {
        return {
            restrict: 'ECMA',
            transclude: false,
            link: function (scope, el, attr) {

                angular.element(el).on('click', function () {
                    var menuEl = document.querySelectorAll('my-menu'),
                        menuHasOpen = angular.element(menuEl).find('nav').hasClass('open');

                    $rootScope.$broadcast('CLOSE_NAV_MENU');
                });


            }
        }
    });
    