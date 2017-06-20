angular.module('MyApp') 
    .controller('HomeController', function ($scope, AddressService) { 
        $scope.Addresses = null;
        AddressService.GetAddressList().then(function (d) {
            $scope.Addresses = d.data; //Success callback
        }, function (error) {
            alert('Error!'); // Failed Callback
        });
    })
    .factory('AddressService', function ($http) { 
        var fac = {};
        fac.GetAddressList = function () {
            return $http.get('/Data/GetAddressList');
        }
        return fac;
    });