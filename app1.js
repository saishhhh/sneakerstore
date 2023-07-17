angular.module('contactFormApp', [])
    .controller('ContactFormController', function() {
        var vm = this;
        vm.formData = {};

        vm.submitForm = function(isValid) {
            if (isValid) {
                console.log(vm.formData);
            }
        };
    });
