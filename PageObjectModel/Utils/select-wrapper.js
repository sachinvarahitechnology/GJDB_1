const { protractor } = require("protractor/built/ptor");

var SelectWrapper = function(selector) {
    this.webElement = element(selector);
};
SelectWrapper.prototype.getOptions = function() {
    return this.webElement.all(by.tagName('option'));
};
SelectWrapper.prototype.getSelectedOptions = function() {
    return this.webElement.all(by.css('option[selected="selected"]'));
};
SelectWrapper.prototype.selectByValue = function(value) {
    return this.webElement.all(by.css('option[value="' + value + '"]')).click();
};
SelectWrapper.prototype.selectByPartialText = function(text) {
    return this.webElement.all(by.cssContainingText('option', text)).click();
};
SelectWrapper.prototype.selectByText = function(text) {
    return this.webElement.all(by.xpath('option[.="' + text + '"]')).click();
};

module.exports = SelectWrapper;





//-------------------------------------------------------------------------------------------------------------//
        // var mySelecttype = new SelectWrapper(by.id("propertyType0"));
        // await mySelecttype.selectByText(type);

        // await ele.type_ddl.all(by.xpath('option[.="' + type + '"]')).click().sendKeys(protractor.Key.TAB);

        // await element(by.cssContainingText('option', type)).click().sendKeys(protractor.Key.TAB);

        // $('[id="propertyType0"]').element(by.cssContainingText('option', type)).click().sendKeys(protractor.Key.TAB);

        // await ele.type_ddl.sendKeys(protractor.Key.ENTER, type, protractor.Key.TAB);

        // await ele.type_ddl.click().sendKeys(protractor.Key.DOWN,protractor.Key.DOWN,protractor.Key.ENTER,protractor.Key.TAB);

        // await element(by.xpath('//select[@id="propertyType0"]//option[text()="'+type+'"]')).click().sendKeys(protractor.Key.TAB);

        // await ele.type_ddl.click().sendKeys(protractor.Key.TAB);

        // await ele.type_ddl.click().sendKeys(type,protractor.Key.ENTER+protractor.Key.TAB);

        // await ele.type_ddl.click().sendKeys(type,protractor.Key.ENTER+protractor.Key.TAB+protractor.Key.ENTER);

        // await ele.type_ddl.click().sendKeys(type).click();

        // element.all(by.xpath('//select[@id="propertyType0"]//option')).then(function(options) {
        //     options.forEach(function(option) {
        //         option.getText().then(function(text) {
        //             console.log("kundan :"+text);
        //             if (text==type) {
        //                 option.click();//.sendKeys(protractor.Key.TAB);
        //             } 
        //         });
        //     });
        // });

        //