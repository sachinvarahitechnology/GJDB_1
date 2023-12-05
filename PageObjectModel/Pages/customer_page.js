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
const { Console, log } = require('console');
// var mySelect = new SelectWrapper(by.id("userSelect"));

var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date + ' ' + time;
var joint_name_arr = [];
var customer_to_app_engg = [];
var project_id = [];
var project_id1 = [];

module.exports = {
    customer_element: {
        //Side bar menu links
        homeMenu_link: element(by.xpath('(//span[@class="menu-text hometxt"])[1]')),
        create_new_joint_link: element(by.xpath('//a//span[text()="Create New Joint"]')),
        send_to_app_engg_link: element(by.xpath('//a//span[text()="Send To Application Team"]')),
        send_to_app_engg_link1: element(by.xpath('//a//span[text()="Send To Engineer"]')),
        logout_link: element(by.xpath('//a//span[text()="Log Out"]')),
        worksheet_link: element(by.xpath('//a//span[text()="Worksheet"]')),
        project_manage_link: element(by.xpath('//span[text()="Project Manage"]')),
        send_for_apprval_link: element(by.xpath('//a//span[text()="Send For Approval"]')),
        send_to_technician_link: element(by.xpath('//a//span[text()="Send To Technician"]')),
        approve_joint: element(by.xpath('//a//span[text()="Approve Joint"]')),
        list_of_joint: element(by.xpath('//a//span[text()="List Of Joints"]')),
        Master_link: element(by.xpath('//a//span[text()="Master"]')),
        Home_link: element(by.xpath('//a//span[text()="Home"]')),
        create_new_user: element(by.xpath('//a//span[text()="Create New User"]')),
        list_of_user: element(by.xpath('//a//span[text()="List Of User"]')),
        report_list: element(by.xpath('//a//span[text()="Report List "]')),

        create_new_templete: element(by.xpath('//a//span[text()="Create new Template"]')),
        list_of_templete: element(by.xpath('//a//span[text()="List Of User"]')),

        // Home page elements
        home_layer_1: element(by.xpath('//ul[@class="nav nav-tabs font16"]/li[1]/a')),
        home_layer_2: element(by.xpath('//ul[@class="nav nav-tabs font16"]/li[2]/a')),
        home_layer_3: element(by.xpath('//*[@id="threeLayer"]')),
        home_layer_4: element(by.xpath('//ul[@class="nav nav-tabs font16"]/li[4]/a')),
        home_enter_no_txt: element(by.xpath('//input[@placeholder="Enter No"]')),
        display_layer_1: element(by.xpath('//a[text()="Layer 1"]')),
        display_layer_2: element(by.xpath('//a[text()="Layer 2"]')),
        display_layer_3: element(by.xpath('//a[text()="Layer 3"]')),
        display_layer_4: element(by.xpath('//a[text()="Layer 4"]')),
        material_category1: element(by.xpath('//select[@formcontrolname="propertiesName1"]')),
        material_grade1: element(by.xpath('//select[@formcontrolname="materialGrade1"]')),
        operator1: element(by.xpath('//select[@formcontrolname="operator1" and @name="valSelect"]')),
        unit_value1: element(by.xpath('//input[@formcontrolname="propValue1"]')),
        c_unit_value1: element(by.xpath('//input[@formcontrolname="propValue1" and @placeholder="-"]')),
        home_search_btn: element(by.xpath('//button[text()="Search"]')),
        home_inter_material_category: element(by.xpath('//select[@formcontrolname="propertiesNameLayer1"]')),
        home_inter_material_grade: element(by.xpath('//select[@formcontrolname="materialGradeLayer1"]')),
        home_inter_operator: element(by.xpath('//select[@formcontrolname="operator2" and @name="valSelect"]')),
        home_inter_prop_value: element(by.xpath('//input[@formcontrolname="propertiesNameLayerValue1"]')),
        home_inter_material_category2: element(by.xpath('//select[@formcontrolname="propertiesNameLayer2"]')),
        home_inter_material_grade2: element(by.xpath('//select[@formcontrolname="materialGradeLayer2"]')),
        home_inter_operator2: element(by.xpath('(//select[@class="mt-4 w-100 form-control font16 ng-untouched ng-pristine ng-valid"])[1]')),
        home_inter_prop_value2: element(by.xpath('//input[@formcontrolname="propertiesNameLayerValue2"]')),
        home_layer2_material_category: element(by.xpath('//select[@formcontrolname="propertiesName2"]')),

        home_interlayer: element(by.xpath('//*[@id="searchTypeToggle"]/label[2]/div')),
        home_interlayer_2: element(by.xpath('//*[@id="searchTypeToggle1"]/label[2]/div')),
        home_interlayer_3: element(by.xpath('//*[@id="searchTypeToggle2"]/label[2]/div')),

        home_inter_grade_category: element(by.xpath('//*[@id="step9"]/div[4]/div[2]/div/select')),
        home_inter_grade_material: element(by.xpath('//*[@id="step9"]/div[4]/div[3]/select')),
        home_inter_value: element(by.xpath('//*[@id="step9"]/div[4]/div[7]/div/input')),

        home_inter3_grade_category: element(by.xpath('//*[@id="step9"]/div[6]/div[2]/div/select')),
        home_inter3_grade_material: element(by.xpath('//*[@id="step9"]/div[6]/div[3]/select')),
        home_inter3_grade_value: element(by.xpath('//*[@id="step9"]/div[6]/div[7]/div/input')),



        home_inter_material_category3: element(by.xpath('//select[@formcontrolname="propertiesNameLayer3"]')),
        home_inter_material_grade3: element(by.xpath('//select[@formcontrolname="materialGradeLayer3"]')),
        home_inter_operator3: element(by.xpath('//div[@class="row show2"]//div[5]//select[@formcontrolname="operator3"]')),
        home_inter_prop_value3: element(by.xpath('//input[@formcontrolname="propertiesNameLayerValue3"]')),

        home_layer2_material_grade: element(by.xpath('//select[@formcontrolname="materialGrade2"]')),
        home_layer2_operator: element(by.xpath('//select[@formcontrolname="operator3" or name="valSelect"]')),
        home_layer2_prop_value: element(by.xpath('//input[@formcontrolname="propValue2"]')),
        home_layer3_material_category: element(by.xpath('//select[@formcontrolname="propertiesName3"]')),
        home_layer3_material_grade: element(by.xpath('//select[@formcontrolname="materialGrade3"]')),
        home_layer3_operator: element(by.xpath('//div[@class="row show3"]//following::div[@class="row show3"]//div[5]//select[@formcontrolname="operator1"]')),
        home_layer3_prp_value: element(by.xpath('//input[@formcontrolname="propValue3"]')),

        home_layer4_material_category: element(by.xpath('//select[@formcontrolname="propertiesName4"]')),
        home_layer4_material_grade: element(by.xpath('//select[@formcontrolname="materialGrade4"]')),
        home_layer4_operator: element(by.xpath('//div[@class="row show3"]//following::div[@class="row show3"]//div[5]//select[@formcontrolname="operator1"]')),
        home_layer4_prp_value: element(by.xpath('//input[@formcontrolname="propValue4"]')),

        home_customerName: element(by.xpath('//input[@placeholder="Customer"]')),
        home_project_id: element(by.xpath('(//select[@name="projId"])[2]')),
        home_program_id: element(by.xpath('(//select[@name="projId"])[1]')),

        // Create new joint request page
        name_of_joint: element(by.xpath('//input[@formcontrolname="jointName"]')),
        create_new_joint_bnt: element(by.xpath('//*[@id="step9"]')),
        btn_ok: element(by.buttonText('OK')),
        create_new_joint_interlayer_1: element(by.xpath('//*[@id="checkedInterlayer"]')),
        create_new_joint_interlayer_2: element(by.xpath('//*[@id="step8"]/div[4]/div[1]/div/div/label')),
        create_new_joint_interlayer_3: element(by.xpath('//*[@id="step8"]/div[6]/div[1]/div/div/label')),

        // List of joint page
        recent_add_request: element(by.xpath('//tbody[1]//tr/td[3]')),
        no_result_found: element(by.xpath('//a[text()="No results found.Please click here to create new joint request"]')),
        // no_result_found:element(by.partialLinkText('No results found')),
        // Send to application Engineer
        select_firxt_checkbox: element(by.xpath('//tbody//tr//td//input[1]')),
        selected_joint_name: element(by.xpath('//tbody//tr//td[2]//span')),
        btn_send: element(by.buttonText('Send')),
        app_engg_name_ddl: element(by.xpath('//select[@formcontrolname="username"]')),
        send_btn_ok: element(by.xpath('//button[@class="btn btnok"]')),
        send_msg: element(by.xpath('//h2[text()="Request send successfully"]')),
        btn_ok1: element(by.buttonText('OK!')),

        // Application eng home 
        notification_icon: element(by.xpath('//li/a[@data-target="#notification_alert"]//img')),
        inbox_first_msg: element(by.xpath('//div[@class="modal-body"]//div//div[2]//p')),

    },
    SELECT_CUSTOMER_NUMBER_OF_LAYER: async function (layer_no) {
        var ele = this.customer_element;
        await browser.sleep(7000);
        await ele.homeMenu_link.click();
        await browser.sleep(5000);
        if (layer_no == 1) {
            await ele.home_layer_1.click();
        } else if (layer_no == 2) {
            await ele.home_layer_2.click();
        } else if (layer_no == 3) {
            await ele.home_layer_3.click();
        } else if (layer_no == 4) {
            await ele.home_layer_4.click();
        }
        await browser.sleep(5000);
        await browser.manage().timeouts().implicitlyWait(20000);
    },
    VERIFY_CUSTOMER_LAYER_NO: async function (expected_layer_no) {
        var ele = this.customer_element;
        if (expected_layer_no == "Layer 1") {
            await ele.display_layer_1.getText().then(function (actual_layer_no) {
                expect(actual_layer_no).to.equal(expected_layer_no);
            });
        } else if (expected_layer_no == "Layer 2") {
            await ele.display_layer_2.getText().then(function (actual_layer_no) {
                expect(actual_layer_no).to.equal(expected_layer_no);
            });
        } else if (expected_layer_no == "Layer 3") {
            await ele.display_layer_3.getText().then(function (actual_layer_no) {
                expect(actual_layer_no).to.equal(expected_layer_no);
            });
        } else if (expected_layer_no == "Layer 3") {
            await ele.display_layer_4.getText().then(function (actual_layer_no) {
                expect(actual_layer_no).to.equal(expected_layer_no);
            });
        }
        await browser.sleep(5000);
    },
    SELECT_CATEGORY_FOR_SEARCH: async function (mc, mg, operator, unit) {
        var ele = this.customer_element;
        await browser.sleep(5000);
        // await ele.homeMenu_link.click();
        // await browser.sleep(5000);
        await ele.material_category1.sendKeys(mc);
        await browser.manage().timeouts().implicitlyWait(20000);
        await browser.sleep(3000);
        await ele.material_grade1.sendKeys(mg);
        await browser.manage().timeouts().implicitlyWait(20000);
        await ele.operator1.sendKeys(operator);
        console.log(operator);
        await browser.manage().timeouts().implicitlyWait(20000);
        await ele.unit_value1.sendKeys(unit);
        await browser.manage().timeouts().implicitlyWait(20000);
        // console.log(mg + operator + unit);
        await browser.sleep(2000);
    },
    SELECT_CATEGORY_FOR_SEARCH_LAYER2: async function (mc, mg, operator, unit, mc1, mg1, operator1, unit1) {
        var ele = this.customer_element;
        await browser.sleep(5000);


        await ele.home_interlayer.click();
        await browser.sleep(3000);

        await ele.home_inter_material_category.sendKeys(mc);
        await browser.manage().timeouts().implicitlyWait(20000);
        console.log(mc + " :material category");
        await browser.sleep(2000);
        await ele.home_inter_material_grade.sendKeys(mg);
        await browser.manage().timeouts().implicitlyWait(20000);
        await browser.sleep(2000);
        console.log(mg + " :material grade");
        await browser.manage().timeouts().implicitlyWait(20000);
        await ele.home_inter_operator.sendKeys(operator);
        console.log(operator + " : operator");
        await browser.manage().timeouts().implicitlyWait(20000);
        await ele.home_inter_prop_value.sendKeys(unit);
        await browser.manage().timeouts().implicitlyWait(20000);
        console.log("All are set up to here :============")


        await ele.home_layer2_material_category.sendKeys(mc1);
        await browser.manage().timeouts().implicitlyWait(20000);
        console.log(mc1 + " mc1 element")
        await browser.sleep(3000);
        await ele.home_layer2_material_grade.sendKeys(mg1);
        console.log(mg1 + " mg1 element")
        await browser.manage().timeouts().implicitlyWait(20000);
        await browser.sleep(3000);

        await ele.home_layer2_operator.sendKeys(operator1);
        console.log(operator1 + " : operator1");
        await browser.manage().timeouts().implicitlyWait(20000);
        await ele.home_layer2_prop_value.sendKeys(unit1);
        await browser.manage().timeouts().implicitlyWait(20000);

        // console.log(mg + operator + unit);
        await browser.sleep(3000);
    },

    SELECT_CATEGORY_FOR_SEARCH_LAYER3: async function (mc, mg, operator, unit) {

        await browser.sleep(2000);
        var ele = this.customer_element;
        await ele.home_interlayer_2.click();
        await browser.sleep(2000);
        await ele.home_inter_grade_category.sendKeys(mc);
        await browser.manage().timeouts().implicitlyWait(20000);
        await browser.sleep(2000);
        await ele.home_inter_grade_material.sendKeys(mg);
        await browser.manage().timeouts().implicitlyWait(20000);
        await browser.sleep(2000);
        await ele.home_inter_value.sendKeys(unit);
        await browser.manage().timeouts().implicitlyWait(20000);
        await browser.sleep(2000);

        await ele.home_layer3_material_category.sendKeys(mc);
        await browser.manage().timeouts().implicitlyWait(20000);
        await browser.sleep(2000);
        await ele.home_layer3_material_grade.sendKeys(mg);
        await browser.manage().timeouts().implicitlyWait(20000);
        await browser.sleep(2000);
        await ele.home_layer3_prp_value.sendKeys(unit);
        await browser.manage().timeouts().implicitlyWait(20000);
        await browser.sleep(2000);

    },

    SELECT_CATEGORY_FOR_SEARCH_LAYER4: async function (mc, mg, unit, mc1, mg1, unit1, int) {

        await browser.sleep(2000);
        await browser.executeScript('window.scrollBy(0, 300);');
        var ele = this.customer_element;

        await ele.home_interlayer_3.click();
        await browser.sleep(2000);


        await ele.home_inter3_grade_category.sendKeys(mc);
        await browser.manage().timeouts().implicitlyWait(20000);
        await browser.sleep(2000);
        await ele.home_inter3_grade_material.sendKeys(mg);
        await browser.manage().timeouts().implicitlyWait(20000);
        await browser.sleep(2000);
        await ele.home_inter3_grade_value.sendKeys(unit);
        await browser.manage().timeouts().implicitlyWait(20000);
        await browser.sleep(2000);

        await ele.home_layer4_material_category.sendKeys(mc1);
        await browser.manage().timeouts().implicitlyWait(20000);
        await browser.sleep(2000);
        await ele.home_layer4_material_grade.sendKeys(mg1);
        await browser.manage().timeouts().implicitlyWait(20000);
        await browser.sleep(2000);
        await ele.home_layer4_prp_value.sendKeys(unit1);
        await browser.manage().timeouts().implicitlyWait(20000);
        await browser.sleep(2000);

    },


    CLICK_ON_SEARCH_BTN: async function () {
        var ele = this.customer_element;
        await ele.home_search_btn.click();
        await browser.sleep(5000);
    },
    SEARCH_RESULT: async function () {
        var ele = this.customer_element;

        await ele.no_result_found.getText().then(function (txt) {
            if (txt == "No results found.Please click here to create new joint request") {
                expect(txt).to.equal("No results found.Please click here to create new joint request");
            } else {
                expect(true).to.be.true;
            }
        });

    },
    CLICK_ON_SIDEBAR: async function (link) {
        var ele = this.customer_element;
        await browser.sleep(8000);
        if (link == "Create New Joint") {
            await browser.sleep(5000);
            await ele.create_new_joint_link.click();
        } else if (link == "Send To Application Team") {
            await ele.send_to_app_engg_link.click();
        } else if (link == "Log Out") {
            await ele.logout_link.click();
            await browser.sleep(3000);
        } else if (link == "Worksheet") {
            await browser.sleep(3000);
            await ele.worksheet_link.click();
        } else if (link == "Send For Approval") {
            await ele.send_for_apprval_link.click();
            await browser.sleep(3000);
        } else if (link == "Send To Technician") {
            await ele.send_to_technician_link.click();
        } else if (link == "Send To Engineer") {
            await ele.send_to_app_engg_link1.click();
        } else if (link == "Approve Joint") {
            await ele.approve_joint.click();
        } else if (link == "List Of Joints") {
            await ele.list_of_joint.click();
        } else if (link == "Master") {
            await ele.Master_link.click();
        } else if (link == "Home") {
            await ele.Home_link.click();
        } else if (link == "Create New User") {
            await ele.create_new_user.click();
        } else if (link == "List Of User") {
            await ele.list_of_user.click();
        } else if (link == "create new templete") {
            await ele.create_new_templete.click();
        } else if (link == "List Of User") {
            await ele.list_of_user.click();
        }else if (link2 == " Report list") {
            await ele.report_list.click();
        }
        await browser.sleep(2000);
    },

    link2: async function (link2) {
        var ele = this.customer_element;
        await browser.sleep(8000);
        if (link2 == "Create New Joint") {
            await browser.sleep(5000);
            await ele.create_new_joint_link.click();
        } else if (link2 == "Send To Application Team") {
            await ele.send_to_app_engg_link.click();
        } else if (link2 == "Log Out") {
            await ele.logout_link.click();
            await browser.sleep(3000);
        } else if (link2 == "Worksheet") {
            await browser.sleep(3000);
            await ele.worksheet_link.click();
        } else if (link2 == "Send For Approval") {
            await ele.send_for_apprval_link.click();
            await browser.sleep(3000);
        } else if (link2 == "Send To Technician") {
            await ele.send_to_technician_link.click();
        } else if (link2 == "Send To Engineer") {
            await ele.send_to_app_engg_link1.click();
        } else if (link2 == "Approve Joint") {
            await ele.approve_joint.click();
        } else if (link2 == "List Of Joints") {
            await ele.list_of_joint.click();
        } else if (link2 == "Master") {
            await ele.Master_link.click();
        } else if (link2 == "Home") {
            await ele.Home_link.click();
        } else if (link2 == "Create New User") {
            await ele.create_new_user.click();
        } else if (link2 == "List Of User") {
            await ele.list_of_user.click();
        }else if (link2 == "Report list") {
            await ele.report_list.click();
        }
        await browser.sleep(2000);
    },

    CUST_ENTER_JOINT_NAME: async function (custName, ProID) {
        var ele = this.customer_element;
        startTime = performance.now();
        //await browser.sleep(5000);
        await ele.home_customerName.click();
        await browser.sleep(5000);
        await ele.create_new_joint_link.click();

        await browser.sleep(40000);
        await ele.home_customerName.click();
        await browser.sleep(2000);
        await ele.home_customerName.sendKeys(custName, protractor.Key.DOWN, protractor.Key.ENTER);
        await browser.sleep(4000);
        await ele.home_program_id.sendKeys("Dummy Pro", protractor.Key.DOWN, protractor.Key.ENTER)
        await browser.sleep(2000);
        await ele.home_project_id.sendKeys(ProID, protractor.Key.ENTER);
        await browser.sleep(4000);
        // await browser.sleep(4000);
        //  var text='Dummy test';
        //  var optiontoselect= element(by.cssContainingText('option',text));
        //  optiontoselect.click();
        //  await browser.sleep(6000);
        // await ele.name_of_joint.getAttribute('value').then(function(jointName){
        //     console.log(jointName);
        //     joint_name_arr.push(jointName);
        // });
        //console.log(joint_name_arr);
        // await ele.name_of_joint.sendKeys(joint_name);
        await browser.manage().timeouts().implicitlyWait(20000);
    },
    CUST_SELECT_NO_OF_LAYER: async function (layer_no) {
        var ele = this.customer_element;
        if (layer_no == 1) {
            await ele.home_layer_1.click();
        } else if (layer_no == 2) {
            await ele.home_layer_2.click();
        } else if (layer_no == 3) {
            await ele.home_layer_3.click();
        } else if (layer_no == 4) {
            await ele.home_layer_4.click();
        }
        await browser.sleep(2000);
        await browser.manage().timeouts().implicitlyWait(20000);
    },
    CUST_LAYER_DETAILS: async function (mc, mg, unit) {
        var ele = this.customer_element;
        await browser.sleep(2000);
        await ele.material_category1.sendKeys(mc);
        await browser.manage().timeouts().implicitlyWait(20000);
        await browser.sleep(2000);
        await ele.material_grade1.sendKeys(mg);
        await browser.manage().timeouts().implicitlyWait(20000);
        // await ele.operator1.sendKeys("=");
        await browser.manage().timeouts().implicitlyWait(20000);
        await ele.c_unit_value1.sendKeys(unit);
        await browser.manage().timeouts().implicitlyWait(20000);
        await browser.sleep(2000);
    },
    TWO_LAYER_CREATE_NEW_JOINT: async function (inmc1, inmg1, inunit, mc2, mg2, unit2) {
        var ele = this.customer_element;

        await ele.create_new_joint_interlayer_1.click();
        await browser.sleep(2000);
        await ele.home_inter_material_category.sendKeys(inmc1);
        await browser.manage().timeouts().implicitlyWait(20000);
        await ele.home_inter_material_grade.sendKeys(inmg1);
        await browser.manage().timeouts().implicitlyWait(20000);
        await ele.home_inter_prop_value.sendKeys(inunit);
        await browser.manage().timeouts().implicitlyWait(20000);

        await ele.home_layer2_material_category.sendKeys(mc2);
        await browser.sleep(2000);
        await browser.manage().timeouts().implicitlyWait(20000);
        await ele.home_layer2_material_grade.sendKeys(mg2);
        await browser.manage().timeouts().implicitlyWait(20000);
        await ele.home_layer2_prop_value.sendKeys(unit2);
        await browser.manage().timeouts().implicitlyWait(20000);

        // console.log(mg + operator + unit);
        await browser.sleep(2000);
    },
    THREE_LAYER_CREATE_NEW_JOINT: async function (inmc1, inmg1, inunit, mc2, mg2, unit2) {
        var ele = this.customer_element;
        //inmc3,inmg3,inunit3,mc3,mg3,unit3
        browser.executeScript('window.scrollBy(0,300);');
        await browser.sleep(2000);
        // await ele.create_new_joint_interlayer_2.click();
        // await browser.sleep(2000);
        // await ele.home_inter_material_category2.sendKeys(inmc3);
        // await browser.manage().timeouts().implicitlyWait(20000);
        // await ele.home_inter_material_grade2.sendKeys(inmg3);
        // await browser.manage().timeouts().implicitlyWait(20000);
        // await ele.home_inter_prop_value2.sendKeys(inunit3);
        // await browser.manage().timeouts().implicitlyWait(20000);

        await ele.home_layer3_material_category.sendKeys(mc3);
        await browser.sleep(2000);
        await browser.manage().timeouts().implicitlyWait(20000);
        await ele.home_layer3_material_grade.sendKeys(mg3);
        await browser.manage().timeouts().implicitlyWait(20000);
        await ele.home_layer3_prp_value.sendKeys(unit3);
        await browser.manage().timeouts().implicitlyWait(20000);
        // console.log(mg + operator + unit);
        await browser.sleep(2000);
    },
    FOUR_LAYER_CREATE_NEW_JOINT: async function (inmc3, inmg3, inunit3, mc3, mg3, unit3) {
        var ele = this.customer_element;

        await ele.create_new_joint_interlayer_3.click();
        await browser.sleep(2000);
        await ele.home_inter_material_category3.sendKeys(inmc3);
        await browser.manage().timeouts().implicitlyWait(20000);
        await ele.home_inter_material_grade3.sendKeys(inmg3);
        await browser.manage().timeouts().implicitlyWait(20000);
        await ele.home_inter_prop_value3.sendKeys(inunit3);
        await browser.manage().timeouts().implicitlyWait(20000);

        await ele.home_layer4_material_category.sendKeys(mc3);
        await browser.sleep(2000);
        await browser.manage().timeouts().implicitlyWait(20000);
        await ele.home_layer4_material_grade.sendKeys(mg3);
        await browser.manage().timeouts().implicitlyWait(20000);
        await ele.home_layer4_prp_value.sendKeys(unit3);
        await browser.manage().timeouts().implicitlyWait(20000);
        // console.log(mg + operator + unit);
        await browser.sleep(2000);
    },
    CREATE_NEW_JOINT_REQUEST_BTN: async function () {
        var ele = this.customer_element;
        // await ele.create_new_joint_bnt.click();
        await browser.sleep(2000);
        await ele.create_new_joint_bnt.click();
        await browser.sleep(3000);
        let endTime = performance.now();
        const executionTime = endTime - startTime;
        console.log(`Execution time: ${executionTime} milliseconds`);
        //console.log("appengg_newJointAdd_1   this is the scenario"+"first this scenario take is 3.54 min but after build perfomance it will take 1 min 95sec ")
        console.log("this was in second :" + executionTime / 1000);
    },
    VERIFY_NEW_JOINT_REQUEST: async function () {
        var ele = this.customer_element;
        await browser.sleep(2000);
        await ele.recent_add_request.getText().then(function (actual_jointName) {
            expect(actual_jointName).to.equal(joint_name_arr[0]);
        });
        await browser.sleep(1000);
    },
    CUSTOMERNAME_PROJECTID: async function (custName, pid) {


        var ele = this.customer_element;

        await browser.sleep(6000);
        await common.Application_Engineer();
        await ele.project_manage_link.click();
        await browser.sleep(30000);

        log("This is just for dummy purpose: " + custName);

        // await ele.home_customerName.click();
        // await browser.sleep(2000);
        // await ele.home_customerName.sendKeys(custName,protractor.Key.DOWN, protractor.Key.ENTER);
        // // await ele.project_manage_link.click();
        // // await browser.sleep(2000);

        await ele.home_customerName.click();
        await browser.sleep(2000);
        await ele.home_customerName.sendKeys(custName, protractor.Key.DOWN, protractor.Key.ENTER);
        await browser.sleep(5000);

        // var optionText = ele.home_project_id.all(by.tagName('option'));

        // await optionText.each(function (visibletext) {
        //     visibletext.getText().then(function (txt) {
        //         // console.log("Display Text :" + txt);
        //         // if (txt == "FD111") {
        //             // console.log("Display Text1 :" + txt);
        //            project_id.push(txt);
        //         // }
        //     });
        // });
        // await browser.sleep(2000);

        // var i;
        // for (i = 0; i < project_id.length; i++) {
        //     if(project_id[i] == pid){
        //         await ele.home_project_id.click();
        //         break;
        //         // expect(project_id[i]).to.equal(pid);
        //     }
        // }
        // console.log(project_id1);
        // expect(project_id1[0]).to.equal(pid);

        var ss = element(by.xpath('(//select[@name="projId"])[2]'));
        ss.click();
        await browser.sleep(4000);
        var text = 'Dummy test';
        var optiontoselect = element(by.cssContainingText('option', text));
        optiontoselect.click();
        await browser.sleep(6000);


    },
    CUSTOMERNAME_PROJECTID_FOR_OTHERS: async function (custName, ProID) {
        var ele = this.customer_element;

        await browser.sleep(2000);
        await ele.worksheet_link.click();
        await browser.sleep(10000);
        await ele.home_customerName.click();
        await ele.worksheet_link.click();
        await ele.home_customerName.click();
        await ele.worksheet_link.click();

        await ele.home_customerName.click();
        await ele.home_customerName.sendKeys(custName, protractor.Key.DOWN, protractor.Key.ENTER);
        await browser.sleep(4000);

        await ele.home_program_id.sendKeys("Dummy Pro", protractor.Key.DOWN, protractor.Key.ENTER)
        await browser.sleep(5000);


        var ss = element(by.xpath('(//select[@name="projId"])[2]'));
        ss.click();
        await browser.sleep(4000);
        var text = 'Dummy test';
        var optiontoselect = element(by.cssContainingText('option', text));
        optiontoselect.click();
        await browser.sleep(5000);
            
    },

    CUSTOMERNAME_PROJECTID_IN_SEND_FOR_APPROVAL: async function (custName, ProID) {
        var ele = this.customer_element;

        await browser.sleep(2000);
        await ele.send_for_apprval_link.click();
        await browser.sleep(10000);
        await ele.home_customerName.click();
        await ele.send_for_apprval_link.click();
        await ele.home_customerName.click();
        await ele.send_for_apprval_link.click();

        await ele.home_customerName.click();
        await ele.home_customerName.sendKeys(custName, protractor.Key.DOWN, protractor.Key.ENTER);
        await browser.sleep(4000);

        var ss = element(by.xpath('(//select[@name="projId"])[2]'));
        ss.click();
        await browser.sleep(4000);
        var text = 'Dummy test';
        var optiontoselect = element(by.cssContainingText('option', text));
        optiontoselect.click();
        await browser.sleep(5000);

        await ele.send_for_apprval_link.click();
        await browser.sleep(2000);
        await ele.send_for_apprval_link.click();
        await browser.sleep(2000);
    },
    CUSTOMERNAME_PROJECTID_IN_SEND_FOR_TECHNICIAN: async function (custName, ProID) {
        var ele = this.customer_element;

        await browser.sleep(2000);
        await ele.send_to_technician_link.click();
        await browser.sleep(10000);
        await ele.home_customerName.click();
        await ele.send_to_technician_link.click();
        await ele.home_customerName.click();
        await ele.send_to_technician_link.click();

        await ele.home_customerName.click();
        await ele.home_customerName.sendKeys(custName, protractor.Key.DOWN, protractor.Key.ENTER);
        await browser.sleep(4000);

        var ss = element(by.xpath('(//select[@name="projId"])[2]'));
        ss.click();
        await browser.sleep(4000);
        var text = 'Dummy test';
        var optiontoselect = element(by.cssContainingText('option', text));
        optiontoselect.click();
        await browser.sleep(5000);

        await ele.send_to_technician_link.click();
        await browser.sleep(2000);
        await ele.send_to_technician_link.click();
        await browser.sleep(2000);
    },

    SELECTJOINT_AND_SEND_TO_APPLICATION: async function (name) {
        var ele = this.customer_element;
        await browser.sleep(3000);
        await ele.select_firxt_checkbox.click();
        await ele.selected_joint_name.getText().then(function (actual_joint_name) {
            customer_to_app_engg.push(actual_joint_name);
        })
        // console.log(customer_to_app_engg[0]);
        await ele.btn_send.click();
        await browser.sleep(2000);
        await ele.app_engg_name_ddl.sendKeys(name);
        await browser.sleep(3000);
        await ele.send_btn_ok.click();
        await browser.sleep(3000);//
        // await ele.send_msg.getText().then(function(actual_msg) {
        //     // console.log(actual_msg);
        // })
        await ele.btn_ok1.click();
        await browser.sleep(2000);
    },
    APPLICATION_ENGG_NOTIFICATION: async function () {
        var ele = this.customer_element;
        await ele.notification_icon.click();
        await browser.sleep(5000);
        // await ele.inbox_first_msg.getText().then(function(actual_jointName) {
        //     expect(actual_jointName).to.equal(customer_to_app_engg[0]);
        // });

    }
}