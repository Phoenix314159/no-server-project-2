angular.module('solar-system').component('sun', {



    controller : function(mainService) {
           let that = this;
           that.show = true;
           mainService.getData().then(function (response) {
               console.log(response);
           })
    }
})
