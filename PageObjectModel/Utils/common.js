var PropertiesReader = require('properties-reader');
const { element } = require('protractor');
var prop_conf = PropertiesReader('PageObjectModel/Utils/conf.properties');
var chai = require("chai");
var chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = { 
    LoginElement: {
          username_txt: element(by.xpath("//input[@placeholder='Email, phone, or Skype']")),
       // username_txt: element(by.xpath("//input[@placeholder='Email address, phone number or Skype']")),
        password_txt: element(by.xpath("//input[@placeholder='Password']")),
       // username_next_btn: element(by.buttonText("Next")),
       username_next_btn: element(by.xpath("//input[@type='submit']")),
        //signIn_btn: element(by.buttonText("Sign in")),
        signIn_btn: element(by.xpath("//input[@class='win-button button_primary button ext-button primary ext-primary']")),
        checkbox: element(by.name('DontShowAgain')),
        no_btn: element(by.id('idBtn_Back')),
        yes_btn: element(by.id('idSIButton9')),
        login_error_msg: element(by.id("passwordError")),
       profile: element(by.xpath('//select[@class="w-100 form-control select-title font14"]')),
         
        // lang_ddl: element(by.xpath('//button[text()="Language"]')),
        // lang_option: element(by.xpath('//div[@aria-labelledby="dropdownBasic1"]//button')),
        // lang_ok_popup: element(by.xpath('//div[@class="swal2-actions"]//button[text()="OK"]')),
        // verify_list_lable: element(by.xpath("//nb-card//nb-card-header")),
        // list_template_menu: element(by.xpath('//a[@title="List Template"]//span[text()="List Template"]')),
        // logout: element(by.xpath('//a[@title="Logout"]')),
        // eng_lang: element(by.xpath('//div[@aria-labelledby="dropdownBasic1"]//button[1]')),
        // chiness_lang: element(by.xpath('//div[@aria-labelledby="dropdownBasic1"]//button[2]')),
        // japanes_lang: element(by.xpath('//div[@aria-labelledby="dropdownBasic1"]//button[3]')),
        // rusian_lang: element(by.xpath('//div[@aria-labelledby="dropdownBasic1"]//button[4]')),
        // german_lang: element(by.xpath('//div[@aria-labelledby="dropdownBasic1"]//button[5]')),
        // hindi_lang: element(by.xpath('//div[@aria-labelledby="dropdownBasic1"]//button[6]')),
    },
    LaunchBrowser: async function() {
        browser.ignoreSynchronization = true;
        await browser.get(prop_conf.get('joiningdbURL'));
        await browser.sleep(2000);
         // browser.ignoreSynchronization = false;
    },
    LaunchBrowser1: async function() {
        browser.ignoreSynchronization = true;
        await browser.get(prop_conf.get('joiningdbURL'));
        await browser.sleep(2000);
        // browser.ignoreSynchronization = false;
    },

    LOGIN_CREDENTIAL_DETAILS: async function(role) {
        var ele = this.LoginElement;
        if (role == "Customer Center") {
            browser.ignoreSynchronization = true;
            await browser.sleep(6000);
            await ele.username_txt.sendKeys(prop_conf.get('cust_email'));
            await ele.username_next_btn.click();
            await browser.sleep(4000);
            
            await ele.password_txt.sendKeys('Carpedium#123');
            await ele.signIn_btn.click();
            await browser.sleep(20000);
            await ele.profile.sendKeys('Customer Center');
            await browser.sleep(4000);
             
                       
        } else if (role == "Application Engineer") {
            browser.ignoreSynchronization = true;
            await browser.sleep(5000);
            await ele.username_txt.sendKeys(prop_conf.get('app_engg_email'));
            await ele.username_next_btn.click();
            await browser.sleep(3000);
            await ele.password_txt.sendKeys('Varahitech#3');
            await ele.signIn_btn.click();     
           
            await browser.sleep(20000);
        } else if (role == "Approval Team") {

            browser.ignoreSynchronization = true;
            await browser.sleep(5000);
            await ele.username_txt.sendKeys(prop_conf.get('cust_email'));
            await ele.username_next_btn.click();
            await browser.sleep(5000);
            await ele.password_txt.sendKeys('Varahitech#3');
           await ele.signIn_btn.click();
           await browser.sleep(25000);
           await ele.profile.sendKeys('Approval Team');
           await browser.sleep(4000);
           
        } else if (role == "Technician") {

            browser.ignoreSynchronization = true;
            await browser.sleep(5000);
            await ele.username_txt.sendKeys(prop_conf.get('cust_email'));
            await ele.username_next_btn.click();
            await browser.sleep(4000);
            await ele.password_txt.sendKeys('Varahitech#3');
            await ele.signIn_btn.click();
             
           await browser.sleep(25000);
        //    await ele.profile.sendKeys('Technician');
        //    await browser.sleep(4000);


        } else if (role == "Development technician") {
            browser.ignoreSynchronization = true;
            await browser.sleep(6000);
            await ele.username_txt.sendKeys(prop_conf.get('cust_email'));
            await ele.username_next_btn.click();
            await browser.sleep(4000);
            
            await ele.password_txt.sendKeys('Carpedium#123');
            await ele.signIn_btn.click();
            await browser.sleep(20000);
            await ele.profile.sendKeys('Development technician');
            await browser.sleep(4000);
                                    
        }        
        else {
            console.log('No this type of role available');
        }
        await browser.sleep(2000);
        await ele.signIn_btn.click();
        // await ele.checkbox.click();
        // await ele.no_btn.click();
        await browser.sleep(6000);
    },
    VERIFYTITLE: async function(expected_title) {

        await browser.getTitle().then(function(actual_title) {
            console.log("Title is :" + actual_title);
            expect(actual_title).to.equal(expected_title);
        });
        await browser.sleep(5000);
    },


     Application_Engineer: async function() {
        
        let profilebox= element(by.xpath('//select[@class="w-100 form-control select-title font14"]'));
            profilebox.click()
            let optionText='Application Engineer';
            var optiontoselect=element(by.cssContainingText('option',optionText));
            optiontoselect.click();
            await browser.sleep(5000);
    }

    //  CUSTOMER_CENTER: async function() {

    // var profilebox= element(by.xpath('//select[@class="w-100 form-control select-title font14"]'));
    // profilebox.click()
    // let optionText='Customer Center';
    // var optiontoselect=element(by.cssContainingText('option',optionText));
    // optiontoselect.click();
    // await browser.sleep(4000);
    // }
}