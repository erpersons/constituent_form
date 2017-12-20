myApp.service('SubmitService', function ($http) {
    console.log('in SubmitService');
    var self = this;

    self.senators = {
        data: []
    };

    self.getSens = function () {
        console.log('in getSens');
        $http({
            method: 'GET',
            url: '/senGet-route'
        }).then(function (resp) {
            self.senators.data = resp.data
            console.log(resp.data); //logging empty array
        });
    }

    self.districts = {
        data: []
    };

    self.getDists = function () {
        console.log('in getDists');
        $http({
            method: 'GET',
            url: '/distGet-route'
        }).then(function (resp) {
            self.districts.data = resp.data
            console.log(resp.data); //logging array of an empty constituent object, without checkbox data
        });
    }
}); //end myApp.service