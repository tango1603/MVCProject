angular.module('MyApp', ["ngMaterial", "smDateTimeRangePicker"])
    .config(function ($mdThemingProvider, pickerProvider) {
        pickerProvider.setOkLabel('Save');
        pickerProvider.setCancelLabel('Close');
        //  Over ride day names by changing here
        pickerProvider.setDayHeader('single');  //Options 'single','shortName', 'fullName'
    }
    );