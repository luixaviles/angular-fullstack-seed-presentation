/**
 * Created by luis.aviles on 10/9/2014.
 */
var po = require('./common/page-object/developer-page.js');

describe('Developer Page: E2E tests.', function() {
    var page;
    beforeEach(function () {
        page = new po.DeveloperPage();
        page.loadPage();
    });

    describe('Developer Page test cases', function() {
        it('should send default data successfully.', function() {
            page.buttonSubmit.click();
            expect(page.labelSuccess.getText()).toBe('Success');
        });
    });
});