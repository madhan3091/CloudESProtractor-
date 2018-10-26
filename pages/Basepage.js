/**created by selenium on 22/10/2018   ... */

var BasePage = function(){

    this.navigateToURL = function(url){

        browser.get(url);
    };
    this.getPageTitle= function(){

        return browser.getTitle();
    }
};
module.exports=new BasePage();