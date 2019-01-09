
var base = require('../pages/Basepage.js');
var OR = require('../json/OR.json');
var home_page = require('../pages/HomePage.js');
var material_edit=require('../pages/materialEdit.js');  
var logger = require('../log'); 

describe("Material crud operation - ",function(){

    
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

    xit("verify Edit the Material information and update ",function(){


        var customer = home_page.LoginAsCustomer();
        browser.sleep(3000);
        var material = material_edit.editUpdate(OR.locators.addlogin.testdata.email,OR.locators.addlogin.testdata.pword);
        expect(element(by.css(OR.locators.materialinfo.updatemessage)).getText()).toEqual(OR.locators.materialinfo.testdata2.sucessmessage);
        logger.log('info','verify the prefilled value in edit field ');   

    });
    xit("verify Edit the Material information and cancel the pop-up screen ",function(){


        var customer = home_page.LoginAsCustomer();
        browser.sleep(3000);
        var material = material_edit.edit_cancel(OR.locators.addlogin.testdata.email,OR.locators.addlogin.testdata.pword);


    });
    xit("verify Edit the Material information and uploaded the documents",function(){


        var customer = home_page.LoginAsCustomer();
        browser.sleep('3000');
        var material = material_edit.editattachdoc(OR.locators.addlogin.testdata.email,OR.locators.addlogin.testdata.pword);
        element(by.xpath(OR.locators.materialinfo.filetab)).click();
        browser.sleep('3000');
        expect(element(by.className(OR.locators.materialinfo.document)).getText()).toEqual(OR.locators.materialinfo.testdata2.docname);


    });
    xit("verify Edit the Material information delete the documents and update the form",function(){


        var customer = home_page.LoginAsCustomer();
        browser.sleep('3000');
        var material = material_edit.edit_delete(OR.locators.addlogin.testdata.email,OR.locators.addlogin.testdata.pword);
        element(by.xpath(OR.locators.materialinfo.filetab)).click();
        browser.sleep('3000');
        expect(element(by.className(OR.locators.materialinfo.Nodocuments)).getText()).toEqual(OR.locators.materialinfo.testdata2.Notavailable);


    });
    xit("verify Edit the Material information description added in file and update the form",function(){


        var customer = home_page.LoginAsCustomer();
        browser.sleep('3000');
        var material = material_edit.edit_writeup(OR.locators.addlogin.testdata.email,OR.locators.addlogin.testdata.pword);


    });
    xit("verify Edit the Material information delete the documents and update the form",function(){


        var customer = home_page.LoginAsCustomer();
        browser.sleep('3000');
        var material = material_edit.edit_imgdel(OR.locators.addlogin.testdata.email,OR.locators.addlogin.testdata.pword);
        expect(element(by.className(OR.locators.materialinfo.img)).getText()).toContain(OR.locators.materialinfo.testdata2.empty);


    });
    xit("verify Edit the Material information downloaded documents on Attachments tab",function(){


        var customer = home_page.LoginAsCustomer();
        browser.sleep('3000');
        var material = material_edit.edit_downl(OR.locators.addlogin.testdata.email,OR.locators.addlogin.testdata.pword);
        //expect(element(by.className(OR.locators.materialinfo.img)).getText()).toContain(OR.locators.materialinfo.testdata2.empty);


    });
    it("verify admin can able to create add materials",function(){


        var customer = home_page.LoginAsCustomer();
        browser.sleep('3000');
        var material = material_edit.add_material(OR.locators.addlogin.testdata.email,OR.locators.addlogin.testdata.pword);
        expect(element.all(by.className("headTwo txtblack mb-0 text-sm-left f700 ng-binding")).getText()).toContain("sanity");


    });
    xit("verify admin can able to create add materials and cancel pop-up screen",function(){


        var customer = home_page.LoginAsCustomer();
        browser.sleep('3000');
        var material = material_edit.add_materialcancel(OR.locators.addlogin.testdata.email,OR.locators.addlogin.testdata.pword);
        //expect(element.all(by.className("headTwo txtblack mb-0 text-sm-left f700 ng-binding")).getText()).toContain("sanity");


    });
    xit("verify admin can able to sort by on material name,created date and system tag",function(){


        var customer = home_page.LoginAsCustomer();
        browser.sleep('3000');
        var material = material_edit.add_materialsort(OR.locators.addlogin.testdata.email,OR.locators.addlogin.testdata.pword);
        //expect(element.all(by.className("headTwo txtblack mb-0 text-sm-left f700 ng-binding")).getText()).toContain("sanity");


    });

       

   
   



});