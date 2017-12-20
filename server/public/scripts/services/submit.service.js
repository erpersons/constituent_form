myApp.service('SubmitService', function($http) {
    console.log('in SubmitService');
    var self = this;
    
    self.senators = { data:[] };

    self.getSens = function() {
        console.log('in getSens');
        $http({
            method: 'GET',
            url: '/senGet-route'

        }).then (function(resp){
            self.senators.data = resp.data
        });
    }

    self.districts = { data:[] };

    self.getDists = function() {
        console.log('in getDists');
        $http({
            method: 'GET',
            url: '/distGet-route'
        }).then (function(resp){
            self.districts.data = resp.data
        });
    }
}); //end myApp.service