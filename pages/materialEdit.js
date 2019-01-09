var OR = require('../json/OR.json');
var logger = require('../log'); 
var SelectWrapper  = require('../util/select-wrapper.js');
var remote = require('../node_modules/selenium-webdriver/remote');
var path = require('path');
console.log(OR);

var MaterialEdit= function(){


    this.editUpdate =  function(email,pass){


        element(by.id(OR.locators.addlogin.emailid)).sendKeys(email);
        element(by.id(OR.locators.addlogin.password)).sendKeys(pass);
        element(by.buttonText(OR.locators.addlogin.loginbutton)).click();
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            element.all(by.css(OR.locators.materialinfo.materialmenu)).click();
        })
        //browser.actions().mouseMove(element.all(by.css(OR.locators.materialinfo.materialmenu))).perform();
        //click the material  card
        element(by.className(OR.locators.materialinfo.matrialcard)).click();
        logger.log('info','Info tab screen');
        element(by.css(OR.locators.materialinfo.Editmaterial)).click();


        browser.setFileDetector(new remote.FileDetector());
        var fileToUpload = '../util/download.jpg',
        absolutePath = path.resolve(__dirname, fileToUpload);
        var fileElem = element.all(by.css('input[type="file"]'));
        

        fileElem.sendKeys(absolutePath);
        //element(by.id('uploadButton')).click();
        browser.sleep(3000);
        //upload the document 

      

        //Re-enter the username 
        var uedit = element(by.model(OR.locators.materialinfo.username));
        uedit.clear();
        uedit.sendKeys("Test");
        expect(uedit.getAttribute('value')).toBe('Test'); 

        var fileToUpload1 = '../util/Automation.pdf',
        absolutePath1 = path.resolve(__dirname, fileToUpload1);
        var fileElem1 = element(by.css('input[type="file"]'));
        fileElem1.sendKeys(absolutePath1);

       

        var unit =element(by.className(OR.locators.materialinfo.unit));
        unit.click();
        browser.sleep(3000);
        var select = element(by.css(OR.locators.materialinfo.droplist));
        select.click();
        logger.log('info','unit is edited');

        var period = element(by.model(OR.locators.materialinfo.period));
        period.clear();
        period.sendKeys("85");
        expect(period.getAttribute('value')).toBe('85'); 

        var maintencedate = element(by.className(OR.locators.materialinfo.Mdate));
        expect(maintencedate.getText()).toEqual('Mar 7, 2019');
        //browser.sleep(2000);

      
        var mySelect = new SelectWrapper(by.id(OR.locators.materialinfo.sup));
        mySelect.selectByText(OR.locators.materialinfo.sup1);
        browser.sleep("3000");
        element(by.xpath(OR.locators.materialinfo.Nexttab)).click();
        browser.sleep(3000);

        var mat= element(by.id(OR.locators.materialinfo.currency));
        mat.click();
        var search=element(by.id(OR.locators.materialinfo.currentsearch));
        search.sendKeys("aw");
        var list =element(by.css(OR.locators.materialinfo.searchedlist));
        list.click();
        ///expect(currency.getText()).toEqual('DKK - Danish krone');

        var factor = element(by.model(OR.locators.materialinfo.conversfactor));
        expect(factor.getAttribute('value')).toBe('0.27');
        browser.sleep('2000');

        var cost = element(by.model(OR.locators.materialinfo.materialcost));
        cost.clear();
        cost.sendKeys("5.00");
        expect(cost.getAttribute('value')).toBe('5.00');

        var worker = element(by.model(OR.locators.materialinfo.workercost));
        worker.clear();
        worker.sendKeys("4.00");
        expect(worker.getAttribute('value')).toBe('4.00');
        browser.sleep('6000');
        var test =element(by.xpath(OR.locators.materialinfo.update));
        test.click();
    }
    this.edit_cancel =  function(email1,pass1){


        element(by.id(OR.locators.addlogin.emailid)).sendKeys(email1);
        element(by.id(OR.locators.addlogin.password)).sendKeys(pass1);
        element(by.buttonText(OR.locators.addlogin.loginbutton)).click();
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            element.all(by.css(OR.locators.materialinfo.materialmenu)).click();
        })
        //browser.actions().mouseMove(element.all(by.css(OR.locators.materialinfo.materialmenu))).perform();
        
        //click the material  card
        element(by.className(OR.locators.materialinfo.matrialcard)).click();
        logger.log('info','Info tab screen');
        element(by.css(OR.locators.materialinfo.Editmaterial)).click();


        browser.setFileDetector(new remote.FileDetector());
        var fileToUpload = '../util/download.jpg',
        absolutePath = path.resolve(__dirname, fileToUpload);
        var fileElem = element.all(by.css('input[type="file"]'));
        fileElem.sendKeys(absolutePath);
        browser.sleep(3000);
        //upload the document 

        //Re-enter the username 
        var uedit = element(by.model(OR.locators.materialinfo.username));
        uedit.clear();
        uedit.sendKeys("Test123");
        expect(uedit.getAttribute('value')).toBe('Test123'); 

        var unit =element(by.className(OR.locators.materialinfo.unit));
        unit.click();
        browser.sleep(3000);
        var select = element(by.css(OR.locators.materialinfo.droplist));
        select.click();
        logger.log('info','unit is edited');

        var period = element(by.model(OR.locators.materialinfo.period));
        period.clear();
        period.sendKeys("86");
        expect(period.getAttribute('value')).toBe('86'); 

        var maintencedate = element(by.className(OR.locators.materialinfo.Mdate));
        expect(maintencedate.getText()).toEqual('Mar 8, 2019');
        //browser.sleep(2000);

        var mySelect = new SelectWrapper(by.id(OR.locators.materialinfo.sup));
        mySelect.selectByText(OR.locators.materialinfo.sup1);
        browser.sleep("3000");
        element(by.xpath(OR.locators.materialinfo.cancel)).click();
        browser.sleep(3000);
    }
    this.editattachdoc =  function(email2,pass2){


        element(by.id(OR.locators.addlogin.emailid)).sendKeys(email2);
        element(by.id(OR.locators.addlogin.password)).sendKeys(pass2);
        element(by.buttonText(OR.locators.addlogin.loginbutton)).click();
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            element.all(by.css(OR.locators.materialinfo.materialmenu)).click();
        })
        //browser.actions().mouseMove(element.all(by.css(OR.locators.materialinfo.materialmenu))).perform();
        //click the material  card
        element(by.className(OR.locators.materialinfo.matrialcard)).click();
        logger.log('info','Info tab screen');
        element(by.css(OR.locators.materialinfo.Editmaterial)).click();

        browser.setFileDetector(new remote.FileDetector());
        var fileToUpload = '../util/download.jpg',
        absolutePath = path.resolve(__dirname, fileToUpload);
        var fileElem = element.all(by.css('input[type="file"]'));
        

        fileElem.sendKeys(absolutePath);
        //element(by.id('uploadButton')).click();
        browser.sleep(3000);
 
        //Re-enter the username 
        var uedit = element(by.model(OR.locators.materialinfo.username));
        uedit.clear();
        uedit.sendKeys("Test");
        expect(uedit.getAttribute('value')).toBe('Test'); 
        browser.sleep('3000');

        element(by.className(OR.locators.materialinfo.deletedoc)).click();

        //browser.setFileDetector(new remote.FileDetector());
        var fileToUpload1 = '../util/Automation.pdf',
        absolutePath1 = path.resolve(__dirname, fileToUpload1);
        var fileElem1 = element.all(by.css('input[type="file"]'));
        fileElem1.sendKeys(absolutePath1);

    

        var unit =element(by.className(OR.locators.materialinfo.unit));
        unit.click();
        browser.sleep(3000);
        var select = element(by.css(OR.locators.materialinfo.droplist));
        select.click();
        logger.log('info','unit is edited');

        var period = element(by.model(OR.locators.materialinfo.period));
        period.clear();
        period.sendKeys("85");
        expect(period.getAttribute('value')).toBe('85'); 

        var maintencedate = element(by.className(OR.locators.materialinfo.Mdate));
        expect(maintencedate.getText()).toEqual('Mar 7, 2019');
        //browser.sleep(2000);

      
        var mySelect = new SelectWrapper(by.id(OR.locators.materialinfo.sup));
        mySelect.selectByText(OR.locators.materialinfo.sup1);
        browser.sleep("3000");
        element(by.xpath(OR.locators.materialinfo.Nexttab)).click();
        browser.sleep(3000);

        var mat= element(by.id(OR.locators.materialinfo.currency));
        mat.click();
        var search=element(by.id(OR.locators.materialinfo.currentsearch));
        search.sendKeys("aw");
        var list =element(by.css(OR.locators.materialinfo.searchedlist));
        list.click();
        ///expect(currency.getText()).toEqual('DKK - Danish krone');

        var factor = element(by.model(OR.locators.materialinfo.conversfactor));
        expect(factor.getAttribute('value')).toBe('0.27');
        browser.sleep('2000');

        var cost = element(by.model(OR.locators.materialinfo.materialcost));
        cost.clear();
        cost.sendKeys("5.00");
        expect(cost.getAttribute('value')).toBe('5.00');

        var worker = element(by.model(OR.locators.materialinfo.workercost));
        worker.clear();
        worker.sendKeys("4.00");
        expect(worker.getAttribute('value')).toBe('4.00');
        browser.sleep('6000');
        var test =element(by.xpath(OR.locators.materialinfo.update));
        test.click();
        browser.sleep('3000');
    }
    this.edit_cancel =  function(email1,pass1){


        element(by.id(OR.locators.addlogin.emailid)).sendKeys(email1);
        element(by.id(OR.locators.addlogin.password)).sendKeys(pass1);
        element(by.buttonText(OR.locators.addlogin.loginbutton)).click();
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            element.all(by.css(OR.locators.materialinfo.materialmenu)).click();
        })
        //browser.actions().mouseMove(element.all(by.css(OR.locators.materialinfo.materialmenu))).perform();
        
        //click the material  card
        element(by.className(OR.locators.materialinfo.matrialcard)).click();
        logger.log('info','Info tab screen');
        element(by.css(OR.locators.materialinfo.Editmaterial)).click();


        browser.setFileDetector(new remote.FileDetector());
        var fileToUpload = '../util/download.jpg',
        absolutePath = path.resolve(__dirname, fileToUpload);
        var fileElem = element.all(by.css('input[type="file"]'));
        fileElem.sendKeys(absolutePath);
        browser.sleep(3000);
        //upload the document 

        //Re-enter the username 
        var uedit = element(by.model(OR.locators.materialinfo.username));
        uedit.clear();
        uedit.sendKeys("Test123");
        expect(uedit.getAttribute('value')).toBe('Test123'); 

        var unit =element(by.className(OR.locators.materialinfo.unit));
        unit.click();
        browser.sleep(3000);
        var select = element(by.css(OR.locators.materialinfo.droplist));
        select.click();
        logger.log('info','unit is edited');

        var period = element(by.model(OR.locators.materialinfo.period));
        period.clear();
        period.sendKeys("86");
        expect(period.getAttribute('value')).toBe('86'); 

        var maintencedate = element(by.className(OR.locators.materialinfo.Mdate));
        expect(maintencedate.getText()).toEqual('Mar 8, 2019');
        //browser.sleep(2000);

        var mySelect = new SelectWrapper(by.id(OR.locators.materialinfo.sup));
        mySelect.selectByText(OR.locators.materialinfo.sup1);
        browser.sleep("3000");
        element(by.xpath(OR.locators.materialinfo.cancel)).click();
        browser.sleep(3000);
    }
    this.editattachdoc =  function(email2,pass2){


        element(by.id(OR.locators.addlogin.emailid)).sendKeys(email2);
        element(by.id(OR.locators.addlogin.password)).sendKeys(pass2);
        element(by.buttonText(OR.locators.addlogin.loginbutton)).click();
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            element.all(by.css(OR.locators.materialinfo.materialmenu)).click();
        })
        //browser.actions().mouseMove(element.all(by.css(OR.locators.materialinfo.materialmenu))).perform();
        //click the material  card
        element(by.className(OR.locators.materialinfo.matrialcard)).click();
        logger.log('info','Info tab screen');
        element(by.css(OR.locators.materialinfo.Editmaterial)).click();

        browser.setFileDetector(new remote.FileDetector());
        var fileToUpload = '../util/download.jpg',
        absolutePath = path.resolve(__dirname, fileToUpload);
        var fileElem = element.all(by.css('input[type="file"]'));
        

        fileElem.sendKeys(absolutePath);
        //element(by.id('uploadButton')).click();
        browser.sleep(3000);
 
        //Re-enter the username 
        var uedit = element(by.model(OR.locators.materialinfo.username));
        uedit.clear();
        uedit.sendKeys("Test");
        expect(uedit.getAttribute('value')).toBe('Test'); 
        browser.sleep('3000');

        element(by.className(OR.locators.materialinfo.deletedoc)).click();

        //browser.setFileDetector(new remote.FileDetector());
        var fileToUpload1 = '../util/Automation.pdf',
        absolutePath1 = path.resolve(__dirname, fileToUpload1);
        var fileElem1 = element.all(by.css('input[type="file"]'));
        fileElem1.sendKeys(absolutePath1);

    

        var unit =element(by.className(OR.locators.materialinfo.unit));
        unit.click();
        browser.sleep(3000);
        var select = element(by.css(OR.locators.materialinfo.droplist));
        select.click();
        logger.log('info','unit is edited');

        var period = element(by.model(OR.locators.materialinfo.period));
        period.clear();
        period.sendKeys("85");
        expect(period.getAttribute('value')).toBe('85'); 

        var maintencedate = element(by.className(OR.locators.materialinfo.Mdate));
        expect(maintencedate.getText()).toEqual('Mar 7, 2019');
        //browser.sleep(2000);

      
        var mySelect = new SelectWrapper(by.id(OR.locators.materialinfo.sup));
        mySelect.selectByText(OR.locators.materialinfo.sup1);
        browser.sleep("3000");
        element(by.xpath(OR.locators.materialinfo.Nexttab)).click();
        browser.sleep(3000);

        var mat= element(by.id(OR.locators.materialinfo.currency));
        mat.click();
        var search=element(by.id(OR.locators.materialinfo.currentsearch));
        search.sendKeys("aw");
        var list =element(by.css(OR.locators.materialinfo.searchedlist));
        list.click();
        ///expect(currency.getText()).toEqual('DKK - Danish krone');

        var factor = element(by.model(OR.locators.materialinfo.conversfactor));
        expect(factor.getAttribute('value')).toBe('0.27');
        browser.sleep('2000');

        var cost = element(by.model(OR.locators.materialinfo.materialcost));
        cost.clear();
        cost.sendKeys("5.00");
        expect(cost.getAttribute('value')).toBe('5.00');

        var worker = element(by.model(OR.locators.materialinfo.workercost));
        worker.clear();
        worker.sendKeys("4.00");
        expect(worker.getAttribute('value')).toBe('4.00');
        browser.sleep('6000');
        var test =element(by.xpath(OR.locators.materialinfo.update));
        test.click();
        browser.sleep('3000');
    }
    this.edit_delete =  function(email3,pass3){


        element(by.id(OR.locators.addlogin.emailid)).sendKeys(email3);
        element(by.id(OR.locators.addlogin.password)).sendKeys(pass3);
        element(by.buttonText(OR.locators.addlogin.loginbutton)).click();
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            element.all(by.css(OR.locators.materialinfo.materialmenu)).click();
        })
        //browser.actions().mouseMove(element.all(by.css(OR.locators.materialinfo.materialmenu))).perform();
        //click the material  card
        element(by.className(OR.locators.materialinfo.matrialcard)).click();
        logger.log('info','Info tab screen');
        element(by.css(OR.locators.materialinfo.Editmaterial)).click();
 
        //Re-enter the username 
        var uedit = element(by.model(OR.locators.materialinfo.username));
        uedit.clear();
        uedit.sendKeys("Test");
        expect(uedit.getAttribute('value')).toBe('Test'); 
        browser.sleep('3000');

        var elm = element(by.xpath(OR.locators.materialinfo.deletedoc));
        elm.isPresent().then(function(present) {
            element.all(by.className("btn btn-danger")).then(function(itemList) {
            console.log("Total values in dropdown are: " + itemList.length);
            if (present) {
                for (let elem of itemList)
                {
                    elm.click();
                    browser.sleep('3000');
                }
            }
            else {
                console.log('Element not present');
            }
        },  function(err) {
                console.info('No element is displayed');
            })

        });
        //for (i = 0; i < 2; i++){element(by.xpath(OR.locators.materialinfo.deletedoc)).click();}

        var unit =element(by.className(OR.locators.materialinfo.unit));
        unit.click();
        browser.sleep(3000);
        var select = element(by.css(OR.locators.materialinfo.droplist));
        select.click();
        logger.log('info','unit is edited');

        var period = element(by.model(OR.locators.materialinfo.period));
        period.clear();
        period.sendKeys("85");
        expect(period.getAttribute('value')).toBe('85'); 

        var maintencedate = element(by.className(OR.locators.materialinfo.Mdate));
        expect(maintencedate.getText()).toEqual('Mar 29, 2019');
        //browser.sleep(2000);

      
        var mySelect = new SelectWrapper(by.id(OR.locators.materialinfo.sup));
        mySelect.selectByText(OR.locators.materialinfo.sup1);
        browser.sleep("3000");
        element(by.xpath(OR.locators.materialinfo.Nexttab)).click();
        browser.sleep(3000);

        var mat= element(by.id(OR.locators.materialinfo.currency));
        mat.click();
        var search=element(by.id(OR.locators.materialinfo.currentsearch));
        search.sendKeys("aw");
        var list =element(by.css(OR.locators.materialinfo.searchedlist));
        list.click();
        ///expect(currency.getText()).toEqual('DKK - Danish krone');

        var factor = element(by.model(OR.locators.materialinfo.conversfactor));
        expect(factor.getAttribute('value')).toBe('0.27');
        browser.sleep('2000');

        var cost = element(by.model(OR.locators.materialinfo.materialcost));
        cost.clear();
        cost.sendKeys("5.00");
        expect(cost.getAttribute('value')).toBe('5.00');

        var worker = element(by.model(OR.locators.materialinfo.workercost));
        worker.clear();
        worker.sendKeys("4.00");
        expect(worker.getAttribute('value')).toBe('4.00');
        browser.sleep('6000');
        var test =element(by.xpath(OR.locators.materialinfo.update));
        test.click();
        browser.sleep('3000');
    }
    this.edit_writeup =  function(email4,pass4){


        element(by.id(OR.locators.addlogin.emailid)).sendKeys(email4);
        element(by.id(OR.locators.addlogin.password)).sendKeys(pass4);
        element(by.buttonText(OR.locators.addlogin.loginbutton)).click();
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            element.all(by.css(OR.locators.materialinfo.materialmenu)).click();
        })
        //browser.actions().mouseMove(element.all(by.css(OR.locators.materialinfo.materialmenu))).perform();
        //click the material  card
        element(by.className(OR.locators.materialinfo.matrialcard)).click();
        logger.log('info','Info tab screen');
        element(by.css(OR.locators.materialinfo.Editmaterial)).click();

        browser.setFileDetector(new remote.FileDetector());
        var fileToUpload = '../util/download.jpg',
        absolutePath = path.resolve(__dirname, fileToUpload);
        var fileElem = element.all(by.css('input[type="file"]'));
        fileElem.sendKeys(absolutePath);

        //Re-enter the username 
        var uedit = element(by.model(OR.locators.materialinfo.username));
        uedit.clear();
        uedit.sendKeys("Test");
        expect(uedit.getAttribute('value')).toBe('Test'); 
        browser.sleep('3000');

        element(by.xpath(OR.locators.materialinfo.Edit)).click();
        browser.sleep('3000');
        element(by.xpath(OR.locators.materialinfo.Editinput)).sendKeys(OR.locators.materialinfo.testdata2.sucessmessage);
        element(by.css(OR.locators.materialinfo.Editsave)).click();
        browser.sleep('3000');

        var unit =element(by.className(OR.locators.materialinfo.unit));
        unit.click();
        browser.sleep(3000);
        var select = element(by.css(OR.locators.materialinfo.droplist));
        select.click();
        logger.log('info','unit is edited');

        var period = element(by.model(OR.locators.materialinfo.period));
        period.clear();
        period.sendKeys("85");
        expect(period.getAttribute('value')).toBe('85'); 

        var maintencedate = element(by.className(OR.locators.materialinfo.Mdate));
        expect(maintencedate.getText()).toEqual('Mar 29, 2019');
        //browser.sleep(2000);

      
        var mySelect = new SelectWrapper(by.id(OR.locators.materialinfo.sup));
        mySelect.selectByText(OR.locators.materialinfo.sup1);
        browser.sleep("3000");
        element(by.xpath(OR.locators.materialinfo.Nexttab)).click();
        browser.sleep(3000);

        var mat= element(by.id(OR.locators.materialinfo.currency));
        mat.click();
        var search=element(by.id(OR.locators.materialinfo.currentsearch));
        search.sendKeys("aw");
        var list =element(by.css(OR.locators.materialinfo.searchedlist));
        list.click();
        ///expect(currency.getText()).toEqual('DKK - Danish krone');

        var factor = element(by.model(OR.locators.materialinfo.conversfactor));
        expect(factor.getAttribute('value')).toBe('0.27');
        browser.sleep('2000');

        var cost = element(by.model(OR.locators.materialinfo.materialcost));
        cost.clear();
        cost.sendKeys("5.00");
        expect(cost.getAttribute('value')).toBe('5.00');

        var worker = element(by.model(OR.locators.materialinfo.workercost));
        worker.clear();
        worker.sendKeys("4.00");
        expect(worker.getAttribute('value')).toBe('4.00');
        browser.sleep('6000');
        var test =element(by.xpath(OR.locators.materialinfo.update));
        test.click();
        browser.sleep('3000');
    }
    this.edit_imgdel =  function(email5,pass5){


        element(by.id(OR.locators.addlogin.emailid)).sendKeys(email5);
        element(by.id(OR.locators.addlogin.password)).sendKeys(pass5);
        element(by.buttonText(OR.locators.addlogin.loginbutton)).click();
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            element.all(by.css(OR.locators.materialinfo.materialmenu)).click();
        })
        //browser.actions().mouseMove(element.all(by.css(OR.locators.materialinfo.materialmenu))).perform();
        //click the material  card
        element(by.className(OR.locators.materialinfo.matrialcard)).click();
        logger.log('info','Info tab screen');
        element(by.css(OR.locators.materialinfo.Editmaterial)).click();
 
        //Re-enter the username 
        var uedit = element(by.model(OR.locators.materialinfo.username));
        uedit.clear();
        uedit.sendKeys("Test");
        expect(uedit.getAttribute('value')).toBe('Test'); 
        browser.sleep('3000');

        var elm = element(by.xpath(OR.locators.materialinfo.imgdele));
        elm.isPresent().then(function(present) {
            element.all(by.className("btn btn-danger")).then(function(itemList) {
            console.log("Total values in dropdown are: " + itemList.length);
            if (present) {
                for(let elem of itemList){
                    elem.click();
                    browser.sleep('3000');
                }
            }
            else {
                console.log('Element not present');
            }
        },  function(err) {
                console.info('No element is displayed');
            })

        });

        var unit =element(by.className(OR.locators.materialinfo.unit));
        unit.click();
        browser.sleep(3000);

        element(by.xpath(OR.locators.materialinfo.Nexttab)).click();
        browser.sleep(3000);
        var test =element(by.xpath(OR.locators.materialinfo.update));
        test.click();
        browser.sleep('3000');

    }
    this.edit_downl =  function(email6,pass6){


        element(by.id(OR.locators.addlogin.emailid)).sendKeys(email6);
        element(by.id(OR.locators.addlogin.password)).sendKeys(pass6);
        element(by.buttonText(OR.locators.addlogin.loginbutton)).click();
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            element.all(by.css(OR.locators.materialinfo.materialmenu)).click();
        })
        //browser.actions().mouseMove(element.all(by.css(OR.locators.materialinfo.materialmenu))).perform();
        //click the material  card
        element(by.className(OR.locators.materialinfo.matrialcard)).click();
        logger.log('info','Info tab screen');
        element(by.xpath(OR.locators.materialinfo.filetab)).click();
        browser.sleep('3000');
        element(by.css("")).click();
        browser.sleep('3000');

        var elm = element(by.css(OR.locators.materialinfo.downimg));
        elm.isPresent().then(function(present) {
            element.all(by.className(OR.locators.materialinfo.download)).then(function(itemList) {
            console.log("Total values in dropdown are: " + itemList.length);
            if (present) {
                for(let elem of itemList){
                    elem.click();
                    browser.sleep('3000');
                }
            }
            else {
                console.log('Element not present');
            }
        },  function(err) {
                console.info('No element is displayed');
            })

        });

    }
    this.add_material =  function(email7,pass7){


        element(by.id(OR.locators.addlogin.emailid)).sendKeys(email7);
        element(by.id(OR.locators.addlogin.password)).sendKeys(pass7);
        element(by.buttonText(OR.locators.addlogin.loginbutton)).click();
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            element.all(by.css(OR.locators.materialinfo.materialmenu)).click();
        })
        //browser.actions().mouseMove(element.all(by.css(OR.locators.materialinfo.materialmenu))).perform();
        //click the material  card
        element(by.className(OR.locators.materialinfo.addmat)).click();
        logger.log('info','Info tab screen');

        browser.setFileDetector(new remote.FileDetector());
        var fileToUpload = '../util/download.jpg',
        absolutePath = path.resolve(__dirname, fileToUpload);
        var fileElem = element.all(by.css('input[type="file"]'));
        fileElem.sendKeys(absolutePath);

        //Re-enter the username 
        var add = element(by.model(OR.locators.materialinfo.addname));
        add.clear();
        add.sendKeys("sanity");
        expect(add.getAttribute('value')).toBe('sanity'); 
        browser.sleep('3000');

        element(by.xpath(OR.locators.materialinfo.addnext)).click();
        browser.sleep(3000);
        expect(element(by.css(OR.locators.materialinfo.updatemessage)).getText()).toContain(OR.locators.materialinfo.testdata2.matname);
        var unit =element(by.className(OR.locators.materialinfo.unit));
        unit.click();

        var elm = element(by.css("[ng-click='vm.unitSelect(unit)']"));
        elm.isPresent().then(function(present) {
            element.all(by.repeater("unit in vm.mUnits")).then(function(itemList) {
            console.log("Total values in dropdown are: " + itemList.length);
            if (present) {

                for(let elem of itemList){
                    // i=0;
                    // console.log(elem, '-----------')
                    var found = false;
                    elem.getText().then(function(text) {
                        console.log(text);
                        if (text === 'ft') {
                            console.log('Match');
                            elem.click();
                            found = true;
                            // browser.sleep('3000');
                        } else {
                            console.log('No Match');
                        };
                    });

                    if(found){
                        return;
                    }

                    //elem.click();
                   
                }
            }
            else {
                console.log('Element not present');
            }
        },  function(err) {
                console.info('No element is displayed');
            })

        });

       

        /*var unit =element(by.className(OR.locators.materialinfo.unit));
        unit.click();
        browser.sleep(3000);
        var select = element(by.css(OR.locators.materialinfo.droplist));
        select.click();
        logger.log('info','unit is edited');*/

        var period = element(by.model(OR.locators.materialinfo.addperiod));
        period.clear();
        period.sendKeys("85");
        expect(period.getAttribute('value')).toBe('85'); 

        var maintencedate = element(by.className(OR.locators.materialinfo.Mdate));
        expect(maintencedate.getText()).toEqual('Apr 3, 2019');
        //browser.sleep('2000');
        element(by.id("s2id_autogen2")).sendKeys("test sup");
        element(by.className("select2-match")).click();
        /*var mySelect = new SelectWrapper(by.className("select2-match"));
        mySelect.selectByText(OR.locators.materialinfo.testdata2.sup1);
        browser.sleep("3000");*/
        var next=element(by.xpath(OR.locators.materialinfo.addnext));
        next.click();
        browser.sleep(3000);

        var mat= element(by.xpath("//*[@id='s2id_currency']"));
        mat.click();
        browser.sleep('3000');
        //var search=element.all(by.className("select2-input"));
        //search.sendKeys("aw");
        //var element1=element(by.className("select2-result-label"));
        var point=element(by.css("span.select2-match"));
        browser.actions().mouseMove(point).click().perform();
        browser.sleep('3000');
        ///expect(currency.getText()).toEqual('DKK - Danish krone');

        var factor = element(by.model(OR.locators.materialinfo.addconversion));
        expect(factor.getAttribute('value')).toBe('0.56');
        browser.sleep('2000');

        var cost1 = element(by.model(OR.locators.materialinfo.addcostvalue));
        cost1.clear();
        cost1.sendKeys("5");
        expect(cost1.getAttribute('value')).toBe('5.00');

        var worker1 = element(by.model(OR.locators.materialinfo.addworkvalue));
        worker1.clear();
        worker1.sendKeys("4");
        expect(worker1.getAttribute('value')).toBe('4.00');
        browser.sleep('6000');
        var test =element(by.xpath(OR.locators.materialinfo.create));
        test.click();
        browser.sleep('3000');
    }
    this.add_materialcancel =  function(email8,pass8){


        element(by.id(OR.locators.addlogin.emailid)).sendKeys(email8);
        element(by.id(OR.locators.addlogin.password)).sendKeys(pass8);
        element(by.buttonText(OR.locators.addlogin.loginbutton)).click();
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            element.all(by.css(OR.locators.materialinfo.materialmenu)).click();
        })
        //browser.actions().mouseMove(element.all(by.css(OR.locators.materialinfo.materialmenu))).perform();
        //click the material  card
        element(by.className(OR.locators.materialinfo.addmat)).click();
        logger.log('info','Info tab screen');

        browser.setFileDetector(new remote.FileDetector());
        var fileToUpload = '../util/download.jpg',
        absolutePath = path.resolve(__dirname, fileToUpload);
        var fileElem = element.all(by.css('input[type="file"]'));
        fileElem.sendKeys(absolutePath);

        //Re-enter the username 
        var add = element(by.model(OR.locators.materialinfo.addname));
        add.clear();
        add.sendKeys("sanity");
        expect(add.getAttribute('value')).toBe('sanity'); 
        browser.sleep('3000');

        expect(element(by.css(OR.locators.materialinfo.updatemessage)).getText()).toContain(OR.locators.materialinfo.testdata2.matname);
        var unit =element(by.className(OR.locators.materialinfo.unit));
        unit.click();

        var elm = element(by.css("[ng-click='vm.unitSelect(unit)']"));
        elm.isPresent().then(function(present) {
            element.all(by.repeater("unit in vm.mUnits")).then(function(itemList) {
            console.log("Total values in dropdown are: " + itemList.length);
            if (present) {

                for(let elem of itemList){
                    // i=0;
                    // console.log(elem, '-----------')
                    var found = false;
                    elem.getText().then(function(text) {
                        console.log(text);
                        if (text === 'ft') {
                            console.log('Match');
                            elem.click();
                            found = true;
                            // browser.sleep('3000');
                        } else {
                            console.log('No Match');
                        };
                    });

                    if(found){
                        return;
                    }

                    //elem.click();
                   
                }
            }
            else {
                console.log('Element not present');
            }
        },  function(err) {
                console.info('No element is displayed');
            })

        });

        var period = element(by.model(OR.locators.materialinfo.addperiod));
        period.clear();
        period.sendKeys("85");
        expect(period.getAttribute('value')).toBe('85'); 

        var maintencedate = element(by.className(OR.locators.materialinfo.Mdate));
        expect(maintencedate.getText()).toEqual('Apr 3, 2019');
        //browser.sleep('2000');
        element(by.id("s2id_autogen2")).sendKeys("test sup");
        element(by.className("select2-match")).click();
        var next=element(by.xpath(OR.locators.materialinfo.addcancel));
        next.click();
        browser.sleep(3000);

    }
    this.add_materialsort =  function(email8,pass8){


        element(by.id(OR.locators.addlogin.emailid)).sendKeys(email8);
        element(by.id(OR.locators.addlogin.password)).sendKeys(pass8);
        element(by.buttonText(OR.locators.addlogin.loginbutton)).click();
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            element.all(by.css(OR.locators.materialinfo.materialmenu)).click();
        })
    }

    






};
module.exports=new MaterialEdit();