angular.module('solar-system').component('mercury', {

    templateUrl: './views/mercury.html',

    controller: function ($interval, mainService, $timeout) {
        let that = this;
        that.show = false;
        that.text = "";
        that.displayText = function () {
            that.show = true;
            that.index = 0;
            that.mercuryText = mainService.mercuryText;
            $interval(function () { //542
                $timeout(function () {
                    that.text += that.mercuryText[that.index]
                    that.index++;
                }, 480);


            }, 35, that.mercuryText.length);

        }
        that.displayTextReverse = function () {
            that.show = true;
            that.neptuneText = mainService.neptuneText;
            that.index = that.mercuryText.length - 1;
            $interval(function () {
                $timeout(function () {
                    that.text += that.neptuneText[that.index]
                    that.index--;
                }, 500);


            }, 5, 483);
        }

    }
});

