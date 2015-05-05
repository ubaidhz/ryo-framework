//Include gulp node module
var gulp = require ('gulp');

//Include our plugins: pull jshint plugin, ruby-sass, and gulp-uglify for the project
var jshint = require ('gulp-jshint');
var sass = require ('gulp-ruby-sass');
var uglify = require ('gulp-uglify');

//JS Lint Task
gulp.task ('lint', function(){
	return gulp.src('/js/*.js') //Defines JS lint task for all files within js folder with .js files
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});


//Minify and move js files
gulp.task ('scripts', function(){
	return gulp.src(['src/js/*.js', 
		'node_modules/requirejs/require.js', 
		'node_modules/responsive-nav/responsive-nav.js']) //Folder path where .js files are staying
	.pipe(uglify())
	.pipe(gulp.dest('assets/js')) //Changes the destination of minified javascript
});

//Compass Sass Gulp Task to work on sass behind the scenes
gulp.task('sass', function(){
	return gulp.src('src/sass/styles.scss') //watches styles.scss from src folder
	.pipe(sass({
		compass:true,
		style: 'compressed' //compresses/minifies the output css
	}))
	.on('error', function(err){console.log(err.message)}) //Logs error message in console if it hits error in scss
	.pipe(gulp.dest('assets/css'))
});

//Watch files for changes for .js files within source js folder. Uses gulp method watch
gulp.task('watch', function(){
	gulp.watch('src/js/*.js', ['lint', 'scripts']); //add .js files to an array lint and scripts
	gulp.watch('src/sass/*.scss', ['sass']); //watches scss files for any changes
});


//Default task 
gulp.task('default', ['lint', 'scripts', 'sass','watch']);
