myApp.controller('SubmitController', function (SubmitService, $http){
    console.log('SubmitController created');
    var vm = this;
    vm.submitService = SubmitService;

    vm.clearInput = function (){
        vm.nameIn = '';
        vm.addressIn = '';
        vm.emailIn = '';
        vm.messageIn = '';
        vm.humanIn = '';
    }; //end clearInput func

    vm.submit = function() {
        vm.infoMess = {
            name: vm.nameIn,
            address: vm.addressIn,
            email: vm.emailIn,
            message: vm.emailIn,
            human: vm.humanIn
        }; //end submit func
        console.log('infoMess ----->', vm.infoMess );
        $http({
            method: 'POST',
            url: '/submit-route',
            data: vm.infoMess
        }) //end POST
        vm.clearInput();
    }  //end submit func 
    vm.tyAlert = function () {

    } //end tyAlert func
}); //myApp.controller end
