var { Given, When, Then, setDefaultTimeout } = require('cucumber');
setDefaultTimeout(60 * 3000);
var chai = require("chai");
var chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised);
var expect = chai.expect;

var ss = require("../Utils/screenshot.js");

var app_engg = require("../Pages/application_engg_page");
When(/^check selected request is opened in table$/, function() {
    return app_engg.SELECTED_REQUEST_OPENED();
});