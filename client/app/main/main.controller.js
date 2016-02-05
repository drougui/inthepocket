'use strict';

(function() {

class MainController {

  constructor(AnnyangService, $scope) {
        var vm = this;
        var sentences = ["How are you","Nice to meet you","You look awful","Wait a minute", "Great", //"I don't think so",
        "Something wrong","Terrible","Go ahead","Tell me more","Sorry","I apologise","Forget it", //"I'll miss you",
        "Come back soon", "I beg your pardon", //"Time's up", 
        "I have to go", "What a shame",
        "Can you repeat please", "What a pity", //"Let's go", 
        "Have fun", //"I'm all right", "It's up to you",
        "I am sick", "By the way", "Can we meet in an hour", "Make yourself at home", 
        //"I'll pick you up at Victoria Station",
        "I am fed up with it", 
        //"Don't take a taxi", "I'll give you a lift", "Don't worry", 
        "You must be kidding"
		];



        $scope.sentenceToSay = sentences[0];
        var sentencesDone = 0;
        vm.init = function() {
            vm.clearResults();

            AnnyangService.addCommand('*allSpeech', function(allSpeech) {
                console.debug(allSpeech);
                AnnyangService.stop();
                vm.addResult(allSpeech);
            });
            
            AnnyangService.start({ autoRestart: false, continuous: false });
        };
        
        vm.addResult = function(result) {
        	result = result.split(" ")
        	var sentenceWords = sentences[sentencesDone].toLowerCase().split(" ")
        	var okay = true;
        	for (var i = 0; i < result.length; i++) {
        		if(result[i] === sentenceWords[i]){
		        	okay = true && okay;
        		}
        		else{
        			okay = false && okay;
        		}
        		if (i===result.length-1){
        			if (okay){
        				sentencesDone++;
		        		$scope.sentenceToSay = sentences[sentencesDone];
        			}
        			$scope.results.push({
		                content: result,
		                date: new Date()
		            });
		            AnnyangService.start({ autoRestart: false, continuous: false });        			
        		}
        	};
        };
        
        vm.clearResults = function() {
            $scope.results = [];
        };

        vm.init();
  }
}

angular.module('inThePocketApp')
  .controller('MainController', MainController);

})();
