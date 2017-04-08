angular.module('solar-system').component('venus', {



    controller : function(mainService){
        let that = this;
        that.show = false;
          mainService.getData().then(response => {
              console.log(response.data);
          })
    }
})
