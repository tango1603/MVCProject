angular.module('MyApp')
    .controller('TableAddressController', function ($scope, AddressService) {

        //цвет выделения
        $scope.setColorId = function () {
            $scope.colorId = { "color": "blue" }
            $scope.colorCountry = { "color": "black" }
            $scope.colorCity = { "color": "black" }
            $scope.colorStereet = { "color": "black" }
            $scope.colorBuildingNumber = { "color": "black" }
            $scope.colorPostID = { "color": "black" }
            $scope.colorDateTime = { "color": "black" }
        }

        $scope.setColorCountry = function () {
            $scope.colorId = { "color": "black" }
            $scope.colorCountry = { "color": "blue" }
            $scope.colorCity = { "color": "black" }
            $scope.colorStereet = { "color": "black" }
            $scope.colorBuildingNumber = { "color": "black" }
            $scope.colorPostID = { "color": "black" }
            $scope.colorDateTime = { "color": "black" }
        }

        $scope.setColorCity = function () {
            $scope.colorId = { "color": "black" }
            $scope.colorCountry = { "color": "black" }
            $scope.colorCity = { "color": "blue" }
            $scope.colorStereet = { "color": "black" }
            $scope.colorBuildingNumber = { "color": "black" }
            $scope.colorPostID = { "color": "black" }
            $scope.colorDateTime = { "color": "black" }
        }

        $scope.setColorStereet = function () {
            $scope.colorId = { "color": "black" }
            $scope.colorCountry = { "color": "black" }
            $scope.colorCity = { "color": "black" }
            $scope.colorStereet = { "color": "blue" }
            $scope.colorBuildingNumber = { "color": "black" }
            $scope.colorPostID = { "color": "black" }
            $scope.colorDateTime = { "color": "black" }
        }

        $scope.setColorBuildingNumber = function () {
            $scope.colorId = { "color": "black" }
            $scope.colorCountry = { "color": "black" }
            $scope.colorCity = { "color": "black" }
            $scope.colorStereet = { "color": "black" }
            $scope.colorBuildingNumber = { "color": "blue" }
            $scope.colorPostID = { "color": "black" }
            $scope.colorDateTime = { "color": "black" }
        }

        $scope.setColorPostID = function () {
            $scope.colorId = { "color": "black" }
            $scope.colorCountry = { "color": "black" }
            $scope.colorCity = { "color": "black" }
            $scope.colorStereet = { "color": "black" }
            $scope.colorBuildingNumber = { "color": "black" }
            $scope.colorPostID = { "color": "blue" }
            $scope.colorDateTime = { "color": "black" }
        }

        $scope.setColorDateTime = function () {
            $scope.colorId = { "color": "black" }
            $scope.colorCountry = { "color": "black" }
            $scope.colorCity = { "color": "black" }
            $scope.colorStereet = { "color": "black" }
            $scope.colorBuildingNumber = { "color": "black" }
            $scope.colorPostID = { "color": "black" }
            $scope.colorDateTime = { "color": "blue" }
        }

        //Фильтр 
        $scope.sortType = 'Id'; // значение сортировки по умолчанию
        $scope.colorId = { "color": "blue" } // значение цвета по умолчанию
        $scope.sortReverse = false;  // обратная сортривка

        //Данные
        $scope.Addresses = null;
        AddressService.GetAddressList().then(function (d) {
            $scope.Addresses = d.data; 
        }, function (error) {
            alert('Error!'); 
        });

        //Пагинация
        $scope.currentPage = 0;
        $scope.itemsPerPage = 10;
        $scope.firstPage = function () {
            return $scope.currentPage == 0;
        }
        $scope.lastPage = function () {
            var lastPageNum = Math.ceil($scope.Addresses.length / $scope.itemsPerPage - 1);
            return $scope.currentPage == lastPageNum;
        }
        $scope.numberOfPages = function () {
            return Math.ceil($scope.Addresses.length / $scope.itemsPerPage);
        }
        $scope.startingItem = function () {
            return $scope.currentPage * $scope.itemsPerPage;
        }
        $scope.pageBack = function () {
            $scope.currentPage = $scope.currentPage - 1;
        }
        $scope.pageForward = function () {
            $scope.currentPage = $scope.currentPage + 1;
        }
    })

    .filter('startFrom', function () {
        return function (input, start) {
            start = +start;
            return input.slice(start);
        }
    })
        
    .factory('AddressService', function ($http) {
        var fac = {};
        fac.GetAddressList = function () {
            return $http.get('/Data/GetAddressList');
        }
        return fac;
    });   