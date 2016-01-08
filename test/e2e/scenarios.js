'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('ComicViewer App', function () {

    describe('Comic List view', function () {

        beforeEach(function () {
            browser.get('app/index.html');
        });


        it('should filter the comic list as a user types into the search box', function () {

            var comicList = element.all(by.repeater('comic in comics'));
            var query = element(by.model('query'));

            expect(comicList.count()).toBe(9);

            query.sendKeys('calvin');
            expect(comicList.count()).toBe(1);

            query.clear();
            query.sendKeys('age');
            expect(comicList.count()).toBe(3);
        });

        it('should render specific links', function(){
            var query = element(by.model('query'));
            query.sendKeys('dilbert');
            element.all(by.css('.comics li a')).first().click();
            browser.getLocationAbsUrl().then(function(url) {
                expect(url).toBe('/comics//dilbert');
            });
        });

        it('should be possible to control comic order via the drop down select box', function() {
               var comicNameColumn = element.all(by.repeater('comic in comics').column('comic.ComicName'));
            var query = element(by.model('query'));

            function getNames() {
                return comicNameColumn.map(function(elm) {
                    return elm.getText();
                });
            }

            query.sendKeys('age'); //let's narrow the dataset to make the test assertions shorter

            expect(getNames()).toEqual([
                "BC",
                "Wizard of Id",
                "Zits"
            ]);

            element(by.model('orderProp')).element(by.css('option[value="priority"]')).click();

            expect(getNames()).toEqual([
                "BC",
                "Zits",
                "Wizard of Id"
            ]);

        });
    });
});
