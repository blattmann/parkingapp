import globalstyle from '../../../style/global.scss';
import style from './headerView.scss';

header.$inject = ['$scope', '$http', 'CONFIG'];
export default function header($scope, $http, CONFIG) {
  // Declare some vars.
  let self = this;
  let source = CONFIG.dataUrl;

  // Apply custom global styles.
  $scope.style = globalstyle;

  // Apply custom view styles.
  $scope.style = style;

  // Get the data from the API.
  $http.get(source)
    .then(function(res) {
      // Return the data.
      self.headline = res.data.vendor.name;
    })
}
