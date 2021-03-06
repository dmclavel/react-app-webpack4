# react-app-webpack4
A React App Boilerplate using Webpack 4 and Babel 7

How to download the project:
  1. In the terminal, type 'git clone https://github.com/dmclavel/react-app-webpack4'; or
  2. Under releases, download the zipped folder of the project's latest release

Features Already Included:

  1. Dynamic Imports for Lazy Loading
  2. CSS Modules enabled to implement style scoping
  3. Configured Jest and Enzyme to perform testing in the application (DO NOT REMOVE 'setupTests.js' IN THE '/src' FOLDER)
  3. Serving images using url-loader
  4. Use of environment variables through process.env

How to use:
  1. In the terminal, type "npm install" or "yarn" to download the dependencies needed to load the application
  2. To start the application in development mode, type either "npm run dev" or "yarn dev".
  3. To try the testing environment, just type "npm test" or "yarn test".
  4. To test how the application will work in production, build it first using "npm run build" or "yarn build". This will            automatically trigger the "prebuild" script which will delete the current dist folder if there is one, to be replaced by        the new build folder. After building, type "npm start" or "yarn start" to serve the application in a localhost or network. 
  
Some Important Notes:
 
  If you will be deploying your application on Heroku and the deployment environment is just linked to the master branch of your github repository, all you need to do is build the application and add the dist folder and   push it to your branch. Since it is initially included in the .gitignore, you need to run "git add -f dist" to disregard the   ignore config. Also, since the "start" script is set at "serve -s dist", once you deploy it on Heroku, the application will     automatically run on the link which will be given to you by Heroku.

  Take note, however, that Heroku is a Platform as a Service (PaaS) so everything seems spoon fed to you. When deploying your     application to Infrastracture as a Service (IaaS) platforms like Digital Ocean, you will need to do much more work. Please     refer to this https://www.digitalocean.com/community/tags/deployment?type=tutorials if you want to learn more about deploying   on IaaS platform like Digital Ocean.
