# React with Webpack Practice

## Targets

1. React app.
2. Babel to parse ES6+ to ES5.
3. Bundle all JavaScript files in one output .js file.
4. Use EsLint to create front-end coding rules for all co-work developers.

## Requires

1. node.js (npm) in your computer.
2. webpack gobal command 

```
$ npm install webpack -g
```

## Run this app

1. Download this repository zip file and extract as a folder.
2. Use command(windows) / terminal(OSX or Linux) Shell to cd this folder.
3. Command "npm install" to install all plungin.
4. Command "webpack" to bundle all JavaScript files.
5. Run index.html.

## Description

* package.json is a description file of your project, and it can let npm know what plungins it should to install.
* .babelrc is setting what Babel will be use to.
* webpack.config.js is a file to setting Webpack entry, output file and loader module(ex: Babel to parse ES6+ ... etc).
* **import** and **export** in all .js files is let Webpack to build dependency in your bundle.js.
* .eslintrc is a file to rule coding style in ide plungin(ex: ESLint of Sublime Text 3)

