# Build a Random Quote Machine

freeCodeCamp project : [Build a Random Quote Machine](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-random-quote-machine)

Objective : Build an app that is functionally similar to this: [Random Quote Machine](https://random-quote-machine.freecodecamp.rocks/)

## My app on Vercel

You can check out my deployed app on Vercel:
[random-quote-machine-snowy-three.vercel.app](https://random-quote-machine-snowy-three.vercel.app/)

## freeCodeCamp Note

React 18 has known incompatibilities with the tests for this project ([see issue](https://github.com/freeCodeCamp/freeCodeCamp/issues/45922)) :

To ensure my project does not fail because of React 18, I have used the old render method as suggested:

```javascript
import ReactDOM from 'react-dom';
import App from './App';
ReactDOM.render(<App />, document.getElementById('root'));
```
