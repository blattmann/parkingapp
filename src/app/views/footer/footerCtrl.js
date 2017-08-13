import style from './footerView.scss';

export default function ($scope) {
  // Declare some vars.
  let self = this;

  // Apply custom view styles.
  $scope.style = style;

  // Content
  self.url = 'https://github.com/blattmann/parkingapp';
  self.created = 'Created by ';
  self.author = 'Stefan Blattmann';
}
