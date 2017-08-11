# Parking App

A small parking app made with Angular 1 and Webpack.

Features:

- Heavily commented webpack configuration with reasonable defaults.
- ES6, and ES7 support with babel.
- Source maps included in all builds.
- Development server with live reload.
- Production builds with cache busting.
- Testing environment using karma to run tests and jasmine as the framework.
- Code coverage when tests are run.
- No gulp and no grunt, just npm scripts.

> Warning: Make sure you're using the latest version of Node.js and NPM

## Quick start

> Clone/Download the repo then edit `app.js` inside [`/src/app/app.js`](/src/app/app.js)

```bash
# clone our repo
$ git clone https://github.com/blattmann/parkingapp parkingapp

# change directory to your app
$ cd parkingapp

# install the dependencies with npm
$ npm install

# start the server
$ npm start
```

> JSON server

```bash
# install JSON server to provide fake json data for testing
$ npm install -g json-server

# open (new) shell window and cd to the data folder
$ cd parkingapp/src/data/

# run the server with your desired json file, e.g. "test.json"
$ json-server --watch parking.json

# hint for me:
# remember to run the fake server with this command:
$ json-server --watch /Library/WebServer/Documents/parkingapp/src/data/parking.json

# Resources
  http://localhost:3000/vendor
  http://localhost:3000/parkings
  http://localhost:3000/dictionary

# Home
  http://localhost:3000
```

go to <http://localhost:8080> in your browser.

# Table of Contents

- [Getting Started](#getting-started)

  - [Dependencies](#dependencies)
  - [Installing](#installing)
  - [Running the app](#running-the-app)
  - [Developing](#developing)
  - [Testing](#testing)

- [License](#license)

# Getting Started

## Dependencies

What you need to run this app:

- `node` and `npm` (Use [NVM](https://github.com/creationix/nvm))
- Ensure you're running Node (`v4.1.x`+) and NPM (`2.14.x`+)

## Installing

- `fork` this repo if you want to make your own changes
- `clone` your fork
- `npm install` to install all dependencies

## Running the app

After you have installed all dependencies you can now run the app with:

```bash
npm start
```

It will start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://localhost:8080`.

## Developing

### Build files

- single run: `npm run build`
- build files and watch: `npm run watch`

## Testing

### 1\. Unit Tests

- single run: `npm test`
- live mode (TDD style): `npm run test-watch`

# License

[MIT](/LICENSE)
