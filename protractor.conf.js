exports.config = {
    directConnect: true, 
    getPageTimeout: 180000,
    allScriptsTimeout: 180000,
    chromeDriver: 'C:/Selenum_Driver/chromedriver-win64/chromedriver-win64/chromedriver.exe',
    framework: "custom",
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        'browserName': 'chrome',
        
        // metadata: {
        //     device: 'HP Notebook',
        //     platform: {
        //         name: 'Windows',
        //         version: '10',
        //     }
        // },
    },
    // plugins: [{
    //     package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
    //     options: {
    //         automaticallyGenerateReport: true,
    //         removeExistingJsonReportFile: true,
    //         reportName: '<b>Joining Database</b>',
    //         pageFooter: '<div style="text-align: center;"><p>Tested by<i style="color:blue"> <b>Kundan Kotangale</b></i></p></div>',
    //         pageTitle: "Joining Database Report",
    //         customData: {
    //             title: "Execution Info",
    //             data: [
    //                 { label: 'Project Name', value: 'Joining Database' },
    //                 { label: 'Developer Name', value: 'Dipak Ahirav' },
    //                 { label: 'Build Version', value: '0.0.1' },
    //                 { label: 'Tested By', value: 'Kundan Kotangale' },
    //                 { label: 'Framework', value: 'Protractor Cucumber Framework' },
    //                 { label: 'Start Testing Date', value: '25 June 2020' },
    //                 { label: 'End Testing Date', value: 'Continue...' }
    //             ]
    //         },
    //         displayDuration: true
    //     }
    // }],protractor.conf.js
    specs: ['PageObjectModel/Features/application_engg.feature'],
    // specs: ['PageObjectModel/Features/customer_center.feature', 'PageObjectModel/Features/application_engg.feature', 'PageObjectModel/Features/technician.feature', 'PageObjectModel/Features/approval_team.feature'],
    cucumberOpts: {
        require: ['PageObjectModel/StepDefination/*.js'],
         //PageObjectModel/StepDefination/Login_step.js
         
        // format: 'json:.tmp/results.json',
        // tags: '@customer_center_login or @cust_langAPI or @material_dynamic or @material_search or @cust_newJointAdd',
        //    or @cust_newJointAdd_sendToApplicationEngg '
        // tags: '@cust_newJointAdd_sendToApplicationEngg ',
        // tags: '@app_engg_login or @app_engg_material_dynamic or @appeng_worksheet',
        tags: '@create_a_new_user'
        //@appeng_to_approval_team or @appeng_to_approval_team_and_this
            //'@app_engg_material_dynamic' //'@app_engg_login', //'@app_engg_customer_pro_id'
            // tags: false,
    },
    onPrepare: function() {
        browser.manage().window().maximize();
    }
};