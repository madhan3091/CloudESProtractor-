var base = require('../pages/Basepage.js');
var OR = require('../json/OR.json');
var home_page = require('../pages/HomePage.js');
var Todo_Page=require('../pages/Todo.js');  
var logger = require('../log'); 
var SelectWrapper = require('../util/select-wrapper.js');

describe("To create the todo list",function(){

    beforeEach(function() {
        browser.driver.manage().window().maximize();
        base.navigateToURL(OR.testsiteurl);
    });
    afterEach(function(){
        browser.executeScript('window.localStorage.clear();');
        browser.executeScript('window.sessionStorage.clear();');
        browser.driver.manage().deleteAllCookies(); 
    });


    it("create the todo list ",function(){

        var customer = home_page.LoginAsCustomer();
        browser.sleep(3000);
        var todo = Todo_Page.todo_create(OR.locators.addlogin.testdata.email,OR.locators.addlogin.testdata.pword);
        expect(element(by.className(OR.locators.ToDo.todotitle)).getText()).toEqual(OR.locators.ToDo.testdata3.title1);
        expect(element(by.className(OR.locators.ToDo.tododesc)).getText()).toEqual(OR.locators.ToDo.testdata3.describe1);
        expect(element(by.className(OR.locators.ToDo.hours)).getText()).toEqual(OR.locators.ToDo.testdata3.Hours);
        logger.log('info','verify the Entered  value is correct or not in todo list ');   
        element(by.className(OR.locators.ToDo.card)).click();
        browser.sleep('5000');
        expect(element(by.xpath(OR.locators.ToDo.viewtitle)).getText()).toEqual(OR.locators.ToDo.testdata3.title1);
        expect(element(by.className(OR.locators.ToDo.description2)).getText()).toEqual(OR.locators.ToDo.testdata3.describe1);
        expect(element(by.className(OR.locators.ToDo.status)).getText()).toEqual(OR.locators.ToDo.testdata3.statusmessage);
        expect(element(by.className(OR.locators.ToDo.viewhours)).getText()).toEqual(OR.locators.ToDo.testdata3.Hours);

    });
    it("change the status Mark as read in todo list",function(){

        var customer = home_page.LoginAsCustomer();
        browser.sleep('3000');
        var todo = Todo_Page.todo_edit(OR.locators.addlogin.testdata.email,OR.locators.addlogin.testdata.pword);
        expect(element(by.className(OR.locators.ToDo.completed)).getText()).toEqual(OR.locators.ToDo.testdata3.success);

    });
    it("change the status Mark as reopen in todo list",function(){

        var customer = home_page.LoginAsCustomer();
        browser.sleep('3000');
        var todo = Todo_Page.todo_reopen(OR.locators.addlogin.testdata.email,OR.locators.addlogin.testdata.pword);
        expect(element(by.className(OR.locators.ToDo.completed)).getText()).toEqual(OR.locators.ToDo.testdata3.statusmessage);
        expect(element(by.className(OR.locators.ToDo.viewhours)).getText()).toEqual(OR.locators.ToDo.testdata3.Hours);

    });
    it("verify admin entered the todo form and cancel the pop-up screen",function(){

        var customer = home_page.LoginAsCustomer();
        browser.sleep('3000');
        var todo = Todo_Page.todo_cancel(OR.locators.addlogin.testdata.email,OR.locators.addlogin.testdata.pword);
        expect(element(by.className(OR.locators.ToDo.create)).getText()).toEqual(OR.locators.ToDo.testdata3.creatbutton);
    });
    it("verify admin click on todo item at homepage",function(){

        var customer = home_page.LoginAsCustomer();
        browser.sleep(3000);
        var todo = Todo_Page.todo_view(OR.locators.addlogin.testdata.email,OR.locators.addlogin.testdata.pword);
        expect(element(by.className(OR.locators.ToDo.viewitem)).getText()).toEqual(OR.locators.ToDo.testdata3.title1);
        expect(element(by.xpath(OR.locators.ToDo.listhours)).getText()).toEqual(OR.locators.ToDo.testdata3.Hours);
        expect(element(by.className(OR.locators.ToDo.completed)).getText()).toEqual(OR.locators.ToDo.testdata3.statusmessage);

    });
    it("verify the admin each field validation on create todo pop-up screen",function(){

        var customer = home_page.LoginAsCustomer();
        browser.sleep(3000);
        var todo = Todo_Page.todo_field(OR.locators.addlogin.testdata.email,OR.locators.addlogin.testdata.pword);
        var mySelect = new SelectWrapper(by.className(OR.locators.ToDo.signout));
        mySelect.selectByText(OR.locators.ToDo.testdata3.dropitem);
        browser.sleep("3000");

    });






});