myApp.controller('SubmitController', function (SubmitService, $http) {
    console.log('SubmitController created');
    var vm = this;
    vm.submitService = SubmitService;

    vm.clearInput = function () {
        vm.senatorIn = '';
        vm.districtIn = '';
        vm.nameIn = '';
        vm.addressIn = '';
        vm.emailIn = '';
        vm.messageIn = '';
        vm.humanIn = '';
    }; //end clearInput func

    vm.submit = function () {
        console.log('in vm.submit func')
        vm.infoMess = {
            senator: vm.senatorIn,
            district: vm.districtIn,
            name: vm.nameIn,
            address: vm.addressIn,
            email: vm.emailIn,
            message: vm.messageIn,
            human: true
        }; //end submit func
        console.log('vm.infoMess ----->', vm.infoMess);
        $http({
            method: 'POST',
            url: '/submit-route',
            data: vm.infoMess
        }) //end POST
        vm.clearInput();
    } //end submit func 

    //--------------------//
    //an alert upon Submit
    // vm.tyAlert = function () {

    // } //end tyAlert func

}); //myApp.controller end