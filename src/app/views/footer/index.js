import angular from 'angular';
import uirouter from 'angular-ui-router';

import FooterController from './footerCtrl';

export default angular
  .module('app.footer', [uirouter])
  .controller('FooterController', FooterController)
  .name;
