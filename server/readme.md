# Complete Project [pictureHUB] - Idea from [Instagram]
## Register and Login the user.

## Feed/Home Page: All posts will be shown there which are created by any user.
## My Profile Page: Only posts created by user will be shown there.
## My Profile Page: User can edit and save his information i.e. profile image, username, location, bio...

## User can follow/Unfollow any user.
## user can like/dislike any post with count
## user can comment on any post


# Complete Node process
## Project Installation
    - npm init -y
    - change the package.json according to you
    - install the necessary packages "express, mongoose, dotenv, jsonwebtoken, cookie-parser, bcryptjs ..."
    - create server.js and app.js
    - create necessary folder and structure [config, controllers, middlewares, models, routes, services, utils]
    - create and run the express server
    - create and connect with the mongo DB with mongoose
    - server should be running and connected with DB successfully

## Create new API.
    - Create User Register API - username, email & password
    - Create user model and user controller
        - hashing the password, validation user exists
    - Create User Login API
        - check email/username and password are matching, generate token, save token to cookie
    - Created User Logout API
        - remove token from cookies
    - Get current user data 
    - Get all users data
    - 
    

## TO-DO    
    - get form data by using "useState" hook not with formData [this only we use with file upload]
    - Find 3 - 4 small react projects, 1 - 2 big angular project for interview.
    - add loader in signup and login buttons
    - set error in case of aPI failure
    - make every section in feed a different component - work on code splitting.
    - Edit profile 
        - open form
        - with all the user details in it
        - including profile image
        - add and save all user detail
    - users
        - add profile picture
        - add headline/bio
        - user post
        - suggested users api, remove current user and all the users which user already in connection with.
    - posts
        - post modal
            - image, caption, created date, likes, comments, created by user, time of post creation, 
        - get all posts
        - get all posts of current user
