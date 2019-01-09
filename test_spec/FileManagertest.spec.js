var base = require('../pages/Basepage.js');
var OR = require('../json/OR.json');
var home_page = require('../pages/HomePage.js');
var File_Manager=require('../pages/Filemanager.js');  
var logger = require('../log'); 
var SelectWrapper = require('../util/select-wrapper.js');


describe("FileManager module cases -",function(){

    beforeEach(function() {
        browser.driver.manage().window().maximize();
        base.navigateToURL(OR.testsiteurl);
    });
    afterEach(function(){
        browser.executeScript('window.localStorage.clear();');
        browser.executeScript('window.sessionStorage.clear();');
        browser.driver.manage().deleteAllCookies(); 
    });

    xit("verify the admin can able to create the foldername ",function(){

        var customer = home_page.LoginAsCustomer();
        browser.sleep("3000");
        var todo = File_Manager.filemanager_create(OR.locators.addlogin.testdata.email,OR.locators.addlogin.testdata.pword);
        expect(element(by.css(OR.locators.Filemanager.valid)).getText()).toContain(OR.locators.Filemanager.testdata5.successmessage);
        element.all(by.className(OR.locators.Filemanager.listfolder)).then(function(itemList) 
        {
            console.log("Total values in dropdown are: " + itemList.length);
            for (i = 0; i < itemList.length; i++) {
              itemList[i].getText().then(function(text) {
                console.log(text);
                if (text == "beta testing") {
                  console.log('Match');
                  expect(text).toEqual("beta testing");
                } else {
                  console.log('No Match');
                };
              });
            };
        });
        
    });
    xit("verify the admin can able enter the foldername and close pop-up screen ",function(){

        var customer = home_page.LoginAsCustomer();
        browser.sleep("3000");
        var todo = File_Manager.filemanager_close(OR.locators.addlogin.testdata.email,OR.locators.addlogin.testdata.pword);

    });
    xit("verify the admin can able to upload file in the folder",function(){

        var customer = home_page.LoginAsCustomer();
        browser.sleep("3000");
        var todo = File_Manager.filemanager_upload(OR.locators.addlogin.testdata.email,OR.locators.addlogin.testdata.pword);
        expect(element(by.css(OR.locators.Filemanager.valid1)).getText()).toContain(OR.locators.Filemanager.testdata5.filesuccess);

    });
    xit("verify the admin can able to upload file in the folder and close the pop-up screen",function(){

        var customer = home_page.LoginAsCustomer();
        browser.sleep("3000");
        var todo = File_Manager.filemanager_uploadclose(OR.locators.addlogin.testdata.email,OR.locators.addlogin.testdata.pword);

    });
    xit("verify the admin can able to upload file in the folder and enable the rooftop toggle",function(){

        var customer = home_page.LoginAsCustomer();
        browser.sleep("3000");
        var todo = File_Manager.filemanager_toggle(OR.locators.addlogin.testdata.email,OR.locators.addlogin.testdata.pword);
        expect(element(by.css(OR.locators.Filemanager.valid2)).getText()).toContain(OR.locators.Filemanager.testdata5.filesuccess);

    });
    xit("verify the admin can able to choose files and save it to the directory",function(){

        var customer = home_page.LoginAsCustomer();
        browser.sleep("3000");
        var todo = File_Manager.filemanager_choosefiles(OR.locators.addlogin.testdata.email,OR.locators.addlogin.testdata.pword);
        expect(element(by.css(OR.locators.Filemanager.valid2)).getText()).toContain(OR.locators.Filemanager.testdata5.choosefiles);

    });
    xit("verify the admin can able to choose files and close the pop-up screen",function(){

        var customer = home_page.LoginAsCustomer();
        browser.sleep("3000");
        var todo = File_Manager.filemanager_chooseclose(OR.locators.addlogin.testdata.email,OR.locators.addlogin.testdata.pword);
       
    });
    it("verify the admin click on Assign to select the template and save",function(){

        var customer = home_page.LoginAsCustomer();
        browser.sleep("3000");
        var todo = File_Manager.filemanager_template(OR.locators.addlogin.testdata.email,OR.locators.addlogin.testdata.pword);
        expect(element(by.css(OR.locators.Filemanager.valid2)).getText()).toContain(OR.locators.Filemanager.testdata5.template);
       
    });
    it("verify the admin click on Assign to select the template and close the pop-up screen",function(){

        var customer = home_page.LoginAsCustomer();
        browser.sleep("3000");
        var todo = File_Manager.filemanager_templateclose(OR.locators.addlogin.testdata.email,OR.locators.addlogin.testdata.pword);
     
    });
    
    









});


