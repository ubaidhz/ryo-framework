
# Intro to SASS Node-Modules and Bower

Course related material HTML / SCSS

A clean slate for a SASS setup. Demonstrating some variables, nesting and mixins.

## Dependencies

* Ruby
* Compass (includes SASS)
* SingularityGS
* Breakpoint
* Bower
* Node Package Manager
* Responsive-nav
* Gulp Ruby Sass
* Requirejs
* Gulp Uglify

## Instructions

1. See the compiling SASS through Compass [tutorial](http://minus.nz/articles/compiling-sass-through-compass), add two more Ruby gems:
  1. Install SingularityGS `gem install singularitygs`
  2. Install Breakpoint `gem install breakpoint`
4. Navigate to your project, `cd /your/project/directory`.
5. Run Compass, `compass watch`.
##Gulpfile.js
Changelog for gulp.task and creating functions for scripts, js lint, uglify (minifying js), and sass.

//Include gulp node module
var gulp = require ('gulp');

//Include our plugins: pull jshint plugin, ruby-sass, and gulp-uglify for the project
var jshint = require ('gulp-jshint');
var sass = require ('gulp-ruby-sass');
var uglify = require ('gulp-uglify');

#Default task
//Default task 
gulp.task('default', ['lint', 'scripts','watch', 'sass']);

## License

MIT
=======
# ryo-framework
Readme

Course material from 
http://minus.nz/articles/bower-guide
http://lib.minus.nz/html-css-snippets/responsive-navigation/
