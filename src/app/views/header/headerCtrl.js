import style from './headerView.scss';

export default function ($scope) {
  // Apply custom view styles.
  $scope.style = style;

  // Content
  this.headline = 'My Parking App';
}
