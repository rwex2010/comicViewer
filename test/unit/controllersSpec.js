'use strict';

/* jasmine specs for controllers go here */
describe('Comic controllers', function () {

    describe('ComicListCtrl', function () {
        var scope, ctrl, $httpBackend;

        // Load our app module definition before each test.
        beforeEach(module('comicViewer'));

        beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('comics/comicsTemp.json').respond([{ComicName: 'Dilbert'}, {ComicName: 'Calvin and Hobbes'}]);

            scope = $rootScope.$new();
            ctrl = $controller('ComicListCtrl', {$scope: scope});
        }));

        it('should create "comics" strips with 2 comics fetched from xhr', (function () {
            expect(scope.comics).toBeUndefined();
            $httpBackend.flush();

            expect(scope.comics).toEqual([{ComicName: 'Dilbert'}, {ComicName: 'Calvin and Hobbes'}]);
        }));

        it('should set the default value of ordProp model', function () {
            expect(scope.orderProp).toBe('ComicName');
        });

        it('should return true', function () {
            var xxx = (1 + 2);
            expect(xxx).toBe(3);
        });


    })
});
