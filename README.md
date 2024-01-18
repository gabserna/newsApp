# NewsApp

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

```
clone repo
npm install --legacy-peer-deps
npm run buildprod
```


# solution!
NOT SUPPORTED: keyword "id", use "$id" for schema ID

```
npm cache clean --force
use: npx npkill to delete /node_modules
ng add @angular/material@16.2.13
npm i --legacy-peer-deps @angular-eslint/schematics@next
npm i -g @angular-devkit/core
npm i -g @angular/cli
npm install angular-cli-ghpages
npm run buildprod
```