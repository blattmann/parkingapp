import style from './footerView.scss';

export default function ($scope) {
  console.log('footerCtrl.js');
  $scope.style = style;
  this.url = 'https://github.com/blattmann/parkingapp';
  this.author = 'Stefan Blattmann';
}
