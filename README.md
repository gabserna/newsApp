# NewsApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.3.

## Requirements

```
Application Set-Up: 
    - Create Database for User Information Storage
    - Creation of User Model That Must Inclued
        > Username or Email
        > Password
        > Unique User ID or UUID
        > Users First and Last Name
        > An Array to Store Liked Article URLs
    - Connect Api to Pull News Article information
    - Create Four Pages 
        > Login Page
            ^ Most Likely Will Need to Include a Registration Page
        > Top-Headlines Page
        > Everything Page (Search Page)
        > Liked Page

DataBase: 
    - Creation of Database and Collections
    - Connecting Database to Application
    - Allowing for CRUD events
        > Creation of New Users
        > Reading of Existing Users
        > Updating of Existing Users
        > Deletion of Existing Users 

Api:
    - Connecting Api to Application 
    - Pulling of Api Data for Page Population 

Pages:
        Login:
            - Must Use FireBase Google Auth
            - Page Needs Input Fields for Login Credentials
            - Include Link to Registration Page for New Users

        Registration: 
            - Needs Input Fields for User Account Creation Information 
            - Should Have Logic to Check if User Already Exists
            - After Submition Should Create a New User and Save to Database Collection
            - Should Route User back to Login Page once Completed
        
        Top-HeadLines: 
            - Should Populate Page with News Articles from Api's 'top-headlines' endpoint
            - Must Allow User to Filter Articles Based on Available Catagories 
            - Must Allow User to Like/Follow Article
                ^ Will Append Article URL to Users "Liked Articles Object"

        Search:
            - Should Populate Page With News Articles from Api's 'everything' endpoint
                ^ Along With the 'q' Parameter
            - Should Preform an Initail Generic Search on Page Load to Prevent a Blank Page
            - Must Allow Users to Search for Articles Relating to Search Words
                ^ Optionally Can Refine Searches Using Catagories
            - Will Repopulate Page Content With Response Data.
            - Must Allow User to Like/Follow Article
                ^ Will Append Article URL to Users "Liked Articles Object"
        
        Liked: 
            - Should Populate Page with News Articles User has Liked Using Previously Saved URLs
            - Must Be Broken into Two Sections
                > A Section to Populate with Top Liked News Articles From Across Users
                > A Section to Populate with Liked news Articles from Current Logged in User
            - Minimum Content Loaded Should be The URL and Thumbnails of Articles
```


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.







# me
```
Top-Headlines (Titulares principales):
- Debe llenar la página con artículos de noticias del endpoint 'top-headlines' de la API.
- Debe permitir al usuario filtrar artículos según las categorías disponibles.
- Debe permitir al usuario dar "Me gusta" o seguir un artículo.
^ Agregará la URL del artículo al "Objeto de artículos favoritos del usuario".
```
