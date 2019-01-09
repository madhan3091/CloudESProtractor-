/**created by selenium on 22/10/2018   ... */

//Function  created for  generating Allure report and Starting the Jetty server

function allure_report_jetty_deploy(){

  console.log('Generating allure reports from xml using Maven plugin and deploying them on port:1234 ');
  console.log('If at time there is some issue in report deployment or reports are not available');

  var sys = require('util');
  var exec = require('child_process').exec;

  function puts(error,stdout,stderr){
    sys.puts(stdout)
  }
  exec("sudo mvn site -Dallure.results_pattern=allure-results && sudo mvn jetty:run -Djetty.port=6905",puts);
  //exec("mvn jetty:run -Djetty.port=6900",puts);
  var startTimes = Date.now();
  while(Date.now() - startTimes < 60000){

  }
  /*exec("sudo mvn jetty:run -Djetty.port=6910",puts);
  var startTimes = Date.now();
  while(Date.now() - startTimes < 6000){

  }*/
}

/*function allure_report(){

console.log('Generating allure reports from xml port:6900 ');
//console.log('If at time there is some issue in report deployment or reports are not available');

var sys = require('util');
var exec = require('child_process').exec;

function puts(error,stdout,stderr){
  sys.puts(stdout)
}
exec("sudo mvn jetty:run -Djetty.port=6910",puts);
var startTimes = Date.now();
while(Date.now() - startTimes < 6000){

}
}*/

//Function created for sending Mail through node mailer 
function send_mail (){
console.log("Sending Mail with reports for the test execution.");
var sys = require('util');
var exec = require('child_process').exec;

function puts(error,stdout,stderr){
  sys.puts(stdout)
}
exec("node mail.js",puts);
//exec("ls -la", puts);
}

exports.config = {

framework: 'jasmine2',
//specs: ['./test_spec/AddloginInfotest.spec.js'],



suites: {
  //all:['./*/*.spec.js']
  selected:['./test_spec/MaterialsEdittest.spec.js']
}, 

        
getPageTimeout: 120000,
    
allScriptsTimeout: 120000,

onPrepare:function(){
     
  //Add a screenshot reporter and store screenshots to '/Reports':
    //var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
    var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
    jasmine.getEnv().addReporter(new HtmlScreenshotReporter({
        dest:'./Reports',
        filename: 'report.html'
    }));

    jasmine.getEnv().afterEach(function(done){
      browser.takeScreenshot().then(function (png) {
         allure.createAttachment('Screenshot', function () {
             return new Buffer(png, 'base64')
         }, 'image/png')();
         done();
      })
    });


  //Delete old Allure Report and files for fresh execution 
    console.log('Deleting old allure reports and files');
    var sys = require('util')
    var exec = require('child_process').exec;

    function puts(error,stdout,stderr){
      sys.puts(stdout)
    }

    exec("RD /S /Q allure-results",puts);
    exec("RD /S /Q target",puts);

  //Generate Allure Report and Capture ScreenShots
    //var AllureReporter = require('jasmine-allure-reporter');
    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
        allureReport:{
            resultsDir: './allure-results/'
        }
    }));
 

  //stop jetty server  if already started in previous session 
    console.log ('Stopping jetty server if any previous instance is running on port 6900.');

    exec("mvn jetty:stop -Djetty.port=6905", puts);
    var startTimer = Date.now();
    while (Date.now() - startTimer < 10000){

    }

},
 //onComplete - Execution after completion of test cases ,Generate Reports ,Start Jetty server 
 //and send Mails

onComplete:function(){
    allure_report_jetty_deploy();
    //allure_report();
    send_mail();
},
  
 
jasmineNodeOpts:{
      // onComplete will be called just before the driver quits.
    onComplete: null,
     // If true, display spec names.
    isVerbose: true,
      // If true, print colors to the terminal.
    showColors: true,
      // If true, include stack traces in failures.
    includeStackTrace: true,
      // Default time to wait in ms before a test fails.
    defaultTimeoutInterval: 2500000
},

//	directConnect : true,

capabilities:
{
    'browserName':'chrome',
    //'pageLoadStrategy' :'normal',
    chromeOptions: 
    {
     args: [ "--headless", "--disable-gpu", "--window-size=800x600"]
     //args: [ "--headless", "window-size=1920x1080","--debuggerAddress= 13.233.49.113:8080" ]
    }
    //'marionette': true
}


   
};
