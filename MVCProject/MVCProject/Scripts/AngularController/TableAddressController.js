angular.module('MyApp')
    .controller('TableAddressController', function ($scope, AddressService) {

        //Фильтр 
        $scope.sortType = 'Id'; // значение сортировки по умолчанию
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