# grassHeap

A lot of task/to-do apps work on a timeframe of minutes. On the other hand, gardening works in the timeframe of months. grassHeap keeps track of your tasks for the month and for the specific plants in your garden.
  
# Features
- Displays a random gif based on results of weather API
- Populates default tasks from database by relevant month and for your garden's plants. These tasks cannot be deleted.
- Pulls a list of plants from the GrowStuff API (https://github.com/Growstuff/growstuff/wiki/API-Version-0)
- Pulls details from same API for each plant
- Allows you to save custom tasks to database and delete them.

  ( To see the full app, import some default tasks into your mongoDB grassHeap database, tasks collection using https://docs.google.com/spreadsheets/d/1XVkuqPTibBkkK4_KE3KlAV9ufz_iZ7O8Ly-iar14ybE/edit?usp=sharing )

# Running the App

- You will need a running instance of mongoDB
- Add a .env file according to .env-example format (you will need a free API key from https://openweathermap.org/api) and from GIPHY (https://developers.giphy.com/docs/api#quick-start-guide)
- Run <npm i> in the server and client folders 
- Run <npm start> in the client/src
- Run <nodemon> or <node index.js> in the server

# Deployment
- For deployment purposes, there are two additional git repos within this one (one in server and one in client) each with their own remotes.
