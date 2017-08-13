// Import Angular stuff.
import angular from 'angular';
import uiRouter from 'angular-ui-router';

// Import Twitter Bootstrap.
import 'bootstrap/dist/css/bootstrap.css';

// Bootstrap UI
import '../assets/ui-bootstrap/ui-bootstrap-custom-2.5.0-csp.css';
import '../assets/ui-bootstrap/ui-bootstrap-custom-tpls-2.5.0.min.js';

// Import global styles
import style from '../style/main.scss';

// Import the global routing.
import routing from './routes';

// Import views.
import navigation from './views/navigation';
import header from './views/header';
import home from './views/home';
import parking from './views/parking';
import footer from './views/footer';

// Define the module name.
const MODULE_NAME = 'app';

// Init the app.
angular
  .module(MODULE_NAME, [
    uiRouter,
    'ui.bootstrap',
    navigation,
    header,
    home,
    parking,
    footer
  ])
  .config(routing)
  .constant('CONFIG', {
    // API URL
    dataUrl: 'http://localhost:3000/db'
  })

export default MODULE_NAME;
