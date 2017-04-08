angular.module('solar-system').service('mainService', function ($http) {
   this.getData = () => {
       return $http({
           method: 'GET',
           url:'https://api.nasa.gov/planetary/earth/assets?lon=100.75&lat=1.5&begin=2014-02-01&api_key=aIxIxCAruzVHo55KVPouKI5ni0PzjClifbqWK5rq'
       })
   }
   this.earthData = {
       radius: '3959 miles'
   }
});
