var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var PropertiesReader = require('properties-reader');
var prop_conf = PropertiesReader('PageObjectModel/Utils/conf.properties');
var common = require("../Utils/common.js");
// var createmplate = require("../Pages/template_page.js");
const { browser, element } = require('protractor');
const { protractor } = require('protractor/built/ptor');
// var mySelect = new SelectWrapper(by.id("userSelect"));

var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date + ' ' + time;
var notification_requ_name = [];

module.exports = {
    Approval_element: {

    }
}