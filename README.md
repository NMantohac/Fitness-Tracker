# Homework_17_Fitness_Tracker

## URL Links

  1) GitHub: https://github.com/NMantohac/Homework_17_Fitness_Tracker

  2) Heroku: https://fast-cove-36874.herokuapp.com/
  
  3) Overall Function (Heroku): https://drive.google.com/file/d/1oU-9UysmBTeaa5vKnbLVaBz4K-fitmCR/view

## Description

*  A fitness tracker that allows the user to create a new workout between a resistance (weights) or cardio exercise type through a 
   small form. For both exercise types, the user must fulfill each field before being able to mark that exercise as complete or adding
   that exercise to the database. The input fields that are required for the resistance exercise type are the exercise name, 
   weight (lbs), sets, reps, and duration (minutes). Whereas for the cardio exercise type, the required input fields are the name, 
   distance (miles), and duration (minutes). If the user selects the 'Complete' option, the browser will notify the user and redirects
   to the home page where the 'Last Workout' is updated to the most recent workout the user completed/added. Otherwise, if the user
   selects the 'Add Exercise' option, the browser will also notify, but the user must click on the Dashboard in the navbar, which will 
   take the user to a statistics page that contains charts/graphs based on inputs that the user typed in. From here, the user can also
   click the 'Fitness Tracker' in the navbar, which gives the Home page with the 'Last Workout' info given.  

* The fitness tracker is done through Javascript code in Visual Studio Code, and it follows the MVC paradigm for easier access and 
  work-flow for others that wants to see the code. There are many Javascript index.js files that are separated in different folders,
  and they overall contain variables (const/let), async & await functions, try/catch blocks, arrays/objects, require/module.exports, 
  destructuring variables and schemas. In addition, npm installation was used in order to install express for the server, mongoose to 
  create the MongoDB schemas and to provide a connection to it, and ESLint as a dev dependency to encourage good code syntax/standards.
  The application is fully deployed in Heroku with a connected MongoDB database due to mLab add-on.

## Technologies

    * Visual Studio Code
    * Node.js
    * Express (Server)
    * MongoDB (NoSQL Database) with Robo3T GUI
    * npm - mongoose
    * npm (Dev) - ESLint 
    * GitHub
    * Heroku with mLab MongoDB add-on

## Challenges

* Overall, this fitness tracker homework was a good introduction to setting up and using MongoDB with a Mongoose schema, as well as
  providing more practice to handle routes with Express. This wasn't really a challenging homework, but it required some documentation
  reading of Mongoose in order to apply and understand it. 

* The only difficult time I had was in relation with MongoDB/Mongoose implementation, which were practically the Workout Schema and the
  workoutController.js functions. I had to read documentation several times, and had to refer back to the class Mongoose boilerplate,
  so I could get a good idea of what I needed to do.
  
* I learned a lot about Mongoose after reading the documentation, but I still feel like I definitely need more practice, so I could
  be more comfortable with it. 

* I was able to solve each problem through persistent effort, time management, and online resources such as Stack Overflow and documentation!

## Screenshot(s)

* Fitness Tracker - Home Page (Empty Database):
![Fitness Tracker - Home Page (Empty Database):](https://puu.sh/FLKKX/bd777388ac.png)

* Fitness Tracker - Add Exercise (Resistance):
![Fitness Tracker - Add Exercise (Resistance):](https://puu.sh/FLKLD/36e5af8739.png)

* Fitness Tracker - Add Exercise (Cardio):
![Fitness Tracker - Add Exercise (Cardio):](https://puu.sh/FLKLT/ceba01012b.png)

* Fitness Tracker - Stats:
![Fitness Tracker - Stats:](https://puu.sh/FLKPX/14528de772.png)

* Fitness Tracker - Home Page (Updated):
![Fitness Tracker - Home Page (Updated):](https://puu.sh/FLKMM/920047c484.png)
