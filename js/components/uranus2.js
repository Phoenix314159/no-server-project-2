angular.module('solar-system').component('uranus2', {
    template: `<div ng-click="$ctrl.stop() ? $ctrl.stop() : $ctrl.start() " ng-if="$ctrl.text == undefined ? false : true">
{{$ctrl.text}}</div>`,
    controller: function ($interval, $timeout, mainService) {
        let that = this;
        that.text = "";
        that.displayText2 = function () {
            that.show = true;
            that.index = 0;
            that.showMe=true;
            that.uranusText2 = mainService.uranusText2;
            var textAnim = $interval(function () {
                $timeout(function () {
                    that.text += that.uranusText2[that.index]
                    that.index++;
                },700);


            }, 13, that.uranusText2.length);
            that.stop = function () {
                $interval.cancel(textAnim);
                that.showMe = false;
                that.text = that.text.split("").reverse().join("");

            }
        }
        that.start=function () {
            that.index = 0;
            $interval(function () {
                $timeout(function () {

                    that.text += that.text[that.index]
                    that.index--;
                }, 500);


            }, 100, that.uranusText2.length/1.5);
        }

        $timeout(function () {
            that.displayText2();
        },1550)

    }
})