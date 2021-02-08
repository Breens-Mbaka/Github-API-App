# Project Name

> Github API App

# Project Description
This is an app that a user can search a github username and they will see a profile of the github user and  the user's repositories.Also the user can search for github repositories.This was done by making a request to the `https://api.github/users/{username}?api key=""` user endpoint to get the username profile details and repositories.To get a list of repositories under a certain keyword I used `https://api.github/search/repositories?q=${repository name}` search endpoint to query fro repositories under a certain keyword.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
To open server directly use `ng serve --open`

## Deployment

Web app deployed [here](https://breens-mbaka.github.io/Github-API-App/)

## Endpoints used 
```
https://api.github/users/{username}?api key=""
https://api.github/search/repositories?q=${repository name}

```
Refer to other endpoints [here](https://docs.github.com/en/rest/overview/endpoints-available-for-github-apps) 

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Copyright and License
[MIT](LICENSE.txt)