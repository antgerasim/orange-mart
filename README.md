# OrangeMart

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

DON COMMENTS:
npx "path must be a string" ERROR - Fix https://github.com/zkat/npx/issues/144
-> Instead of only deleting "C:\Program Files\nodejs" from system variables ("path" variable), I also added it to user variables ("path" variable), but after "%AppData%\npm".

Instead of npx @angular/cli new lemon-mart --routing -> npx -p @angular/cli ng new orange-mart --routing

A child module implements an @NgModule similar to app.module. The biggest difference is that a child module does not implement the bootstrap property, which is required for your root module, to initialize your Angular app

$ npx ng g m manager -m app --routing
READ: generate module of name "manager"
option: -m means import the module into app.module 
option: --routing means a routing module has been created and imported into ManagerModule 
$ npx ng g c home -m app --inline-template --inline-style
READ: generate component of name "home"
option: -m means import the component into app.module
option: --inline-template means no single .html file generated
option: --inline-style means no singlr.css file generated
$ npx ng g c manager/managerHome -m manager -s -t
READ: generate component of name "manager" into manager/manager-home directory
option: -m means import the component into manager.module
option: -s shorthand for --inline-style
option: -t shorthand for --inline-template

$ npx ng g c manager/manager -m manager --flat -s -t
option: The --flat option skips directory creation and places the component directly under the manager folder, just like app.component residing directly under the app folder

ERROR --> results in error Uncaught (in promise): TypeError: undefined is not a function
Watch out not loading lazy-load modules into your app.module
https://github.com/angular/angular/issues/23412

Import FlexLayoutModule into app.module in order to have angular flex-layout working (icon gaps, container horizontaly allign, etc)
