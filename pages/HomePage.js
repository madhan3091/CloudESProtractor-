/**created by selenium on 22/10/2018   ... */
var OR = require('../json/OR.json');

var HomePage = function(){

    this.LoginAsCustomer=function(){
   
        element(by.className(OR.locators.homepage.classnameLogin)).click();
        return this;
    };

    this.RegisterAsCustomer=function(){
   
        element(by.className(OR.locators.homepage.classnameRegister)).click();
        return this;
    };

};
module.exports=new HomePage();