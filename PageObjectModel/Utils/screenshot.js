var { After, Before } = require('cucumber');
After(function(scenarioResult) {
    let self = this;

    if (scenarioResult.result.status === 'failed') {
        return browser.takeScreenshot()
            .then(function(screenshot) {
                const decodedImage = new Buffer(screenshot.replace(/^data:image\/png;base64,/, ''), 'base64');
                self.attach(decodedImage, 'image/png');
                //console.log("scenarioResult  = ", scenarioResult.result.status);
            });
    }
    browser.manage().deleteAllCookies();
    browser.executeScript('window.sessionStorage.clear();');
    browser.executeScript('window.localStorage.clear();');
});