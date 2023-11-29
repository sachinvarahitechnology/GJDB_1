exports.config = {
    directConnect: true, 
    getPageTimeout: 180000,
    allScriptsTimeout: 180000,

    framework: "custom",
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        'browserName': 'firefox',
    },

    specs: ['PageObjectModel/Features/customer_center.feature'],
    cucumberOpts: {
        require: 'PageObjectModel/StepDefination/customer_step.js',
        tags: '@customer_center_login or @material_dynamic',
    }

}