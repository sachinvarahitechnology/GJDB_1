Feature: TO verify Approvl team role all functionality


    Background: Launch Browser
        Given User navigate to Joining DB Applications

    @approv_login
    Scenario Outline: To verify Login functionality.
        When User "<role>" role enter our email and password and click on sign in button
        Then Verify the title name "<title>"
        Examples:
            | role          | title            |
            | Approval Team | Joining Frontend |

    @approv_customer_pro_id
    Scenario Outline: To verify customer name and project id functionality
        When user select customer name as "<customerName>" and project id is "<proID>"
        Examples:
            | customerName | proID |
            | Ford         | FD111 |


    @approv_checkNotification
    Scenario Outline: To verify notification functionality
        When user select customer name as "<customerName>" and project id is "<proID>"
        And click on notification icon and select one request
        And check selected request is opened in table
        Examples:
            | customerName | proID |
            | Ford         | FD111 |

    @approv_material_dynamic
    Scenario Outline: To verify the dynamic add layer for material search
        # When "Approval team" user login to joining DB application
        And Select number of layer "<no_layer>" from the material search
        Then Verify the "<layer_no>" is displayed on the screen
        Examples:
            | no_layer | layer_no |
            | 1        | Layer 1  |
            | 2        | Layer 2  |
    # | 3        | Layer 3  |

    @approv_material_search_1
    Scenario Outline: To verify search functionality for layer 1 material search
        # When "Approval team" user login to joining DB application
        And Select number of layer "<no_layer>" from the material search
        Then Select material category "<material_category>" and material grade "<material_grade>" and select oprator "<operator>" and select unit "<unit>" mm
        And Click on search button
        # Then Verify search result displayed on the table
        Examples:
            | no_layer | material_category | material_grade | operator | unit |
            | 1        | UHSS              | RC 5754        | =        | 2    |
    # | 1        | Any               | Any            | =        | 2    |

    @approve_material_search_2
    Scenario Outline: To verify search functionality for layer 2 material search
        # When "Approval tean" user login to joining DB application
        And Select number of layer "<no_layer>" from the material search
        Then Select material category "<material_category>" and material grade "<material_grade>" and select oprator "<operator>" and select unit "<unit>" mm
        And Select material category "<inter_material_category>" and material grade "<inter_material_grade>" and select oprator "<inter_operator>" and select unit "<inter_unit>" mm and again material category "<layer2_material_category>" and material grade "<layer2_material_grade>" and select oprator "<layer2_operator>" and select unit "<layer2_unit>" mm from layer 2
        And Click on search button
        # Then Verify search result displayed on the table
        Examples:
            | no_layer | material_category | material_grade | operator | unit | inter_material_category | inter_material_grade | inter_operator | inter_unit | layer2_material_category | layer2_material_grade | layer2_operator | layer2_unit |
            | 2        | Any               | Any            | =        | 1    | Any                     | Any                  | =              | 2          | Any                      | Any                   | =               | 3           |

    @approv_material_search_3
    Scenario Outline: To verify search functionality for layer 3 material search
        # When "Customer team" user login to joining DB application
        And Select number of layer "<no_layer>" from the material search
        Then Select material category "<material_category>" and material grade "<material_grade>" and select oprator "<operator>" and select unit "<unit>" mm
        And Select material category "<inter_material_category>" and material grade "<inter_material_grade>" and select oprator "<inter_operator>" and select unit "<inter_unit>" mm and again material category "<layer2_material_category>" and material grade "<layer2_material_grade>" and select oprator "<layer2_operator>" and select unit "<layer2_unit>" mm from layer 2
        And Select material category "<layer3_material_category>" and material grade "<layer3_material_grade>" and select oprator "<layer3_operator>" and select unit "<layer3_unit>" mm from layer 3
        And Click on search button
        # Then Verify search result displayed on the table
        Examples:
            | no_layer | material_category | material_grade | operator | unit | inter_material_category | inter_material_grade | inter_operator | inter_unit | layer2_material_category | layer2_material_grade | layer2_operator | layer2_unit | layer3_material_category | layer3_material_grade | layer3_operator | layer3_unit |
            | 3        | Any               | Any            | =        | 1    | Any                     | Any                  | =              | 2          | Any                      | Any                   | =               | 3           | Any                      | Any                   | =               | 4           |

    @approv_newJointAdd_1
    Scenario Outline: To verify create new joint request functionality for one layer.
        # When "Approval team" user login to joining DB application
        And Click on "<link>" from the sidebar
        When Enter joint name is "<jointName>"
        And Select the number of layer "<no_layer>"
        And Enter material category "<mc>", material grade "<mg>" and unit "<unit>" mm
        # Then verify joint name is added successfully
        Examples:
            | link             | jointName      | no_layer | mc   | mg      | unit |
            | Create New Joint | Test one layer | 1        | UHSS | RC 5754 | 1    |


    @approve_worksheet
    Scenario Outline: To verify worksheet functionality
        And Click on "<link>" from the sidebar
        When select a joint name "<jointName>" from the dropdown
        Examples:
            | link      | jointName |
            | Worksheet | one layer |

    @approv_sendtoApplicationEngg
    Scenario Outline: To verify send joint to application engineer functionality
        When user select customer name as "<customerName>" and project id is "<proID>"
        And Click on "<link>" from the sidebar
        And select any joint name and send to application engineer is "<app_eng_name>"
        # And Click on "<link1>" from the sidebar
        # Given User navigate to Joining DB Applications
        # When User "<role>" role enter our email and password and click on sign in button
        # And click on notification icon and verify recent joint name came from customer center
        Examples:
            | link             | app_eng_name | link1   | customerName | proID | role                 |
            | Send To Engineer | Dipak Ahirav | Log Out | Ford         | FD111 | Application Engineer |


    @approv_to_technician
    Scenario Outline: To verify send joint to technician role functionality
        When user select customer name as "<customerName>" and project id is "<proID>"
        And Click on "<link>" from the sidebar
        And select any joint name and send to application engineer is "<app_eng_name>"
        # And Click on "<link1>" from the sidebar
        # Given User navigate to Joining DB Applications
        # When User "<role>" role enter our email and password and click on sign in button
        # And click on notification icon and verify recent joint name came from customer center
        Examples:
            | link               | app_eng_name    | link1   | customerName | proID | role       |
            | Send To Technician | sneha chaudhari | Log Out | Ford         | FD111 | Technician |

    @approve_to_approval_team
    Scenario Outline: To verify send joint to approval team functionality
        When user select customer name as "<customerName>" and project id is "<proID>"
        And Click on "<link>" from the sidebar
        And select any joint name and send to application engineer is "<app_eng_name>"
        # And Click on "<link1>" from the sidebar
        # Given User navigate to Joining DB Applications
        # When User "<role>" role enter our email and password and click on sign in button
        # And click on notification icon and verify recent joint name came from customer center
        Examples:
            | link              | app_eng_name     | link1   | customerName | proID | role          |
            | Send For Approval | Kundan Kotangale | Log Out | Ford         | FD111 | Approval Team |

    @approval_logout
    Scenario Outline: To verify logout approval functionality
        When Click on "<link>" from the sidebar
        Then logout successfully
        Examples:
            | link    |
            | Log Out |
