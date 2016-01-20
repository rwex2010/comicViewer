'use strict';

/* jasmine specs for services go here */

describe('service', function() {

    // load modules
    beforeEach(module('comicViewer'));

    // Test service availability
    it('check the existence of Comic factory', inject(function(Comic) {
        expect(Comic).toBeDefined();
    }));

    it('should return true', function () {
        var xxx = (1 + 2);
        expect(xxx).toBe(3);
    });

});
