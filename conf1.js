
exports.config = {
 
    framework: 'jasmine2',
    specs: ['./test_spec/MaterialsEdittest.spec.js'],

    getPageTimeout: 120000,
    
    allScriptsTimeout: 120000,

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
    //directConnect: true,
    
    capabilities:{
        'browserName':'chrome',
        /*'pageLoadStrategy' :'normal',
        chromeOptions: 
        {
         // args: [ "--headless", "--disable-gpu", "--window-size=800*600","--debuggerAddress= 13.233.49.113:8080" ]
         args: [ "--headless", "window-size=1920x1080","--debuggerAddress= 13.233.49.113:8080" ]
        }*/
        //'marionette': true
        
    }
    
    
       
  };