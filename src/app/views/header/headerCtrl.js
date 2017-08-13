import globalstyle from '../../../style/global.scss';
import style from './headerView.scss';

header.$inject = ['$scope'];
export default function header($scope) {
  // Apply custom global styles.
  $scope.style = globalstyle;

  // Apply custom view styles.
  $scope.style = style;

  // Content
  this.headline = 'My Parking App';
}
