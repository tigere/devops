# Bop

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



## Angular2 - [material2](https://material.angular.io/)
npm install --save @angular/material @angular/cdk
npm install --save @angular/animations
npm install --save hammerjs

add into styles.css 
@import "~@angular/material/prebuilt-themes/indigo-pink.css";

Material Design Icons(Optional)
add info index.html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

##Angular2 - [Semantic UI](https://ng-semantic.herokuapp.com/#/)
npm install ng-semantic --save
npm install jquery --save

Add semantic.min.css, semantic.min.js, jquery to the angular-cli.json as follows:
`
"apps": [{
  ... 
  "styles": [
      "styles.css",
      "../path/to/semantic.min.css" // 
  ],
  "scripts": [
      "../node_modules/jquery/dist/jquery.min.js",
      "../path/to/semantic.min.js"
  ],
  ...
}]
`
Semantic UI ( minified versions of css and js ) must be loaded in index.html
<link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css">

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.js"></script>

##Angular2 - [Bootstrap](https://getbootstrap.com/)
npm install bootstrap@4.0.0-beta

add into index.html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" >
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" ></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" ></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" ></script>


