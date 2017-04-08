angular.module('solar-system').component('uranus', {

    templateUrl: './views/uranus.html',

    controller : function($interval,  $timeout, mainService) {
        let that = this;
        that.show = false;
        that.text = "";
        that.displayText = function () {
            that.show = true;
            that.index = 0;
            that.uranusText = mainService.uranusText;
            $interval(function () { //460
                $timeout(function () {
                    that.text += that.uranusText[that.index]
                    that.index++;
                },470)

                console.log(that.index);
            }, 20, that.uranusText.length);

        }
    }
});
