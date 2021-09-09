###TIC TAC TOE GAME

This is a simple game of tic tac toe with online multiplayer support 

### FOR DEVELOPERS & COLLABORATORS:

clone the repository:
```
$ git clone https://github.com/ilechuks73/tic-tac-toe-frontend
```
in the root of the project directory, initialize a new node project with npm

```
$ npm init
```

copy and paste this

```
{
  "name": "tic-tac-toe-game-frontend",
  "version": "0.1.0",
  "private": false,
  "dependencies": {
    "@material-ui/core": "^4.11.4",
    "@material-ui/icons": "^4.11.2",
    "@testing-library/jest-dom": "^5.11.9",
    "@testing-library/react": "^11.2.5",
    "@testing-library/user-event": "^12.6.3",
    "axios": "^0.21.1",
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "react-scripts": "4.0.2",
    "socket.io-client": "^4.0.1",
    "web-vitals": "^1.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}

```
in your newly created ```package.json``` file 
to install dependencies run
```
$ npm install
```
to start the server run 
```
$ npm start"
```