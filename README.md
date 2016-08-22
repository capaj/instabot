# instabot
This is not an intagram bot. It's a tiny script(like under 20 lines) for installing missing npm dependencie which works well with nodemon, similar to [this webpack plugin](https://github.com/ericclemmons/npm-install-webpack-plugin) but for backend use.

## installation

```
npm i instabot
```

## usage

```javascript
// at the top of your main file
require('instabot')
// or
import 'instabot'
```

It is very lightweight and as fast as doing npm install yourself.

## Notice
When you're content with your app, it is probably a good idea to run [npm-check](https://github.com/dylang/npm-check) to make sure you're not having some unused npm dependencies, as it it is easy to leave some behind after rapid prototyping session.
