const {series, src, dest, parallel, watch: watcher} = require('gulp');
const clean = require('gulp-clean');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const ts = require('gulp-typescript');
const fs = require('fs');
const validator = require('gulp-html');
const replace = require('gulp-replace');
const run = require('gulp-run-command').default;
const mode = require('gulp-mode')();
const debug = require('gulp-debug');
const webpack = require('webpack-stream');

/**
 * The compilation wrapped around the tsconfig.json
 * @type {compile.Project}
 */
const tsProject = ts.createProject('tsconfig.json', {});

/**
 * Clean up the build folder if it exists by deleting it. Will return an immediately resolving promise if the folder
 * does not exist
 * @returns {Promise<void>}
 */
function cleanTask() {
    if (fs.existsSync('build')) {
        return src('build', {read: false})
            .pipe(clean());
    } else {
        return Promise.resolve();
    }
}

/**
 * Compiles all typescript files in the src/ts/ folder and outputs them into the build/js folder.
 * This inherits the properties from tsconfig.json
 * @returns {Promise<void>}
 */
function transpileTypescript() {
    return src(['./src/ts/*.ts', './src/ts/**/*.ts', './src/@types/*.d.ts', './src/@types/**/*.d.ts'])
        .pipe(debug({title: 'ts-compile:'}))
        .pipe(tsProject())
        .pipe(dest('./build/js'))
        .on('end', () => {
            src(['./build/js/*.js', './build/js/**/*.js'])
                .pipe(mode.production(webpack({mode: 'production'})))
                .pipe(mode.development(webpack({mode: 'development'})))
                .pipe(dest('./build'))
        });
}

/**
 * Compiles all scss files in the ./src/scss file and produces a compressed version with source maps to the ./build/css
 * folder.
 * @returns {Promise<void>}
 */
function transpileSCSS() {
    return src(['./src/scss/*.scss', './src/scss/**/*.scss'])
        .pipe(debug({title: 'scss-compile:'}))
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}, false).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(dest('./build/css'));
}

/**
 * When running in production mode this will copy all files from the ./public folder into the ./build folder which
 * should produce an entire hostable website
 * @returns {Promise<void>}
 */
function copyPublic() {
    return src('./public/**/*')
        .pipe(debug({title: 'prod-copy:'}))
        .pipe(mode.production(dest('./build/')));
}

/**
 * Builds the main index.html file - it will be run through a validator and any references to ./scss/*.scss files and
 * ./ts/*.ts files will be renamed into ./css/*.css and ./js/*.js which should make them map to the correct paths in the
 * build folder. The result will be written out to ./build
 * @returns {Promise<void>}
 */
function build() {
    return src('src/index.html')
        .pipe(debug({title: 'html-build:'}))
        .pipe(validator())
        .pipe(replace(/scss\/(.*)\.scss/i, 'css/$1.css'))
        .pipe(replace(/ts\/(.*)\.ts/i, 'js/$1.js'))
        .pipe(dest('build/'));
}

/**
 * Launches the watcher waiting for changes on any file in the source folder and then running the build instructions
 * on change
 */
exports.watch = function () {
    watcher(['src/*.*', 'src/**/*.*'], exports.build);
}

exports.clean = cleanTask;
exports.transpile = parallel(transpileTypescript, transpileSCSS);
exports.build = parallel(build, copyPublic, exports.transpile);
exports.default = series(cleanTask, exports.build);
exports.serve = parallel(exports.build, exports.watch, run('node_modules/.bin/live-server --no-browser --mount=/:build --mount=/:public --watch=build'))
