# Getting started with create node project

```bash
npm  init -y
```
## learn more
You can learn more in the [document](https://docs.npmjs.com/cli/v9/commands/npm-init).

## express js
is a back end web application framework for building RESTful APIs with Node.js
## installation
```bash
npm  install express OR yarn add express 
```
## Usage
```bash
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
```
## Available Scripts
In the project directory, you can run:


```bash
npm start OR yarn start
```
Runs the app in the development mode.
 http://localhost:5000
## Code Splitting
This section has moved here 
 [https://github.com/xouayang/Tommee_tech_backend_i-can-job.git](https://github.com/xouayang/Tommee_tech_backend_i-can-job.git).
