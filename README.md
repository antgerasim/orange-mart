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

## DON COMMENTS:
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

ERROR - Augury router tree indicates both components/paths eager and lazy-loaded components
Fix: Ensure modules that arent denoted as lazy are not mistakenly being imported in app.module or some other component. 

DESIGN:
1. Create Icon --> https://www.flaticon.com/
2. Generate favicon.ico --> https://realfavicongenerator.net/
3. https://material.io/collections/color/#

ROUTER FIRST IMPLEMENTATION:
1. Define user roles early on
2. Design with lazy loading in mind
3. Implement a walking-skeleton navigation experience
4. Design around major data components
5. Enforce a decoupled component architecture
6. Differentiate between user controls and component
7. Maximize code reuse

API DESIGN HIGH LEVEL GOALS
1. Minimize data transmitted between client and server
2. Stick to well-established design patterns (that is, pagination)
3. Design to reduce business logic present in the client
4. Flatten data structures
5. Do not expose database keys or relationships
6. Version endpoints from the get go
7. Design around major data components

ENTITY DESIGN -> draw.io
1. Ask question "what kind of entities you would like to store"
1.1. Example: - As the site contains a user profile section, a user should be stored (userRole valueObject?)
              - As the site contains a point-of-sale (pos) section that emits receipts, a receipt should be stored
              - As the site contains a inventory (purchase order??) section, an inventory (DDD - lineItem) should be stored
              - As the site contains a inventory.products section, a product entity should be stored
              - As the products are structured by categories, a category entity (value object?) should be stored

API DESIGN -> swagger
Swagger will allow you to design your web API. For teams, it can act as an interface between frontend and backend teams. API mocking allows development of features before implementation. VS Code Extension "Swagger Viewer".

## Authentication and workflow
A well-designed authentication workflow is stateless so that there's no concept of an expiring session. User's are free to interact with your stateless REST APIs from as many devices and tabs as they wish, simultaneously or overtime. JSON Web Token (JWT) implements distributed claims-based authentication that can be digitally signed or integration protected and/or encrypted using a Message Authentication Code (MAC). This means once a user's identity is authenticated through, let's say a password-challenge, they receive an encoded claim ticket or a token, which can then be used to make future requests to the system without having to reauthenticate the identity of a user. The server can independently verify the validity of this claim and process the requests without requiring any prior knowledge of having interacted with this user. Thus, we don't have to store session information regarding a user, making our solution stateless and easy to scale. Each token will expire after a predefined period and due to their distributed nature, they can't be remotely or individually revoked; however, we can bolster real-time security by interjecting custom account and user role status checks to ensure that the authenticated user is authorized to access server-side resources.

## Add auth service
1. Add an authentication and authorization service:
$ npx ng g s auth -m app --flat false

## Implement a basic authentication service
1. Start by installing a JWT decoding library, and for faking authentication, a JWT encoding library:
$ npm install jwt-decode fake-jwt-sign
$ npm install -D @types/jwt-decode

