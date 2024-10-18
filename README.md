# Diet Saint

## What is Diet Saint?

Diet saint is a web application that allows users to calculate the amount of various nutrients contained in different amounts of different foods.

Users can also add different foods to a list to get the total nutrients of a certain type for all the foods in the list.

The application uses data from the json file created by the [json-filter console application](https://github.com/chris-wamae/json-filter). The original source of the food data is the [USDA website](https://fdc.nal.usda.gov/download-datasets.html) 

## App Technologies and Frameworks

The application was developed using NextJS for the front end and .NET(ASP .NET Web API) for the backend, connected to a database through MSSMS.

## Testing the application on your computer

### Requirements 

  - Node.js version 18.17.0 or greater
  - .NET version 8.0.302 or greater
  -  MSSMS version 19.1 or gretaer
  -  Visual Studio

### Getting the application 

Change to the wamae-dev branch and the clone this repository into your local machine or download the project as a ZIP file and extract it on your computer
    
### Setting up and running the application

  #### MSSQL
Open MSSQL and click on connect to server. On the menu on the left, click on databases. It should show a list of the databases you have on your machine. Right click on databases and select create new database,add the database name and click ok. This is the database the application will be using to save all its data.

  #### Back end

Open the project in Visual Studio. Click on search on the menu on at the top, select feature search and look up SQL Server Object Explorer and click on the first result. 

The SQL Server Object Explorer window should now be visible on the right. Click on SQL Server, a dropdown should appear. Click on the option with the name of your computer. Another menu should appear, click on databases and find the database that you  created in MSSQL.
Click on it and wait for it to finish loading. Right click on it and go to propeties. Find the Connection String field and copy its contents (starts with Data Source...)
Close the SQL Server Object Exploer window and open the Solution Explorer. Find the appSettings.json file in the main directory. 

Replace the <enter database connection string here"> text under Default Connection with the connection string you copied and save the changes.  

This step allows the web API to connect to the database.

One additional step is required before the back-end is ready to run on your computer. This step is for setting up the database for use by the application through a migration which will create all the required tables.Using the search bar on the menu at the top, search for Package Manager Console and click on the first result, it should open a terminal at the bottom of the app. 

Type in this command and click enter:

**Add-Migration Inital_Migration** 

Wait for it to finish running, there should be a new directory in the main directory of the application called Migrations if it was successful. Next, enter this command and click enter: 

**Update-Database**

Wait for it to finish running, after this you can close Visual Studio,you are done with the backend changes.


#### Running the applicaition


  ##### Front end
  
The first step is to check that the version of node running on your machine is atleast the required 18.17.0. You can check by running this command: 

**node --version**

If the version is not the required one and you have already required the required one using nvm  you can change to the required one using this command:

**nvm use 18.17.0**

Next, navigate into diet-saint-front-end directory(dietsaint/frontend/diet-saint-front-end) and run the following command to get the Next.js application running:

**npm run dev**

Wait for the application to start up and visit the url it shows as local(typically http://localhost:3001) to start using it.

  ##### Back end

Startup a new terminal window and navigate into the project again. This time, navigate into dietsaint/back-end/DietSiant/ and run this command:

**dotnet run**







