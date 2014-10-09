/**
 * Created by luis.aviles on 10/8/2014.
 */
var po = require('../common/page-object/default-page.js');

describe('Default Page: E2E tests.', function() {
    var page;
    beforeEach(function () {
        page = new po.DefaultPage();
        page.loadPage();
    });

    describe('Default Page', function() {
        it('should display a text.', function() {
            expect(page.hello.getText()).toBe('It works!');
            //This is to show the main page for some seconds before to be closed.
            browser.sleep(5000);
        });
    });
});