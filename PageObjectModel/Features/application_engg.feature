Feature: TO verify application engineer role all functionality


    Background: Launch Browser
        Given User navigate to Joining DB Applications

    @app_engg_login
    Scenario Outline: To verify Login functionality.
    
       When User "<role>" role enter our email and password and click on sign in button
       Then Verify the title name "<title>"
        Examples:
         | role                 | title            |
         | Application Engineer | Joining Frontend |
        #|  Customer Center     | Joining Frontend |
         

@app_engg_material_dynamic
    Scenario Outline: To verify the dynamic add layer for material search

        When "Application Engineer" user login to joining DB application
        When Select number of layer "<no_layer>" from the material search
        Then Verify the "<layer_no>" is displayed on the screen
        Examples:
            | no_layer | layer_no |  
           | 1        | Layer 1  | 
          # | 2        | Layer 2  |
          #  | 3        | Layer 3  | 


@app_engg_customer_pro_id
    Scenario Outline: To verify customer name and project id functionality

        When "Application Engineer" user login to joining DB application
        When user select customer name as "<customerName>" and project id is "<proID>"
        Examples:
          | customerName | proID |
         #| Ford         | FD111 |
          |Dummy GJD   |  Dummy test    |         


    @appeng_checkNotification
    Scenario Outline: To verify notification functionality

        When "Application Engineer" user login to joining DB application
        When user select customer name as "<customerName>" and project id is "<proID>"
        And click on notification icon and select one request
        And check selected request is opened
        Examples:
            | customerName              | proID         |
           #| Ford                      | FD111         |
            | Dummy GJD                 | Dummy test    |


    @appengg_material_search_1
    Scenario Outline: To verify search functionality for layer 1 material search

         When "Application Engineer" user login to joining DB application
        #When user select customer name as "<customerName>" and project id is "<proID>"
        And Select number of layer "<no_layer>" from the material search
        Then Select material category "<material_category>" and material grade "<material_grade>" and select oprator "<operator>" and select unit "<unit>" mm
        And Click on search button
        #Then check resulted data with scrolling
        #Then Verify if record availble then displayed on table oterwise display no results found
        Examples:
            | no_layer | material_category | material_grade | operator | unit | 
            | 1        | Any               | Any            | =        | 1    |  
           

    @appenggmaterial_search_2
    Scenario Outline: To verify search functionality for layer 2 material search

        When "Application Engineer" user login to joining DB application
        # When user select customer name as "<customerName>" and project id is "<proID>"
        And Select number of layer "<no_layer>" from the material search
        Then Select material category "<material_category>" and material grade "<material_grade>" and select oprator "<operator>" and select unit "<unit>" mm
        And Select material category "<inter_material_category>" and material grade "<inter_material_grade>" and select oprator "<inter_operator>" and select unit "<inter_unit>" mm and again material category "<layer2_material_category>" and material grade "<layer2_material_grade>" and select oprator "<layer2_operator>" and select unit "<layer2_unit>" mm from layer 2
        And Click on search button
        #Then check resulted data with scrolling
        Then Verify if record availble then displayed on table oterwise display no results found
        Examples:
            | customerName | proID | no_layer | material_category | material_grade | operator | unit |  inter_material_category | inter_material_grade | inter_operator | inter_unit | layer2_material_category | layer2_material_grade | layer2_operator | layer2_unit |
            | Ford         | FD111 | 2        | Any               | Any            | =        | 1    | Any                     | Any                  | =              | 2          | PHS                      | Any                   | =               | 3           |
 

    @appengg_material_search_3
    Scenario Outline: To verify search functionality for layer 3 material search

        When "Application Engineer" user login to joining DB application
        # When user select customer name as "<customerName>" and project id is "<proID>"
        And Select number of layer "<no_layer>" from the material search
        Then Select material category "<material_category>" and material grade "<material_grade>" and select oprator "<operator>" and select unit "<unit>" mm
        And Select material category "<inter_material_category>" and material grade "<inter_material_grade>" and select oprator "<inter_operator>" and select unit "<inter_unit>" mm and again material category "<layer2_material_category>" and material grade "<layer2_material_grade>" and select oprator "<layer2_operator>" and select unit "<layer2_unit>" mm from layer 2
        And Select material category "<layer3_material_category>" and material grade "<layer3_material_grade>" and select oprator "<layer3_operator>" and select unit "<layer3_unit>" mm from layer 3
        And Interlaye select material category "<inter_mc2>", material grade "<inter_mg2>", unit "<inter_unit2>", again select material cateogry "<3mc>", material grade "<3mg>" and unit "<3unit>" mm for 3 layer
        And Click on search button
        #Then check resulted data with scrolling
        Then Verify if record availble then displayed on table oterwise display no results found
        Examples:
            | customerName | proID | no_layer | material_category | material_grade | operator | unit | inter_material_category | inter_material_grade | inter_operator | inter_unit | layer2_material_category | layer2_material_grade | layer2_operator | layer2_unit | inter_mc2 | inter_mg2 | inter_unit2 | 3mc  | 3mg | 3unit |
            | Ford         | FD111 | 3        | Tape              | Any            | =        | 1    | Tape                    | Any                  | =              | 2          | Tape                     | Any                   | =               | 3           | Tape      | Any       | 4           | Tape | Any | 5     |

    @appengg_material_search_4
    Scenario Outline: To verify search functionality for layer 4 material search
         When "Application Engineer" user login to joining DB application
        # When user select customer name as "<customerName>" and project id is "<proID>"
        And Select number of layer "<no_layer>" from the material search
        Then Select material category "<material_category>" and material grade "<material_grade>" and select oprator "<operator>" and select unit "<unit>" mm
        And Select material category "<inter_material_category>" and material grade "<inter_material_grade>" and select oprator "<inter_operator>" and select unit "<inter_unit>" mm and again material category "<layer2_material_category>" and material grade "<layer2_material_grade>" and select oprator "<layer2_operator>" and select unit "<layer2_unit>" mm from layer 2
        And Select material category "<layer3_material_category>" and material grade "<layer3_material_grade>" and select oprator "<layer3_operator>" and select unit "<layer3_unit>" mm from layer 3
        And Interlaye select material category "<inter_mc2>", material grade "<inter_mg2>", unit "<inter_unit2>", again select material cateogry "<3mc>", material grade "<3mg>" and unit "<3unit>" mm for 3 layer

        And Interlaye select material category "<inter_mc4>", material grade "<inter_mg4>", unit "<inter_unit4>", again select material cateogry "<4mc>", material grade "<4mg>" and unit "<4unit>" mm for 4 layer wise        
        And Click on search button
        #Then check resulted data with scrolling
        Then Verify if record availble then displayed on table oterwise display no results found
        Examples:
            | customerName | proID | no_layer | material_category | material_grade | operator | unit | inter_material_category | inter_material_grade | inter_operator | inter_unit | layer2_material_category | layer2_material_grade | layer2_operator | layer2_unit | inter_mc2 | inter_mg2 | inter_unit2 | 3mc | 3mg | 3unit | inter_mc4 | inter_mg4 | inter_unit4 | 4mc | 4mg | 4unit |
            | Ford         | FD111 | 4        | Any               | Any            | =        | 1    | Any                     | Any                  | =              | 2          | Any                      | Any                   | =               | 3           | Any       | Any       | 4           | Any | Any | 5     | Any       | Any       | 6           | Any | Any | 7     |


@appengg_newJointAdd_1
    Scenario Outline: To verify create new joint request functionality for one layer.
        When "Application Engineer" user login to joining DB application      
        And Click on "<link>" from the sidebar

       # When user select customer name as "<customerName>" and project id is "<proID>"

        When Fill automatically joint name "<customerName>" and project id is "<proID>" 
        And Select the number of layer "<no_layer>"
        And Enter material category "<mc>", material grade "<mg>" and unit "<unit>" mm
        When click on create new joint request button
     
        Examples:
            | link             |    no_layer | mc   | mg    | unit | customerName | proID       |
            | Create New Joint |    1        | PHS  | MY    | 1    | Dummy GJD    |  Dummy test |

@appengg_newJointAdd_2
    Scenario Outline: To verify create new joint request functionality for Two layer.
         When "Application Engineer" user login to joining DB application
       # When user select customer name as "<customerName>" and project id is "<proID>"

        And Click on "<link>" from the sidebar
        When Fill automatically joint name "<customerName>" and project id is "<proID>"
        And Select the number of layer "<no_layer>"
        And Enter material category "<mc>", material grade "<mg>" and unit "<unit>" mm
        And Interlaye select material category "<inter_mc1>", material grade "<inter_mg1>", unit "<inter_unit>", again select material cateogry "<2mc>", material grade "<2mg>" and unit "<2unit>" mm
        When click on create new joint request button
         
        Examples:                                          
            | link             |     no_layer | mc   | mg    | unit | customerName | proID      | inter_mc1 | inter_mg1  | inter_unit | 2mc  | 2mg   | 2unit |
            | Create New Joint |     2        | PHS  | MY    | 1    | Dummy GJD    | Dummy test | adhesive  | MATG45     | 2          | PHS  | MY    | 3     |

@appengg_newJointAdd_3
    Scenario Outline: To verify create new joint request functionality for three layer.
        When "Application Engineer" user login to joining DB application
        # When user select customer name as "<customerName>" and project id is "<proID>"
        And Click on "<link>" from the sidebar
        When Fill automatically joint name "<customerName>" and project id is "<proID>"
        And Select the number of layer "<no_layer>"
        And Enter material category "<mc>", material grade "<mg>" and unit "<unit>" mm
        And Interlaye select material category "<inter_mc1>", material grade "<inter_mg1>", unit "<inter_unit>", again select material cateogry "<2mc>", material grade "<2mg>" and unit "<2unit>" mm
        
        And Interlaye select material category "<inter_mc2>", material grade "<inter_mg2>", unit "<inter_unit2>", again select material cateogry "<3mc>", material grade "<3mg>" and unit "<3unit>" mm for 3 layer
        When click on create new joint request button
         
        Examples:
            | link             |     no_layer | mc   | mg    | unit | customerName | proID      | inter_mc1 | inter_mg1  | inter_unit | 2mc  | 2mg   | 2unit | inter_mc2 | inter_mg2  | inter_unit2 | 3mc  | 3mg   | 3unit |
            | Create New Joint |     3        | PHS  | MY    | 1    | Dummy GJD    | Dummy test | adhesive  | MATG45     | 2          | PHS  | MY    | 3     | adhesive  | MATG45     | 4           | PHS  | MY    | 5     |


@appengg_newJointAdd_4
    Scenario Outline: To verify create new joint request functionality for four layer.

        When "Application Engineer" user login to joining DB application
        # When user select customer name as "<customerName>" and project id is "<proID>"
        And Click on "<link>" from the sidebar
        When Fill automatically joint name "<customerName>" and project id is "<proID>"
        And Select the number of layer "<no_layer>"
        And Enter material category "<mc>", material grade "<mg>" and unit "<unit>" mm
        And Interlaye select material category "<inter_mc1>", material grade "<inter_mg1>", unit "<inter_unit>", again select material cateogry "<2mc>", material grade "<2mg>" and unit "<2unit>" mm
        And Interlaye select material category "<inter_mc2>", material grade "<inter_mg2>", unit "<inter_unit2>", again select material cateogry "<3mc>", material grade "<3mg>" and unit "<3unit>" mm for 3 layer
        And Interlaye select material category "<inter_mc4>", material grade "<inter_mg4>", unit "<inter_unit4>", again select material cateogry "<4mc>", material grade "<4mg>" and unit "<4unit>" mm for 4 layer
        When click on create new joint request button
        
        Examples:
            | link             |     no_layer | mc   | mg    | unit | customerName | proID      | inter_mc1 | inter_mg1  | inter_unit | 2mc  | 2mg   | 2unit | inter_mc2 | inter_mg2  | inter_unit2 | 3mc  | 3mg   | 3unit | inter_mc4 | inter_mg4  | inter_unit4 | 4mc  | 4mg   | 4unit |
            | Create New Joint |     4        | PHS  | MY    | 1    | Dummy GJD    | Dummy test | adhesive  | MATG45     | 2          |  PHS | MY    | 3     | adhesive  | MATG45     | 4           | PHS  | MY    | 5     | adhesive  | MATG45     | 6           | PHS  | MY    | 7     |


@appeng_to_approval_team
     Scenario Outline: To verify send joint to approval team functionality
        When "Application Engineer" user login to joining DB application
        And Click on "<link>" from the sidebar
        When user select customer name as "<customerName>" and project id is "<proID>" in send_for_approval 
        And select any joint name and send to application engineer is "<app_eng_name>"
        
         And Click on "<link1>" from the sidebar
         Examples:
                | link              | app_eng_name     | link1   | customerName | proID     |
                | Send For Approval | parth pandya     | Log Out | Dummy GJD    | Dummy test|

@appeng_to_approval_team_and_this
    Scenario Outline: To verify send joint to approval team functionality with notification
         When "<role>" user login to joining DB application
         And click on notification icon and verify recent joint name came from customer center
        Examples:
                 | role            |
                 | Customer Center |

@appeng_to_technician
    Scenario Outline: To verify send joint to technician role functionality
        When "Application Engineer" user login to joining DB application
        And Click on "<link>" from the sidebar
        When user select customer name as "<customerName>" and project id is "<proID>" in send_to_technician
         And select any joint name and send to application engineer is "<app_eng_name>"
         And Click on "<link1>" from the sidebar
Examples:
        | link               | app_eng_name    | link1   | customerName | proID      |
        | Send To Technician | parth pandya    | Log Out | Dummy GJD    | Dummy test |


@appeng_to_technician_with_notification
    Scenario Outline: To verify send joint to technician role functionality with notification 
          #When "<role>" user login to joining DB application

         When User "<role>" role enter our email and password and click on sign in button
         And click on notification icon and verify recent joint name came from customer center
        Examples:
             |role            |
             |customer center |

@application_logout
    Scenario Outline: To verify logout application functionality
        When Click on "<link>" from the sidebar
        Then logout successfully
        Examples:
            | link    |
            | Log Out |


@application_master_customer_testing
    Scenario Outline: To verify add testing functionality in customer in master 
        When "Application Engineer" user login to joining DB application
        When Click on "<link>" from the sidebar
        When Click on "<option_in_master>"  
        When Click on "<options_in_cust>" from the option list
        Then check add_new_testing or not
        #Then check add_new_restiction or not "<type>"
        #Then check add_new_usecase or not "<usecase>"
        #Then check add_new_program_id or not "<customer_name>"
        #Then check add_new_project or not "<customer_name>" and "<project_id>" and "<project_name>"
        #Then check add_new_lab or not "<location>" and "<person>"  
        #Then check add_new_region or not "<region>" 
        #Then check add_new_industry or not "<industry>" 
        # Then check add_new_customer or not "<add_customer>"  


        Examples:
            | link    |option_in_master   |  options_in_cust  |  type      | usecase  | customer_name|  project_id |  project_name    |location |person  | region |industry    |add_customer|
            | Master  |    customer       |   testing         |   local1203|  Door    |  Dummy       |    Dummy    |  Dummy_testing   |Pune     |testing |  local |Automation01|   Dummyy01 |

@application_master_customer_testing_edit
    Scenario Outline: To verify add testing functionality in customer in master 
        When "Application Engineer" user login to joining DB application
        When Click on "<link>" from the sidebar
        When Click on "<option_in_master>"  
        When Click on "<options_in_cust>" from the option list
       #Then check added_new_testing editable or not
       #Then check added_new_restrictioin editable or not "<type>"
       #Then check added_new_usecases editable or not "<usecase>"
       #Then check added_new_program_id editable or not "<program_id>"
       #Then check added_new_project editable or not "<project_name>"
       # Then check added_new_lab editable or not "<location>"

        # Then check added_new_industry editable or not "<industry>" and "<change_industry>" 
         Then check added_new_customer editable or not "<add_customer>" and "<change_customer>" 

        Examples:
            | link    |option_in_master   |  options_in_cust  |  usecase  |  program_id  |project_name  |  location | industry      | change_industry|  add_customer  | change_customer|
            | Master  |    customer       |   customer        |  Roof     |  Dummy test  |dummyyy       |   mumbai  | Automation01  |         Auto   |  Dummyy01      | Dum_customer   |


@application_master_validation
      Scenario Outline: To verify add validation functionality in customer in master 
        When "Application Engineer" user login to joining DB application
        When Click on "<link>" from the sidebar
        When Click on "<option_in_master>"
        When click on "<validation_option>"
        #Then check add_new_specitication or not "<customer_name>" and "<specificationn>"
        Then check add_new_testtype or not "<test_type>"  

        Examples:
        | link    |option_in_master   |validation_option |customer_name |specificationn | test_type  |
        | Master  |    validation     |test type         |Dummy01       |    test1234   | Auto test1 |


@application_master_validation_edit
       Scenario Outline: To verify add validation edit or not functionality
        When "Application Engineer" user login to joining DB application
        When Click on "<link>" from the sidebar
        When Click on "<option_in_master>"
         When click on "<validation_option>"
         #Then check added_new_specitication is editable or not "<customer_name>" and "<specificationn>"
         Then check added_new_test_type is editable or not "<test_type>" and "<change_testtype>"

        Examples:
        | link    |option_in_master   |validation_option |customer_name |specificationn   | test_type       |change_testtype |
        | Master  |    validation     |  test type       |Dummy01       |    test12345    | Auto test1      | automation     |


@application_master_configuration
      Scenario Outline: To verify add configuration functionality 
        When "Application Engineer" user login to joining DB application
        When Click on "<link>" from the sidebar
        When Click on "<option_in_master>"
        When Click on the "<option_in_configuration>"

        #Then add_new_fastener or not "<fastener_type>" and "<fastener_name>"
        #Then add_new_die_post or not "<die_post_name>" 
        #Then add_new_nose_type or not "<nose_type_name>"
        #Then add_new_flywheel or not "<flywheel_name>"  
        #Then add_new_fastener_type or not "<fastener_type_name>"
        #Then add_new_die or not "<die_name>"
        Then add_new_equipment or not "<equipment_name>" and "<setter>"

        Examples:
        | link    |option_in_master   |  option_in_configuration | fastener_type | fastener_name | die_post_name |nose_type_name   |flywheel_name |fastener_type_name |die_name     | equipment_name | setter |
        | Master  |    configuration  |  equipment               |  rivet        |  Dx00USDSDE   | sss_test      |testing_standard |Testing_yes   |test_test          |SACHIN_9503  |dummy_equipment |SSCHIN95|


@application_master_configuration_edit
      Scenario Outline: To verify added configuration edit or not functionality 
        When "Application Engineer" user login to joining DB application
        When Click on "<link>" from the sidebar
        When Click on "<option_in_master>"
        When Click on the "<option_in_configuration>"
        
        #Then added_new_fastener editable or not  "<fastener_name>" and "<change_fastener_name>"
        #Then added_new_die_post editable or not "<die_post_name>" "<die_post_name_change>"
        #Then added_new_nose_type editable or not "<nose_type_name>" to "<nose_type_changeble_name>" 
        #Then added_new_flywheel editable or not "<flywheel_name>" to "<flywheel_changeble_name>"  
        #Then added_new_fastenertype editable or not "<fastener_type_name>" to "<fastener_type_change_name>"
        #Then added_new_die editable or not "<die_name>" to "<changeble_die_name>"
        Then added_new_equipment editable or not "<setter>" to "<setter_name>"

        Examples:
        | link    |option_in_master   |  option_in_configuration | fastener_name | change_fastener_name |die_post_name        |die_post_name_change |nose_type_name   |nose_type_changeble_name |flywheel_name |flywheel_changeble_name|fastener_type_name | fastener_type_change_name |die_name    | changeble_die_name | setter  | setter_name |
        | Master  |    configuration  |  die                     |  Dx00USDSDE   |  AAS233LLDD          |sss_test             |testing_die          |testing_standard | testing_change          |  Testing_yes |         yes           |test_test          |  testing                  |SACHIN_9503 |test_die2           | SSCHIN95| SACHIN_7276 |


@application_master_material
        Scenario Outline: To verify added material functionality 
        When "Application Engineer" user login to joining DB application
        
        When Click on "<link>" from the sidebar
        When Click on "<option_in_master>"
        When Click on the option in material "<option_in_material>"
        #Then add_new_alias with "<alias_name>"
        #Then add_new_grade_category with "<material_category>" and "<grade_category>"
        #Then add_new_material_grade_and_temper with "<material_grade>"
        #Then add_new_material_category with "<material_category>" 

        

        Examples:
        | link    |option_in_master   |option_in_material | alias_name | material_category | grade_category | material_grade| material_category |
        | Master  |     material      | material category |Test_alias  |  Steel            | Test_grade     |test           |  sachin_steel     |


@application_master_material_edit 
        Scenario Outline: To verify added material edit or not functionality 
       # When "Application Engineer" user login to joining DB application
        When "Technician" user login to joining DB application
        When Click on "<link>" from the sidebar
        When Click on "<option_in_master>"
        When Click on the option in material "<option_in_material>"
       # Then added_new_alise editable or not "<alias_name>" with "<changeble_alisename>"
        #Then added_new_grade_category editable or not "<grade_category>" with "<changeble_grade_category>"
        #Then added_new_material_grade_and_temper editable or not "<material_grade>" with "<changeble_material_grade>"
        # Then added_new_material_category editable or not "<material_category>" with "<changeble_material_category>"
        Then you login with technician never do edit or delete access

        Examples:
        | link    |option_in_master   |option_in_material         | alias_name |changeble_alisename |grade_category | changeble_grade_category |material_grade |changeble_material_grade | material_category|changeble_material_category |
        | Master  |     material      | material category         | Test_alias | testing_alias      |  Test_grade   |      TEsting_grade       | test          |  testing                |  sachin_steel    |  sachin_testing            |


@application_master_interlayer
       Scenario Outline: To verify add new interlayer functionality 
        When "Application Engineer" user login to joining DB application
        When Click on "<link>" from the sidebar
        When Click on "<option_in_master>"
        When click option in interlayer "<option_interlayer>"

        #Then add_new_interlayer_grade with "<interlayer_type_1>" and "<interlayer_grade>"
        Then add_new_interlayer_type with "<interlayer_type_2>"  

        Examples:
        | link    | option_in_master |option_interlayer |interlayer_type_1 | interlayer_grade | interlayer_type_2 |
        |Master   |   interlayer     | interlayer type  | Tape             |  Test            |  sachin_Tape      |


    @application_master_interlayer_edit
        Scenario Outline: To verify add new interlayer functionality 
        When "Application Engineer" user login to joining DB application
        When Click on "<link>" from the sidebar
        When Click on "<option_in_master>"
        When click option in interlayer "<option_interlayer>"

        #Then added_new_interlayer_grade editable or not "<interlayer_grade>" with "<changeble_interlayer_grade>"
        Then added_new_interlayer_type editable or not "<interlayer_type_2>" with "<changeble_interlayer_type_2>"

        Examples:
        | link    | option_in_master |option_interlayer |interlayer_grade |changeble_interlayer_grade | interlayer_type_2 |changeble_interlayer_type_2 |
        |Master   |   interlayer     | interlayer type  |Test             | testing2                  |sachin_Tape        |  testing_sachin            |


     @application_master_statuses
        Scenario Outline: To verify add new statuses functionality 
        When "Application Engineer" user login to joining DB application
        When Click on "<link>" from the sidebar
        When Click on "<option_in_master>"
        When Click on option "<option_in_statuses>"
        #Then add_new_joint_classification "<classification_name>"
        #Then add_new_job_status with "<job_status>"
        Then add_new_joint_status is "<joint_status>"

        Examples:
        | link    | option_in_master |   option_in_statuses  |classification_name  |job_status |joint_status     |
        |Master   |   statuses       |   joint status        |    test_lower       | On hold   | testing progress|

@application_master_statuses_edit
        Scenario Outline: To verify added new statuses functionality is editable or not
        When "Application Engineer" user login to joining DB application
        When Click on "<link>" from the sidebar
        When Click on "<option_in_master>"
        When Click on option "<option_in_statuses>"
        #Then added_new_joint_classification editable or not "<classification_name>" and "<changeble_classification_name>"
        #Then added_new_job_status editable or not "<job_status>" and "<changeble_job_status>"
        Then added_new_joint_status editable or not "<joint_status>" and "<changeble_joint_status>"

        Examples:
        | link    | option_in_master |   option_in_statuses  |classification_name  |changeble_classification_name  |job_status |changeble_job_status | joint_status    |changeble_joint_status |
        |Master   |   statuses       |   joint status        |    test_lower       |  testing_Lower                |On hold    | rejected            |testing progress | testing Done          |

@application_home_advance_search
        Scenario Outline: To verify advnace search functionality in home
        When "Application Engineer" user login to joining DB application
        When Click on "<link>" from the sidebar
        When click on search after puting values this "<Customer>" "<project>" "<test_type>" "<equipment>"
        When click it "<Fastner>" "<die>" "<jointstatus>" "<jobstatus>" "<materialcategory>" and "<industryy>" and "<programID>" and "<lab>"


        Examples:
        | link  |Customer  |project    |test_type  |equipment   | Fastner  | die | jointstatus  |  jobstatus  |  materialcategory  |  industryy  |  programID | lab  |
        | Home  | dummy    |test_dummy | mechnical |UUM-System 1|  A30     | DC  | Approved     |  Acceptable |  Steel             |  Automation | Dummy_     | pune |

@application_home_advance_search_previous_search
        Scenario Outline: To verify advance search functionality show previous search
        When "Application Engineer" user login to joining DB application
        When Click on "<link>" from the sidebar
        Then validate show previous search result  

        Examples:
        | link  |
        |  Home |


@create_a_new_user
        Scenario Outline: To verify create new user functionality
        When "Application Engineer" user login to joining DB application
         When Click on "<link>" from the sidebar
        When enter "<first_name>" or "<last_name>" or "<email_id>" or "<add_role>" or "<lab>" or "<restriction>" 
        # When enter "<first_name>" or "<last_name>" or "<email_id>" or "<add_role>" or "<lab>" or "<restriction>" clear all data
        When check it "<link2>" 
        When "<page_no>" user is created or not
        #When delete the user
        
        Examples:
        | link             | link2          |  page_no   |   first_name  | last_name | email_id                     |  add_role             | lab  |  restriction   |
        |  Create New User | List Of User   |     four   |   sachin      | gadekar   |sachin@varahitechnologies.com |  Application Engineer | pune | local releases |

@create_user_edit
        Scenario Outline: To verify user edit functionality
        When "Application Engineer" user login to joining DB application
        When check it "<link2>" 
        When "<page_no>" user is created or not
        When edit any user it is edited "<changeble_name>" or not
        
    Examples:
        | link2          |  page_no   |  changeble_name  |
        | List Of User   |     four   |       satish     |


@Create_new_templete        
        Scenario Outline: To verify create new templates functionality
        When "Application Engineer" user login to joining DB application
        When Click on "<link>" from the sidebar
        When enter "<name_of_template>" and "<select_group>" and "<property_name>" and "<t_type>" and "<t_unit>" and "<t_template>"  
       #(comment)new template is created but the sorting not proper in list of template


       Examples:
       |        link             |   name_of_template  |  select_group |   property_name |  t_type |  t_unit | t_template  |
       |  create new templete    |   sachin            |  Customer     |   testing       |  Number |  test   | Testing     |

@list_of_template
        Scenario Outline: To verify list of templates functionality
        When "Application Engineer" user login to joining DB application
        When Click on "<link>" from the sidebar
        When "<page_no>" user is created or not

Examples:
       |        link     |  page_no  |
       |    List Of User |    one    |
       
@appeng_worksheet
    Scenario Outline: To verify worksheet functionality
        When "Application Engineer" user login to joining DB application
        #And Click on "<link>" from the sidebar
       #When user select customer name as "<customerName>" and project id is "<proID>" for other
         
       # When select a joint name from the dropdown
       #When created joint enter "<Fastener>" and "<die_name>" 
       #When share created joint "<select_role>" and "<select_username>"
         #Then generate a report "<export_type>"
         When check it "<link2>" 
         #Then edit generated report
         Then delete report

        Examples:
            | link      | customerName      | proID      |   program_id  |  export_type |  Fastener  |  die_name |  select_role | select_username |   link2      |
            | Worksheet | Dummy GJD         | Dummy test |     Dummy2    | Quick        |  A3024     |  ASDA     |  Technician  |  Parth pandya   | Report list  |
 
@project_manage
    Scenario Outline: To verify project manage functionality  
        When "Application Engineer" user login to joining DB application
        And Click on "<link>" from the sidebar
        When user select customer name as "<customerName>" and project id is "<proID>"
        When add "<joint_status>"

         # When you send to any "<customer_center>"
        # When check with delete functionality
         #When check with edit functionality "<edited_jointstatus>"

Examples:
            | link             | customerName   |   proID     |  joint_status  |  customer_center  |  edited_jointstatus |
            | project manage   |   Dummy GJD    |  Dummy test |  Any           |   XYZ             |  rejected           |

@only_search_for_scrolling
    Scenario Outline: To verify search in homepage functionality  
        When "Application Engineer" user login to joining DB application
         When click on search check result
         #(this is not a feature this is only comment)appengg_material_search_1  in this tag i impliment scroll but specially mention here

 Examples:
            | link           |
            | project manage |        
