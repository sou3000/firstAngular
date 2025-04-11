# Angularbt

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.3.

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

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

@Component({
  template: `
    <input type="text" (keyup.enter)="updateField($event)" />
  `,
  ...
})
export class AppComponent{
  updateField(event: KeyboardEvent): void {
    console.log('The user pressed enter in the text field.');
  }
}

MIGRATION V14 TO V15:
Update to the new version
Review these changes and perform the actions to update your application.

1. Make sure that you are using a supported version of node.js before you upgrade your application. Angular v15 supports node.js versions: 14.20.x, 16.13.x and 18.10.x. Read further

2. Make sure that you are using a supported version of TypeScript before you upgrade your application. Angular v15 supports TypeScript version 4.8 or later. Read further

3. In the application's project directory, run NG UPDATE @ANGULAR/CORE@15 @ANGULAR/CLI@15 to update your application to Angular v15.

4. Update other dependencies to compatible versions

You can use the NG UPDATE command with the --ALL flag to update all the dependencies in your PACKAGE.JSON file to their latest compatible versions. However, this command might not always update the dependencies to the latest compatible versions, so you may need to manually update some packages.

To update dependencies one at a time, such as Angular Material, you can use the command ng update @angular/material@15.

