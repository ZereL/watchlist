#Instructions

## Download
Clone the repo using ``git clone https://github.com/ZereL/watchlist.git``

## Build
### Build API
App was built in dotnet core 6.0.0, check local env before run the app.
Go to Watchlist folder, open terminal.
``dotnet restore`` to install packages
``dotnet build`` to build 
``dotnet run`` to run the app

### Start Client
Go to watchlist-client folder
``npm install`` to install dependency packages
``npm run start`` to start client app

## Test

Make sure you have ``dotnet run`` runing in terminal, in watchlist folder for api
Make sure you have ``npm run start`` runing in terminal, in watchlist-client folder for frontend App
Go to http://localhost:3000/ to test the app