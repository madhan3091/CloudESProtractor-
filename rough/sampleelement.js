//handle popup
/*handlePromise = browser.driver.getAllWindowHandles();
             var handles = handlePromise.then(function (handles) {
                popUpHandle = handles[1];
                handle = browser.switchTo().window(popUpHandle);
                browser.sleep(1000);
                handle = browser.getWindowHandle();
                expect(handle).toEqual(popUpHandle);
                var login = login_page.addloginInfo(OR.locators.addlogin.email,OR.locators.addlogin.pword);*/
        //var register = home_page.RegisterAsCustomer();