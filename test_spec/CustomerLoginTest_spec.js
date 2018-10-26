/**created by selenium on 22/10/2018   ... */

    var base = require('../pages/Basepage.js');
    var OR = require('../json/OR.json');

describe("Customer login Test ",function(){

  var home_page = require('../pages/HomePage.js');

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