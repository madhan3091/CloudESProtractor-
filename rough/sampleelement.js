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

//pagination
 /* var getPaginationsize = element.all(by.className("mt-3 d-block light-theme simple-pagination"));

            //element(by.className("page-link next")).click();
            expect(getPaginationsize.getSize()).toContain("100");

            getPaginationsize.count().then(function (pagination) {

                if (pagination > 1)
                {

                    for (var i = 0; i < pagination; i++) 
                    {
                        getPaginationsize.get(i).click();
                        console.log(getPaginationsize);
                    }
                } else
                    {
                    console.log('Pagination not exists');
                    }
                element(by.className("page-link next")).click();
            });*/
 
             /*browser.executeScript('window.scrollTo(1342,359);').then(function () {
            element(by.className("economic mt-2")).click();
            browser.sleep(3000);
        })
        expect(element(by.css("[ng-click='vm.regsiterModal()']")).getText()).toEqual("REGISTER");
        element(by.className("close")).click();
        browser.sleep(3000);
        element(by.xpath("//img[@src='/assets/images/dashboard/subcontractors.png']")).click();
        browser.sleep(3000);
        expect(element(by.css("[ng-click='vm.regsiterModal()']")).getText()).toEqual("REGISTER");
        element(by.className("close")).click();
        browser.sleep(3000);*/

            
        browser.executeScript('window.scrollTo(0,250);').then(function () {

            element(by.className(OR.locators.materialinfo.next)).click();
            /*
            var i;
            for (i = 1; i < 10; i++) 
            {
                element(by.className(OR.locators.materialinfo.next)).click();
                /*if(i===9){ 
                    console.log(i);
                    break;
                    return false;
                }*/
            //}
            
            

    
        });
        
       
       
       
       //handling dropdown list 
        element.all(by.className(OR.locators.materialinfo.unit)).then(function(items){
            console.log("Total value in dropdown are :"+items.length);
            //expect(unit.getText()).toEqual('SQ.MT'); 
            for(i=0;i<items.length;i++){
                items[i].getText().then(function(text) {
                    console.log(text);
                    
                });
            }
            for(i=0;i<items.length;i++){
                items[i].getAttribute('class').then(function(text) {
                    console.log(text);
                    
                });
            }
        });
       
        var mySelect = new SelectWrapper(by.css("select option:nth-child(1)"));
        mySelect.selectByValue('1');
        mySelect.selectByText('mt');

        //Protractor check if element is present on a LIST using element.all
        element.all(by.css(".item a.gc-exercises-link")).then(function(itemList) {
            console.log("Total values in dropdown are: " + itemList.length);
            for (i = 0; i < itemList.length; i++) {
              itemList[i].getText().then(function(text) {
                console.log(text);
                if (text == 'BOATLIFT-EXERCISE') {
                  console.log('Match');
                  expect(text).toEqual('BOATLIFT-EXERCISE');
                } else {
                  console.log('No Match');
                };
              });
            };
          });

          //dropdown sample code new way
          element.all(by.repeater("unit in vm.mUnits")).then(function(itemList) 
          {
              var unit = element(by.css("[ng-click='vm.unitSelect(unit)']"));
              console.log("Total values in dropdown are: " + itemList.length);
              for (i = 0; i<itemList.length; i++) {
                itemList[i].getText().then(function(textvalue) {
                  console.log(textvalue,textvalue === "sq.ft",typeof textvalue);
                  if (textvalue == "sq.ft") {
                    console.log('Match');
                    unit.click();
                  } else {
                    console.log('No Match');
                  };
                });
              };
          });


          //try catch condition on async function

          public async clickElementBug(elementLocator: Locator) {
            const elem = await element(elementLocator);
            await browser.wait(
              async function() {
                try {
                  await elem.click();
                  return true;
                } catch (error) {
                  return false;
                }
              },
              this.TIMEOUT_MILLIS,
              'Clicking of element failed: ' + elem
            );
        }