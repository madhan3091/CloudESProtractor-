var OR = require('../json/OR.json');
var logger = require('../log'); 
var SelectWrapper = require('../util/select-wrapper.js');
var path = require('path');

console.log(OR);

var Filemanager = function(){

    this.filemanager_create = function(email,pass){

        element(by.id(OR.locators.addlogin.emailid)).sendKeys(email);
        element(by.id(OR.locators.addlogin.password)).sendKeys(pass);
        element(by.buttonText(OR.locators.addlogin.loginbutton)).click();
        var mySelect = new SelectWrapper(by.id(OR.locators.MeetingRoom.selectdropdown));
        mySelect.selectByText(OR.locators.MeetingRoom.selectproject);
        browser.sleep("3000");
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            element(by.className("py-2 d-block mt-auto  text-center")).click();
            browser.sleep("3000");
        })
        browser.executeScript('window.scrollTo(0,-250);').then(function () {
            element(by.className(OR.locators.Filemanager.Add)).click();
            browser.sleep("6000");
        })
        element(by.xpath(OR.locators.Filemanager.foldername)).sendKeys(OR.locators.Filemanager.testdata5.foldername);
        browser.sleep("3000");
        element(by.xpath(OR.locators.Filemanager.save)).click();
        browser.sleep("3000");

    }
    this.filemanager_close = function(email1,pass1){

        element(by.id(OR.locators.addlogin.emailid)).sendKeys(email1);
        element(by.id(OR.locators.addlogin.password)).sendKeys(pass1);
        element(by.buttonText(OR.locators.addlogin.loginbutton)).click();
        var mySelect = new SelectWrapper(by.id(OR.locators.MeetingRoom.selectdropdown));
        mySelect.selectByText(OR.locators.MeetingRoom.selectproject);
        browser.sleep("3000");
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            element(by.className("py-2 d-block mt-auto  text-center")).click();
            browser.sleep("3000");
        })
        browser.executeScript('window.scrollTo(0,-250);').then(function () {
            element(by.className(OR.locators.Filemanager.Add)).click();
            browser.sleep("6000");
        })
        element(by.xpath(OR.locators.Filemanager.foldername)).sendKeys(OR.locators.Filemanager.testdata5.foldername);
        browser.sleep("3000");
        element(by.xpath(OR.locators.Filemanager.close)).click();
        browser.sleep("3000");

    }
    this.filemanager_upload = function(email2,pass2){

        element(by.id(OR.locators.addlogin.emailid)).sendKeys(email2);
        element(by.id(OR.locators.addlogin.password)).sendKeys(pass2);
        element(by.buttonText(OR.locators.addlogin.loginbutton)).click();
        var mySelect = new SelectWrapper(by.id(OR.locators.MeetingRoom.selectdropdown));
        mySelect.selectByText(OR.locators.MeetingRoom.selectproject);
        browser.sleep("3000");
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            element(by.className(OR.locators.Filemanager.showmore)).click();
            browser.sleep("3000");
        })
        browser.executeScript('window.scrollTo(0,-250);').then(function () {
            element(by.className(OR.locators.Filemanager.folderclick)).click();
            browser.sleep('6000');
        })
        element(by.css(OR.locators.Filemanager.plus)).click();
        browser.sleep("3000");
        element(by.xpath(OR.locators.Filemanager.uploadtab)).click();
        var fileToUpload = '../util/download.jpg';
        var absolutePath = path.resolve(__dirname, fileToUpload);
        element(by.css('input[type="file"]')).sendKeys(absolutePath);
        browser.sleep('3000');
        element(by.xpath(OR.locators.Filemanager.Add1)).click();
        browser.sleep('3000');


    }
    this.filemanager_uploadclose = function(email3,pass3){

        element(by.id(OR.locators.addlogin.emailid)).sendKeys(email3);
        element(by.id(OR.locators.addlogin.password)).sendKeys(pass3);
        element(by.buttonText(OR.locators.addlogin.loginbutton)).click();
        var mySelect = new SelectWrapper(by.id(OR.locators.MeetingRoom.selectdropdown));
        mySelect.selectByText(OR.locators.MeetingRoom.selectproject);
        browser.sleep("3000");
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            element(by.className(OR.locators.Filemanager.showmore)).click();
            browser.sleep("3000");
        })
        browser.executeScript('window.scrollTo(0,-250);').then(function () {
            element(by.className(OR.locators.Filemanager.folderclick)).click();
            browser.sleep('6000');
        })
        element(by.css(OR.locators.Filemanager.plus)).click();
        browser.sleep("3000");
        element(by.xpath(OR.locators.Filemanager.uploadtab)).click();
        var fileToUpload = '../util/Automation.pdf';
        var absolutePath = path.resolve(__dirname, fileToUpload);
        element(by.css('input[type="file"]')).sendKeys(absolutePath);
        browser.sleep('3000');
        element(by.xpath(OR.locators.Filemanager.close1)).click();
        browser.sleep('3000');
    }

    this.filemanager_toggle = function(email4,pass4){

        element(by.id(OR.locators.addlogin.emailid)).sendKeys(email4);
        element(by.id(OR.locators.addlogin.password)).sendKeys(pass4);
        element(by.buttonText(OR.locators.addlogin.loginbutton)).click();
        var mySelect = new SelectWrapper(by.id(OR.locators.MeetingRoom.selectdropdown));
        mySelect.selectByText(OR.locators.MeetingRoom.selectproject);
        browser.sleep("3000");
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            element(by.className(OR.locators.Filemanager.showmore)).click();
            browser.sleep("3000");
        })
        browser.executeScript('window.scrollTo(0,-250);').then(function () {
            element(by.className(OR.locators.Filemanager.folderclick)).click();
            browser.sleep('6000');
        })
        element(by.css(OR.locators.Filemanager.plus)).click();
        browser.sleep("3000");
        element(by.xpath(OR.locators.Filemanager.uploadtab)).click();
        var fileToUpload = '../util/Automation.pdf';
        var absolutePath = path.resolve(__dirname, fileToUpload);
        element(by.css('input[type="file"]')).sendKeys(absolutePath);
        browser.sleep('3000');
        element(by.css(OR.locators.Filemanager.toggle)).click();
        browser.sleep('3000');
        element(by.xpath(OR.locators.Filemanager.Add1)).click();
        browser.sleep('3000');

    }
    this.filemanager_choosefiles = function(email5,pass5){

        element(by.id(OR.locators.addlogin.emailid)).sendKeys(email5);
        element(by.id(OR.locators.addlogin.password)).sendKeys(pass5);
        element(by.buttonText(OR.locators.addlogin.loginbutton)).click();
        var mySelect = new SelectWrapper(by.id(OR.locators.MeetingRoom.selectdropdown));
        mySelect.selectByText(OR.locators.MeetingRoom.selectproject);
        browser.sleep("3000");
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            element(by.className(OR.locators.Filemanager.showmore)).click();
            browser.sleep("3000");
        })
        browser.executeScript('window.scrollTo(0,-250);').then(function () {
            element(by.className(OR.locators.Filemanager.folderclick)).click();
            browser.sleep('6000');
        })
        element(by.css(OR.locators.Filemanager.plus)).click();
        browser.sleep("3000");
        element(by.xpath(OR.locators.Filemanager.filestab)).click();
        browser.sleep("3000");
        element(by.model(OR.locators.Filemanager.searchfiles)).sendKeys("dow");
        element(by.xpath(OR.locators.Filemanager.listfiles)).click();
        element(by.xpath(OR.locators.Filemanager.savechoose)).click();
        browser.sleep('3000');
    }
    this.filemanager_chooseclose = function(email6,pass6){

        element(by.id(OR.locators.addlogin.emailid)).sendKeys(email6);
        element(by.id(OR.locators.addlogin.password)).sendKeys(pass6);
        element(by.buttonText(OR.locators.addlogin.loginbutton)).click();
        var mySelect = new SelectWrapper(by.id(OR.locators.MeetingRoom.selectdropdown));
        mySelect.selectByText(OR.locators.MeetingRoom.selectproject);
        browser.sleep("3000");
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            element(by.className(OR.locators.Filemanager.showmore)).click();
            browser.sleep("3000");
        })
        browser.executeScript('window.scrollTo(0,-250);').then(function () {
            element(by.className(OR.locators.Filemanager.folderclick)).click();
            browser.sleep('6000');
        })
        element(by.css(OR.locators.Filemanager.plus)).click();
        browser.sleep("3000");
        element(by.xpath(OR.locators.Filemanager.filestab)).click();
        browser.sleep("3000");
        element(by.model(OR.locators.Filemanager.searchfiles)).sendKeys("dow");
        element(by.xpath(OR.locators.Filemanager.listfiles)).click();
        element(by.xpath(OR.locators.Filemanager.saveclose)).click();
        browser.sleep('3000');
    }
    this.filemanager_Assign = function(email7,pass7){

        element(by.id(OR.locators.addlogin.emailid)).sendKeys(email7);
        element(by.id(OR.locators.addlogin.password)).sendKeys(pass7);
        element(by.buttonText(OR.locators.addlogin.loginbutton)).click();
        var mySelect = new SelectWrapper(by.id(OR.locators.MeetingRoom.selectdropdown));
        mySelect.selectByText(OR.locators.MeetingRoom.selectproject);
        browser.sleep("3000");
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            element(by.className(OR.locators.Filemanager.showmore)).click();
            browser.sleep("3000");
        })
        element(by.xpath(OR.locators.Filemanager.Assignicon)).click();
        browser.sleep('6000');
        element(by.xpath("//*[@id='assignTemplateModal']/div/div/div[2]/div/div[1]/div/ul/li[3]")).click();
        browser.sleep('3000');
        element(by.css(OR.locators.Filemanager.Assignclick)).click();
        browser.sleep('3000');
    }
    this.filemanager_Assignclose = function(email8,pass8){

        element(by.id(OR.locators.addlogin.emailid)).sendKeys(email8);
        element(by.id(OR.locators.addlogin.password)).sendKeys(pass8);
        element(by.buttonText(OR.locators.addlogin.loginbutton)).click();
        var mySelect = new SelectWrapper(by.id(OR.locators.MeetingRoom.selectdropdown));
        mySelect.selectByText(OR.locators.MeetingRoom.selectproject);
        browser.sleep("3000");
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            element(by.className(OR.locators.Filemanager.showmore)).click();
            browser.sleep("3000");
        })
        element(by.xpath(OR.locators.Filemanager.Assignicon)).click();
        browser.sleep('6000');
        element(by.xpath("//*[@id='assignTemplateModal']/div/div/div[2]/div/div[1]/div/ul/li[3]")).click();
        browser.sleep('3000');
        element(by.xpath(OR.locators.Filemanager.Assignclose)).click();
        browser.sleep('3000');
    }
    this.filemanager_template = function(email9,pass9){

        element(by.id(OR.locators.addlogin.emailid)).sendKeys(email9);
        element(by.id(OR.locators.addlogin.password)).sendKeys(pass9);
        element(by.buttonText(OR.locators.addlogin.loginbutton)).click();
        var mySelect = new SelectWrapper(by.id(OR.locators.MeetingRoom.selectdropdown));
        mySelect.selectByText(OR.locators.MeetingRoom.selectproject);
        browser.sleep("3000");
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            element(by.className(OR.locators.Filemanager.showmore)).click();
            browser.sleep("3000");
        })
        element(by.xpath(OR.locators.Filemanager.templateicon)).click();
        browser.sleep('6000');
        element(by.xpath(OR.locators.Filemanager.tempname)).sendKeys(OR.locators.Filemanager.testdata5.tempname);
        browser.sleep("3000");
        element(by.xpath(OR.locators.Filemanager.tempsave)).click();
        browser.sleep("3000");

    }
    this.filemanager_templateclose = function(email10,pass10){

        element(by.id(OR.locators.addlogin.emailid)).sendKeys(email10);
        element(by.id(OR.locators.addlogin.password)).sendKeys(pass10);
        element(by.buttonText(OR.locators.addlogin.loginbutton)).click();
        var mySelect = new SelectWrapper(by.id(OR.locators.MeetingRoom.selectdropdown));
        mySelect.selectByText(OR.locators.MeetingRoom.selectproject);
        browser.sleep("3000");
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            element(by.className(OR.locators.Filemanager.showmore)).click();
            browser.sleep("3000");
        })
        element(by.xpath(OR.locators.Filemanager.templateicon)).click();
        browser.sleep('6000');
        element(by.xpath(OR.locators.Filemanager.tempname)).sendKeys(OR.locators.Filemanager.testdata5.tempname);
        browser.sleep("3000");
        element(by.xpath(OR.locators.Filemanager.tempclose)).click();
        browser.sleep("3000");

    }















};
module.exports=new Filemanager();