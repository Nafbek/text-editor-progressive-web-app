# Text Editor- Progressive Web Applications (PWA)

## Description

This is a single page text editor application that runs in the browser. It can also be installed as a Progressive Web Application to work without an internet connection. The application uses IndexedDB from `idb` package to create a local database storage.

## User Story

AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use

## Acceptance Criteria

GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets

## Installation

Click the install button or the installation icon in the browser to open the `install box` to install the application on the desktop as an icon.

## Usage

Once the application is opened in your browser, type a text in the text editor and it will be automatically saved in local storage using the indexedDB. If you close the text editor and reopen it later, your previous content will be retrieved from IndexedDB.

If you want to run the application locally by cloning this repository, ensure you have Node.js installed on your system. Run a command `npm install` to install the required dependencies, and build the application by running `npm run build` command. Afterword, invoke the application by running a command `npm run start`; this will start the server and automatically open the app in your default browser.

![A link] ()

## License

MIT License
