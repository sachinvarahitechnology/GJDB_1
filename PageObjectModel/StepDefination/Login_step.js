var { Given, When, Then, setDefaultTimeout } = require('cucumber');
setDefaultTimeout(60 * 3000);
var chai = require("chai");
var chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised);
var expect = chai.expect;

var ss = require("../Utils/screenshot.js");

var common = require("../Utils/common.js");
const { browser } = require('protractor');


Given(/^User navigate to Joining DB Application$/, function() {
    return common.LaunchBrowser();
});

Given(/^User navigate to Joining DB Applications$/, function() {
    return common.LaunchBrowser1();
});

When(/^User "([^"]*)" role enter our email and password and click on sign in button$/, function(role) {
    return common.LOGIN_CREDENTIAL_DETAILS(role);
});

Then(/^Verify the title name "([^"]*)"$/, function(title) {
    return common.VERIFYTITLE(title)
});

When(/^"([^"]*)" user login to joining DB application$/, function(role) {
    return common.LOGIN_CREDENTIAL_DETAILS(role);
});