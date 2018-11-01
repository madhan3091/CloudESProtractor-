/**created by selenium on 22/10/2018   ... */

    var base = require('../pages/Basepage.js');
    var OR = require('../json/OR.json');
    var home_page = require('../pages/HomePage.js');

describe("Customer login Test ",function(){

    beforeEach(function() {
      browser.driver.manage().window().maximize();
      base.navigateToURL(OR.testsiteurl);
    });
    afterEach(function(){
      browser.executeScript('window.localStorage.clear();');
      browser.executeScript('window.sessionStorage.clear();');
      browser.driver.manage().deleteAllCookies(); 
    });


   it("Login as a customer",function(){
       
     base.navigateToURL(OR.testsiteurl);
     var customer = home_page.LoginAsCustomer();
     //var register = home_page.RegisterAsCustomer();
     var title = base.getPageTitle();
     expect(title).toBe("CloudES")
     browser.sleep(3000);
   });

   it("Register as a customer",function(){
       
    base.navigateToURL(OR.testsiteurl);
    var register = home_page.RegisterAsCustomer();
    browser.sleep(3000);
  });



});