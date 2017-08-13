import style from './footerView.scss';

footer.$inject = ['$scope'];
export default function footer($scope) {
  // Apply custom view styles.
  $scope.style = style;

  // Content
  $scope.url = 'https://github.com/blattmann/parkingapp';
  $scope.created = 'Created by ';
  $scope.author = 'Stefan Blattmann';
}
