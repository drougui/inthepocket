'use strict';

(function() {

class MainController {

  constructor(AnnyangService, $scope, speech, $timeout) {
        var vm = this;
        var sentences = ["A few",
"A little",
"A long time ago",
"A one way ticket",
"A round trip ticket",
"About 300 kilometers",
"Across from the post office",
"All day",
"Am I pronouncing it correctly",
"And you",
"Anything else",
"Are there any concerts",
"Are they coming this evening",
"Are they the same",
"Are you afraid",
"Are you allergic to anything",
"Are you American",
"Are you busy",
"Are you comfortable",
"Are you coming this evening",
"Are you free tonight",
"Are you going to attend their wedding",
"Are you going to help her",
"Are you going to take a plane or train",
"Are you here alone",
"Are you hungry",
"Are you married",
"Are you okay",
"Are you ready",
"Are you sick",
"Are you sure",
"Are you waiting for someone",
"Are you working today",
"Are you working Tomorrow",
"Are your children with you",
"As soon as possible",
"At 5th street",
"At what time did it happen",
"At what time",
"Be careful driving",
"Be careful",
"Be quiet",
"Behind the bank",
"Bring me my shirt please",
"Business is good",
"Call me",
"Call the police",
"Can I access the Internet here",
"Can I borrow some money",
"Can I bring my friend",
"Can I have a glass of water please",
"Can I have a receipt please",
"Can I have the bill please",
"Can I help you",
"Can I make an appointment for next Wednesday",
"Can I see your passport please",
"Can I take a message",
"Can I try it on",
"Can I use your phone",
"Can it be cheaper",
"Can we have a menu please",
"Can we have some more bread please",
"Can we sit over there",
"Can you call back later",
"Can you call me back later",
"Can you carry this for me",
"Can you do me a favor",
"Can you fix this",
"Can you give me an example",
"Can you help me",
"Can you hold this for me",
"Can you please say that again",
"Can you recommend a good restaurant",
"Can you repeat that please",
"Can you show me",
"Can you speak louder please",
"Can you swim",
"Can you throw that away for me",
"Can you translate this for me",
"Certainly",
"Cheers",
"Chicago is very different from Boston",
"Come here",
"Did it snow yesterday",
"Did you come with your family",
"Did you get my email",
"Did you send me flowers",
"Did you take your medicine",
"Did your wife like California",
"Do you accept US Dollars",
"Do you believe that",
"Do you feel better",
"Do you go to Florida often",
"Do you have a boyfriend",
"Do you have a girlfriend",
"Do you have a pencil",
"Do you have a problem",
"Do you have a swimming pool",
"Do you have an appointment",
"Do you have another one",
"Do you have any children",
"Do you have any coffee",
"Do you have any money",
"Do you have any vacancies",
"Do you have anything cheaper",
"Do you have enough money",
"Do you have the number for a taxi",
"Do you have this in size 11",
"Do you hear that",
"Do you know her",
"Do you know how much it costs",
"Do you know how to cook",
"Do you know how to get to the Marriott Hotel",
"Do you know what this means",
"Do you know what this says",
"Do you know where I can get a taxi",
"Do you know where my glasses are",
"Do you know where she is",
"Do you like it here",
"Do you like the book",
"Do you like to watch TV",
"Do you like your boss",
"Do you like your co-workers",
"Do you need anything else",
"Do you need anything",
"Do you play any sports",
"Do you play basketball",
"Do you sell batteries",
"Do you sell medicine",
"Do you smoke",
"Do you speak English",
"Do you study English",
"Do you take credit cards",
"Do you understand",
"Do you want me to come and pick you up",
"Do you want to come with me",
"Do you want to go to the movies",
"Do you want to go with me",
"Does anyone here speak English",
"Does he like the school",
"Does it often snow in the winter in Massachusetts",
"Does this road go to New York",
"Waiter",
"Waitress",
"We can eat Italian or Chinese food",
"We have two boys and one girl",
"We like it very much",
"Were there any problems",
"Were you at the library last night",
"What are you doing",
"What are you going to do tonight",
"What are you going to have",
"What are you thinking about",
"What are you two talking about",
"What are your hobbies",
"What can I do for you",
"What color is that car",
"What day are they coming over",
"What day of the week is it",
"What did you do last night",
"What did you do yesterday",
"What did you think",
"What do people usually do in the summer in Los Angeles",
"What do they study",
"What do you do for work",
"What do you have",
"What do you recommend",
"What do you study",
"What do you think of these shoes",
"What do you think",
"What do you want to buy",
"What do you want to do",
"What do your parents do for work",
"What does he do for work",
"What does this mean",
"What does this say",
"What does this word mean",
"What does your father do for work",
"What happened",
"What is it",
"What is that",
"What is the area code",
"What kind of music do you like",
"What school did you go to",
"What should I wear",
"What size",
"What time are they arriving",
"What time are you going to the bus station",
"What time did you get up",
"What time did you go to sleep",
"What time did you wake up",
"What time do you go to work everyday",
"What time does it start",
"What time does the movie start",
"What time does the store open",
"What time is check out",
"What time is it",
"What will the weather be like tomorrow",
"What would you like to drink",
"What would you like to eat",
"When are they coming",
"When are you coming back",
"When are you going to pick up your friend",
"When are you leaving",
"When are you moving",
"When did this happen",
"When did you arrive in Boston",
"When do we arrive",
"When do we leave",
"When do you arrive in the US",
"When do you get off work",
"When do you start work",
"When does he arrive",
"When does it arrive",
"When does the bank open",
"When does the bus leave",
"When does the plane arrive",
"When is the next bus to Philidalphia",
"When is your birthday",
"When was the last time you talked to your mother",
"When will he be back",
"When will it be ready",
"When would you like to meet",
"Where are the t-shirts",
"Where are you from",
"Where are you going to go",
"Where are you going",
"Where are you",
"Where can I buy tickets",
"Where can I exchange US dollars",
"Where can I find a hospital",
"Where can I mail this",
"Where can I rent a car",
"Where did it happen",
"Where did you go",
"Where did you learn English",
"Where did you learn it",
"Where did you put it",
"Where did you work before you worked here",
"Where do you live",
"Where do you want to go",
"Where do you work",
"Where does it hurt",
"Where does your wife work",
"Where is an ATM",
"Where is he from",
"Where is he",
"Where is it",
"Where is Main Street",
"Where is my shirt",
"Where is she from",
"Where is the airport",
"Where is the bathroom",
"Where is the bus station",
"Where is there a doctor who speaks English",
"Where is there an ATM",
"Where were you",
"Where would you like to go",
"Where would you like to meet",
"Which is better, the spaghetti or chicken salad",
"Which is better",
"Which is the best",
"Which one do you want",
"Which one is better",
"Which one is cheaper",
"Which one is the best",
"Which one",
"Which road should I take",
"Which school does he go to",
"Who are they",
"Who are you looking for",
"Who are you",
"Who is it",
"Who is that",
"Who sent this letter",
"Who taught you that",
"Who taught you",
"Who was that",
"Who was your teacher",
"Who won",
"Who would you like to speak to",
"Whose book is that",
"Why are you laughing",
"Why did you do that",
"Why did you say that",
"Why not",
"Will you call me a taxi please",
"Will you hand me a towel please",
"Will you pass me the salt please",
"Will you put this in the car for me",
"Will you remind me",
"Will you take me home",
"Would you ask him to call me back please",
"Would you ask him to come here",
"Would you like a glass of water",
"Would you like coffee or tea",
"Would you like some water",
"Would you like some wine",
"Would you like something to drink",
"Would you like something to eat",
"Would you like to buy this",
"Would you like to go for a walk",
"Would you like to have dinner with me",
"Would you like to rent a movie",
"Would you like to watch TV",
"Would you like water or milk",
"Would you take a message please",
"Yes, really",
"Yes",
"You have a very nice car",
"You look like my sister",
"You look tired",
"Your children are very well behaved",
"Your daughter",
"Your house is very nice",
"Your things are all here",
"Take a chance",
"Take it outside",
"Take me downtown",
"Take this medicine",
"Tell him that I need to talk to him",
"Tell me",
"Thank you miss",
"Thank you sir",
"Thank you very much",
"Thank you",
"Thanks for everything",
"Thanks for your help",
"Thanks",
"That car is similar to my car",
"That car over there is mine",
"That looks great",
"That looks old",
"That means friend",
"That restaurant is not expensive",
"That smells bad",
"That way",
"The accident happened at the intersection",
"The big one or the small one",
"The book is behind the table",
"The book is in front of the table",
"The book is near the table",
"The book is next to the table",
"The book is on the table",
"The book is on top of the table",
"The book is under the table",
"The books are expensive",
"The car is fixed",
"The food was delicious",
"The roads are slippery",
"The whole day",
"There are many people here",
"There are some apples in the refrigerator",
"There are some books on the table",
"There has been a car accident",
"These books are ours",
"They arrived yesterday",
"They charge 26 dollars per day",
"This house is very big",
"This is my mother",
"This is very difficult",
"This is very important",
"This room is a mess",
"Try it on",
"Try it",
"Try to say it",
"Turn around",
"Turn left",
"Turn right",
"See you later",
"See you tomorrow",
"See you tonight",
"Should I wait",
"Some books",
"Someone does that for me",
"Someone is coming",
"Sorry to bother you",
"Sorry, I think I have the wrong number",
"Start the car",
"Stop",
"I agree",
"I ate already",
"I believe you",
"I bought a shirt yesterday",
"I came with my family",
"I can swim",
"I feel good",
"I forget",
"I get off of work at 6",
"I give up",
"I got in an accident",
"I have a cold",
"I have a headache",
"I have a lot of things to do",
"I have a question I want to ask you",
"I want to ask you a question",
"I have a reservation",
"I have money",
"I have one in my car",
"I have pain in my arm",
"I have three children, two girls and one boy",
"I have to go to the post office",
"I have to wash my clothes",
"I have two sisters",
"I hope you and your wife have a nice trip",
"I know",
"I like her",
"I like it",
"I like to watch TV",
"I lost my watch",
"I love you",
"I made a mistake",
"I made this cake",
"I need a doctor",
"I need another key",
"I need some tissues",
"I need this to get there by tomorrow",
"I need to change clothes",
"I need to go home",
"I need to go now",
"I only have 5 dollars",
"I only want a snack",
"I remember",
"I speak two languages",
"I still have a lot of things to buy",
"I still have a lot to do",
"I still have to brush my teeth and take a shower",
"I think I need to see a doctor",
"I think it tastes good",
"I think so",
"I think those shoes are very good looking",
"I think you have too many clothes",
"I thought he said something else",
"I thought the clothes were cheaper",
"I trust you",
"I understand now",
"I understand",
"I usually drink coffee at breakfast",
"I want to buy something",
"I want to contact our embassy",
"I want to give you a gift",
"I want to show you something",
"I was about to leave the restaurant when my friends arrived",
"I was going to the library",
"I was in the library",
"I went to the supermarket, and then to the computer store",
"I wish I had one",
"If you like it I can buy more",
"If you need my help, please let me know",
"In 30 minutes",
"Is anyone else coming",
"Is everything ok",
"Is it close",
"Is it cold outside",
"Is it far from here",
"Is it hot",
"Is it nearby",
"Is it possible",
"Is it raining",
"Is it ready",
"Is it suppose to rain tomorrow",
"Is that enough",
"Is that ok",
"Is the bank far",
"Is there a movie theater nearby",
"Is there a nightclub in town",
"Is there a restaurant in the hotel",
"Is there a store near here",
"Is there air conditioning in the room",
"Is there any mail for me",
"Is there anything cheaper",
"Is this a safe area",
"Is this pen yours",
"Is this your book",
"Is your father home",
"Is your house like this one",
"Is your son here",
"It costs 20 dollars per hour",
"It depends on the weather",
"It hurts here",
"It rained very hard today",
"It takes 2 hours by car",
"It will arrive shortly",
"Happy Birthday",
"Have a good trip",
"Have they met her yet",
"Have you arrived",
"Have you been waiting long",
"Have you done this before",
"Have you eaten at that restaurant",
"Have you eaten yet",
"Have you finished studying",
"Have you seen this movie",
"He always does that for me",
"He broke the window",
"He has a nice car",
"He likes it very much",
"He needs some new clothes",
"He never gives me anything",
"He said this is a nice place",
"He said you like to watch movies",
"Hello",
"Help",
"Here is your salad",
"Here it is",
"Here you are",
"His family is coming tomorrow",
"His room is very small",
"His son",
"How are you paying",
"How are you",
"How are your parents",
"How do I get there",
"How do I use this",
"How do you know",
"How do you pronounce that",
"How do you spell it",
"How does it taste",
"How far is it",
"How is she",
"How long are you going to stay",
"How long does it take by car",
"How long have you been here",
"How long have you lived here",
"How long have you worked here",
"How long is it",
"How long is the flight",
"How long will it take",
"How long will you be staying",
"How many children do you have",
"How many hours a week do you work",
"How many languages do you speak",
"How many people do you have in your family",
"How many people",
"How many",
"How much altogether",
"How much are these earrings",
"How much do I owe you",
"How much does it cost per day",
"How much does this cost",
"How much is it",
"How much is that",
"How much is this",
"How much money do you have",
"How much money do you make",
"How much will it cost",
"How much would you like",
"How old are you",
"How tall are you",
"How was the movie",
"How was the trip",
"Hurry"]




        $scope.submitEntry = function (msg) {

            var config = {
                voiceIndex: 1,
                rate: 1,
                pitch: 1
            }



            if(window.speechSynthesis) {
                speech.sayText(msg, config);
            } else {
                $scope.support = 'Speech not Supported in this browser';
            }

        }
        var sentenceNum=Math.floor(Math.random() * 11);
        $scope.sentenceToSay = sentences[sentenceNum];
        $timeout( function(){ $scope.submitEntry($scope.sentenceToSay)} , 1000);
    
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
        	result = result.toLowerCase().split(" ")
            $scope.result=result
        	$scope.sentenceWords = sentences[sentenceNum].toLowerCase().split(" ")
            console.log(result);
            console.log($scope.sentenceWords)
        	var okay = true;
        	for (var i = 0; i < result.length; i++) {
        		if(result[i] === $scope.sentenceWords[i]){
		        	okay = true && okay;
        		}
        		else{
        			okay = false && okay;
        		}
        		if (i===result.length-1){
        			if (okay){
        				sentenceNum=Math.floor(Math.random() * 594);
                        console.log(sentenceNum)
                        $scope.submitEntry("Good !"); 
		        		$scope.sentenceToSay = sentences[sentenceNum];
                        $scope.result=null
        			}
        			// $scope.results.push({
		         //        content: result,
		         //        date: new Date()
		         //    });
                    $timeout(function(){
                        AnnyangService.start({ autoRestart: false, continuous: false });      
                        $scope.submitEntry($scope.sentenceToSay);   
                    },1000)		
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
