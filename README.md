# Events Backend

An example implementation of an events management backend. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

```
Node.js
Yarn (optionally)
```

### Installing

1. Run yarn/npm from the root folder

```
cd PaybaseCT && yarn install
```

OR
```
cd PaybaseCT && npm install
```

2. Start the application
```
node index.js
```

## Running the tests

At the moment tests can't be run simultaneously, run them by going into a folder with a *.test.js file inside it

```
node code/**/*.test.js
```

## Built With

* [Koa.js](https://koajs.com/) - Web Framework for Node.js
* [MongoDb](https://www.mongodb.com/) - NoSQL database
* [Mongoose](https://mongoosejs.com/) - ODM for MongoDb

## Acknowledgments

* [Joe Harlow's](http://fourthof5.com/async-await-middleware-composition) - Async Await Middleware Composition
* [projekt-matara](https://github.com/projekt-matara/koa-demo) - koa-demo
* [Rhys Davies](https://medium.com/jtribe/node-js-in-2018-full-stack-tutorial-with-koa-react-redux-sagas-and-mongodb-14a7efaee4d4) - Node.js in 2018
