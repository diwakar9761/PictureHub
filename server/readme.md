# Complete Project [instagram]
## Register and Login the users
## After user is logged in, he can create/edit/delete its post
## feed page: all posts will be shown there which are created by any user.
## my post: only user posts will be shown there
## user can like/dislike any post with count


# Complete Node process
## Project Installation
    - npm init -y
    - change the package.json according to you
    - install the necessary packages "express, mongoose, dotenv, jsonwebtoken, cookie-parser, bcryptjs ..."
    - create server.js and app.js
    - create necessary folder and structure [config, controllers, middlewares, models, routes, services, utils]
    - create and run the express server
    - create and connect with the mongo DB with mongoose
    - server should be running and connected with DB successfull

## Create new API.
    - Create User Register API - username, email & password
    - Create user model and user controller
        - hashing the password, validation user exists
    - Create User Login API
        - check email/username and password are matching, generate token, save token to cookie


## Completed Functionality
    - Get current user details - API in BE, contextAPI in react
    - create a isAuth middle ware to add condition for dashboard and login/signup
    - set values in cookies in browser -- done -- get token from cookies -- ???
    - create one context api for auth API url
    

## TO-DO    
    - get form data by using "useState" hook not with formData [this only we use with file upload]
    - Find 3 - 4 small react projects, 1 - 2 big angular project for interview.
    - add loader in signup and login buttons
    - set error in case of aPI failure
    - make every section in feed a different component - work on code splitting.
    - Edit profile 
        - open form
        - with all the user details in it
        - add and save all user detail
    - users
        - add profile picture
        - add headline/bio
        - location
        - user post
    - posts
        - post modal
            - image, caption, created date, likes, comments, created by user, 
        - get all posts
        - get all posts of current user
        - 
