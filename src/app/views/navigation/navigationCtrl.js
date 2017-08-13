import style from './navigationView.scss';

navi.$inject = ['$scope', '$location'];

export default function navi($scope, $location) {
// export default function ($scope, $location) {

  // Declare some vars.
  let self = this;

  // Apply custom view styles.
  $scope.style = style;

  // Open menu on click.
  $scope.openNav = function(event) {
    let navId = 'mySidenav';
    document.getElementById(navId).style.width = '50%';
  }

  // Close menu on click.
  $scope.closeNav = function(event) {
    let navId = event.path[1].id;
    document.getElementById(navId).style.width = '0';
  }

  // Highlight active menu item.
  $scope.getClass = function (path) {
    return ($location.path().substr(0, path.length) === path) ? 'sidenav__active' : '';
  }

  // Content
  self.link1 = 'Home';
  self.link2 = 'Parking';
  self.menu = 'Menu';
}
