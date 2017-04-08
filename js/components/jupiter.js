angular.module('solar-system').component('jupiter', {

    templateUrl: './views/jupiter.html',
    bindToController: {},

    controller : function($interval, mainService, $timeout) {
        let that = this;
        that.show = false;
        that.text = "";
        that.displayText = function () {
            that.show = true;
            that.index = 0;
            that.jupiterText = mainService.jupiterText;
            $interval(function () { //461
                $timeout(function () {
                    that.text += that.jupiterText[that.index]
                    that.index++;

                },570);

                console.log(that.index);

            }, 50, that.jupiterText.length);

        }
    }
})
