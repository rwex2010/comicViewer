'use strict';

/* jasmine specs for controllers go here */
describe('Comic controllers', function () {

    // Load our app module definition before each test.
    beforeEach(module('comicViewer'));

    describe('ComicListCtrl', function () {
        var scope, ctrl, $httpBackend;

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


    });

    describe('ComicDetailCtrl', function () {
        var scope, ctrl, $httpBackend;

        beforeEach(inject(function (_$httpBackend_, $rootScope, $routeParams, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('comics/xyz.json').respond({ComicName:'comic xyz'});

            $routeParams.comicId='xyz';
            scope = $rootScope.$new();
            ctrl = $controller('ComicDetailCtrl', {$scope: scope});
        }));

        it('should fetch comic detail', function() {
            expect(scope.comic).toBeUndefined();
            $httpBackend.flush();

            expect(scope.comic).toEqual({ComicName:'comic xyz'});
        });
    });
});
