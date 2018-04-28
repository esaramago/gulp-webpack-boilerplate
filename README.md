# Gulp-Webpack boilerplate

Boilerplate with Gulp, for SASS, and Webpack, for js bundling

## For beginners
Before using this boilerplate, you must have installed:
- Node js (https://nodejs.org/en)
- Gulp (https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)

Then, in the command line, navigate to the project's folder and run `npm install`. This is to install the dependencies in package.js.

Ask me if you have any difficulty.

## Build Scripts

### Development
Two Gulp tasks.
1. It watches and compiles .scss files;
2. It watches and bundles .js files, using webpack.config.js inside Gulp.
```
npm run build:dev
```

### Production
A Gulp task and Webpack
1. It compiles .scss files;
2. It bundles .js files
```
npm run build:prod
```

## Installed packages

### Webpack
Install packages to bundle javascript with Webpack

* webpack webpack-cli
* webpack-dev-server
* babel-core
* babel-loader
* babel-preset-env


### Gulp (sass)
Install packages to compile SASS with Gulp

* gulp
* gulp-sass-glob
* gulp-sass
* gulp-plumber
* gulp-sourcemaps
* gulp-watch
* webpack-stream



## Credits
* https://pawelgrzybek.com/using-webpack-with-gulpjs/
* https://deliciousbrains.com/npm-build-script/#chaining-scripts
