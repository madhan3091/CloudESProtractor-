/**created by selenium on 24/10/2018   ... */


var base = require('../pages/Basepage.js');
var OR = require('../json/OR.json');
var home_page = require('../pages/HomePage.js');
var login_page=require('../pages/AddloginDetails.js');  
var logger = require('../log');    

describe("Login in the account ",function(){

    
    beforeEach(function() {
        browser.driver.manage().window().maximize();
        base.navigateToURL(OR.testsiteurl);
    });
    afterEach(function(){
        browser.executeScript('window.localStorage.clear();');
        browser.executeScript('window.sessionStorage.clear();');
        browser.driver.manage().deleteAllCookies(); 
    });

    it("Positive case of login",function(){

      
        var customer = home_page.LoginAsCustomer();
        browser.sleep(3000);
        var login = login_page.addloginInfo(OR.locators.addlogin.testdata.email,OR.locators.addlogin.testdata.pword);
        expect(element(by.css(OR.locators.addlogin.loginsuccess)).getText()).toEqual(OR.locators.addlogin.testdata.loginsuccessmessage);
        logger.log('info','Login succes  message');
        expect(element(by.className(OR.locators.addlogin.logout)).getText()).toEqual(OR.locators.addlogin.testdata.signoutbutton);
        logger.log('info','signout button is displayin in landing page');
        var title = base.getPageTitle();
        expect(title).toBe("CloudES");
        browser.sleep(3000);

    });

    it("Negative case of login",function(){

      
        var customer = home_page.LoginAsCustomer();
        browser.sleep(3000);
        var logintest = login_page.checklogininfo(OR.locators.addlogin.testdata.invemail,OR.locators.addlogin.testdata.pword);
        expect(element(by.css(OR.locators.addlogin.invalidemail)).getText()).toEqual(OR.locators.addlogin.testdata.failedemailmessage);
        logger.log('info','invalid email  message');
        expect(element(by.css(OR.locators.addlogin.successmessage)).getText()).toBe(OR.locators.addlogin.testdata.failedlogin);
        logger.log('info','invalid email  message');
        var title = base.getPageTitle();
        expect(title).toBe("CloudES");
        browser.sleep(3000);
    });


});
   


