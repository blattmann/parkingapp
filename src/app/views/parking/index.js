import angular from 'angular';
import uirouter from 'angular-ui-router';

import ParkingController from './parkingCtrl';

export default angular
  .module('app.parking', [uirouter])
  .controller('ParkingController', ParkingController)
  .name;
