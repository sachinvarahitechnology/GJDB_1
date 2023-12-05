var { Given, When, Then, setDefaultTimeout } = require('cucumber');
setDefaultTimeout(60 * 3000);
var chai = require("chai");
var chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised);
var expect = chai.expect;

var ss = require("../Utils/screenshot.js");
 
var app_engg = require('../Pages/application_engg_page.js');

When(/^select a joint name from the dropdown$/, function() {
    return app_engg.SELECT_JOINT_NAME_DROPDOEN();
});

When('enter {string} or {string} or {string} or {string} or {string} or {string}', function (first_name, last_name, email_id, add_role, lab, restriction) {
     return app_engg.CREATE_NEW_USER(first_name,last_name,email_id,add_role,lab,restriction);
});
When('enter {string} or {string} or {string} or {string} or {string} or {string} clear all data', function (first_name, last_name, email_id, add_role, lab, restriction) {
     return app_engg.CLEAR_ALL_DATA(first_name, last_name, email_id, add_role, lab, restriction);
}); 
 
  When('{string} user is created or not', function (pageno) {
      return app_engg.LIST_OF_USER(pageno);
  });
  When('delete the user', function () {
        return app_engg.DELETE_USER();
  });
  When('check with delete functionality', function () {
       
      return  app_engg.DELETE();
    });   
    When('check with edit functionality {string}', function (edited_jointstatus) {
         return  app_engg.EDIT_JOINT_STATUSS(edited_jointstatus);
    });
    Then('check resulted data with scrolling', function () {
      return app_engg.CHECK_WITH_SCROLLING();
    });     
    When('click on search check result', function () {
      return app_engg.SCROLLING_directly();
    });

    Then('generate a report {string}', function (export_type) {
      return app_engg.GENERATE_REPORT(export_type);
    });
    Then('edit generated report', function () {
       //in here generated report not edit 
      return app_engg.EDIT_GENERATED_REPORT();
    });
    Then('delete report', function () {
      
      return app_engg.DELETE_GENERATED_REPORT();
    });

    When('created joint enter {string} and {string}', function (Fastener, die_name) {
        return app_engg.CREATE_NEWJOB(Fastener,die_name);
    });
    When('share created joint {string} and {string}', function (select_role, select_username) {
      return app_engg.SHARE_JOINT(select_role,select_username);
    });

  When('edit any user it is edited {string} or not', function (change_name) {
         return app_engg.EDIT_USER(change_name);
  });
  Then('you login with technician never do edit or delete access', function () {
      return  app_engg.EDIT_DELETE_BUTTON();
    });
    
When(/^Select number of layer {string} from the material search$/, function (no_layer) {
        return  app_engg.SELECT_LAYER_NO_DROPDOEN(no_layer);
  });
When('Click on the option in material {string}', function (option_in_material) {
         return app_engg.SELECT_OPTIOIN_FROM_MATERIAL(option_in_material);
  });
  Then('add_new_alias with {string}', function (alias_name) {
      return  app_engg.ADD_NEW_ALIAS(alias_name);
  });
  When('click on search after puting values this {string} {string} {string} {string}', function (Customer, project, test_type, equipment) {
        return app_engg.ADVANCE_SEARCH_IN_HOME(Customer,project,test_type,equipment);
  });
 
  When('click it {string} {string} {string} {string} {string} and {string} and {string} and {string}', function (Fastner, die, jointstatus, jobstatus, materialcategory, industryy, programID, lab) {
                             return app_engg.ADVANCE_SEARCH_IN_HOME1(Fastner, die, jointstatus, jobstatus, materialcategory, industryy, programID, lab);                                                                 
               });

    Then('validate show previous search result', function () {
        return app_engg.PREVIOUS_SEARCH();
    });
When(/^click on notification icon and select one request$/, function() {
    return app_engg.SELECT_NOTICIATION_ICON();
});
When('you send to any {string}', function (customer_center) {
      return app_engg.SENDTO(customer_center);
    });

When('add {string}', function (joint_status) {    
      return app_engg.JOINTSTATUS(joint_status);
    });

Then('check add_new_specitication or not {string} and {string}', function (customer_name, specificationn) {
    return app_engg.ADD_NEW_SPECIFICATION(customer_name,specificationn);
});
Then('check add_new_specitication or not {string} and {string}', function (customer_name, specificationn) {
    return app_engg.EDIT_SPECIFICATION(customer_name,specificationn);
});
Then('check added_new_test_type is editable or not {string} and {string}', function (test_type, change_testtype) {
    return app_engg.EDIT_TEST_TYPE(test_type,change_testtype);
});
Then('added_new_die editable or not {string} to {string}', function (die_name, changeble_die_name) {
      return app_engg.EDIT_DIE(die_name,changeble_die_name);
  });
  Then('added_new_equipment editable or not {string} to {string}', function (setter, setter_name) {
       return app_engg.EDIT_EQUIPMENT(setter ,setter_name );
  });
  Then('added_new_material_grade_and_temper editable or not {string} with {string}', function (material_grade, changeble_material_grade) {
       return app_engg.EDIT_MATERIAL_GRADE_AND_TEMPER(material_grade ,changeble_material_grade);
  });
  Then('added_new_alise editable or not {string} with {string}', function (alias_name, changeble_alisename) {
       return  app_engg.EDIT_NEW_ALISENAME(alias_name ,changeble_alisename);
  });
  Then('added_new_grade_category editable or not {string} with {string}', function (grade_category, changeble_grade_category) {
       return app_engg.EDIT_GRADE_CATEGORY(grade_category ,changeble_grade_category);
  });
Then('check add_new_testtype or not {string}', function (test_type) {
   return app_engg.ADD_NEW_TESTTYPE(test_type);
});
Then('add_new_die or not {string}', function (die_name) {
       return app_engg.ADD_NEW_DIE(die_name);
  });
Then('add_new_fastener or not {string} and {string}', function (fastener_type, fastener_name) {
       return app_engg.ADD_NEW_FASTENER(fastener_type,fastener_name);
});
Then('add_new_grade_category with {string} and {string}', function (material_category, grade_category) {
     return app_engg.ADD_NEW_GRADE_CATEGORY(material_category,grade_category);
});
Then('add_new_equipment or not {string} and {string}', function (equipment_name, setter) {
        return  app_engg.ADD_NEW_EQUIPMENT(equipment_name,setter);
  });
  Then('add_new_joint_status is {string}', function (joint_status) {
        return app_engg.ADD_NEW_JOINTSTATUS(joint_status);
  });
  Then('add_new_material_category with {string}', function (material_category) {
        return app_engg.ADD_NEW_MATERIAL_CATEGORY(material_category);
  });
  Then('add_new_job_status with {string}', function (job_status) {
      return app_engg.ADD_NEW_JOB_STATUS(job_status);
  });
Then('add_new_die_post or not {string}', function (die_post_name) {
   return app_engg.ADD_NEW_DIE_POST(die_post_name);
});
Then('add_new_material_grade_and_temper with {string}', function (material_grade) {
     return app_engg.ADD_NEW_MATERIAL_GRADE_TEMPER(material_grade);
});
Then('add_new_nose_type or not {string}', function (nose_type_name) {
    return app_engg.ADD_NEW_NOSE_TYPE(nose_type_name);
});
When('Click on {string}', function (option_in_master) {    
    return app_engg.SELECT_OPTIONS_IN_MASTER(option_in_master);
  });
When('click on {string}', function (validation_option) {
      return  app_engg.SELECT_OPTIONS_IN_VALIDATION(validation_option);
  });
When('Click on {string} from the option list', function (options_in_cust) {
      return app_engg.SELECT_OPTIONS_IN_CUSTOMER_OPTIONLIST(options_in_cust) ;
});
When('Click on the {string}', function (option_in_configuration) {
     return app_engg.SELECT_OPTIONS_IN_CONFIGURATION(option_in_configuration) ;
  });
  When('click option in interlayer {string}', function (option_interlayer) {
        return app_engg.SELECT_OPTIONS_IN_INTERLAYER(option_interlayer);
  });
  When('Click on option {string}', function (option_in_statuses) {
       return app_engg.SELECT_OPTIONS_IN_STATUSES(option_in_statuses);
    });
  When('enter {string} and {string} and {string} and {string} and {string} and {string}', function (name_of_template, select_group, property_name, t_type, t_unit, t_template) {
         return app_engg.CREATE_NEW_TEMPLETE(name_of_template ,  select_group ,   property_name ,  t_type ,  t_unit , t_template  );
   });

Then('check added_new_usecases editable or not {string}', function (usecase) {
    return  app_engg.EDIT_USE_CASE(usecase);
});
  Then('check add_new_testing or not', function () {    
    return app_engg.ADD_NEW_TESTING();
  });
  Then('check added_new_testing editable or not', function () {
     return app_engg.EDIT_ADDED_TESTING();
  });
  Then('add_new_flywheel or not {string}', function (flywheel_name) {
        return app_engg.ADD_NEW_FLYWHEEL(flywheel_name);
  });
  Then('add_new_fastener_type or not {string}', function (fastener_type_name) {
         return app_engg.ADD_NEW_FASTENER_TYPE(fastener_type_name);
  });
  Then('added_new_fastener editable or not  {string} and {string}', function (fastener_name, change_fastener_name) {
        return app_engg.EDIT_ADDED_FASTENER(fastener_name, change_fastener_name);
  });
  Then('added_new_fastenertype editable or not {string} to {string}', function (fastener_type_name, fastener_type_change_name) {
        return app_engg.EDIT_ADDED_FASTENER_TYPE_NAME(fastener_type_name,fastener_type_change_name);
  });
  Then('added_new_die_post editable or not {string} {string}', function (die_post_name, die_post_name_change) {
         return app_engg.EDIT_ADDED_DIE_POST(die_post_name, die_post_name_change);
  });
  Then('added_new_flywheel editable or not {string} to {string}', function (flywheel_name, flywheel_changeble_name) {
        return app_engg.EDIT_ADDED_FLYWHEEL(flywheel_name, flywheel_changeble_name);
  });
  Then('added_new_joint_status editable or not {string} and {string}', function (joint_status, changeble_joint_status) {
         return app_engg.EDIT_JOINT_STATUS( joint_status,  changeble_joint_status);
  });
  Then('added_new_material_category editable or not {string} with {string}', function (material_category, changeble_material_category) {
        return app_engg.EDIT_MATERIAL_CATEGORY(material_category, changeble_material_category);
  });
  Then('check added_new_restrictioin editable or not {string}', function (type_put) {
         return app_engg.EDIT_ADDED_RESTRICTION(type_put); 
  });
  Then('added_new_nose_type editable or not {string} to {string}', function (nose_type_name, nose_type_changeble_name) {
         return app_engg.EDIT_ADDED_NOSE_TYPE(nose_type_name,nose_type_changeble_name);
  });
  Then('added_new_job_status editable or not {string} and {string}', function (job_status, changeble_job_status) {
       return app_engg.EDIT_NEW_JOB_STATUS( job_status,changeble_job_status );
  });
  Then('added_new_joint_classification editable or not {string} and {string}', function (classification_name, changeble_classification_name) {
         return app_engg.EDIT_JOINT_CLASSIFICATION( classification_name,changeble_classification_name);
  });
  Then('check add_new_usecase or not {string}', function (usecase) {
           return app_engg.ADD_NEW_USE_CASES(usecase);
   });
   Then('check add_new_program_id or not {string}', function (customer_name) {
           return  app_engg.ADD_PROGRAM_ID(customer_name) ;
  });
  Then('add_new_interlayer_type with {string}', function (interlayer_type_2) {
         return app_engg.ADD_INTERLAYER_TYPE(interlayer_type_2);
  });
  Then('check add_new_project or not {string} and {string} and {string}', function (customer_name, project_id, project_name) {
           return app_engg.ADD_NEW_PROJECT(customer_name, project_id, project_name);
  });
  Then('check add_new_lab or not {string} and {string}', function (location, person) {
           return app_engg.ADD_NEW_LAB(location, person);
  });
  Then('add_new_joint_classification {string}', function (classification_name) {
        return app_engg.ADD_NEW_JOINT_CLASSIFICATION(classification_name);
  });
  Then('add_new_interlayer_grade with {string} and {string}', function (interlayer_type_1, interlayer_grade) {
         return app_engg.ADD_NEW_INTERLAYER_GRADE(interlayer_type_1, interlayer_grade);
  });
  Then('check add_new_region or not {string}', function (region) {
          return app_engg.ADD_NEW_REGION(region);
  });
  Then('check add_new_customer or not {string}', function (add_customer) {
          return app_engg.ADD_NEW_CUSTOMER(add_customer);
  });
  Then('check add_new_industry or not {string}', function (industry) {
         return app_engg.ADD_NEW_INDUSTRY(industry);
  });
  Then('check added_new_project editable or not {string}', function (project_name) {
           return app_engg.EDIT_NEW_PROJECT(project_name);
  });
  Then('check added_new_lab editable or not {string}', function (location) {
           return app_engg.EDIT_LAB(location);
  });
  Then('check added_new_customer editable or not {string} and {string}', function (add_customer, change_customer) {
           return app_engg.EDIT_CUSTOMER_NAME(add_customer, change_customer);
  });
  Then('check added_new_industry editable or not {string} and {string}', function (industry, change_industry) {
          return app_engg.EDIT_INDUSTRY(industry,change_industry);
  });  
  Then('added_new_interlayer_grade editable or not {string} with {string}', function (interlayer_grade, changeble_interlayer_grade) {
         return app_engg.EDIT_INTERLAYER_GRADE(interlayer_grade,changeble_interlayer_grade);
  });
  Then('check added_new_program_id editable or not {string}', function (customer_name) {
           return app_engg.EDIT_ADDED_PROGRAM_ID(customer_name);
  });
  Then('added_new_interlayer_type editable or not {string} with {string}', function (interlayer_type_2, changeble_interlayer_type_2) {
        return app_engg.EDIT_INTERLAYER_TYPE(interlayer_type_2,changeble_interlayer_type_2);
  });
   Then('check add_new_restiction or not {string}', function (type_put) {         
            return  app_engg.ADD_NEW_RESTRICTION(type_put); 
  });
  When(/^check selected request is opened$/, function() {
      return app_engg.SELECTED_REQUEST_APP_ENGG();
  });
 