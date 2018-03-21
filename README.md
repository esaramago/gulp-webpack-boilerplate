# Gulp-Webpack boilerplate

## Credits
* https://pawelgrzybek.com/using-webpack-with-gulpjs/
* https://deliciousbrains.com/npm-build-script/#chaining-scripts

## Installed packages

### Webpack
Install packages to bundle javascript with Webpack
```
* webpack webpack-cli
* webpack-dev-server
* babel-core
* babel-loader
* babel-preset-env
```

### Gulp (sass)
Install packages to compile SASS with Gulp
```
* gulp
* gulp-sass-glob
* gulp-sass
* gulp-plumber
* gulp-sourcemaps
* gulp-watch
* webpack-stream
```

## Scripts

### Development
Two Gulp tasks.
1. It watches and compiles .scss files;
2. It watches and bundles .js files, using webpack.config.js inside Gulp.
```
*build:dev*
```

### Production
A Gulp task and Webpack
1. It compiles .scss files;
2. It bundles .js files
```
*build:prod*
```