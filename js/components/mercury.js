angular.module('solar-system').component('mercury', {

    templateUrl: './views/mercury.html',

    controller: function ($interval, mainService) {
        let that = this;
        that.show = false;
        that.text = "";
        that.data = mainService.earthData;
        that.displayText = function () {
            that.show = true;
            that.index = 0;
            that.mercuryText = mainService.mercuryText;
            $interval(function () {
                that.text += that.mercuryText[that.index]
                that.index++;

            }, 100, that.mercuryText.length);

        }
    }
});

