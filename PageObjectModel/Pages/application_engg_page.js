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
const { elementIsEnabled } = require('selenium-webdriver/lib/until');
// var mySelect = new SelectWrapper(by.id("userSelect"));

var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date + ' ' + time;
var notification_requ_name = [];



module.exports = {
    app_engg_element: {

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

        Customer_Master: element(by.xpath('(//div[@class="heading"])[1]')),
        validation_Master: element(by.xpath('(//div[@class="heading"])[2]')),
        configuration_Master: element(by.xpath('(//div[@class="heading"])[3]')),
        material_Master: element(by.xpath('(//div[@class="heading"])[4]')),
        interlayer_Master: element(by.xpath('(//div[@class="heading"])[5]')),
        statuses_Master: element(by.xpath('(//div[@class="heading"])[6]')),

        //advance_search
        advance_search_customer: element(by.xpath('//select[@formcontrolname="customer"]')),
        advance_search_project: element(by.xpath('//select[@formcontrolname="project"]')),
        advance_search_testtype: element(by.xpath('//select[@formcontrolname="testtype"]')),
        advance_search_equipment: element(by.xpath('//select[@formcontrolname="equipment"]')),
        advance_search_fastner: element(by.xpath('(//div[@class="input-container"])[1]')),
        fastener_element: element(by.xpath('//*[@id="filtermodal"]/div/div/div[2]/form/div[1]/div[1]/div[5]/div/ng-autocomplete/div[1]/div[2]/ul/li[1]/div/a')),
        advance_search_dia: element(by.xpath('(//div[@class="input-container"])[2]')),
        dia_element: element(by.xpath('//*[@id="filtermodal"]/div/div/div[2]/form/div[1]/div[2]/div[5]/div/ng-autocomplete/div[1]/div[3]/ul/li/div[1]/a')),
        advance_search_jointstatus: element(by.xpath('//select[@formcontrolname="jointStatus"]')),
        advance_search_jobstatus: element(by.xpath('//select[@formcontrolname="jobStatus"]')),
        advance_search_materialCategory: element(by.xpath('//select[@formcontrolname="materialCategory"')),
        advance_search_industry: element(by.xpath('//select[@formcontrolname="industry"]')),
        advance_search_programid: element(by.xpath('//select[@formcontrolname="programID"]')),
        advance_search_lab: element(by.xpath('//select[@formcontrolname="lab"]')),
        search_button: element(by.xpath('//button[@class="btn btn-secondary search mr-3"]')),

        advance_search_filter: element(by.xpath(' //div[@class="d-flex justify-content-center"]/button')),
        advance_previous_search: element(by.xpath('//select[@formcontrolname="dateTime"]')),

        //master -customer  
        Customer_testing: element(by.xpath('(//div[@class="circle-tile-description"])[1]')),
        Customer_Restriction: element(by.xpath('(//div[@class="circle-tile-description"])[2]')),
        Customer_Use_case: element(by.xpath('(//div[@class="circle-tile-description"])[3]')),
        Customer_Program_ID: element(by.xpath('(//div[@class="circle-tile-description"])[4]')),
        Customer_Project: element(by.xpath('(//div[@class="circle-tile-description"])[5]')),
        Customer_LAB: element(by.xpath('(//div[@class="circle-tile-description"])[6]')),
        Customer_Region: element(by.xpath('(//div[@class="circle-tile-description"])[7]')),
        Customer_Industry: element(by.xpath('(//div[@class="circle-tile-description"])[8]')),
        Customer_customer: element(by.xpath('(//div[@class="circle-tile-description"])[9]')),

        //master -validation
        validation_specification: element(by.xpath('(//div[@class="circle-tile-description"])[1]')),
        validation_test_type: element(by.xpath('(//div[@class="circle-tile-description"])[2]')),
        validation_customer: element(by.xpath(' //*[@id="modalSubscriptionForm"]/div/div/form/div[1]/div/div[1]/select')),
        validation_spec_2: element(by.xpath('(//input[@class="form-control validate ng-pristine ng-invalid ng-touched"])[2]')),

        //master_material-
        material_alias: element(by.xpath('(//div[@class="circle-tile-description"])[1]')),
        material_grade_category: element(by.xpath('(//div[@class="circle-tile-description"])[2]')),
        material_material_grade: element(by.xpath('(//div[@class="circle-tile-description"])[3]')),
        material_material_category: element(by.xpath('(//div[@class="circle-tile-description"])[4]')),
        material_edit: element(by.xpath('(//*[@id="PropTble"]/td[11]/a[1]/img)[1]')),



        //master_interlayer
        interlayer_grade: element(by.xpath('(//div[@class="circle-tile-description"])[1]')),
        interlayer_type: element(by.xpath('(//div[@class="circle-tile-description"])[2]')),

        //master_statuses
        statuses_joint: element(by.xpath('(//div[@class="circle-tile-description"])[1]')),
        statuses_job_status: element(by.xpath('(//div[@class="circle-tile-description"])[2]')),
        statuses_joint_status: element(by.xpath('(//div[@class="circle-tile-description"])[3]')),

        add_new: element(by.xpath('(//img[@class="previous"])[2]')),
        testing_add_new_one: element(by.xpath('(//input[@type="text"])[2]')),
        testing_add_new_two: element(by.xpath('(//input[@type="text"])[3]')),
        testing_add_new_three: element(by.xpath('(//input[@type="text"])[4]')),
        testing_add_new_five: element(by.xpath('(//input[@type="text"])[5]')),
        button_submit: element(by.xpath('(//button[@type="submit"])[2]')),
        button_edit: element(by.xpath('(//td[@class="td-actions"]/a)[1]')),
        second_button_edit: element(by.xpath('(//td[@class="td-actions"]/a)[3]')),
        update_changes: element(by.xpath('//*[@id="update_propValue"]/div/div/form/div[2]/button')),
        search: element(by.xpath('/html/body/app-root/nb-layout/div/div/div/div/div/nb-layout-column/app-submasterdata/div[1]/div[1]/div[1]/input')),

        edit_restriction: element(by.xpath(' //*[@id="update_propValue"]/div/div/form/div[1]/div/div[1]/input')),
        new_program_id_customer: element(by.xpath('//*[@id="modalSubscriptionForm"]/div/div/form/div[1]/div/div[1]/select')),
        new_program_id_new_project: element(by.xpath('//*[@id="modalSubscriptionForm"]/div/div/form/div[1]/div/div[2]/select')),

        //master configuration 
        confi_fastener: element(by.xpath('(//div[@class="circle-tile-description"])[1]')),
        confi_die_post: element(by.xpath('(//div[@class="circle-tile-description"])[2]')),
        confi_nose_type: element(by.xpath('(//div[@class="circle-tile-description"])[3]')),
        confi_fly_wheel: element(by.xpath('(//div[@class="circle-tile-description"])[4]')),
        confi_fastner_type: element(by.xpath('(//div[@class="circle-tile-description"])[5]')),
        confi_die: element(by.xpath('(//div[@class="circle-tile-description"])[6]')),
        confi_equipment: element(by.xpath('(//div[@class="circle-tile-description"])[7]')),


        Number_of_1_layer: element(by.xpath('//ul[@class="nav nav-tabs font16"]/li[1]/a')),
        Number_of_2_layer: element(by.xpath('//ul[@class="nav nav-tabs font16"]/li[2]/a')),
        Number_of_3_layer: element(by.xpath('//ul[@class="nav nav-tabs font16"]/li[3]/a')),
        Number_of_4_layer: element(by.xpath('//ul[@class="nav nav-tabs font16"]/li[4]/a')),
        Number_of_any_layer: element(by.xpath('//ul[@class="nav nav-tabs font16"]/li[5]/a')),
        layer_search: element(by.xpath('(//button[@type="submit"])[1]')),

        jointField_ddl: element(by.xpath('//select[@formcontrolname="jointField" or id="step6"]')),
        notification_icon: element(by.xpath('//li/a[@data-target="#notification_alert"]//img')),
        inbox_first_msg: element(by.xpath('//div[@class="modal-body"]//div//div[2]//p')),
        // joint_field_ddl: element(by.id('jointField')),
        Other_filter_homepage: element(by.xpath('//a[@class="filterlabel filterFont"]')),
        tableLabelCheck: element(by.xpath('//table/tbody//tr[1]//td[2]')),

        // Worksheet page
        add_row: element(by.xpath('//img[@src="../../../assets/images/add.png"]')),
        delete_row_job: element(by.xpath('//img[@src="../../../assets/images/trash.png"]')),
        save_jobs: element(by.xpath('//img[@src="../../../assets/images/save.png"]')),
        share_jobs: element(by.xpath('//img[@src="../../../assets/images/share1.png"]')),

        //create new user
        firstname: element(by.xpath('//input[@formcontrolname="firstName"]')),
        lastname: element(by.xpath('//input[@formcontrolname="lastName"]')),
        email: element(by.xpath('//input[@formcontrolname="email"]')),

        addrole: element(by.xpath('//span[@class="dropdown-btn"]')),
        search_in_addrole: element(by.xpath('//input[@placeholder="Search"]')),
        ss: element(by.xpath('(//li[@class="multiselect-item-checkbox"])[2]')),
        choose_file: element(by.xpath('//input[@formcontrolname="image"]')),
        lab: element(by.xpath('//select[@formcontrolname="lab"]')),
        submit: element(by.xpath('//button[@type="submit"]')),
        restriction_select: element(by.xpath('//select[@formcontrolname="Restriction"]')),
        clear_data: element(by.xpath('(//button[@type="button"])[1]')),
        ok_button: element(by.xpath('(//button[@type="button"])[5]')),
        delete_user: element(by.xpath('//*[@id="collapseOne"]/div/div/div[1]/table/tbody[2]/tr/td[6]/a[2]/img')),
        edit_user: element(by.xpath('//*[@id="collapseOne"]/div/div/div[1]/table/tbody[3]/tr/td[6]/a[1]/img')),
        joint_in_project_manage: element(by.xpath('//*[@id="headingOne"]/span[1]/span[5]/select')),
        customer_name: element(by.xpath(' //*[@id="country"]')),
        assigntome_project_manage: element(by.xpath('//input[@class="form-check-input defaultJoints"]')),
        sendto_manage: element(by.xpath('(//button[@data-target="#sendteam"])[1]')),
        send_button: element(by.xpath('(//button[@type="submit"])[1]')),
        edit_joint: element(by.xpath('//select[@class="w-100 form-control select-title1 ng-pristine ng-valid ng-touched"]')),

        //list of user
        page_1: element(by.xpath('//*[@id="collapseOne"]/div/div/div[2]/pagination-controls/pagination-template/ul/li[3]')),
        page_2: element(by.xpath('//*[@id="collapseOne"]/div/div/div[2]/pagination-controls/pagination-template/ul/li[4]')),
        page_3: element(by.xpath('//*[@id="collapseOne"]/div/div/div[2]/pagination-controls/pagination-template/ul/li[5]')),
        page_4: element(by.xpath('//*[@id="collapseOne"]/div/div/div[2]/pagination-controls/pagination-template/ul/li[6]')),

        //create_new_templete       
        Enter_name: element(by.xpath('//input[@placeholder="Enter Name"]')),
        Select_Group: element(by.xpath('//select[@class="form-control"]')),
        Property_name: element(by.xpath('//input[@placeholder="Enter Name of Field"]')),
        Select_type: element(by.xpath('//select[@class="form-control normSelectField ng-pristine ng-valid ng-touched"]')),
        unit: element(by.xpath('(//select[@class="form-control ng-pristine ng-valid ng-touched"])[1]')),
        templeate: element(by.xpath('(//select[@class="form-control ng-pristine ng-valid ng-touched"])[2]')),
        save_templeate: element(by.xpath('//button[@type="submit"]')),
        ok_button: element(by.xpath('(//button[@type="button"])[4]')),
    },

    SELECT_LAYER_NO_DROPDOEN: async function (no_layer) {
        var ele = this.app_engg_element
        if (no_layer == 1) {
            await ele.Number_of_1_layer.click();
        } else if (no_layer == 2) {
            await ele.Number_of_2_layer.click();
        } else if (no_layer == 3) {
            await ele.Number_of_3_layer.click();
        } else if (no_layer == 4) {
            await ele.Number_of_4_layer.click();
        } else if (no_layer == any) {
            await ele.Number_of_any_layer.click();
        } else {
            console.log('it is not valid number')
        }
    },

    SELECT_OPTIONS_IN_CONFIGURATION: async function (option_in_configuration) {

        var ele = this.app_engg_element
        if (option_in_configuration == ('fastener')) {
            await ele.confi_fastener.click();
        } else if (option_in_configuration == ('die post')) {
            await ele.confi_die_post.click();
        } else if (option_in_configuration == ('nose type')) {
            await ele.confi_nose_type.click();
        } else if (option_in_configuration == ('flywheel')) {
            await ele.confi_fly_wheel.click();
        } else if (option_in_configuration == ('fastener type')) {
            await ele.confi_fastner_type.click();
        } else if (option_in_configuration == ('die')) {
            await ele.confi_die.click();
        } else if (option_in_configuration == ('equipment')) {
            await ele.confi_equipment.click();
        } else {
            console.log('not in this option')
        }
        await browser.sleep(3000);
    },
    SELECT_OPTIONS_IN_INTERLAYER: async function (option_interlayer) {
        var ele = this.app_engg_element
        if (option_interlayer == ('interlayer grade')) {
            await ele.interlayer_grade.click();
        } else if (option_interlayer == ('interlayer type')) {
            await ele.interlayer_type.click();
        } else {
            console.log('choose the right option')
        }
        await browser.sleep(3000);

    },
    SELECT_OPTIONS_IN_STATUSES: async function (option_in_statuses) {
        var ele = this.app_engg_element
        if (option_in_statuses == ('joint classification')) {
            await ele.statuses_joint.click();
        } else if (option_in_statuses == ('job status')) {
            await ele.statuses_job_status.click();
        } else if (option_in_statuses == ('joint status')) {
            await ele.statuses_joint_status.click();
        } else {
            console.log('select valid credential');
        }
        await browser.sleep(3000);
    },

    SELECT_OPTIONS_IN_MASTER: async function (option_in_master) {
        var ele = this.app_engg_element
        if (option_in_master == ('customer')) {
            await ele.Customer_Master.click();
        } else if (option_in_master == ('validation')) {
            await ele.validation_Master.click();
        } else if (option_in_master == ('configuration')) {
            await ele.configuration_Master.click();
        } else if (option_in_master == ('material')) {
            await ele.material_Master.click();
        } else if (option_in_master == ('interlayer')) {
            await ele.interlayer_Master.click();
        } else if (option_in_master == ('statuses')) {
            await ele.statuses_Master.click();
        } else {
            console.log('it is not valid option')
        }
        await browser.sleep(3000);
    },
    SELECT_OPTIONS_IN_VALIDATION: async function (validation_option) {
        var ele = this.app_engg_element
        if (validation_option == ('specification')) {
            await ele.validation_specification.click();
        } else if (validation_option == ('test type')) {
            await ele.validation_test_type.click();
        } else {
            console.log('it is not valid option')
        }
        await browser.sleep(3000);
    },

    SELECT_OPTIOIN_FROM_MATERIAL: async function (option_in_material) {
        var ele = this.app_engg_element

        if (option_in_material == ('alias')) {
            await ele.material_alias.click();
        } else if (option_in_material == ('grade category')) {
            await ele.material_grade_category.click();
        } else if (option_in_material == ('material grade  and temper')) {
            await ele.material_material_grade.click();
        } else if (option_in_material == ('material category')) {
            await ele.material_material_category.click();
        }
        await browser.sleep(3000);
    },

    SELECT_OPTIONS_IN_CUSTOMER_OPTIONLIST: async function (options_in_cust) {

        var ele = this.app_engg_element

        if (options_in_cust == ('testing')) {
            await ele.Customer_testing.click();
        } else if (options_in_cust == ('restriction')) {
            await ele.Customer_Restriction.click();
        } else if (options_in_cust == ('use case')) {
            await ele.Customer_Use_case.click();
        } else if (options_in_cust == ('program id')) {
            await ele.Customer_Program_ID.click();
        } else if (options_in_cust == ('project')) {
            await ele.Customer_Project.click();
        } else if (options_in_cust == ('lab')) {
            await ele.Customer_LAB.click();
        } else if (options_in_cust == ('region')) {
            await ele.Customer_Region.click();
        } else if (options_in_cust == ('industry')) {
            await ele.Customer_Industry.click();
        } else if (options_in_cust == ('customer')) {
            await ele.Customer_customer.click();
        }
        else {
            console.log('it is not valid option')
        }
        await browser.sleep(3000);

    },

    CREATE_NEW_TEMPLETE: async function (name_of_template, select_group, property_name, t_type, t_unit, t_template) {

        var ele = this.app_engg_element
        await browser.sleep(2000);
        await ele.Enter_name.sendKeys(name_of_template);
        await browser.sleep(2000);

        await ele.Select_Group.sendKeys(select_group);
        await ele.Select_Group.sendKeys(protractor.Key.ENTER);
        await ele.property_name.sendKeys(property_name);
        await browser.sleep(2000);
        await ele.Select_type.sendKeys(t_type);
        await ele.Select_type.sendKeys(protractor.Key.ENTER);
        await browser.sleep(2000);
        await ele.unit.sendKeys(t_unit);
        await ele.unit.sendKeys(protractor.Key.ENTER);
        await ele.templeate.sendKeys(t_template);
        await ele.templeate.sendKeys(protractor.Key.ENTER);
        await browser.sleep(2000);
        await ele.save_templeate.click();
        await browser.sleep(3000);
        await ele.ok_button.click();
    },

    CREATE_NEW_USER: async function (first_name, last_name, email_id, add_role, lab, restriction) {

        var ele = this.app_engg_element
        await browser.sleep(3000);
        await ele.firstname.sendKeys(first_name);
        await ele.lastname.sendKeys(last_name);
        await ele.email.sendKeys(email_id);
        await ele.addrole.click();
        await browser.sleep(3000);
        await ele.search_in_addrole.sendKeys(add_role);
        await browser.sleep(3000);
        await ele.ss.click();
        await element(by.xpath('//label[@class="labelName Profilepic"]')).click();
        // Find the checkbox with aria-label="Application Engineer" and click it
        //     var checkboxes = document.querySelectorAll('input[type="checkbox"][aria-label="Application Engineer"]');

        //   if (checkboxes.length > 0) {
        //     checkboxes[2].click();
        //     } else {
        //     console.log("Checkbox with aria-label='Application Engineer' not found.");
        //     }

        var file = "C:/Users/Pappya/Pictures/sign122.jpg";
        await ele.choose_file.sendKeys(file);
        await ele.lab.sendKeys(lab);
        await ele.restriction_select.sendKeys(restriction);
        await ele.submit.click();
        await browser.sleep(3000);
        await ele.ok_button.click();
    },

    LIST_OF_USER: async function (pageno) {

        var ele = this.app_engg_element
        await browser.sleep(5000);

        if (pageno == ('one')) {
            await ele.page_1.click();
        } else if (pageno == ('two')) {
            await ele.page_2.click();
        } else if (pageno == ('three')) {
            await ele.page_3.click();
        } else if (pageno == ('four')) {
            await ele.page_4.click();
        } else {
            console.log('page no not found');
        }



    },

    DELETE_USER: async function () {
        var ele = this.app_engg_element;
        await browser.sleep(4000);
        await ele.delete_user.click();
    },
    DELETE: async function () {
        var ele = this.app_engg_element;
        await browser.sleep(2000);

        let delete_joint = [];
        delete_joint = await element.all(by.xpath('//img[@title="Remove Joint"]'));

        console.log("this is all projectmanger as perfilter:" + delete_joint.length)
        for (let i = 0; i < delete_joint.length; i++) {
            await browser.sleep(2000);
            await delete_joint[0].click();
        }
    },

    EDIT_JOINT_STATUSS: async function (edited_jointstatus) {
        var ele = this.app_engg_element;
        await browser.sleep(2000);
        await ele.edit_joint.click().sendKeys(edited_jointstatus, protractor.Key.ENTER)
    },
    CHECK_WITH_SCROLLING: async function () {
        var ele = this.app_engg_element;
        await browser.sleep(8000);
        //await browser.executeScript('window.scrollBy(0, 300);')
        //await browser.executeScript('window.scrollTo(0, document.body.scrollHeight);');

        var allresult = [];
        allresult = await element.all(by.xpath('//*[@id="step8"]/table/tbody'))
        console.log("All result found = " + allresult.length)

        if (allresult != 0) {
            for (let i = 0; i < allresult.length; i++) {
                await browser.sleep(1000);
                await browser.executeScript("arguments[0].scrollIntoView(true);", allresult[i]);
            }
        }
        await browser.sleep(3000);
        let all = [];
        all = await element.all(by.xpath('//*[@id="step8"]/table/tbody'))
        console.log("All result found = " + all.length)

        for (let i = 0; i < all.length; i++) {
            await browser.sleep(1000);
            await browser.executeScript("arguments[0].scrollIntoView(true);", all[i]);
        }
    },

    SCROLLING_directly: async function () {
        var ele = this.app_engg_element;
        await browser.sleep(7000);

        await ele.search_button.click();
        await browser.sleep(10000);


        var allresult = [];
        allresult = await element.all(by.xpath('//*[@id="step8"]/table/tbody'))
        console.log("All result found = " + allresult.length)

        if (allresult != 0) {
            for (let i = 0; i < allresult.length; i++) {
                await browser.sleep(1000);
                await browser.executeScript("arguments[0].scrollIntoView(true);", allresult[i]);
            }
        }
        await browser.sleep(3000);
        let all = [];
        all = await element.all(by.xpath('//*[@id="step8"]/table/tbody'))
        console.log("All result found = " + all.length)

        for (let i = 0; i < all.length; i++) {
            await browser.sleep(1000);
            await browser.executeScript("arguments[0].scrollIntoView(true);", all[i]);
        }

    },


    EDIT_USER: async function (change_name) {
        var ele = this.app_engg_element;
        await browser.sleep(4000);
        await ele.edit_user();

        await ele.firstname.sendKeys(change_name);
        await ele.submit.click();
        await browser.sleep(2000);
        await ele.ok_button.click();
    },
    EDIT_DELETE_BUTTON: async function () {
        var ele = this.app_engg_element;
        await browser.sleep(4000);
        console.log(await ele.material_edit.isEnabled());
 },
     

    ADD_NEW_TESTING: async function () {
        var ele = this.app_engg_element;
        await ele.add_new.click();
        await browser.sleep(2000);
        await ele.testing_add_new_one.sendKeys('1');
        await ele.button_submit.click();
        await browser.sleep(5000);
    },
    ADD_NEW_FLYWHEEL: async function (flywheel_name) {
        var ele = this.app_engg_element;
        await ele.add_new.click();
        await browser.sleep(2000);
        await ele.testing_add_new_one.sendKeys(flywheel_name);
        await ele.button_submit.click();
        await browser.sleep(5000);
    },
    ADD_NEW_FASTENER_TYPE: async function (fastener_type_name) {
        var ele = this.app_engg_element;
        await ele.add_new.click();
        await browser.sleep(2000);
        await ele.testing_add_new_one.sendKeys(fastener_type_name);
        await ele.button_submit.click();
        await browser.sleep(5000);
    },

    JOINTSTATUS: async function (joint_status) {
        var ele = this.app_engg_element;
        await browser.sleep(2000);
        await ele.joint_in_project_manage.sendKeys(joint_status);
        await ele.joint_in_project_manage.click();
        await browser.sleep(2000);

    },

    SENDTO: async function (customer_center) {
        var ele = this.app_engg_element;
        await browser.sleep(2000);

        // let sachin=[];
        //  sachin= await element.all( by.xpath('//button[@data-target="#sendteam"]'));

        // console.log("this is all elements store :"+sachin.length)
        // for (let i = 0; i < sachin.length; i++) {
        //     await browser.sleep(2000);
        //     await sachin[0].click();
        //   }
        await ele.sendto_manage.click();
        await browser.sleep(5000);
        await ele.customer_name.sendKeys(customer_center);
        await ele.send_button.click();
    },
    ADD_NEW_RESTRICTION: async function (type_put) {
        var ele = this.app_engg_element;
        await ele.add_new.click();
        await browser.sleep(3000);
        await ele.testing_add_new_one.sendKeys(type_put);
        await ele.button_submit.click();
        await browser.sleep(5000);
    },
    ADD_NEW_USE_CASES: async function (usecase) {
        var ele = this.app_engg_element;
        await ele.add_new.click();
        await browser.sleep(3000);
        await ele.testing_add_new_one.sendKeys(usecase);
        await ele.button_submit.click();
        await browser.sleep(5000);
    },
    ADD_NEW_REGION: async function (region) {
        var ele = this.app_engg_element;
        await ele.add_new.click();
        await browser.sleep(2000);
        await ele.testing_add_new_two.clear().sendKeys(region);
        await ele.button_submit.click();
        await browser.sleep(5000);
    },
    ADD_NEW_INDUSTRY: async function (industry) {
        var ele = this.app_engg_element;
        await ele.add_new.click();
        await browser.sleep(2000);
        await ele.testing_add_new_one.sendKeys(industry);
        await ele.button_submit.click();
        await browser.sleep(5000);
    },

    ADD_NEW_LAB: async function (location, person) {
        var ele = this.app_engg_element;
        await ele.add_new.click();
        await browser.sleep(3000);
        await ele.testing_add_new_one.sendKeys(location);
        await ele.testing_add_new_two.sendKeys(person);
        await ele.button_submit.click();
        await browser.sleep(5000);
    },
    ADD_NEW_JOINT_CLASSIFICATION: async function (classification_name) {
        var ele = this.app_engg_element;
        await ele.add_new.click();
        await browser.sleep(3000);
        await ele.testing_add_new_one.sendKeys(classification_name);
        await ele.button_submit.click();
        await browser.sleep(5000);
    },
    ADD_NEW_INTERLAYER_GRADE: async function (interlayer_type_1, interlayer_grade) {
        var ele = this.app_engg_element;
        await ele.add_new.click();
        await browser.sleep(3000);
        await ele.new_program_id_customer.sendKeys(interlayer_type_1);
        await ele.testing_add_new_one.sendKeys(interlayer_grade);
        await ele.button_submit.click();
        await browser.sleep(5000);

    },
    ADD_NEW_CUSTOMER: async function (add_customer) {
        var ele = this.app_engg_element;
        await ele.add_new.click();
        await browser.sleep(3000);
        await ele.testing_add_new_one.sendKeys(add_customer);
        await ele.button_submit.click();
        await browser.sleep(5000);
    },

    ADD_NEW_PROJECT: async function (customer_name, project_id, project_name) {
        var ele = this.app_engg_element;
        await ele.add_new.click();
        await browser.sleep(2000);
        await ele.new_program_id_customer.sendKeys(customer_name);
        await ele.new_program_id_new_project.sendKeys(project_id);
        await ele.testing_add_new_one.sendKeys(project_name);
        await ele.button_submit.click();
        await browser.sleep(5000);
    },

    ADD_PROGRAM_ID: async function (customer_name) {
        var ele = this.app_engg_element;
        await ele.add_new.click();
        await browser.sleep(3000);
        await ele.new_program_id_customer.sendKeys(customer_name);
        await ele.button_submit.click();
        await browser.sleep(5000);
    },
    ADD_INTERLAYER_TYPE: async function (interlayer_type_2) {
        var ele = this.app_engg_element;
        await ele.add_new.click();
        await browser.sleep(3000);
        await ele.testing_add_new_one.sendKeys(interlayer_type_2);
        await ele.button_submit.click();
        await browser.sleep(5000);
    },
    ADD_NEW_SPECIFICATION: async function (customer_name, specificationn) {
        var ele = this.app_engg_element;
        await ele.add_new.click();
        await browser.sleep(3000);
        await ele.validation_customer.sendKeys(customer_name);
        await ele.testing_add_new_one.sendKeys(specificationn);
        await ele.button_submit.click();
        await browser.sleep(5000);
    },
    ADD_NEW_ALIAS: async function (alias_name) {
        var ele = this.app_engg_element;
        await ele.add_new.click();
        await browser.sleep(3000);
        await ele.testing_add_new_one.sendKeys(alias_name);
        await ele.button_submit.click();
        await browser.sleep(5000);
    },

    ADD_NEW_TESTTYPE: async function (test_type) {
        var ele = this.app_engg_element;
        await ele.add_new.click();
        await browser.sleep(3000);
        await ele.testing_add_new_one.sendKeys(test_type);
        await ele.button_submit.click();
        await browser.sleep(5000);
    },
    ADD_NEW_DIE: async function (die_name) {
        var ele = this.app_engg_element;
        await ele.add_new.click();
        await browser.sleep(3000);
        await ele.testing_add_new_one.sendKeys(die_name);
        await ele.button_submit.click();
        await browser.sleep(5000);
    },
    ADD_NEW_FASTENER: async function (fastener_type, fastener_name) {
        var ele = this.app_engg_element;
        await ele.add_new.click();
        await browser.sleep(2000);
        await ele.new_program_id_customer.sendKeys(fastener_type);
        await ele.testing_add_new_one.sendKeys(fastener_name);
        await ele.button_submit.click();
        await browser.sleep(5000);
    },
    ADD_NEW_GRADE_CATEGORY: async function (material_category, grade_category) {
        var ele = this.app_engg_element;
        await ele.add_new.click();
        await browser.sleep(2000);
        await ele.new_program_id_customer.sendKeys(material_category);
        await ele.testing_add_new_one.sendKeys(grade_category);
        await ele.button_submit.click();
        await browser.sleep(5000);
    },

    ADD_NEW_EQUIPMENT: async function (equipment_name, setter) {
        var ele = this.app_engg_element;
        await ele.add_new.click();
        await browser.sleep(2000);
        await ele.testing_add_new_one.sendKeys(equipment_name);
        await ele.testing_add_new_three.sendKeys(setter);
        await ele.button_submit.click();
        await browser.sleep(5000);
    },
    ADD_NEW_JOINTSTATUS: async function (joint_status) {
        var ele = this.app_engg_element;
        await ele.add_new.click();
        await browser.sleep(2000);
        await ele.testing_add_new_one.sendKeys(joint_status)
        await ele.button_submit.click();
        await browser.sleep(5000);
    },

    ADD_NEW_MATERIAL_CATEGORY: async function (material_category) {
        var ele = this.app_engg_element;
        await ele.add_new.click();
        await browser.sleep(2000);
        await ele.testing_add_new_one.sendKeys(material_category)
        await ele.button_submit.click();
        await browser.sleep(5000);
    },
    ADD_NEW_JOB_STATUS: async function (job_status) {
        var ele = this.app_engg_element;
        await ele.add_new.click();
        await browser.sleep(2000);
        await ele.testing_add_new_one.sendKeys(job_status)
        await ele.button_submit.click();
        await browser.sleep(5000);
    },

    ADD_NEW_DIE_POST: async function (die_post_name) {
        var ele = this.app_engg_element;
        await ele.add_new.click();
        await browser.sleep(2000);
        await ele.testing_add_new_one.sendKeys(die_post_name);
        await ele.button_submit.click();
        await browser.sleep(5000);
    },
    ADD_NEW_MATERIAL_GRADE_TEMPER: async function (material_grade) {
        var ele = this.app_engg_element;
        await ele.add_new.click();
        await browser.sleep(2000);
        await ele.testing_add_new_one.sendKeys(material_grade);
        await ele.button_submit.click();
        await browser.sleep(5000);
    },

    ADD_NEW_NOSE_TYPE: async function (nose_type_name) {
        var ele = this.app_engg_element;
        await ele.add_new.click();
        await browser.sleep(2000);
        await ele.testing_add_new_one.sendKeys(nose_type_name);
        await ele.button_submit.click();
        await browser.sleep(5000);
    },
    EDIT_SPECIFICATION: async function (customer_name, specificationn) {
        var ele = this.app_engg_element;
        await ele.search.sendKeys(customer_name);
        await ele.button_edit.click();
        await browser.sleep(3000);
        await ele.validation_spec_2.clear().sendKeys(specificationn);
        await ele.update_changes.click();
        await browser.sleep(5000);
    },
    EDIT_ADDED_FASTENER: async function (fastener_name, change_fastener_name) {
        var ele = this.app_engg_element;
        await ele.search.sendKeys(fastener_name);
        await ele.button_edit.click();
        await browser.sleep(3000);
        await ele.testing_add_new_one.clear().sendKeys(change_fastener_name);
        await ele.update_changes.click();
        await browser.sleep(5000);
    },
    EDIT_ADDED_FASTENER_TYPE_NAME: async function (fastener_type_name, fastener_type_change_name) {
        var ele = this.app_engg_element;
        await ele.search.sendKeys(fastener_type_name);
        await ele.button_edit.click();
        await browser.sleep(3000);
        await ele.testing_add_new_two.clear().sendKeys(fastener_type_change_name);
        await ele.update_changes.click();
        await browser.sleep(5000);
    },
    EDIT_ADDED_DIE_POST: async function (die_post_name, die_post_name_change) {
        var ele = this.app_engg_element;
        await ele.search.sendKeys(die_post_name);
        await ele.button_edit.click();
        await browser.sleep(3000);
        await ele.testing_add_new_two.clear().sendKeys(die_post_name_change);
        await ele.update_changes.click();
        await browser.sleep(5000);
    },
    EDIT_ADDED_FLYWHEEL: async function (flywheel_name, flywheel_changeble_name) {
        var ele = this.app_engg_element;
        await ele.search.sendKeys(flywheel_name);
        await ele.button_edit.click();
        await browser.sleep(3000);
        await ele.testing_add_new_two.clear().sendKeys(flywheel_changeble_name);
        await ele.update_changes.click();
        await browser.sleep(5000);
    },
    EDIT_JOINT_STATUS: async function (joint_status, changeble_joint_status) {
        var ele = this.app_engg_element;
        await ele.search.sendKeys(joint_status);
        await ele.button_edit.click();
        await browser.sleep(3000);
        await ele.testing_add_new_two.clear().sendKeys(changeble_joint_status);
        await ele.update_changes.click();
        await browser.sleep(5000);
    },
    EDIT_MATERIAL_CATEGORY: async function (material_category, changeble_material_category) {
        var ele = this.app_engg_element;
        await ele.search.sendKeys(material_category);
        await ele.button_edit.click();
        await browser.sleep(3000);
        await ele.testing_add_new_two.clear().sendKeys(changeble_material_category);
        await ele.update_changes.click();
        await browser.sleep(5000);
    },

    EDIT_ADDED_NOSE_TYPE: async function (nose_type_name, nose_type_changeble_name) {
        var ele = this.app_engg_element;
        await ele.search.sendKeys(nose_type_name);
        await ele.button_edit.click();
        await browser.sleep(3000);
        await ele.testing_add_new_two.clear().sendKeys(nose_type_changeble_name);
        await ele.update_changes.click();
        await browser.sleep(5000);
    },
    EDIT_NEW_JOB_STATUS: async function (job_status, changeble_job_status) {
        var ele = this.app_engg_element;
        await ele.search.sendKeys(job_status);
        await ele.button_edit.click();
        await browser.sleep(3000);
        await ele.testing_add_new_two.clear().sendKeys(changeble_job_status);
        await ele.update_changes.click();
        await browser.sleep(5000);
    },
    EDIT_JOINT_CLASSIFICATION: async function (classification_name, changeble_classification_name) {
        var ele = this.app_engg_element;
        await ele.search.sendKeys(classification_name);
        await ele.button_edit.click();
        await browser.sleep(3000);
        await ele.testing_add_new_two.clear().sendKeys(changeble_classification_name);
        await ele.update_changes.click();
        await browser.sleep(5000);
    },
    EDIT_TEST_TYPE: async function (test_type, change_testtype) {

        var ele = this.app_engg_element;
        await ele.search.sendKeys(test_type);
        await ele.button_edit.click();
        await browser.sleep(3000);
        await ele.testing_add_new_two.clear().sendKeys(change_testtype);
        await ele.update_changes.click();
        await browser.sleep(5000);
    },
    EDIT_DIE: async function (die_name, changeble_die_name) {
        var ele = this.app_engg_element;
        await ele.search.sendKeys(die_name);
        await ele.button_edit.click();
        await browser.sleep(3000);
        await ele.testing_add_new_three.clear().sendKeys(changeble_die_name);
        await ele.update_changes.click();
        await browser.sleep(5000);
    },
    EDIT_EQUIPMENT: async function (setter, setter_name) {
        var ele = this.app_engg_element;
        await ele.search.sendKeys(setter);
        await ele.button_edit.click();
        await browser.sleep(3000);
        await ele.testing_add_new_three.clear().sendKeys(setter_name);
        await ele.update_changes.click();
        await browser.sleep(5000);
    },
    EDIT_MATERIAL_GRADE_AND_TEMPER: async function (material_grade, changeble_material_grade) {
        var ele = this.app_engg_element;
        await ele.search.sendKeys(material_grade);
        await ele.button_edit.click();
        await browser.sleep(3000);
        await ele.testing_add_new_five.clear().sendKeys(changeble_material_grade);
        await ele.update_changes.click();
        await browser.sleep(5000);
    },

    EDIT_NEW_ALISENAME: async function (alias_name, changeble_alisename) {
        var ele = this.app_engg_element;
        await ele.search.sendKeys(alias_name);
        await ele.button_edit.click();
        await browser.sleep(3000);
        await ele.testing_add_new_two.clear().sendKeys(changeble_alisename);
        await ele.update_changes.click();
        await browser.sleep(5000);

    },
    EDIT_GRADE_CATEGORY: async function (grade_category, changeble_grade_category) {
        var ele = this.app_engg_element;
        await ele.search.sendKeys(grade_category);
        await ele.button_edit.click();
        await browser.sleep(3000);
        await ele.testing_add_new_one.clear().sendKeys(changeble_grade_category);
        await ele.update_changes.click();
        await browser.sleep(5000);
    },
    EDIT_ADDED_RESTRICTION: async function (type_put) {
        var ele = this.app_engg_element;
        await ele.button_edit.click();
        await browser.sleep(3000);
        await ele.edit_restriction.clear();
        await ele.edit_restriction.sendKeys(type_put);
        await ele.update_changes.click();
        await browser.sleep(5000);
    },
    EDIT_INDUSTRY: async function (change_industry, industry) {
        var ele = this.app_engg_element;
        await ele.search.sendKeys(industry);
        await ele.button_edit.click();
        await browser.sleep(3000);
        await ele.testing_add_new_two.clear().sendKeys(change_industry);
        await ele.update_changes.click();
        await browser.sleep(5000);
    },
    EDIT_INTERLAYER_GRADE: async function (interlayer_grade, changeble_interlayer_grade) {
        var ele = this.app_engg_element;
        await ele.search.sendKeys(interlayer_grade);
        await ele.button_edit.click();
        await browser.sleep(3000);
        await ele.testing_add_new_two.clear().sendKeys(changeble_interlayer_grade);
        await ele.update_changes.click();
        await browser.sleep(5000);
    },
    EDIT_CUSTOMER_NAME: async function (add_customer, change_customer) {
        var ele = this.app_engg_element;
        await ele.search.sendKeys(add_customer);
        await ele.button_edit.click();
        await browser.sleep(3000);
        await ele.testing_add_new_two.clear().sendKeys(change_customer);
        await ele.update_changes.click();
        await browser.sleep(5000);
    },

    EDIT_ADDED_PROGRAM_ID: async function (customer_name) {
        var ele = this.app_engg_element;
        await ele.button_edit.click();
        await browser.sleep(3000);
        await ele.testing_add_new_two.clear().sendKeys(customer_name);
        await ele.update_changes.click();
        await browser.sleep(5000);
    },
    EDIT_INTERLAYER_TYPE: async function (interlayer_type_2, changeble_interlayer_type_2) {
        var ele = this.app_engg_element;
        await ele.search.sendKeys(interlayer_type_2);
        await ele.button_edit.click();
        await ele.testing_add_new_two.clear().sendKeys(changeble_interlayer_type_2);
        await ele.update_changes.click();
        await browser.sleep(5000);
    },
    EDIT_NEW_PROJECT: async function (project_name) {
        var ele = this.app_engg_element;
        await ele.button_edit.click();
        await browser.sleep(3000);
        await ele.testing_add_new_one.sendKeys(project_name);
        await ele.update_changes.click();
        await browser.sleep(5000);
    },
    EDIT_LAB: async function (location) {
        var ele = this.app_engg_element;

        await ele.button_edit.click();
        await ele.testing_add_new_three.clear().sendKeys(location);
        await ele.update_changes.click();
        await browser.sleep(5000);
    },

    EDIT_ADDED_TESTING: async function () {
        var ele = this.app_engg_element;
        await ele.button_edit.click();
        await ele.testing_add_new_three.sendKeys('3');
        await ele.update_changes.click();
        await browser.sleep(5000);
    },
    EDIT_USE_CASE: async function (usecase) {
        var ele = this.app_engg_element;
        await ele.button_edit.click();
        await browser.sleep(2000);
        await ele.testing_add_new_two.clear().sendKeys(usecase);
        await ele.update_changes.click();
        await browser.sleep(5000);
    },
    SELECT_JOINT_NAME_DROPDOEN: async function () {
        var ele = this.app_engg_element;
        await browser.sleep(3000);
        await ele.jointField_ddl.click().sendKeys(protractor.Key.DOWN, protractor.Key.ENTER);
        await browser.sleep(6000);
    },
    SELECT_NOTICIATION_ICON: async function () {
        var ele = this.app_engg_element;
        await browser.sleep(1000);
        await ele.notification_icon.click();
        await browser.sleep(5000);
        await ele.inbox_first_msg.getText().then(function (actual_jointName) {
            //expect(actual_jointName).to.equal(customer_to_app_engg[0]);
            notification_requ_name.push(actual_jointName);
        });
        await ele.inbox_first_msg.click();
    },
    ADVANCE_SEARCH_IN_HOME: async function (Customer, project, test_type, equipment) {
        var ele = this.app_engg_element;
        await browser.sleep(4000);
        await ele.Other_filter_homepage.click();
        await browser.sleep(2000);
        await ele.advance_search_customer.sendKeys(Customer, protractor.Key.ENTER);
        await browser.sleep(4000);
        await ele.advance_search_project.sendKeys(project, protractor.Key.ENTER);
        await browser.sleep(2000);
        await ele.advance_search_testtype.sendKeys(test_type, protractor.Key.ENTER);
        await ele.advance_search_equipment.sendKeys(equipment, protractor.Key.ENTER);
        await browser.sleep(4000);
    },

    ADVANCE_SEARCH_IN_HOME1: async function (Fastner, die, jointstatus, jobstatus, materialcategory, industryy, programID, lab) {

        var ele = this.app_engg_element;
        await ele.advance_search_fastner.sendKeys(Fastner)
        await ele.fastener_element.click();
        await ele.advance_search_dia.sendKeys(die);
        await ele.dia_element.click();
        await ele.advance_search_jointstatus.sendKeys(jointstatus, protractor.ENTER);
        await ele.advance_search_jobstatus.sendKeys(jobstatus, protractor.ENTER);
        await browser.sleep(2000);
        await ele.advance_search_materialCategory.sendKeys(materialcategory, protractor.ENTER);
        await ele.advance_search_industry.sendKeys(industryy, protractor.ENTER);
        await browser.sleep(2000);
        await ele.advance_search_programid.sendKeys(programID, protractor.ENTER);
        await ele.advance_search_lab.sendKeys(lab, protractor.ENTER);
        await browser.sleep(2000);
        await ele.advance_search_filter.click();
        await browser.sleep(2000);
        await ele.layer_search.click();
        await browser.sleep(15000);

    },
    PREVIOUS_SEARCH: async function () {
        var ele = this.app_engg_element;
        await browser.sleep(4000);
        await ele.Other_filter_homepage.click();
        await browser.sleep(2000);
        await ele.advance_previous_search.click().sendKeys(protractor.Key.DOWN, protractor.Key.ENTER);
        await ele.advance_search_filter.click();
        await browser.sleep(2000);
        await ele.layer_search.click();
        await browser.sleep(15000);
    },

    SELECTED_REQUEST_APP_ENGG: async function () {
        var ele = this.app_engg_element;
        await browser.sleep(5000);
        await ele.jointField_ddl.getText().then(function (actual_jointName) {
            //expect(actual_jointName).to.equal(customer_to_app_engg[0]);
            if (notification_requ_name[0] == actual_jointName) {
                console.log(actual_jointName);
            }
        });
    },

    CLEAR_ALL_DATA: async function (first_name, last_name, email_id, add_role, lab, restriction) {
        var ele = this.app_engg_element
        await browser.sleep(3000);
        await ele.firstname.sendKeys(first_name);
        await ele.lastname.sendKeys(last_name);
        await ele.email.sendKeys(email_id);
        await ele.addrole.click();
        await browser.sleep(3000);
        await ele.search_in_addrole.sendKeys(add_role);
        // Find the checkbox with aria-label="Application Engineer" and click it
        var checkboxes = document.querySelectorAll('input[type="checkbox"][aria-label="Application Engineer"]');

        if (checkboxes.length > 0) {
            checkboxes[2].click();
        } else {
            console.log("Checkbox with aria-label='Application Engineer' not found.");
        }
        var file = "C:\Users\sachi\Pictures\Screenshots\Screenshot (1).png";
        await ele.choose_file.sendKeys(file);
        await ele.lab.click();
        await ele.restriction_select.click();
        await ele.clear_data.click();

    },

    SELECTED_REQUEST_OPENED: async function () {
        var ele = this.app_engg_element;
        await browser.sleep(5000);
        await ele.tableLabelCheck.getText().then(function (actual_jointName) {
            expect(actual_jointName).to.equal(notification_requ_name[0]);
        });
        await browser.sleep(10000);
    },



}