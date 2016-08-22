# instabot
This is not an intagram bot. It's a tiny script(like under 20 lines) for installing missing npm dependencie which works well with [nodemon](https://github.com/remy/nodemon), similar to [this webpack plugin](https://github.com/ericclemmons/npm-install-webpack-plugin) but for backend use.

![Showcase](http://i.imgur.com/BUSM26G.gif "Showcase")

## installation

```
npm i instabot
```

## usage
It is advised to use together with [nodemon](https://github.com/remy/nodemon)
```javascript
// at the top of your main file
require('instabot')
// or
import 'instabot'
```

It is very lightweight and as fast as doing npm install yourself-it utili

## Notice
It is probably a good idea to run [npm-check](https://github.com/dylang/npm-check) to make sure you're not having some unused npm dependencies once in a while, as it it is easy to leave some unused dependencies behind after rapid prototyping session.
