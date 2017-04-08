angular.module('solar-system').component('venus', {

    templateUrl: './views/venus.html',

    controller : function($interval, mainService){
        let that = this;
        that.show = false;
        that.text = "";
        that.displayText = function () {
            that.show = true;
            that.index = 0;
            that.venusText = mainService.venusText;
            $interval(function () {
                that.text += that.venusText[that.index]
                that.index++;

            }, 100, that.venusText.length);

        };
    }
})
