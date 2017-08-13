import style from './homeView.scss';

home.$inject = ['$scope', '$http', 'CONFIG'];
export default function home($scope, $http, CONFIG) {
  // Declare some vars.
  let self = this;
  let source = CONFIG.dataUrl;

  // Apply custom view styles.
  $scope.style = style;

  // Hide details on init.
  $scope.showParking = false;

  // Toggle button class.
  $scope.className = "home__button--active";
  $scope.changeClass = function(){
    if ($scope.className === "home__button--active")
      $scope.className = "home__button--inactive";
    else
      $scope.className = "home__button--active";
  };

  // Get the data from the API.
  $http.get(source)
    .then(function(res) {
      // Return the data.
      self.name = res.data.vendor.name;
      self.departureAirport = res.data.vendor.departureAirport;
      self.map = res.data.vendor.map;
      self.features = res.data.vendor.features;
      self.featuresTitle = res.data.dictionary.featuresTitle;
      self.bookYourParking = res.data.dictionary.bookYourParking;
    })

  // Content
  self.show = 'Show details';
  self.hide = 'Hide details';
  self.logo = 'Logo';
}
