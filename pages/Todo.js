var OR = require('../json/OR.json');
var logger = require('../log'); 
var SelectWrapper = require('../util/select-wrapper.js');

console.log(OR);

var TodoPage = function(){

    this.todo_create = function(email,pass){
        
        element(by.id(OR.locators.addlogin.emailid)).sendKeys(email);
        element(by.id(OR.locators.addlogin.password)).sendKeys(pass);
        element(by.buttonText(OR.locators.addlogin.loginbutton)).click();
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            element(by.css(OR.locators.ToDo.view)).click();
            browser.sleep('6000');
        })
        element(by.xpath(OR.locators.ToDo.create)).click();
        browser.sleep('6000');
        element(by.model(OR.locators.ToDo.title)).sendKeys(OR.locators.ToDo.testdata3.title1);
        browser.sleep('3000');
        element(by.model(OR.locators.ToDo.describe)).sendKeys(OR.locators.ToDo.testdata3.describe1);
        browser.sleep('3000');
        element(by.model(OR.locators.ToDo.calendar)).sendKeys(OR.locators.ToDo.testdata3.calendar1);
        browser.sleep('3000');
        var mySelect = new SelectWrapper(by.model(OR.locators.ToDo.assignedto));
        mySelect.selectByText(OR.locators.ToDo.testdata3.Assigned1);
        mySelect.selectByText(OR.locators.ToDo.testdata3.Assigned2);
        browser.sleep("3000");
        element(by.css(OR.locators.ToDo.popupcreate)).click();
        browser.sleep('3000');

        
    }

    this.todo_edit = function(email1,pass1){
        
        element(by.id(OR.locators.addlogin.emailid)).sendKeys(email1);
        element(by.id(OR.locators.addlogin.password)).sendKeys(pass1);
        element(by.buttonText(OR.locators.addlogin.loginbutton)).click();
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            element(by.css(OR.locators.ToDo.view)).click();
            browser.sleep('6000');
        })
        element(by.className(OR.locators.ToDo.card)).click();
        browser.sleep('5000');
        element(by.css("span.slider.round")).click();
        browser.sleep('5000');

    }
    this.todo_reopen = function(email2,pass2){
        
        element(by.id(OR.locators.addlogin.emailid)).sendKeys(email2);
        element(by.id(OR.locators.addlogin.password)).sendKeys(pass2);
        element(by.buttonText(OR.locators.addlogin.loginbutton)).click();
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            element(by.css(OR.locators.ToDo.view)).click();
            browser.sleep('6000');
        })
        element(by.className(OR.locators.ToDo.card)).click();
        browser.sleep('5000');
        element(by.css("span.slider.round")).click();
        browser.sleep('5000');

    }

    this.todo_cancel = function(email3,pass3){
        
        element(by.id(OR.locators.addlogin.emailid)).sendKeys(email3);
        element(by.id(OR.locators.addlogin.password)).sendKeys(pass3);
        element(by.buttonText(OR.locators.addlogin.loginbutton)).click();
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            element(by.css(OR.locators.ToDo.view)).click();
            browser.sleep('6000');
        })
        element(by.xpath(OR.locators.ToDo.create)).click();
        browser.sleep('6000');
        element(by.model(OR.locators.ToDo.title)).sendKeys(OR.locators.ToDo.testdata3.title1);
        browser.sleep('3000');
        element(by.model(OR.locators.ToDo.describe)).sendKeys(OR.locators.ToDo.testdata3.describe1);
        browser.sleep('3000');
        element(by.model(OR.locators.ToDo.calendar)).sendKeys(OR.locators.ToDo.testdata3.calendar1);
        browser.sleep('3000');
        var mySelect = new SelectWrapper(by.model(OR.locators.ToDo.assignedto));
        mySelect.selectByText(OR.locators.ToDo.testdata3.Assigned1);
        mySelect.selectByText(OR.locators.ToDo.testdata3.Assigned2);
        browser.sleep("3000");
        element(by.className(OR.locators.ToDo.popupcancel)).click();
        browser.sleep('3000');
    }
    this.todo_view = function(email4,pass4){
        
        element(by.id(OR.locators.addlogin.emailid)).sendKeys(email4);
        element(by.id(OR.locators.addlogin.password)).sendKeys(pass4);
        element(by.buttonText(OR.locators.addlogin.loginbutton)).click();
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            element(by.className(OR.locators.ToDo.viewitem)).click();
            browser.sleep('6000');
        })

    }
    this.todo_field = function(email5,pass5){
        
        element(by.id(OR.locators.addlogin.emailid)).sendKeys(email5);
        element(by.id(OR.locators.addlogin.password)).sendKeys(pass5);
        element(by.buttonText(OR.locators.addlogin.loginbutton)).click();
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            element(by.css(OR.locators.ToDo.view)).click();
            browser.sleep('6000');
        })
        element(by.xpath(OR.locators.ToDo.create)).click();
        browser.sleep('6000');
        element(by.model(OR.locators.ToDo.title)).sendKeys(OR.locators.ToDo.testdata3.title1);
        browser.sleep('3000');
        element(by.css(OR.locators.ToDo.popupcreate)).click();
        expect(element(by.css(OR.locators.ToDo.invalid)).getText()).toEqual(OR.locators.ToDo.testdata3.Errormessage);
        element(by.model(OR.locators.ToDo.describe)).sendKeys(OR.locators.ToDo.testdata3.describe1);
        browser.sleep('3000');
        element(by.css(OR.locators.ToDo.popupcreate)).click();
        expect(element(by.css(OR.locators.ToDo.invalid)).getText()).toEqual(OR.locators.ToDo.testdata3.Errormessage);
        element(by.model(OR.locators.ToDo.calendar)).sendKeys(OR.locators.ToDo.testdata3.calendar1);
        browser.sleep('3000');
        element(by.css(OR.locators.ToDo.popupcreate)).click();
        expect(element(by.css(OR.locators.ToDo.invalid)).getText()).toEqual(OR.locators.ToDo.testdata3.Errormessage);
        var mySelect = new SelectWrapper(by.model(OR.locators.ToDo.assignedto));
        mySelect.selectByText(OR.locators.ToDo.testdata3.Assigned1);
        browser.sleep("3000");
        element(by.css(OR.locators.ToDo.popupcreate)).click();
        browser.sleep('3000');
    }




};
module.exports=new TodoPage();


















