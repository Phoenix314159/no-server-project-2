angular.module('solar-system').component('sun', {

    templateUrl: './views/sun.html',

    controller: function ($interval, mainService) {
        let that = this;
        that.show = true;
        that.text = "";
        that.displayText = function () {
            that.show = true;
            that.index = 0;
            that.sunText = mainService.sunText;
            $interval(function () {
                that.text += that.sunText[that.index]
                that.index++;

            }, 100, that.sunText.length);

        };
    }
});

