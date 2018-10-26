/**created by selenium on 24/10/2018   ... */


var OR = require('../json/OR.json');

console.log(OR);
var LoginPage = function(){


    this.addloginInfo = function(email,pass){
    
        element(by.id(OR.locators.addlogin.emailid)).sendKeys(email);
        element(by.id(OR.locators.addlogin.password)).sendKeys(pass);
        element(by.buttonText(OR.locators.addlogin.loginbutton)).click();
        return this;
     
    }

    this.checklogininfo= function(email1,pass1){
        
        element(by.id(OR.locators.addlogin.emailid)).sendKeys(email1);
        element(by.id(OR.locators.addlogin.password)).sendKeys(pass1);
        element(by.buttonText(OR.locators.addlogin.loginbutton)).click();
        return this;

    }



};
module.exports=new LoginPage();