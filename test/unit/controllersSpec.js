'use strict';

/* jasmine specs for controllers go here */
describe('Comic controllers', function () {

    beforeEach(function(){
        this.addMatchers({
            toEqualData: function(expected) {
                return angular.equals(this.actual, expected);
            }
        });
    });

    // Load our app module definition before each test.
    beforeEach(module('comicViewer'));
    beforeEach(module('comicServices'));

    describe('ComicListCtrl', function () {
        var scope, ctrl, $httpBackend;

        beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('comics/comicsTemp.json').respond([{ComicName: 'Dilbert'}, {ComicName: 'Calvin and Hobbes'}]);

            scope = $rootScope.$new();
            ctrl = $controller('ComicListCtrl', {$scope: scope});
        }));

        it('should create "comics" strips with 2 comics fetched from xhr', (function () {
            expect(scope.comics).toEqualData([]);
            $httpBackend.flush();

            expect(scope.comics).toEqualData([{ComicName: 'Dilbert'}, {ComicName: 'Calvin and Hobbes'}]);
        }));

        it('should set the default value of ordProp model', function () {
            expect(scope.orderProp).toBe('ComicName');
        });

        xit('should return true', function () {
            var xxx = (1 + 2);
            expect(xxx).toBe(3);
        });


    });

    describe('ComicDetailCtrl', function () {
        var scope, ctrl, $httpBackend, xyzComicData = function() {
            return {
                name: 'comic xyz',
                images: ['image/url1.png', 'image/url2.png'],
                mydate: '01/10/2017'
            }
        };

        beforeEach(inject(function (_$httpBackend_, $rootScope, $routeParams, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('comics/xyz.json').respond(xyzComicData());

            $routeParams.comicId='xyz';
            scope = $rootScope.$new();
            ctrl = $controller('ComicDetailCtrl', {$scope: scope});
        }));

        it('should fetch comic detail', function() {
            expect(scope.comic).toEqualData({});
            $httpBackend.flush();

            expect(scope.comic).toEqualData(xyzComicData());
        });
    });
});
