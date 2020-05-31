# React App: Wallakeep

An advertisement store that lets logged users create and edit advertisement, using the API

    http://34.89.93.186:8080/apiv1/

(Para apuntes sobre el desarrollo de la práctica ver [apuntes](./apuntes.md))

## Download

Copy or clone this application using Git with:

    git clone https://github.com/josemanuelperez91/wallakeep-redux.git

## Install

Inside the root folder, use NPM to install the required and development dependecies:

    cd wallakeep redux
    npm install

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## User Guide

### Login

Basic login form that requires a previously created user in the /register page.

### Register

Also a basic form, once registed, redirect to the /login page in order to access the app.

### Home

The main page. It shows all the recorded advertisements and a filter that lets the user to search using different values.

### Update/ID

An editing form for changing a specific advertisement atributes.

### Create

An editing form to create any advertisement the user wants.

### Detail/ID

A view with all the recorded atributes of a selected advertisement.
