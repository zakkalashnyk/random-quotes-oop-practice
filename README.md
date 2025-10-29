# Random Quote OOP App with API

Welcome to Random Quotes app!
This project consist of a client-side Vanilla JavaScript app and a server-side Express Node.js app

## Runing the App in Development Mode

### Run server

1. Navigate to the root directory of the project
1. Open new terminal window
1. Change directory to server subfolder:
   `cd server`
1. Install server dependencies by running he following command:
   `npm install`
1. Run development mode with hot-reload feature:
   `npm run dev`
1. Client will be running on http://localhost:8080

### Run client

1. Open new terminal window in the root of the project
1. Run client in development mode with hot-reload:
   `npx live-server client`
1. Server will be running on http://localhost:3000

## Runing the App in Production Mode

### Run server

1. Navigate to the root directory of the project
1. Open new terminal window
1. Change directory to server subfolder:
   `cd server`
1. Install server dependencies by running he following command:
   `npm install`
1. Run server in production mode:
   `npm start`
1. Configure hosting server where you run application to forward all requests to the
   http://localhost:3000
1. Get assigned by the hosting provider URL for your backend API server. For example:
   https://my-random-quote-api.com

### Run client

1. There is no need to build client as it already contain HTML, CSS and JS files
1. In the `client/src/config.js` replace http://localhost:3000 with URL assigned to the server API in step 7 of previous section. For example https://my-random-quote-api.com
1. Host all client files from the `client` subfolder on the public web server
   `npx live-server client`
1. Get assigned by the hosting provider URL for your client frontend application.
   For example https://my-app-frontend.com
1. Open https://my-app-frontend.com in web browser
