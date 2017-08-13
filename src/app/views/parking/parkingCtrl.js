import style from './parkingView.scss';

parking.$inject = ['$scope', '$http', '$timeout', 'CONFIG'];
export default function parking($scope, $http, $timeout, CONFIG) {
  // Declare some vars.
  let self = this;
  let source = CONFIG.dataUrl;

  // Apply custom view styles.
  $scope.style = style;

  // Hide alert on init.
  $scope.toggleAlert = false;

  // Show alert on click.
  $scope.showAlert = function(id) {
    console.log('id: ', id);
    $scope.id = id;
    $scope.toggleAlert = true;

    // Hide alert after 2 seconds
    $timeout(function() {
      $scope.toggleAlert = false;
    }, 2000);
  }

  // Hide alert on click.
  $scope.hideAlert = function() {
    $scope.toggleAlert = false;
  }

  // Get the data from the API.
  $http.get(source)
    .then(function(res) {
      // Return the data.
      self.parkings = res.data.parkings;
    })

  // Content
  self.indoorparking = 'Indoor parking available.';
  self.noindoorparking = 'No indoor parking available.';
  self.insurance = 'Insurance available.';
  self.noinsurance = 'No insurance available.';
  self.alertCongrats = 'Congrats!';
  self.alertSentence1 = 'Parking slot';
  self.alertSentence2 = 'was added to your cart.';
}
