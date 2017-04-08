angular.module('solar-system').component('earth', {
    templateUrl: './views/earth.html',
    bindToController: {},
    controller: function (mainService, $interval) {
        let that = this;
        that.show = false;
        that.dude = 'yo man';
        that.text = "";
        that.data = mainService.earthData;
        that.displayText = function () {
            that.show = true;
            that.i = 0;
            that.words = 'The radius of the earth is 3959 miles Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.';
            $interval(function () {
                that.text += that.words[that.i]
                that.i++;

            }, 100, that.words.length);

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
