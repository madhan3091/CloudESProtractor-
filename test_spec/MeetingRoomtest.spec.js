var base = require('../pages/Basepage.js');
var OR = require('../json/OR.json');
var home_page = require('../pages/HomePage.js');
var Meeting_Page=require('../pages/Meetingroom.js');  
var logger = require('../log'); 
var SelectWrapper = require('../util/select-wrapper.js');


describe("Meetingroom module cases -",function(){

    beforeEach(function() {
        browser.driver.manage().window().maximize();
        base.navigateToURL(OR.testsiteurl);
    });
    afterEach(function(){
        browser.executeScript('window.localStorage.clear();');
        browser.executeScript('window.sessionStorage.clear();');
        browser.driver.manage().deleteAllCookies(); 
    });

    xit("verify the admin can able to create the newmeeting ",function(){

        var customer = home_page.LoginAsCustomer();
        browser.sleep("3000");
        var todo = Meeting_Page.meeting_newmeet(OR.locators.addlogin.testdata.email,OR.locators.addlogin.testdata.pword);
        expect(element.all(by.className(OR.locators.MeetingRoom.titlenew)).getText()).toContain(OR.locators.MeetingRoom.testdata4.name);
        
    });
    xit("verify the newmeeting form revert values on the field properly or not ",function(){

        var customer = home_page.LoginAsCustomer();
        browser.sleep("3000");
        var todo = Meeting_Page.meeting_revert(OR.locators.addlogin.testdata.email,OR.locators.addlogin.testdata.pword);
        element(by.className(OR.locators.MeetingRoom.Newmeeting)).click();
        browser.sleep('3000');
        expect(element(by.className(OR.locators.MeetingRoom.nameclass)).getText()).toContain(OR.locators.MeetingRoom.testdata4.empty);
        expect(element(by.className(OR.locators.MeetingRoom.titleclass)).getText()).toContain(OR.locators.MeetingRoom.testdata4.empty);
        expect(element(by.className(OR.locators.MeetingRoom.desclass)).getText()).toContain(OR.locators.MeetingRoom.testdata4.empty);
        expect(element(by.className(OR.locators.MeetingRoom.dateclass)).getText()).toContain(OR.locators.MeetingRoom.testdata4.empty);
        expect(element(by.className(OR.locators.MeetingRoom.assclass)).getText()).toContain(OR.locators.MeetingRoom.testdata4.empty); 
    });
    xit("verify the admin entered the form and cancelled the pop-up screen meeting name should not be display in the list ",function(){

        var customer = home_page.LoginAsCustomer();
        browser.sleep("3000");
        var todo = Meeting_Page.meeting_cancel(OR.locators.addlogin.testdata.email,OR.locators.addlogin.testdata.pword);
        expect(element.all(by.className(OR.locators.MeetingRoom.titlenew)).getText()).toContain(OR.locators.MeetingRoom.testdata4.empty);
        
    });
    xit("verify the admin each field of validation in new meeting pop-up",function(){

        var customer = home_page.LoginAsCustomer();
        browser.sleep("3000");
        var todo = Meeting_Page.meeting_validate(OR.locators.addlogin.testdata.email,OR.locators.addlogin.testdata.pword);
        var mySelect = new SelectWrapper(by.className(OR.locators.ToDo.signout));
        mySelect.selectByText(OR.locators.ToDo.testdata3.dropitem);
        browser.sleep("3000");
        
    });
    xit("verify the admin remove the assigneduser can able to create new meeting",function(){

        var customer = home_page.LoginAsCustomer();
        browser.sleep("3000");
        var todo = Meeting_Page.meeting_remove(OR.locators.addlogin.testdata.email,OR.locators.addlogin.testdata.pword);
        var mySelect = new SelectWrapper(by.className(OR.locators.ToDo.signout));
        mySelect.selectByText(OR.locators.ToDo.testdata3.dropitem);
        browser.sleep("3000");
        
    });
    xit("verify the admin create the Todo list",function(){

        var customer = home_page.LoginAsCustomer();
        browser.sleep("3000");
        var todo = Meeting_Page.meeting_todo(OR.locators.addlogin.testdata.email,OR.locators.addlogin.testdata.pword);
        //expect(element(by.className(OR.locators.MeetingRoom.todolist)).getText()).toContain(OR.locators.MeetingRoom.testdata4.todomessage);
        element.all(by.className(OR.locators.MeetingRoom.todolist)).then(function(itemList) {
            console.log("Total values in dropdown are: " + itemList.length);
            for (i = 0; i < itemList.length; i++) {
              itemList[i].getText().then(function(text) {
                console.log(text);
                if (text == "17. Nag testing" + "\n" + "ASSIGNED TO" + "\n" + "Ragnar Lothbrok  Oliver Jensen") {
                  console.log('Match');
                  expect(text).toContain("17. Nag testing" + "\n" + "ASSIGNED TO" + "\n" + "Ragnar Lothbrok  Oliver Jensen");
                } else {
                  console.log('No Match');
                };
              });
            };
          });
      
        
    });
    xit("verify admin entered the todo form and cancel the pop-up screen",function(){

        var customer = home_page.LoginAsCustomer();
        browser.sleep("3000");
        var todo = Meeting_Page.meeting_todocancel(OR.locators.addlogin.testdata.email,OR.locators.addlogin.testdata.pword);
        expect(element(by.className(OR.locators.MeetingRoom.todobutton)).getText()).toContain(OR.locators.MeetingRoom.testdata4.list);

    });
    xit("verify the admin each field validation on create todo pop-up screen",function(){

        var customer = home_page.LoginAsCustomer();
        browser.sleep("3000");
        var todo = Meeting_Page.meeting_todovald(OR.locators.addlogin.testdata.email,OR.locators.addlogin.testdata.pword);
        var mySelect = new SelectWrapper(by.className(OR.locators.ToDo.signout));
        mySelect.selectByText(OR.locators.ToDo.testdata3.dropitem);
        browser.sleep("3000");
    });
    xit("verify the todo form revert values on the field properly or not ",function(){

        var customer = home_page.LoginAsCustomer();
        browser.sleep("3000");
        var todo = Meeting_Page.meeting_todorevert(OR.locators.addlogin.testdata.email,OR.locators.addlogin.testdata.pword);
        expect(element(by.className(OR.locators.MeetingRoom.titleinput)).getText()).toContain(OR.locators.MeetingRoom.testdata4.empty);
        expect(element(by.className(OR.locators.MeetingRoom.desinput)).getText()).toContain(OR.locators.MeetingRoom.testdata4.empty);
        expect(element(by.className(OR.locators.MeetingRoom.dateinput)).getText()).toContain(OR.locators.MeetingRoom.testdata4.empty);
        expect(element(by.className(OR.locators.MeetingRoom.assignedinput)).getText()).toContain(OR.locators.MeetingRoom.testdata4.empty);

    });
    xit("verify the admin can able to invite members",function(){

        var customer = home_page.LoginAsCustomer();
        browser.sleep("3000");
        var todo = Meeting_Page.meeting_invitemembers(OR.locators.addlogin.testdata.email,OR.locators.addlogin.testdata.pword);
        expect(element(by.css(OR.locators.MeetingRoom.valid)).getText()).toEqual(OR.locators.MeetingRoom.testdata4.validmess);
       

    });
    xit("verify the admin can able to search the members and select checkbox then  cancel the pop-up",function(){

        var customer = home_page.LoginAsCustomer();
        browser.sleep("3000");
        var todo = Meeting_Page.meeting_invitecancel(OR.locators.addlogin.testdata.email,OR.locators.addlogin.testdata.pword);
        //expect(element(by.css(OR.locators.MeetingRoom.valid)).getText()).toEqual(OR.locators.MeetingRoom.testdata4.validmess);
       

    });
    xit("verify the admin can able to send the message ",function(){

        var customer = home_page.LoginAsCustomer();
        browser.sleep("3000");
        var todo = Meeting_Page.meeting_messages(OR.locators.addlogin.testdata.email,OR.locators.addlogin.testdata.pword);
        //expect(element(by.css(OR.locators.MeetingRoom.valid)).getText()).toEqual(OR.locators.MeetingRoom.testdata4.validmess);
       

    });
    xit("verify the admin can able to upload the files and submit to message chat",function(){

        var customer = home_page.LoginAsCustomer();
        browser.sleep("3000");
        var todo = Meeting_Page.meeting_upload(OR.locators.addlogin.testdata.email,OR.locators.addlogin.testdata.pword);
        //expect(element(by.css(OR.locators.MeetingRoom.valid)).getText()).toEqual(OR.locators.MeetingRoom.testdata4.validmess);
        expect(element.all(by.className(OR.locators.MeetingRoom.chat)).getText()).toContain(OR.locators.MeetingRoom.testdata4.uploadfile);
        expect(element.all(by.className(OR.locators.MeetingRoom.timechat)).getText()).toContain(OR.locators.MeetingRoom.testdata4.time);
       

    });
    xit("verify the admin can able to upload the files and close it pop-up screen",function(){

        var customer = home_page.LoginAsCustomer();
        browser.sleep("3000");
        var todo = Meeting_Page.meeting_uploadclose(OR.locators.addlogin.testdata.email,OR.locators.addlogin.testdata.pword);
        
       

    });
    xit("verify the admin can able to search the shared files and downloaded",function(){

        var customer = home_page.LoginAsCustomer();
        browser.sleep("3000");
        var todo = Meeting_Page.meeting_sharedfile(OR.locators.addlogin.testdata.email,OR.locators.addlogin.testdata.pword);
        

    });
    it("verify the admin can able to search the shared files and closed pop-up screen",function(){

        var customer = home_page.LoginAsCustomer();
        browser.sleep("3000");
        var todo = Meeting_Page.meeting_sharedclose(OR.locators.addlogin.testdata.email,OR.locators.addlogin.testdata.pword);
        

    });









});
