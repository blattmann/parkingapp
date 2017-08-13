import style from './headerView.scss';

header.$inject = ['$scope'];
export default function header($scope) {
  // Apply custom view styles.
  $scope.style = style;

  // Content
  this.headline = 'My Parking App';
}
