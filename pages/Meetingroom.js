var OR = require('../json/OR.json');
var logger = require('../log'); 
var SelectWrapper = require('../util/select-wrapper.js');
var path = require('path');


console.log(OR);

var Meetingroom = function(){

    this.meeting_newmeet = function(email,pass){

        element(by.id(OR.locators.addlogin.emailid)).sendKeys(email);
        element(by.id(OR.locators.addlogin.password)).sendKeys(pass);
        element(by.buttonText(OR.locators.addlogin.loginbutton)).click();
        var mySelect = new SelectWrapper(by.id(OR.locators.MeetingRoom.selectdropdown));
        mySelect.selectByText(OR.locators.MeetingRoom.selectproject);
        browser.sleep("3000");
        element(by.className(OR.locators.MeetingRoom.meetingroom)).click();
        browser.sleep('3000');
        element(by.className(OR.locators.MeetingRoom.Newmeeting)).click();
        browser.sleep('3000');
        element(by.model(OR.locators.MeetingRoom.meetingname)).sendKeys(OR.locators.MeetingRoom.testdata4.name);
        browser.sleep('3000');
        element(by.model(OR.locators.MeetingRoom.title)).sendKeys(OR.locators.MeetingRoom.testdata4.title1);
        browser.sleep('3000');
        element(by.model(OR.locators.MeetingRoom.description)).sendKeys(OR.locators.MeetingRoom.testdata4.describe1);
        browser.sleep('3000');
        element(by.model(OR.locators.MeetingRoom.calendar)).sendKeys(OR.locators.MeetingRoom.testdata4.calendar1);
        browser.sleep('3000');
        var mySelect = new SelectWrapper(by.model(OR.locators.MeetingRoom.assignedto));
        mySelect.selectByText(OR.locators.MeetingRoom.testdata4.Assigned1);
        mySelect.selectByText(OR.locators.MeetingRoom.testdata4.Assigned2);
        mySelect.selectByValue(OR.locators.MeetingRoom.testdata4.Assigned3);
        browser.sleep("3000");
        element(by.className(OR.locators.MeetingRoom.create)).click();
        browser.sleep("3000");

    }
    this.meeting_revert = function(email1,pass1){

        element(by.id(OR.locators.addlogin.emailid)).sendKeys(email1);
        element(by.id(OR.locators.addlogin.password)).sendKeys(pass1);
        element(by.buttonText(OR.locators.addlogin.loginbutton)).click();
        var mySelect = new SelectWrapper(by.id(OR.locators.MeetingRoom.selectdropdown));
        mySelect.selectByText(OR.locators.MeetingRoom.selectproject);
        browser.sleep("3000");
        element(by.className(OR.locators.MeetingRoom.meetingroom)).click();
        browser.sleep('3000');
        element(by.className(OR.locators.MeetingRoom.Newmeeting)).click();
        browser.sleep('3000');
        element(by.model(OR.locators.MeetingRoom.meetingname)).sendKeys(OR.locators.MeetingRoom.testdata4.name);
        browser.sleep('3000');
        element(by.model(OR.locators.MeetingRoom.title)).sendKeys(OR.locators.MeetingRoom.testdata4.title1);
        browser.sleep('3000');
        element(by.model(OR.locators.MeetingRoom.description)).sendKeys(OR.locators.MeetingRoom.testdata4.describe1);
        browser.sleep('3000');
        element(by.model(OR.locators.MeetingRoom.calendar)).sendKeys(OR.locators.MeetingRoom.testdata4.calendar1);
        browser.sleep('3000');
        var mySelect = new SelectWrapper(by.model(OR.locators.MeetingRoom.assignedto));
        mySelect.selectByText(OR.locators.MeetingRoom.testdata4.Assigned1);
        mySelect.selectByText(OR.locators.MeetingRoom.testdata4.Assigned2);
        mySelect.selectByValue(OR.locators.MeetingRoom.testdata4.Assigned3);
        browser.sleep("3000");
        element(by.className(OR.locators.MeetingRoom.create)).click();
        browser.sleep("3000");

    }
    this.meeting_cancel = function(email2,pass2){

        element(by.id(OR.locators.addlogin.emailid)).sendKeys(email2);
        element(by.id(OR.locators.addlogin.password)).sendKeys(pass2);
        element(by.buttonText(OR.locators.addlogin.loginbutton)).click();
        var mySelect = new SelectWrapper(by.id(OR.locators.MeetingRoom.selectdropdown));
        mySelect.selectByText(OR.locators.MeetingRoom.selectproject);
        browser.sleep("3000");
        element(by.className(OR.locators.MeetingRoom.meetingroom)).click();
        browser.sleep('3000');
        element(by.className(OR.locators.MeetingRoom.Newmeeting)).click();
        browser.sleep('3000');
        element(by.model(OR.locators.MeetingRoom.meetingname)).sendKeys(OR.locators.MeetingRoom.testdata4.name1);
        browser.sleep('3000');
        element(by.model(OR.locators.MeetingRoom.title)).sendKeys(OR.locators.MeetingRoom.testdata4.title1);
        browser.sleep('3000');
        element(by.model(OR.locators.MeetingRoom.description)).sendKeys(OR.locators.MeetingRoom.testdata4.describe1);
        browser.sleep('3000');
        element(by.model(OR.locators.MeetingRoom.calendar)).sendKeys(OR.locators.MeetingRoom.testdata4.calendar1);
        browser.sleep('3000');
        var mySelect = new SelectWrapper(by.model(OR.locators.MeetingRoom.assignedto));
        mySelect.selectByText(OR.locators.MeetingRoom.testdata4.Assigned1);
        browser.sleep("3000");
        element(by.className(OR.locators.MeetingRoom.cancel)).click();
        browser.sleep("3000");

    }
    this.meeting_validate = function(email3,pass3){

        element(by.id(OR.locators.addlogin.emailid)).sendKeys(email3);
        element(by.id(OR.locators.addlogin.password)).sendKeys(pass3);
        element(by.buttonText(OR.locators.addlogin.loginbutton)).click();
        var mySelect = new SelectWrapper(by.id(OR.locators.MeetingRoom.selectdropdown));
        mySelect.selectByText(OR.locators.MeetingRoom.selectproject);
        browser.sleep("3000");
        element(by.className(OR.locators.MeetingRoom.meetingroom)).click();
        browser.sleep('3000');
        element(by.className(OR.locators.MeetingRoom.Newmeeting)).click();
        browser.sleep('3000');
        element(by.model(OR.locators.MeetingRoom.meetingname)).sendKeys(OR.locators.MeetingRoom.testdata4.name1);
        browser.sleep('3000');
        element(by.className(OR.locators.MeetingRoom.create)).click();
        expect(element(by.css(OR.locators.MeetingRoom.invalid)).getText()).toEqual(OR.locators.MeetingRoom.testdata4.Errormessage);
        element(by.model(OR.locators.MeetingRoom.title)).sendKeys(OR.locators.MeetingRoom.testdata4.title1);
        browser.sleep('3000');
        element(by.className(OR.locators.MeetingRoom.create)).click();
        expect(element(by.css(OR.locators.MeetingRoom.invalid)).getText()).toEqual(OR.locators.MeetingRoom.testdata4.Errormessage);
        element(by.model(OR.locators.MeetingRoom.description)).sendKeys(OR.locators.MeetingRoom.testdata4.describe1);
        browser.sleep('3000');
        element(by.className(OR.locators.MeetingRoom.create)).click();
        expect(element(by.css(OR.locators.MeetingRoom.invalid)).getText()).toEqual(OR.locators.MeetingRoom.testdata4.Errormessage);
        element(by.model(OR.locators.MeetingRoom.calendar)).sendKeys(OR.locators.MeetingRoom.testdata4.calendar1);
        browser.sleep('3000');
        element(by.className(OR.locators.MeetingRoom.create)).click();
        expect(element(by.css(OR.locators.MeetingRoom.invalid)).getText()).toEqual(OR.locators.MeetingRoom.testdata4.Errormessage);
        var mySelect = new SelectWrapper(by.model(OR.locators.MeetingRoom.assignedto));
        mySelect.selectByText(OR.locators.MeetingRoom.testdata4.Assigned1);
        browser.sleep("3000");
        element(by.className(OR.locators.MeetingRoom.create)).click();
        expect(element(by.css(OR.locators.MeetingRoom.invalid)).getText()).toEqual(OR.locators.MeetingRoom.testdata4.Errormessage);
        element(by.className(OR.locators.MeetingRoom.create)).click();
        browser.sleep("3000");

    }
    this.meeting_remove = function(email4,pass4){

        element(by.id(OR.locators.addlogin.emailid)).sendKeys(email4);
        element(by.id(OR.locators.addlogin.password)).sendKeys(pass4);
        element(by.buttonText(OR.locators.addlogin.loginbutton)).click();
        var mySelect = new SelectWrapper(by.id(OR.locators.MeetingRoom.selectdropdown));
        mySelect.selectByText(OR.locators.MeetingRoom.selectproject);
        browser.sleep("3000");
        element(by.className(OR.locators.MeetingRoom.meetingroom)).click();
        browser.sleep('3000');
        element(by.className(OR.locators.MeetingRoom.Newmeeting)).click();
        browser.sleep('3000');
        element(by.model(OR.locators.MeetingRoom.meetingname)).sendKeys(OR.locators.MeetingRoom.testdata4.name1);
        browser.sleep('3000');
        element(by.model(OR.locators.MeetingRoom.title)).sendKeys(OR.locators.MeetingRoom.testdata4.title1);
        browser.sleep('3000');
        element(by.model(OR.locators.MeetingRoom.description)).sendKeys(OR.locators.MeetingRoom.testdata4.describe1);
        browser.sleep('3000');
        element(by.model(OR.locators.MeetingRoom.calendar)).sendKeys(OR.locators.MeetingRoom.testdata4.calendar1);
        browser.sleep('3000');
        var mySelect = new SelectWrapper(by.model(OR.locators.MeetingRoom.assignedto));
        mySelect.selectByText(OR.locators.MeetingRoom.testdata4.Assigned1);
        mySelect.selectByText(OR.locators.MeetingRoom.testdata4.Assigned2);
        browser.sleep("3000");
        element(by.className("select2-search-choice-close")).click();
        browser.sleep('3000');
        element(by.className(OR.locators.MeetingRoom.create)).click();
        browser.sleep("3000");

    }
    this.meeting_todo = function(email5,pass5){

        element(by.id(OR.locators.addlogin.emailid)).sendKeys(email5);
        element(by.id(OR.locators.addlogin.password)).sendKeys(pass5);
        element(by.buttonText(OR.locators.addlogin.loginbutton)).click();
        var mySelect = new SelectWrapper(by.id(OR.locators.MeetingRoom.selectdropdown));
        mySelect.selectByText(OR.locators.MeetingRoom.selectproject);
        browser.sleep("3000");
        element(by.className(OR.locators.MeetingRoom.meetingroom)).click();
        browser.sleep('3000');
        browser.executeScript('window.scrollTo(0,-250);').then(function () {
            element(by.className(OR.locators.MeetingRoom.todoplus)).click();
            browser.sleep('3000');
        })
        element(by.model(OR.locators.ToDo.title)).sendKeys(OR.locators.MeetingRoom.testdata4.title1);
        browser.sleep('3000');
        element(by.model(OR.locators.ToDo.describe)).sendKeys(OR.locators.MeetingRoom.testdata4.describe1);
        browser.sleep('3000');
        element(by.model(OR.locators.ToDo.calendar)).sendKeys(OR.locators.MeetingRoom.testdata4.calendar1);
        browser.sleep('3000');
        var mySelect = new SelectWrapper(by.model(OR.locators.ToDo.assignedto));
        mySelect.selectByText(OR.locators.MeetingRoom.testdata4.Assigned1);
        mySelect.selectByText(OR.locators.MeetingRoom.testdata4.Assigned2);
        browser.sleep("3000");
        element(by.css(OR.locators.MeetingRoom.docreate)).click();
        browser.sleep("6000");

    }
    this.meeting_todocancel = function(email6,pass6){

        element(by.id(OR.locators.addlogin.emailid)).sendKeys(email6);
        element(by.id(OR.locators.addlogin.password)).sendKeys(pass6);
        element(by.buttonText(OR.locators.addlogin.loginbutton)).click();
        var mySelect = new SelectWrapper(by.id(OR.locators.MeetingRoom.selectdropdown));
        mySelect.selectByText(OR.locators.MeetingRoom.selectproject);
        browser.sleep("3000");
        element(by.className(OR.locators.MeetingRoom.meetingroom)).click();
        browser.sleep('3000');
        browser.executeScript('window.scrollTo(0,-250);').then(function () {
            element(by.className(OR.locators.MeetingRoom.todoplus)).click();
            browser.sleep('3000');
        })
        element(by.model(OR.locators.ToDo.title)).sendKeys(OR.locators.MeetingRoom.testdata4.title1);
        browser.sleep('3000');
        element(by.model(OR.locators.ToDo.describe)).sendKeys(OR.locators.MeetingRoom.testdata4.describe1);
        browser.sleep('3000');
        element(by.model(OR.locators.ToDo.calendar)).sendKeys(OR.locators.MeetingRoom.testdata4.calendar1);
        browser.sleep('3000');
        var mySelect = new SelectWrapper(by.model(OR.locators.ToDo.assignedto));
        mySelect.selectByText(OR.locators.MeetingRoom.testdata4.Assigned1);
        mySelect.selectByText(OR.locators.MeetingRoom.testdata4.Assigned2);
        browser.sleep("3000");
        element(by.className(OR.locators.MeetingRoom.docancel)).click();
        browser.sleep("6000");

    }
    this.meeting_todovald = function(email7,pass7){

        element(by.id(OR.locators.addlogin.emailid)).sendKeys(email7);
        element(by.id(OR.locators.addlogin.password)).sendKeys(pass7);
        element(by.buttonText(OR.locators.addlogin.loginbutton)).click();
        var mySelect = new SelectWrapper(by.id(OR.locators.MeetingRoom.selectdropdown));
        mySelect.selectByText(OR.locators.MeetingRoom.selectproject);
        browser.sleep("3000");
        element(by.className(OR.locators.MeetingRoom.meetingroom)).click();
        browser.sleep('3000');
        browser.executeScript('window.scrollTo(0,-250);').then(function () {
            element(by.className(OR.locators.MeetingRoom.todoplus)).click();
            browser.sleep('3000');
        })
        element(by.model(OR.locators.ToDo.title)).sendKeys(OR.locators.MeetingRoom.testdata4.title1);
        browser.sleep('3000');
        element(by.css(OR.locators.MeetingRoom.docreate)).click();
        expect(element(by.css(OR.locators.MeetingRoom.invalid)).getText()).toEqual(OR.locators.MeetingRoom.testdata4.Errormessage);
        browser.sleep("6000");
        element(by.model(OR.locators.ToDo.describe)).sendKeys(OR.locators.MeetingRoom.testdata4.describe1);
        browser.sleep('3000');
        element(by.css(OR.locators.MeetingRoom.docreate)).click();
        expect(element(by.css(OR.locators.MeetingRoom.invalid)).getText()).toEqual(OR.locators.MeetingRoom.testdata4.Errormessage);
        element(by.model(OR.locators.ToDo.calendar)).sendKeys(OR.locators.MeetingRoom.testdata4.calendar1);
        browser.sleep('3000');
        element(by.css(OR.locators.MeetingRoom.docreate)).click();
        expect(element(by.css(OR.locators.MeetingRoom.invalid)).getText()).toEqual(OR.locators.MeetingRoom.testdata4.Errormessage);
        var mySelect = new SelectWrapper(by.model(OR.locators.ToDo.assignedto));
        mySelect.selectByText(OR.locators.MeetingRoom.testdata4.Assigned1);
        mySelect.selectByText(OR.locators.MeetingRoom.testdata4.Assigned2);
        browser.sleep("3000");
        element(by.css(OR.locators.MeetingRoom.docreate)).click();
        expect(element(by.css(OR.locators.MeetingRoom.invalid)).getText()).toEqual(OR.locators.MeetingRoom.testdata4.Errormessage);
        element(by.className(OR.locators.MeetingRoom.docancel)).click();
        browser.sleep("6000");

    }
    this.meeting_todorevert = function(email8,pass8){

        element(by.id(OR.locators.addlogin.emailid)).sendKeys(email8);
        element(by.id(OR.locators.addlogin.password)).sendKeys(pass8);
        element(by.buttonText(OR.locators.addlogin.loginbutton)).click();
        var mySelect = new SelectWrapper(by.id(OR.locators.MeetingRoom.selectdropdown));
        mySelect.selectByText(OR.locators.MeetingRoom.selectproject);
        browser.sleep("3000");
        element(by.className(OR.locators.MeetingRoom.meetingroom)).click();
        browser.sleep('3000');
        browser.executeScript('window.scrollTo(0,-250);').then(function () {
            element(by.className(OR.locators.MeetingRoom.todoplus)).click();
            browser.sleep('3000');
        })
        element(by.model(OR.locators.ToDo.title)).sendKeys(OR.locators.MeetingRoom.testdata4.title1);
        browser.sleep('3000');
        element(by.model(OR.locators.ToDo.describe)).sendKeys(OR.locators.MeetingRoom.testdata4.describe1);
        browser.sleep('3000');
        element(by.model(OR.locators.ToDo.calendar)).sendKeys(OR.locators.MeetingRoom.testdata4.calendar1);
        browser.sleep('3000');
        var mySelect = new SelectWrapper(by.model(OR.locators.ToDo.assignedto));
        mySelect.selectByText(OR.locators.MeetingRoom.testdata4.Assigned1);
        browser.sleep("3000");
        element(by.css(OR.locators.MeetingRoom.docreate)).click();
        browser.sleep("6000");
        element(by.className(OR.locators.MeetingRoom.todoplus)).click();
        browser.sleep('3000');
        
       
    }
    this.meeting_invitemembers = function(email9,pass9){

        element(by.id(OR.locators.addlogin.emailid)).sendKeys(email9);
        element(by.id(OR.locators.addlogin.password)).sendKeys(pass9);
        element(by.buttonText(OR.locators.addlogin.loginbutton)).click();
        var mySelect = new SelectWrapper(by.id(OR.locators.MeetingRoom.selectdropdown));
        mySelect.selectByText(OR.locators.MeetingRoom.selectproject);
        browser.sleep("3000");
        element(by.className(OR.locators.MeetingRoom.meetingroom)).click();
        browser.sleep('10000');
        browser.executeScript('window.scrollTo(0,-250);').then(function () {
            element(by.className(OR.locators.MeetingRoom.inviteplus)).click();
            browser.sleep('3000');
        })
        //element(by.model(OR.locators.MeetingRoom.search)).sendKeys(OR.locators.MeetingRoom.testdata4.searchkey);
        //browser.sleep('3000');
        var cb=element(by.model(OR.locators.MeetingRoom.checkbox));
        browser.actions().mouseMove(cb).click().perform(); 
        expect(cb.isSelected()).toBeTruthy(); 
        var mySelect = new SelectWrapper(by.model(OR.locators.MeetingRoom.checkbox));
        mySelect.selectByText(OR.locators.MeetingRoom.testdata4.invitedrop);
        browser.sleep("3000");
        element(by.css(OR.locators.MeetingRoom.invitebutton)).click();
        browser.sleep('3000');
    }
    this.meeting_invitecancel = function(email10,pass10){

        element(by.id(OR.locators.addlogin.emailid)).sendKeys(email10);
        element(by.id(OR.locators.addlogin.password)).sendKeys(pass10);
        element(by.buttonText(OR.locators.addlogin.loginbutton)).click();
        var mySelect = new SelectWrapper(by.id(OR.locators.MeetingRoom.selectdropdown));
        mySelect.selectByText(OR.locators.MeetingRoom.selectproject);
        browser.sleep("3000");
        element(by.className(OR.locators.MeetingRoom.meetingroom)).click();
        browser.sleep('10000');
        element.all(by.className(OR.locators.MeetingRoom.titlenew)).then(function(itemList) {
            console.log("Total values in dropdown are: " + itemList.length);
            for (i = 0; i < itemList.length; i++) {
              itemList[i].getText().then(function(text) {
                console.log(text);
                if (text == 'bla') {
                  console.log('Match');
                  element(by.className('mb-0 ng-binding')).click();
                  browser.sleep('3000');
                  return;
                } else {
                  console.log('No Match');
                };
              });
            };
        });
       
        browser.executeScript('window.scrollTo(0,-250);').then(function () {
            element(by.className(OR.locators.MeetingRoom.inviteplus)).click();
            browser.sleep('3000');

        })
        var cb=element(by.model(OR.locators.MeetingRoom.checkbox));
        browser.actions().mouseMove(cb).click().perform(); 
        expect(cb.isSelected()).toBeTruthy(); 
        var mySelect = new SelectWrapper(by.model(OR.locators.MeetingRoom.checkbox));
        mySelect.selectByText(OR.locators.MeetingRoom.testdata4.invitedrop);
        browser.sleep("3000");
        //var scrolldown = element(by.className(OR.locators.MeetingRoom.cancel1))
        var can=element(by.xpath(OR.locators.MeetingRoom.canpopup));
        browser.actions().mouseMove(can).click().perform(); 
        expect(can.isSelected()).toBeTruthy(); 
        browser.sleep('3000');


    }
    this.meeting_messages = function(email11,pass11){

        element(by.id(OR.locators.addlogin.emailid)).sendKeys(email11);
        element(by.id(OR.locators.addlogin.password)).sendKeys(pass11);
        element(by.buttonText(OR.locators.addlogin.loginbutton)).click();
        var mySelect = new SelectWrapper(by.id(OR.locators.MeetingRoom.selectdropdown));
        mySelect.selectByText(OR.locators.MeetingRoom.selectproject);
        browser.sleep("3000");
        element(by.className(OR.locators.MeetingRoom.meetingroom)).click();
        browser.sleep('10000');
        element.all(by.className(OR.locators.MeetingRoom.titlenew)).then(function(itemList) {
            console.log("Total values in dropdown are: " + itemList.length);
            for (i = 0; i < itemList.length; i++) {
                itemList[i].getText().then(function(text) {
                console.log(text);
                if (text === "bla") {
                  console.log('Match');
                  itemList[i].click();
                  //element(by.className("mb-0")).click();
                  return;
                } else {
                  console.log('No Match');
                };
              });
             
            };
        });
        //element(by.className("mb-0 ng-binding")).click();
        browser.sleep('3000');
        element(by.model(OR.locators.MeetingRoom.messagebox)).sendKeys("sdfdsfdsfdsfdsf");
        browser.sleep('3000');
        element(by.className(OR.locators.MeetingRoom.send)).click();


    }
    this.meeting_upload = function(email12,pass12){

        element(by.id(OR.locators.addlogin.emailid)).sendKeys(email12);
        element(by.id(OR.locators.addlogin.password)).sendKeys(pass12);
        element(by.buttonText(OR.locators.addlogin.loginbutton)).click();
        var mySelect = new SelectWrapper(by.id(OR.locators.MeetingRoom.selectdropdown));
        mySelect.selectByText(OR.locators.MeetingRoom.selectproject);
        browser.sleep("3000");
        element(by.className(OR.locators.MeetingRoom.meetingroom)).click();
        browser.sleep('10000');
        element.all(by.className(OR.locators.MeetingRoom.titlenew)).then(function(itemList) {
            console.log("Total values in dropdown are: " + itemList.length);
            for (i = 0; i < itemList.length; i++) {
                itemList[i].getText().then(function(text) {
                console.log(text);
                if (text === "bla") {
                  console.log('Match');
                  //itemList[i].click();
                  element(by.className("mb-0 ng-binding")).click();
                  return;
                } else {
                  console.log('No Match');
                };
              });
             
            };
        });
        //element(by.className("mb-0 ng-binding")).click();
        browser.sleep('3000');
        element(by.className(OR.locators.MeetingRoom.upload)).click();
        browser.sleep('3000');
        var fileToUpload = '../util/download.jpg';
        var absolutePath = path.resolve(__dirname, fileToUpload);
        element(by.css('input[type="file"]')).sendKeys(absolutePath);
        browser.sleep('3000');
        element(by.css(OR.locators.MeetingRoom.submit)).click();
        browser.sleep('3000');


    }
    this.meeting_uploadclose = function(email13,pass13){

        element(by.id(OR.locators.addlogin.emailid)).sendKeys(email13);
        element(by.id(OR.locators.addlogin.password)).sendKeys(pass13);
        element(by.buttonText(OR.locators.addlogin.loginbutton)).click();
        var mySelect = new SelectWrapper(by.id(OR.locators.MeetingRoom.selectdropdown));
        mySelect.selectByText(OR.locators.MeetingRoom.selectproject);
        browser.sleep("3000");
        element(by.className(OR.locators.MeetingRoom.meetingroom)).click();
        browser.sleep('10000');
        element.all(by.className(OR.locators.MeetingRoom.titlenew)).then(function(itemList) {
            console.log("Total values in dropdown are: " + itemList.length);
            for (i = 0; i < itemList.length; i++) {
                itemList[i].getText().then(function(text) {
                console.log(text);
                if (text === "bla") {
                  console.log('Match');
                  //itemList[i].click();
                  element(by.className("mb-0 ng-binding")).click();
                  return;
                } else {
                  console.log('No Match');
                };
              });
             
            };
        });
        //element(by.className("mb-0 ng-binding")).click();
        browser.sleep('3000');
        element(by.className(OR.locators.MeetingRoom.upload)).click();
        browser.sleep('3000');
        var fileToUpload = '../util/Automation.pdf';
        var absolutePath = path.resolve(__dirname, fileToUpload);
        element(by.css('input[type="file"]')).sendKeys(absolutePath);
        browser.sleep('3000');
        element(by.className(OR.locators.MeetingRoom.close)).click();
        browser.sleep('3000');


    }
    this.meeting_sharedfile = function(email14,pass14){

        element(by.id(OR.locators.addlogin.emailid)).sendKeys(email14);
        element(by.id(OR.locators.addlogin.password)).sendKeys(pass14);
        element(by.buttonText(OR.locators.addlogin.loginbutton)).click();
        var mySelect = new SelectWrapper(by.id(OR.locators.MeetingRoom.selectdropdown));
        mySelect.selectByText(OR.locators.MeetingRoom.selectproject);
        browser.sleep("3000");
        element(by.className(OR.locators.MeetingRoom.meetingroom)).click();
        browser.sleep('10000');
        browser.executeScript('window.scrollTo(0,-250);').then(function () {
            element(by.className(OR.locators.MeetingRoom.sharedfile)).click();
            browser.sleep("3000");
        })
        element(by.model(OR.locators.MeetingRoom.sharesearch)).sendKeys("download");
        browser.sleep("3000");
        element(by.className(OR.locators.MeetingRoom.sharedownload)).click();
        browser.sleep("3000");

    }
    this.meeting_sharedclose = function(email15,pass15){

        element(by.id(OR.locators.addlogin.emailid)).sendKeys(email15);
        element(by.id(OR.locators.addlogin.password)).sendKeys(pass15);
        element(by.buttonText(OR.locators.addlogin.loginbutton)).click();
        var mySelect = new SelectWrapper(by.id(OR.locators.MeetingRoom.selectdropdown));
        mySelect.selectByText(OR.locators.MeetingRoom.selectproject);
        browser.sleep("3000");
        element(by.className(OR.locators.MeetingRoom.meetingroom)).click();
        browser.sleep('10000');
        browser.executeScript('window.scrollTo(0,-250);').then(function () {
            element(by.className(OR.locators.MeetingRoom.sharedfile)).click();
            browser.sleep("3000");
        })
        element(by.model(OR.locators.MeetingRoom.sharesearch)).sendKeys("acknow");
        browser.sleep("3000");
        element(by.className(OR.locators.MeetingRoom.sharedclose)).click();
        browser.sleep('10000');

    }
        
        
        

















};
module.exports=new Meetingroom();