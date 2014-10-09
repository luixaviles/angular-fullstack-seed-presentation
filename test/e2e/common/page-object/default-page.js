/**
 * Created by luis.aviles on 10/8/2014.
 */
var DefaultPage = function () {
    this.hello = element(by.id('hello'));

    this.loadPage = function () {
        var URL = browser.params.protocol + '://' + browser.params.host + ':' + browser.params.port;
        browser.get(URL);
    };
}

module.exports.DefaultPage = DefaultPage;
