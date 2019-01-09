var OR = require('../json/OR.json');
var logger = require('../log'); 

console.log(OR);

var MaterialPage = function(){


    this.materialInfo = function(email,pass){


        element(by.id(OR.locators.addlogin.emailid)).sendKeys(email);
        element(by.id(OR.locators.addlogin.password)).sendKeys(pass);
        element(by.buttonText(OR.locators.addlogin.loginbutton)).click();
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            element.all(by.css(OR.locators.materialinfo.materialmenu)).click();
        })
        //browser.actions().mouseMove(element.all(by.css(OR.locators.materialinfo.materialmenu))).perform();

        element(by.className(OR.locators.materialinfo.matrialcard)).click();
        logger.log('info','Info tab screen');
        element(by.css(OR.locators.materialinfo.Editmaterial)).click();
        var uedit = element(by.model(OR.locators.materialinfo.username));
        uedit.clear();
        uedit.sendKeys("Test");
        expect(uedit.getAttribute('value')).toBe('Test'); 
        var unit =element(by.className(OR.locators.materialinfo.unit));
        expect(unit.getText()).toBe('SQ.MT'); 
        var period = element(by.model(OR.locators.materialinfo.period));
        expect(period.getAttribute('value')).toBe('90'); 
        var maintencedate = element(by.className(OR.locators.materialinfo.Mdate));
        expect(maintencedate.getText()).toEqual('Feb 3, 2019');
        var suppliers = element(by.id(OR.locators.materialinfo.supplier));
        expect(suppliers.getAttribute('value')).toBe('null');
        element(by.css(OR.locators.materialinfo.Nexttab)).click();
        var currency = element(by.id(OR.locators.materialinfo.currency));
        expect(currency.getText()).toEqual('DKK - Danish krone');
        var factor = element(by.model(OR.locators.materialinfo.conversfactor));
        expect(factor.getAttribute('value')).toBe('1.00');
        var cost = element(by.model(OR.locators.materialinfo.materialcost));
        expect(cost.getAttribute('value')).toBe('4.00');
        var worker = element(by.model(OR.locators.materialinfo.workercost));
        expect(worker.getAttribute('value')).toBe('3.00');
        element(by.css(OR.locators.materialinfo.update)).click();
        return this;
    }



};
module.exports=new MaterialPage();