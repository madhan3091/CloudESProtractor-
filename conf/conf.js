/**created by selenium on 22/10/2018   ... */

exports.config = {
		
		directConnect : true,

        multicapabilities:[{
          'browserName':'chrome'
        },
        {
          'browserName':'firefox'
        }
        ],
      framework: 'jasmine2',

	  //seleniumAddress: 'http://localhost:4444/wd/hub',  
      //seleniumAddress : 'https://cloudes-company-core-angular.firebaseapp.com/#!/',

	  specs: ['../test_spec/Addlogininfotest_spec.js'],

       jasmineNodeOpts:{
          defaultTimeoutInterval: 60000
      },

 /*
  onPrepare: function () 
  {
     
      var AllureReporter = require('D:/CloudES Automation/node_modules/jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
     allureReport:{
       resultsDir: 'allure-results'
      }
    }));
    jasmine.getEnv().afterEach(function(done){
      browser.takeScreenshot().then(function (png) {
        allure.createAttachment('Screenshot', function () {
          return new Buffer(png, 'base64')
        }, 'image/png')();
        done();
      })
    });
  }*/

  
  onPrepare:function(){

      var HtmlScreenshotReporter = require('D:/CloudES Automation/node_modules/protractor-jasmine2-screenshot-reporter');
    jasmine.getEnv().addReporter(new HtmlScreenshotReporter({
      dest: 'D:/CloudES Automation/Reports',
      filename: 'report.html'
    }));

  },
  
  onComplete:function(){
     console.log("Sending Mail with reports for the test execution.");
     var sys = require('util')
     var exec = require('child_process').exec;
     function puts(error,stdout,stderr){sys.puts(stdout)}
     exec("node mail.js",puts);
  }

}
