# Bill Manager App API

 I created this API with sample data and RESTful routes for use with an external front-end application. My goal is to combine the two for a fullstack application.

 You can access the deployed API [here]() . Please bear in mind that it may take a few moments to load the data because it is deployed to Heroku and may be hibernating.

--------------------------------------------
## User Stories

* I can create a bill (Create Bill).
* I can view a list of bills (Read Bills).
* I can edit a bill (Edit Bill).
* I can view a bill (Read Bill).
* I can delete a bill (Delete Bill).

--------------------------------------------

## Technologies Used for Bill Manager App API:

* Node.js
* Express.js
* Cors
* Mongoose and MongoDB
* Heroku


--------------------------------------------
## How to Install Bill Manager App API locally:

* Fork and clone this repository to your machine
* Change into the new directory
* Run npm install:

```
$ npm install

```
* Open another terminal tab, and run Mongod

```
$ mongod

```
* Open yet another terminal tab, and run nodemon
```
$ nodemon

```
* Seed the database:
```
$ http://localhost:3001/seed

```
* Lastly, open a browser window, and navigate to http://localhost:3001

You're all set to run Bill Manager App API on your machine. You will see bills on the main page. You can delete these, and create your own either in the JSON file or using any front end framework. Have fun with it... 

--------------------------------------------
## Challenges During this Project

My original goal for Bill Manager App API was to make this a fullstack application. Since I would like to teach myself other frontend applications, I decided to keep the frontend and backend separate, using the backend as an API for any frontend.

I decided to use Node, Express, and Mongoose because I was already familiar with them. I like the ease of use in creating RESTful routes with Express. I also like the ease of creating simple data models with Mongoose, and I want to explore creating more complex models.

I decided to build a frontend application with React, which you can view [here]().


--------------------------------------------
## Future Plans for Bill Manager App API:

A goal is to use this API for other separate front end applications, as it is now, but with full CRUD capabilities regardless of the front end application.

I want to make pop-ups to both add and edit bills.

I also want to add user authentication so anyone can log in and see their own bills. On top of that I would like to build out a way for people to send bills via email or SMS.
