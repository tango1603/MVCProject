var app = angular.module('MyApp', ['datatables']);
app.controller('HomeController', ['$scope', '$http', 'DTOptionsBuilder', 'DTColumnBuilder',
    function ($scope, $http, DTOptionsBuilder, DTColumnBuilder) {
        $scope.dtColumns = [
            DTColumnBuilder.newColumn("Id", "Id"),
            DTColumnBuilder.newColumn("Country", "Country"),
            DTColumnBuilder.newColumn("City", "City"),
            DTColumnBuilder.newColumn("Stereet", "Stereet"),
            DTColumnBuilder.newColumn("PostID", "PostID"),
            DTColumnBuilder.newColumn("DateTime", "DateTime")
        ]

        $scope.dtOptions = DTOptionsBuilder.newOptions().withOption('ajax', {
            url: "/home/getdata",
            type: "POST"
        })
            .withPaginationType('full_numbers')
            .withDisplayLength(10);
    }])