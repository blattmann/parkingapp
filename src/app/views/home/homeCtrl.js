import style from './homeView.scss';

export default function ($scope, $http, CONFIG) {
  console.log('homeCtrl.js');
  let self = this;
  let source = CONFIG.dataUrl;

  $scope.style = style;
  $scope.showParking = false;

  $http.get(source)
    .then(function(res) {
      // return the enveloped data
      console.log('res: ', res);
      self.name = res.data.vendor.name;
      self.map = res.data.vendor.map;
    })
}
