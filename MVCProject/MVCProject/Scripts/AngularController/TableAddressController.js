angular.module('MyApp') // extending from previously created angular module in the First Part
    .controller('TableAddressController', function ($scope, AddressService) { // explained in Part 2 about controller
        $scope.Addresses = null;
        AddressService.GetAddressList().then(function (d) {
            $scope.Addresses = d.data; //Success callback
        }, function (error) {
            alert('Error!'); // Failed Callback
        });
    })
    .factory('AddressService', function ($http) { // I have explained about factory in the Part 2
        var fac = {};
        fac.GetAddressList = function () {
            return $http.get('/Data/GetAddressList');
        }
        return fac;
    });