angular.module('solar-system').component('mercury2', {
    template: `<div>{{$ctrl.text}}</div>`,
    controller: function ($interval, $timeout, mainService) {
        let that = this;
        that.text = "";
        that.displayText2 = function () {
            that.show = true;
            that.index = 0;
            that.mercuryText2 = mainService.mercuryText2;
            $interval(function () {
                $timeout(function () {
                    that.text += that.mercuryText2[that.index]
                    that.index++;
                },700);


            }, 22, that.mercuryText2.length);
        }
        $timeout(function () {
            that.displayText2();
        },1500)

    }
})
