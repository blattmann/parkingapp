// Import Angular stuff.
import angular from 'angular';
import uiRouter from 'angular-ui-router';

// Import Twitter Bootstrap.
import 'bootstrap/dist/css/bootstrap.css';

// Import global styles
import style from '../style/main.scss';

// Import the global routing.
import routing from './routes';

// Import views.
import home from './views/home';
import footer from './views/footer';

// Define the module name.
const MODULE_NAME = 'app';

// Init the app.
angular
  .module(MODULE_NAME, [
    uiRouter,
    home,
    footer
  ])
  .config(routing)
  .constant('CONFIG', {
    // API URL
    dataUrl: 'http://localhost:3000/db'
  })

export default MODULE_NAME;
