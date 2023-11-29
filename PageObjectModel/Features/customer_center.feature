Feature: TO verify customer role all functionality

    Background: Launch Browser
        Given User navigate to Joining DB Applications

    @customer_center_login
    Scenario Outline: To verify Login functionality.
        When User "<role>" role enter our email and password and click on sign in button
        Then Verify the title name "<title>"
        Examples:
            | role            | title            |
            | Customer Center | Joining Frontend |

    @material_dynamic
    Scenario Outline: To verify the dynamic add layer for material search
        # When "Customer Center" user login to joining DB application
        And Select number of layer "<no_layer>" from the material search
        Then Verify the "<layer_no>" is displayed on the screen
        Examples:
            | no_layer | layer_no |
            | 1        | Layer 1  |
    # | 2        | Layer 2  |
    # | 3        | Layer 3  |

    @customer_pro_id
    Scenario Outline: To verify customer name and project id functionality
        When "Customer Center" user login to joining DB application
        When user select customer name as "<customerName>" and project id is "<proID>"
        Examples:
            | customerName | proID |
            | Ford         | FD111 |

    @material_search_1
    Scenario Outline: To verify search functionality for layer 1 material search
        # When "Customer Center" user login to joining DB application
        When user select customer name as "<customerName>" and project id is "<proID>"
        And Select number of layer "<no_layer>" from the material search
        Then Select material category "<material_category>" and material grade "<material_grade>" and select oprator "<operator>" and select unit "<unit>" mm
        And Click on search button
        Then Verify if record availble then displayed on table oterwise display no results found
        Examples:
            | no_layer | material_category | material_grade | operator | unit | customerName | proID |
            | 1        | GC11              | GD111          | =        | 2    | Ford         | FD111 |
          # | 1        | Any               | Any            | =        | 2    |

    @material_search_2
    Scenario Outline: To verify search functionality for layer 2 material search
        # When "Customer Center" user login to joining DB application
        When user select customer name as "<customerName>" and project id is "<proID>"
        And Select number of layer "<no_layer>" from the material search
        Then Select material category "<material_category>" and material grade "<material_grade>" and select oprator "<operator>" and select unit "<unit>" mm
        And Select material category "<inter_material_category>" and material grade "<inter_material_grade>" and select oprator "<inter_operator>" and select unit "<inter_unit>" mm and again material category "<layer2_material_category>" and material grade "<layer2_material_grade>" and select oprator "<layer2_operator>" and select unit "<layer2_unit>" mm from layer 2
        And Click on search button
        Then Verify if record availble then displayed on table oterwise display no results found
        Examples:
            | customerName | proID | no_layer | material_category | material_grade | operator | unit | inter_material_category | inter_material_grade | inter_operator | inter_unit | layer2_material_category | layer2_material_grade | layer2_operator | layer2_unit |
            | Ford         | FD111 | 2        | Any               | Any            | =        | 1    | Any                     | Any                  | =              | 2          | Any                      | Any                   | =               | 3           |

    @material_search_3
    Scenario Outline: To verify search functionality for layer 3 material search
        # When "Customer Center" user login to joining DB application
        When user select customer name as "<customerName>" and project id is "<proID>"
        And Select number of layer "<no_layer>" from the material search
        Then Select material category "<material_category>" and material grade "<material_grade>" and select oprator "<operator>" and select unit "<unit>" mm
        And Select material category "<inter_material_category>" and material grade "<inter_material_grade>" and select oprator "<inter_operator>" and select unit "<inter_unit>" mm and again material category "<layer2_material_category>" and material grade "<layer2_material_grade>" and select oprator "<layer2_operator>" and select unit "<layer2_unit>" mm from layer 2
        #And Select material category "<layer3_material_category>" and material grade "<layer3_material_grade>" and select oprator "<layer3_operator>" and select unit "<layer3_unit>" mm from layer 3
        And Interlaye select material category "<inter_mc2>", material grade "<inter_mg2>", unit "<inter_unit2>", again select material cateogry "<3mc>", material grade "<3mg>" and unit "<3unit>" mm for 3 layer
        And Click on search button
        Then Verify if record availble then displayed on table oterwise display no results found
        Examples:
            | customerName | proID | no_layer | material_category | material_grade | operator | unit | inter_material_category | inter_material_grade | inter_operator | inter_unit | layer2_material_category | layer2_material_grade | layer2_operator | layer2_unit | inter_mc2 | inter_mg2 | inter_unit2 | 3mc | 3mg | 3unit |
            | Ford         | FD111 | 3        | Any               | Any            | =        | 1    | Any                     | Any                  | =              | 2          | Any                      | Any                   | =               | 3           | Any       | Any       | 4           | Any | Any | 5     |


    @material_search_4
    Scenario Outline: To verify search functionality for layer 4 material search
        # When "Customer Center" user login to joining DB application
        When user select customer name as "<customerName>" and project id is "<proID>"
        And Select number of layer "<no_layer>" from the material search
        Then Select material category "<material_category>" and material grade "<material_grade>" and select oprator "<operator>" and select unit "<unit>" mm
        And Select material category "<inter_material_category>" and material grade "<inter_material_grade>" and select oprator "<inter_operator>" and select unit "<inter_unit>" mm and again material category "<layer2_material_category>" and material grade "<layer2_material_grade>" and select oprator "<layer2_operator>" and select unit "<layer2_unit>" mm from layer 2
        #And Select material category "<layer3_material_category>" and material grade "<layer3_material_grade>" and select oprator "<layer3_operator>" and select unit "<layer3_unit>" mm from layer 3
        And Interlaye select material category "<inter_mc2>", material grade "<inter_mg2>", unit "<inter_unit2>", again select material cateogry "<3mc>", material grade "<3mg>" and unit "<3unit>" mm for 3 layer
        And Interlaye select material category "<inter_mc4>", material grade "<inter_mg4>", unit "<inter_unit4>", again select material cateogry "<4mc>", material grade "<4mg>" and unit "<4unit>" mm for 4 layer
        And Click on search button
        Then Verify if record availble then displayed on table oterwise display no results found
        Examples:
            | customerName | proID | no_layer | material_category | material_grade | operator | unit | inter_material_category | inter_material_grade | inter_operator | inter_unit | layer2_material_category | layer2_material_grade | layer2_operator | layer2_unit | inter_mc2 | inter_mg2 | inter_unit2 | 3mc | 3mg | 3unit | inter_mc4 | inter_mg4 | inter_unit4 | 4mc | 4mg | 4unit |
            | Ford         | FD111 | 4        | Any               | Any            | =        | 1    | Any                     | Any                  | =              | 2          | Any                      | Any                   | =               | 3           | Any       | Any       | 4           | Any | Any | 5     | Any       | Any       | 6           | Any | Any | 7     |


    @cust_newJointAdd_1
    Scenario Outline: To verify create new joint request functionality for one layer.
        # When "Customer Center" user login to joining DB application
        When user select customer name as "<customerName>" and project id is "<proID>"
        And Click on "<link>" from the sidebar
        When Fill automatically joint name
        And Select the number of layer "<no_layer>"
        And Enter material category "<mc>", material grade "<mg>" and unit "<unit>" mm
        When click on create new joint request button
        And Click on "<link1>" from the sidebar
        Then verify joint name is added successfully
        Examples:
            | link             | link1          | jointName          | no_layer | mc   | mg   | unit | customerName | proID |
            | Create New Joint | List Of Joints | Ford_FD111_1_layer | 1        | GC11 | GD111 | 1    | Ford         | FD111 |


    @cust_newJointAdd_2
    Scenario Outline: To verify create new joint request functionality for Two layer.
        # When "Customer Center" user login to joining DB application
        When user select customer name as "<customerName>" and project id is "<proID>"
        And Click on "<link>" from the sidebar
        When Fill automatically joint name
        And Select the number of layer "<no_layer>"
        And Enter material category "<mc>", material grade "<mg>" and unit "<unit>" mm
        And Interlaye select material category "<inter_mc1>", material grade "<inter_mg1>", unit "<inter_unit>", again select material cateogry "<2mc>", material grade "<2mg>" and unit "<2unit>" mm
        When click on create new joint request button
        And Click on "<link1>" from the sidebar
        Then verify joint name is added successfully
        Examples:
            | link             | link1          | jointName          | no_layer | mc   | mg   | unit | customerName | proID | inter_mc1 | inter_mg1  | inter_unit | 2mc  | 2mg  | 2unit |
            | Create New Joint | List Of Joints | Ford_FD111_2_layer | 2        | GC11 | GD111 | 1    | Ford         | FD111 | adhesive  | Tereson EP | 2          | GC11 | GD111 | 3     |


    @cust_newJointAdd_3
    Scenario Outline: To verify create new joint request functionality for three layer.
        # When "Customer Center" user login to joining DB application
        When user select customer name as "<customerName>" and project id is "<proID>"
        And Click on "<link>" from the sidebar
        When Fill automatically joint name
        And Select the number of layer "<no_layer>"
        And Enter material category "<mc>", material grade "<mg>" and unit "<unit>" mm
        And Interlaye select material category "<inter_mc1>", material grade "<inter_mg1>", unit "<inter_unit>", again select material cateogry "<2mc>", material grade "<2mg>" and unit "<2unit>" mm
        And Interlaye select material category "<inter_mc2>", material grade "<inter_mg2>", unit "<inter_unit2>", again select material cateogry "<3mc>", material grade "<3mg>" and unit "<3unit>" mm for 3 layer
        When click on create new joint request button
        And Click on "<link1>" from the sidebar
        Then verify joint name is added successfully
        Examples:
            | link             | link1          | jointName          | no_layer | mc   | mg   | unit | customerName | proID | inter_mc1 | inter_mg1  | inter_unit | 2mc  | 2mg  | 2unit | inter_mc2 | inter_mg2  | inter_unit2 | 3mc  | 3mg  | 3unit |
            | Create New Joint | List Of Joints | Ford_FD111_3_layer | 3        | GC11 | GD111 | 1    | Ford         | FD111 | adhesive  | Tereson EP | 2          | GC11 | GD111 | 3     | adhesive  | Tereson EP | 4           | GC11 | GD111 | 5     |


    @cust_newJointAdd_4
    Scenario Outline: To verify create new joint request functionality for four layer.
        # When "Customer Center" user login to joining DB application
        When user select customer name as "<customerName>" and project id is "<proID>"
        And Click on "<link>" from the sidebar
        When Fill automatically joint name
        And Select the number of layer "<no_layer>"
        And Enter material category "<mc>", material grade "<mg>" and unit "<unit>" mm
        And Interlaye select material category "<inter_mc1>", material grade "<inter_mg1>", unit "<inter_unit>", again select material cateogry "<2mc>", material grade "<2mg>" and unit "<2unit>" mm
        And Interlaye select material category "<inter_mc2>", material grade "<inter_mg2>", unit "<inter_unit2>", again select material cateogry "<3mc>", material grade "<3mg>" and unit "<3unit>" mm for 3 layer
        And Interlaye select material category "<inter_mc4>", material grade "<inter_mg4>", unit "<inter_unit4>", again select material cateogry "<4mc>", material grade "<4mg>" and unit "<4unit>" mm for 4 layer
        When click on create new joint request button
        And Click on "<link1>" from the sidebar
        Then verify joint name is added successfully
        Examples:
            | link             | link1          | jointName          | no_layer | mc   | mg   | unit | customerName | proID | inter_mc1 | inter_mg1  | inter_unit | 2mc  | 2mg  | 2unit | inter_mc2 | inter_mg2  | inter_unit2 | 3mc  | 3mg  | 3unit | inter_mc4 | inter_mg4  | inter_unit4 | 4mc  | 4mg  | 4unit |
            | Create New Joint | List Of Joints | Ford_FD111_4_layer | 4        | GC11 | GD111 | 1    | Ford         | FD111 | adhesive  | Tereson EP | 2          | GC11 | GD111 | 3     | adhesive  | Tereson EP | 4           | GC11 | GD111 | 5     | adhesive  | Tereson EP | 6           | GC11 | GD111 | 7     |


    @sendtoApplicationEngg
    Scenario Outline: To verify send joint to application engineer functionality
        When user select customer name as "<customerName>" and project id is "<proID>"
        And Click on "<link>" from the sidebar
        And select any joint name and send to application engineer is "<app_eng_name>"
        # And Click on "<link1>" from the sidebar
        # Given User navigate to Joining DB Applications
        # When User "<role>" role enter our email and password and click on sign in button
        # And click on notification icon and verify recent joint name came from customer center
        Examples:
            | link                     | app_eng_name | link1   | customerName | proID | role                 |
            | Send To Application Team | Dipak Ahirav | Log Out | Ford         | FD111 | Application Engineer |


    @cust_logout
    Scenario Outline: To verify logout customer center functionality
        When Click on "<link>" from the sidebar
        Then logout successfully
        Examples:
            | link    |
            | Log Out |

