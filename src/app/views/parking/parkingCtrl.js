import style from './parkingView.scss';

parking.$inject = ['$scope', '$http', '$timeout', 'CONFIG'];
export default function parking($scope, $http, $timeout, CONFIG) {
  // Declare some vars.
  let self = this;
  let source = CONFIG.dataUrl;
  let counter = -1;

  // Apply custom view styles.
  $scope.style = style;

  // Hide alert on init.
  $scope.toggleAlert = false;

  // Declare empty info
  $scope.noitems = '';

  // Create shopping cart array.
  $scope.cart = [];

  // Show alert on click.
  $scope.showAlert = function(id, price) {
    $scope.id = id;
    $scope.toggleAlert = true;

    // Add selected items to shopping cart.
    $scope.cart.push({
      id: id,
      price: price
    });

    // Display shopping cart content.
    console.log('My shopping cart: ', $scope.cart);

    // Hide selected element in DOM.
    document.getElementById(id).style.display = 'none';

    // Decrease the items counter.
    if(counter === -1) {
      counter = $scope.home.parkings.length;
    }
    counter = counter - 1;

    if(counter === 0) {
      $scope.noitems = 'No more parking slots available!';
    }

    // Hide alert after 2 seconds
    $timeout(function() {
      $scope.toggleAlert = false;
    }, 2000);
  }

  // Hide alert on click.
  $scope.hideAlert = function() {
    $scope.toggleAlert = false;
  }

  // Hide cart details on init.
  $scope.showCart = false;

  // Empty the cart
  $scope.emptyCart = function() {
    let listItem = document.getElementsByClassName('parking__item');
    for(let i = 0; i < listItem.length; i++) {
        listItem[i].style.display = 'initial';
    }

    $scope.cart = [];
    $scope.noitems = '';
    counter = -1;
  }

  // Get the data from the API.
  $http.get(source)
    .then(function(res) {
      // Return the data.
      self.parkings = res.data.parkings;
      self.indoorparking = res.data.dictionary.indoorSpace;
      self.noindoorparking = res.data.dictionary.outdoorSpace;
      self.insurance = res.data.dictionary.insuranceIncluded;
      self.noinsurance = res.data.dictionary.insuranceExcluded;
    })

  // Content
  $scope.alertCongrats = 'Congrats!';
  $scope.alertSentence1 = 'Parking slot';
  $scope.alertSentence2 = 'was added to your cart.';
  $scope.itemsInCart = 'item(s) in your cart.';
  $scope.showMyCart = 'Show cart';
  $scope.hideMyCart = 'Hide cart';
  $scope.parkingSlot = 'Parking-Slot';
  $scope.price = 'Price';
  $scope.emptyMyCart = 'Empty cart';
}
