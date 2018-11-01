/**created by selenium on 1/11/2018   ... */


var OR = require('../json/OR.json');

console.log(OR);

var RegisterPage = function(){

    this.addregisterInfo = function(company,user,email,code,phone,text,address_1,address_2,city,pcode,country)
    
    {

        element(by.id(OR.locators.addregister.companyname)).sendKeys(company);
        element(by.id(OR.locators.addregister.username)).sendKeys(user);
        element(by.id(OR.locators.addregister.emailid)).sendKeys(email);
        element(by.id(OR.locators.addregister.code)).sendKeys(code);
        element(by.id(OR.locators.addregister.Phoneno)).sendKeys(phone);
        element(by.id(OR.locators.addregister.textarea)).sendKeys(text);
        element(by.id(OR.locators.addregister.address1)).sendKeys(address_1);
        element(by.id(OR.locators.addregister.address2)).sendKeys(address_2);
        element(by.id(OR.locators.addregister.city)).sendKeys(city);
        element(by.id(OR.locators.addregister.postcode)).sendKeys(pcode);
        element(by.id(OR.locators.addregister.Countrycode)).sendKeys(country);
        element(by.className(OR.locators.addregister.registerbutton)).click();
        return this;


    }
    
    this.checkregisterInfo = function(company1,user1,email1,code1,phone1,text1,address_11,address_21,city1,pcode1,country1)
    
    {

        element(by.id(OR.locators.addregister.companyname)).sendKeys(company1);
        element(by.id(OR.locators.addregister.username)).sendKeys(user1);
        element(by.id(OR.locators.addregister.newemail)).sendKeys(email1);
        element(by.id(OR.locators.addregister.code)).sendKeys(code1);
        element(by.id(OR.locators.addregister.Phoneno)).sendKeys(phone1);
        element(by.id(OR.locators.addregister.textarea)).sendKeys(text1);
        element(by.id(OR.locators.addregister.address1)).sendKeys(address_11);
        element(by.id(OR.locators.addregister.address2)).sendKeys(address_21);
        element(by.id(OR.locators.addregister.city)).sendKeys(city1);
        element(by.id(OR.locators.addregister.postcode)).sendKeys(pcode1);
        element(by.id(OR.locators.addregister.Countrycode)).sendKeys(country1);
        element(by.className(OR.locators.addregister.registerbutton)).click();
        return this;


    }





};
module.exports=new RegisterPage();