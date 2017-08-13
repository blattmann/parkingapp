import style from './navigationView.scss';

navi.$inject = ['$scope', '$location'];

export default function navi($scope, $location) {

  // Declare some vars.
  let navId = '';

  // Apply custom view styles.
  $scope.style = style;

  // Open menu on click.
  $scope.openNav = function(event) {
    navId = 'mySidenav';
    document.getElementById(navId).style.width = '50%';
  }

  // Close menu on click.
  $scope.closeNav = function(event) {
    navId = event.path[1].id;
    document.getElementById(navId).style.width = '0';
  }

  // Highlight active menu item.
  $scope.getClass = function (path) {
    return ($location.path().substr(0, path.length) === path) ? 'sidenav__active' : '';
  }

  // Content
  $scope.link1 = 'Home';
  $scope.link2 = 'Parking';
  $scope.menu = 'Menu';
}
