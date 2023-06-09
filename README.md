<h1 align="center">ToDo app</h1>

![Home page](client/src/images/todo-app.png)

# Project description

This is a school project for a course on data interaction. In this course, I built a simple ToDo app using the MERN stack.

__MERN__ is a full-stack web development framework composed of four technologies: MongoDB, Express.js, React, and Node.js.

- `MongoDB` is a document-oriented, NoSQL database used to store your app data.
- `Express.js` is a framework layered on top of Node.js used to build the backend of a site using Node.js functions and structures. Since Node.js was not developed to make websites but rather to run JavaScript on a machine, Express.js was developed.
- `React` is a library created by Facebook that is used to build UI components which create the user interface of a single page web application.
- `Node.js` is a JavaScript runtime environment that provides you with the ability to run JavaScript on a machine rather than in a browser.

In my project, you can see how to pass data, create states, and connect the front-end to the back-end by fetching the data from the back-end.

# How to run project

## Clone or download
`$ git clone https://github.com/KarinSV/todo-app-data-interaction.git`<br>
`$ npm install`

## Client-side usage(PORT: 3000)

`$ cd client  // go to client directory`<br>
`$ npm install   // npm install packages`<br>
`$ npm install axios  // npm install axios`<br>
`$ npm start`<br>

## Server-side usage(PORT: 3001)

`$ cd server   // go to server directory`<br>
`$ npm install // npm install packages`<br>
`$ npm install mongoose express cors dotenv nodemon // install dependencies`<br>
`$ npm start` <br>

## Connect to database

I used MongoDB to connect to database. Create an .env file inside server directory. 

`PORT = 3001`<br>
`DB_CONNECT = mongodb+srv://{user name}:{password}@......`

# Dependencies(tech-stacks)

| Client-side | Server-side |
|-------------|-------------|
| axios: ^1.4.0" | cors: ^2.8.5" |
|react: ^18.2.0" | dotenv: ^16.0.3 |
|react-dom: ^18.2.0| express: ^4.18.2 |
|react-scripts: 5.0.1| mongoose: ^7.1.0 |
|                    | nodemon: ^2.0.22 |

![GitHub language count](https://img.shields.io/github/languages/count/KarinSV/todo-app-data-interaction)
![GitHub top language](https://img.shields.io/github/languages/top/KarinSV/todo-app-data-interaction?color=yellow)
