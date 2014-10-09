/**
 * Created by luis.aviles on 10/9/2014.
 */
var DeveloperPage = function () {
    this.ageColumn = element.all(by.css('.col2 .colt2'));
    this.fieldComments = element(by.id('comments'));
    this.buttonSubmit = element(by.id('submit'));
    this.labelSuccess = element(by.id('data-sent'));

    this.loadPage = function () {
        var URL = browser.params.protocol + '://' + browser.params.host + ':' + browser.params.port;
        browser.get(URL + '/#/developers');
    };
}

module.exports.DeveloperPage = DeveloperPage;
