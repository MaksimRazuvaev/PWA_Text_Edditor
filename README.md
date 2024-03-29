A text editor that runs in the browser. The app is a single-page application that meets the PWA criteria. The application functions offline.

# PWA_Text_Edditor

A text editor that runs in the browser. The app is a single-page application that meets the PWA criteria. The application functions offline.

## Description

AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
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
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application

## Usage

This app is intend to be used by Heroku link bellow.

## Link to deployed application

https://pwa-text-edditor.herokuapp.com/

## Technologies

Progressive web apps (PWAs)
Webpack 
AG Grid
Css-loader npm package
Babel JavaScript compiler 
HtmlWebpackPlugin
DevServer
Service Worker API
Cache
Concurrently npm package
IndexedDB API
IndexedDB npm package
manifest.json npm package
webpack-pwa-manifest npm package


## Credits

N/A

## License

MIT License according to the LICENSE file in the repo.

## Resources
- https://www.npmjs.com/package/@babel/core
- https://www.npmjs.com/package/webpack
- https://www.npmjs.com/package/concurrently
- https://www.npmjs.com/package/idb
- https://www.npmjs.com/package/http-server