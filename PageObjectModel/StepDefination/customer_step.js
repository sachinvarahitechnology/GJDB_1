var { Given, When, Then, setDefaultTimeout } = require('cucumber');
setDefaultTimeout(60 * 3000);
var chai = require("chai");
var chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised);
var expect = chai.expect; 

var ss = require("../Utils/screenshot.js");

var customer = require('../Pages/customer_page.js');
When(/^Select number of layer "([^"]*)" from the material search$/, function(layer_no) {
    return customer.SELECT_CUSTOMER_NUMBER_OF_LAYER(layer_no);
});
Then(/^Verify the "([^"]*)" is displayed on the screen$/, function(layer_no) {
    return customer.VERIFY_CUSTOMER_LAYER_NO(layer_no);
});
Then(/^Select material category "([^"]*)" and material grade "([^"]*)" and select oprator "([^"]*)" and select unit "([^"]*)" mm$/, function(mc, mg, operator, unit) {
    return customer.SELECT_CATEGORY_FOR_SEARCH(mc, mg, operator, unit);
});
Then(/^Select material category "([^"]*)" and material grade "([^"]*)" and select oprator "([^"]*)" and select unit "([^"]*)" mm and again material category "([^"]*)" and material grade "([^"]*)" and select oprator "([^"]*)" and select unit "([^"]*)" mm from layer 2$/, function(mc, mg, operator, unit, mc1, mg1, operator1, unit1) {
    return customer.SELECT_CATEGORY_FOR_SEARCH_LAYER2(mc, mg, operator, unit, mc1, mg1, operator1, unit1);
});

Then('Select material category {string} and material grade {string} and select oprator {string} and select unit {string} mm and again material category {string} and material grade {string} and select oprator {string} and select unit {string} mm from layer 2D', function ( mc, mg, operator, unit, mc1, mg1, operator1, unit1) {
    return customer.SELECT_CATEGORY_FOR_SEARCH_LAYER2_D(mc, mg, operator, unit, mc1, mg1, operator1, unit1);
  });

Then(/^Select material category "([^"]*)" and material grade "([^"]*)" and select oprator "([^"]*)" and select unit "([^"]*)" mm from layer 3$/, function(mc, mg, operator, layer3_unit) {
    return customer.SELECT_CATEGORY_FOR_SEARCH_LAYER3(mc, mg, operator, layer3_unit);
});

Then('Select material category {string} and material grade {string} and select oprator {string} and select unit {string} mm from layer 3D', function 
(mc, mg, operator, layer3_unit) {
    return customer.SELECT_CATEGORY_FOR_SEARCH_LAYER3D(mc, mg, operator, layer3_unit);
         });

Then('Interlaye select material category {string}, material grade {string}, unit {string}, again select material cateogry {string}, material grade {string} and unit {string} mm for {int} layer wise', function (mc, mg, unit, mc1, mg1, unit1, int) {              
        return customer.SELECT_CATEGORY_FOR_SEARCH_LAYER4(mc, mg, unit, mc1, mg1, unit1, int) ;
   });
 
When(/^Click on search button$/, function() {
    return customer.CLICK_ON_SEARCH_BTN();
});

When(/^Click on "([^"]*)" from the sidebar$/, function(link) {
    return customer.CLICK_ON_SIDEBAR(link);
});

When('check it {string}', function (link2) {
    return customer.link2(link2);
 });

// When('Fill automatically joint name {string} and project id is {string}', function(custName, ProID) {
//     return customer.CUST_ENTER_JOINT_NAME(custName, ProID);
// });

When('Fill automatically joint name {string} or {string} and project id is {string}', function (custName, ProID,program_ID) {
    
    return   customer.CUST_ENTER_JOINT_NAME(custName, ProID,program_ID);
  });

When(/^Select the number of layer "([^"]*)"$/, function(no_layer) {
    return customer.CUST_SELECT_NO_OF_LAYER(no_layer);
});
When(/^Enter material category "([^"]*)", material grade "([^"]*)" and unit "([^"]*)" mm$/, function(MC, MG, UNIT) {
    return customer.CUST_LAYER_DETAILS(MC, MG, UNIT);
});

When(/^user select customer name as "([^"]*)" and project id is "([^"]*)"$/, function(custName, ProID) {
    return customer.CUSTOMERNAME_PROJECTID(custName, ProID);
});

When('user select customer name as {string} and project id is {string} for other', function (custName, ProID) {
    return customer.CUSTOMERNAME_PROJECTID_FOR_OTHERS(custName, ProID);
  });

  When('user select customer name as {string} and project id is {string} in send_for_approval', function (custName, ProID) {  
    return customer.CUSTOMERNAME_PROJECTID_IN_SEND_FOR_APPROVAL(custName, ProID);
  });

  When('user select customer name as {string} and project id is {string} in send_to_technician', function (custName, ProID) {
    
    return customer.CUSTOMERNAME_PROJECTID_IN_SEND_FOR_TECHNICIAN(custName, ProID);
  });

When(/^select any joint name and send to application engineer is "([^"]*)"$/, function(name) {
    return customer.SELECTJOINT_AND_SEND_TO_APPLICATION(name);
});
When(/^click on notification icon and verify recent joint name came from customer center$/, function() {
    return customer.APPLICATION_ENGG_NOTIFICATION();
});
Then(/^logout successfully$/, function() {
    return console.log("Logout successfully...!");
});

When(/^Interlaye select material category "([^"]*)", material grade "([^"]*)", unit "([^"]*)", again select material cateogry "([^"]*)", material grade "([^"]*)" and unit "([^"]*)" mm$/, function(inmc1,inmg1,inunit,mc2,mg2,unit2){
    return customer.TWO_LAYER_CREATE_NEW_JOINT(inmc1,inmg1,inunit,mc2,mg2,unit2);
});

When(/^Interlaye select material category "([^"]*)", material grade "([^"]*)", unit "([^"]*)", again select material cateogry "([^"]*)", material grade "([^"]*)" and unit "([^"]*)" mm for 3 layer$/, function(inmc1,inmg1,inunit,mc2,mg2,unit2){
    return customer.THREE_LAYER_CREATE_NEW_JOINT(inmc1,inmg1,inunit,mc2,mg2,unit2);
});

When(/^Interlaye select material category "([^"]*)", material grade "([^"]*)", unit "([^"]*)", again select material cateogry "([^"]*)", material grade "([^"]*)" and unit "([^"]*)" mm for 4 layer$/, function(inmc1,inmg1,inunit,mc2,mg2,unit2){
    return customer.FOUR_LAYER_CREATE_NEW_JOINT(inmc1,inmg1,inunit,mc2,mg2,unit2);
});

When(/^click on create new joint request button$/, function(){
    return customer.CREATE_NEW_JOINT_REQUEST_BTN();
});

Then(/^verify joint name is added successfully$/, function(){
    return customer.VERIFY_NEW_JOINT_REQUEST();
});
Then(/^Verify if record availble then displayed on table oterwise display no results found$/, function(){
    return customer.SEARCH_RESULT();
});