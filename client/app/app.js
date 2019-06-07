'use strict';

angular.module('authCellApp', ['authCellApp.auth', 'authCellApp.admin', 'authCellApp.constants',
    'ngCookies', 'ngResource', 'ngSanitize', 'btford.socket-io', 'ui.router', 'ui.bootstrap', 'textAngular',
    'validation.match'
  ])
  .config(function($urlRouterProvider, $locationProvider, $provide) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
    $provide.decorator('taOptions', ['taRegisterTool', '$delegate', function(taRegisterTool, taOptions){
        // $delegate is the taOptions we are decorating
        // register the tool with textAngular
        taRegisterTool('speach', {
            display: '<buttion ng-init="registerEvent()" ng-class="{recording-btn:recordingStart}"><i class="fa fa-microphone" ng-class="{recording:recordingStart}" aria-hidden="true"></i></button>',
            action: function (event) {
	        	 //Ask if event is really an event.
	            if (!!event.stopPropagation) {
	                //With this, you stop the event of textAngular.
	                event.stopPropagation();
	            }
	            if(!this.recordingStart){
	            	this.recordingStart = true;
			  		this.recognition.start();
	            }else{
	            	this.recordingStart = false;
	            	this.recognition.stop();
	            }
            },
            disabled:function(){
            	//console.log(this.isDisabled());
            	//this.recordingStart = false;
	            //this.recognition.stop();
            },
            registerEvent:function() {
			    try {

			      let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
			      this.recognition = new SpeechRecognition();
			      this.recognition.lang= 'te-IN';
			      var me = this;
			      this.recordingStart = false;//flag for red and blue icon`
			          /*-----------------------------
			            Vwindow Recognition 
			      ------------------------------*/

			      // If false, the recording will stop after a few seconds of silence.
			      // When true, the silence period is longer (about 15 seconds),
			      // allowing us to keep recording even when the user pauses. 
			      this.recognition.continuous = true;
			      this.recognition.interimResults = false;
			      // This block is called every time the Speech APi captures a line. 
			      this.recognition.onresult = function(event) {
			      	if(me.isDisabled()){
			      		me.recordingStart = false;
	            		me.recognition.stop();
	            		return false;
			      	}
			        // event is a this.RecognitionEvent object.
			        // It holds all the lines we have captured so far. 
			        // We only need the current one.
			        var current = event.resultIndex;

			        // Get a transcript of what was said.
			        var transcript = event.results[current][0].transcript;

			        // Add the current transcript to the contents of our Note.
			        // There is a weird bug on mobile, where everything is repeated twice.
			        // There is no official solution so far so we have to handle an edge case.
			        var mobileRepeatBug = (current === 1 && transcript === event.results[0][0].transcript);

			        if(!mobileRepeatBug) {
			            let sel, range;
	                    if (window.getSelection) {
	                        sel = window.getSelection();
	                        if (sel.getRangeAt && sel.rangeCount) {
	                            range = sel.getRangeAt(0);
	                            range.collapse(false);
	                            range.insertNode(document.createTextNode(transcript));
	                        }
	                    } else if (document.selection && document.selection.createRange) {
	                        document.selection.createRange().text = transcript;
	                    }
			        }
			      };

			      this.recognition.onstart = function() { 
			        //instructions.text('Voice this.recognition activated. Try speaking into the microphone.');
			      };

			      this.recognition.onspeechend = function() {
			      	me.recordingStart = false;
			      	me.$apply();
			        //instructions.text('You were quiet for a while so voice this.recognition turned itself off.');
			      };

			      this.recognition.onerror = function(event) {
			        if(event.error === 'no-speech') {
			          //instructions.text('No speech was detected. Try again.');  
			        }
			      };
			    }
			    catch(e) {
			      console.error(e);
			    }
            }
        });
        // add the button to the default toolbar definition
        taOptions.toolbar[3].push('speach');
        return taOptions;
    }]);
  }).controller('appCtrl', function($scope, Auth){
    Auth.setTitle('online authoring platform for examination, training, survey & certification with extensive reporting module');
    $scope.Auth= Auth;
  	$scope.isAndroidBrowser = (navigator.userAgent.toLowerCase().indexOf('android') > -1 && window.document.URL.indexOf('isCordova') === -1);
  });
