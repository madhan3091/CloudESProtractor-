var OR = require('../json/OR.json');
var base = require('../pages/Basepage.js');
var logger = require('../log'); 
var home_page = require('../pages/HomePage.js');
var login_page=require('../pages/AddloginDetails.js');  
var SelectWrapper = require('../util/select-wrapper.js');

describe("Internal links checking",function(){

    
    beforeEach(function() {
        browser.driver.manage().window().maximize();
        base.navigateToURL(OR.testsiteurl);

    });
    afterEach(function(){
        browser.executeScript('window.localStorage.clear();');
        browser.executeScript('window.sessionStorage.clear();');
        browser.driver.manage().deleteAllCookies(); 
    });

    it("Verify the all links in before login  ",function(){

        
        element(by.className("calculation icon")).click();
        browser.sleep(3000);
        //expect(element(by.className("btn btn-default btn-block")).getText()).toEqual("LOGIN");
        element(by.className("close")).click();
        console.log("finish");
        browser.sleep(3000);
        element(by.className("employee")).click();
        browser.sleep(3000);
        expect(element(by.css("[ng-click='vm.regsiterModal()']")).getText()).toEqual("REGISTER");
        element(by.className("close")).click();
        browser.sleep(3000);
        element(by.className("btn rounded-0 text-white btn-cyan text-uppercase d-block")).click();
        browser.sleep(3000);
        expect(element(by.css("[ng-click='vm.regsiterModal()']")).getText()).toEqual("REGISTER");
        element(by.className("close")).click();
        browser.sleep(3000);
        element(by.className("btn rounded-0 text-white btn-yellow text-uppercase d-block")).click();
        browser.sleep(3000);
        expect(element(by.css("[ng-click='vm.forgotPassModal()']")).getText()).toEqual("Forgot your password");
        element(by.className("close")).click();
        browser.sleep(3000);
        logger.log('info','clicking material ison');
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            element(by.className("material icon")).click();
            browser.sleep(3000);
        })
        expect(element(by.css("[ng-click='vm.forgotPassModal()']")).getText()).toEqual("Forgot your password");
        element(by.className("close")).click();
        browser.sleep(3000);
        element(by.className("equipments icon")).click();
        browser.sleep(3000);
        expect(element(by.css("[ng-click='vm.regsiterModal()']")).getText()).toEqual("REGISTER");
        element(by.className("close")).click();
        browser.sleep(3000);
        element(by.className("py-2 d-block mt-auto  text-center")).click();
        browser.sleep(3000);
        expect(element(by.css("[ng-click='vm.regsiterModal()']")).getText()).toEqual("REGISTER");
        element(by.className("close")).click();
        browser.sleep(3000);
        element(by.className("btn btn-primary btn-sm")).click();
        browser.sleep(3000);
        expect(element(by.css("[ng-click='vm.regsiterModal()']")).getText()).toEqual("REGISTER");
        element(by.className("close")).click();
        browser.sleep(3000);
        browser.executeScript('window.scrollTo(0,-250);').then(function () {
            element(by.className("3d icon")).click();
            browser.sleep(3000);
        })
        expect(element(by.css("[ng-click='vm.regsiterModal()']")).getText()).toEqual("REGISTER");
        element(by.className("close")).click();
        browser.sleep(3000);

    });
    it("Verify the all links in after login  ",function(){


        var customer = home_page.LoginAsCustomer();
        browser.sleep(3000);
        var login = login_page.addloginInfo(OR.locators.addlogin.testdata.email,OR.locators.addlogin.testdata.pword);
        expect(element(by.className(OR.locators.addlogin.logout)).getText()).toEqual(OR.locators.addlogin.testdata.signoutbutton);
        logger.log('info','signout button is displayin in landing page');
        browser.sleep("3000");
        var mySelect = new SelectWrapper(by.id("selectProject"));
        mySelect.selectByText('March Project');
        browser.sleep("3000");
        element(by.className("calculation icon")).click();
        browser.waitForAngular();
        browser.navigate().back();
        browser.sleep(3000);
        element(by.className("employee")).click();
        browser.waitForAngular();
        browser.navigate().back();
        browser.sleep(3000);
        element(by.xpath("//*[text()='Create a Project ']")).click();
        browser.waitForAngular();
        browser.navigate().back();
        browser.sleep(3000);
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            element(by.className("material icon")).click();
        })
        browser.waitForAngular();
        browser.navigate().back();
        browser.sleep(3000);
        element(by.className("equipments icon")).click();
        browser.waitForAngular();
        browser.navigate().back();
        browser.sleep(3000);
        element(by.className("py-2 d-block mt-auto  text-center")).click();
        browser.waitForAngular();
        browser.navigate().back();
        browser.sleep(3000);
        element(by.className("btn btn-primary btn-sm")).click();
        browser.waitForAngular();
        browser.navigate().back();
        browser.sleep(3000);
        browser.executeScript('window.scrollTo(0,-250);').then(function () {
            element(by.className("3d icon")).click();
        })
        browser.waitForAngular();
        browser.navigate().back();
        browser.sleep(3000);


    });
});