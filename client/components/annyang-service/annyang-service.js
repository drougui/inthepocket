(function(annyang) {
    'use strict';

    function AnnyangService($rootScope) {
        var service = {};
        
        // COMMANDS
        service.commands = {};

        service.addCommand = function(phrase, callback) {
            var command = {};
            
            // Wrap annyang command in scope apply
            command[phrase] = function(args) {
                $rootScope.$apply(callback(args));
            };

            // Extend our commands list
            angular.extend(service.commands, command);
            
            // Add the commands to annyang
            annyang.addCommands(service.commands);
            console.debug('added command "' + phrase + '"', service.commands);
        };

        service.start = function() {
            annyang.addCommands(service.commands);
            annyang.debug(true);
            annyang.start();
        };
        
        service.stop = function(){
            annyang.abort();
        }
        service.pause = function(){
            annyang.pause();
        }
        service.resume = function(){
            annyang.resume();
        }
        return service;
    }

    angular.module('inThePocketApp')
        .factory('AnnyangService', AnnyangService);

}(window.annyang));