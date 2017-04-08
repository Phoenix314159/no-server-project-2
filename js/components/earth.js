angular.module('solar-system').component('earth', {
    templateUrl: './views/earth.html',
    bindToController: {},
    controller: function (mainService, $interval, $timeout) {
        let that = this;
        that.show = false;
        that.text = "";
        that.displayText = function () {
            that.show = true;
            that.index = 0;
            that.earthText = mainService.earthText;
            $interval(function () { //464
                $timeout(function () {
                    that.text += that.earthText[that.index]
                    that.index++;
                },1000)

                console.log(that.index);
            }, 25, that.earthText.length);

            //        $timeout(function () {
            //           that.text = 'r';
            //            $timeout(function () {
            //                that.text += 'a';
            //                $timeout(function () {
            //                    that.text += 'd';
            //                    $timeout(function () {
            //                        that.text += 'i';
            //                        $timeout(function () {
            //                            that.text += 's'
            //                            $timeout(function () {
            //                                that.text += ' ';
            //                                $timeout(function () {
            //                                    that.text += 'o';
            //                                    $timeout(function () {
            //                                        that.text += 'f';
            //                                        $timeout(function () {
            //                                            that.text += ' '
            //                                        },200)
            //                                    },200)
            //                                },200)
            //                            },200)
            //
            //                        },200)
            //
            //                    },200)
            //                },400)
            //            },400)
            //        },300)
        }
    }
})
