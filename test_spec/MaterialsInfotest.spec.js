var base = require('../pages/Basepage.js');
var OR = require('../json/OR.json');
var home_page = require('../pages/HomePage.js');
var material_page=require('../pages/MaterialDetails.js');  
var material_edit=require('../pages/materialEdit.js');  
var logger = require('../log'); 

describe("Material crud",function(){

    
    beforeEach(function() {
        browser.driver.manage().window().maximize();
        base.navigateToURL(OR.testsiteurl);
    });
    afterEach(function(){
        browser.executeScript('window.localStorage.clear();');
        browser.executeScript('window.sessionStorage.clear();');
        browser.driver.manage().deleteAllCookies(); 
    });
    /*
    Test case 1:
        1.Navigate to landing page.
        2.Click on login button.
        3. Verify if the user is being directed to login page.
        4.Enter valid credentials and Click Login 
        5.Once the user has landed on Dashboard Click on Materials Icon
        6. verify if the user is being directed to Materials list screen
        7. Click on any material, when u will be directed to the material details Screen.
        8. click on Edit material button , where the pop up will appear verify if the material detail section is opened up on the first visit.
        9. Verify if the fields are pre-filled with the existing details, click on set cost tab and make sure the existing details are filled.
        10. Now clear the pre-filled details and update it with the given  valid data and  click Update "*/

    it("verify the pre filled Material information ",function(){

        var customer = home_page.LoginAsCustomer();
        browser.sleep(3000);
        var material = material_page.materialInfo(OR.locators.addlogin.testdata.email,OR.locators.addlogin.testdata.pword);
        expect(element(by.css(OR.locators.materialinfo.updatemessage)).getText()).toEqual(OR.locators.materialinfo.testdata2.sucessmessage);
        logger.log('info','verify the prefilled value in edit field ');   

    });

       

   
   



});