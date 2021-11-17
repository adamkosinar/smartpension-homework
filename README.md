Hello,

thank you for taking the time reading this and more importantly digging into the code :)

#The solution

I took more conventional approach that is somewhat inspired by the MVC pattern. The App Controller is there just to instantiate the model and make sure the right view is rendered.
Most of the heavy lifting is done within the WebServerLog which represents the model for the logs to be parsed and rendered. It keeps a hash map where the key is the page url and the value is an
object with counter of visits and an array of unique IPs that visited that url. 

The parsed logs are then handled by a view to render output based on what parameters where supplied by the user of the program.

all the configuration kept in .env file or can be provided as a command line attribute. 

I am a fan of SOLID principles and Clean Code. The solution uses [tsyringe](https://github.com/microsoft/tsyringe) - a dependency injector framerwork built by microsoft. It is very useful for handling dependencies, decoupling etc.

#How to run the solution

everything is done via the npm run sequence. Feel free to checkout the package.json for more

make sure you have all dependencies installed by running `npm i`

To run all tests, jslint and test coverage run `npm run test`

to build and run the program use `npm run start` which starts the command line dialog. 
