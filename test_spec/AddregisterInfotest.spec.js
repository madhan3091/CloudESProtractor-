var base = require('../pages/Basepage.js');
var OR = require('../json/OR.json');
var home_page = require('../pages/HomePage.js');
var register_page=require('../pages/AddregisterDetails.js');  
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

    it("Negative case of Register",function(){

      
        var customer = home_page.RegisterAsCustomer();
        browser.sleep(3000);
        var register = register_page.addregisterInfo(OR.locators.addregister.testdata1.Cname,OR.locators.addregister.testdata1.uname,OR.locators.addregister.testdata1.email,OR.locators.addregister.testdata1.code,OR.locators.addregister.testdata1.phno,OR.locators.addregister.testdata1.area,OR.locators.addregister.testdata1.ad1,OR.locators.addregister.testdata1.ad2,OR.locators.addregister.testdata1.city,OR.locators.addregister.testdata1.pcode,OR.locators.addregister.testdata1.ccode);
        expect(element(by.css(OR.locators.addregister.registerfail)).getText()).toEqual(OR.locators.addregister.testdata1.failedregister);
        logger.log('info','Register failure  message');
        //expect(element(by.className(OR.locators.addlogin.logout)).getText()).toEqual(OR.locators.addlogin.testdata.signoutbutton);
        //logger.log('info','signout button is displayin in landing page');
        var title = base.getPageTitle();
        expect(title).toBe("CloudES");
        browser.sleep(3000);

    });

    it("positive case of Register",function(){

        var customer = home_page.RegisterAsCustomer();
        browser.sleep(3000);
        var register = register_page.checkregisterInfo(OR.locators.addregister.testdata1.Cname,OR.locators.addregister.testdata1.uname,OR.locators.addregister.testdata1.Newemail,OR.locators.addregister.testdata1.code,OR.locators.addregister.testdata1.phno,OR.locators.addregister.testdata1.area,OR.locators.addregister.testdata1.ad1,OR.locators.addregister.testdata1.ad2,OR.locators.addregister.testdata1.city,OR.locators.addregister.testdata1.pcode,OR.locators.addregister.testdata1.ccode);
        expect(element(by.css(OR.locators.addregister.registersucess)).getText()).toEqual(OR.locators.addregister.testdata1.sucessregister);
        logger.log('info','Register sucess message');
        //expect(element(by.className(OR.locators.addlogin.logout)).getText()).toEqual(OR.locators.addlogin.testdata.signoutbutton);
        //logger.log('info','signout button is displayin in landing page');
        var title = base.getPageTitle();
        expect(title).toBe("CloudES");
        browser.sleep(3000);

    });
});