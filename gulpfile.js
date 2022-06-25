const { series, src, dest, parallel, watch: watcher } = require('gulp');
const clean = require('gulp-clean');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const ts = require('gulp-typescript');
const fs = require('fs');
const validator = require('gulp-html');
const replace = require('gulp-replace');
const run = require('gulp-run-command').default;
const mode = require('gulp-mode')();

function cleanTask() {
    if (fs.existsSync('build')) {
        return src('build', { read: false })
            .pipe(clean());
    } else {
        return Promise.resolve();
    }
}

function transpileTypescript() {
    return src('./src/ts/*.ts')
        .pipe(ts({
            lib: ['DOM', 'ES2016', "ES2017.Intl"]
        }))
        .pipe(dest('./build/js'));
}

function transpileSCSS() {
    return src('./src/scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(dest('./build/css'));
}

function copyPublic(){
    return src('./public/**/*')
        .pipe(mode.production(dest('./build/')));
}

function build() {
    return src('src/index.html')
        .pipe(validator())
        .pipe(replace(/scss\/(.*)\.scss/i, 'css/$1.css'))
        .pipe(replace(/ts\/(.*)\.ts/i, 'js/$1.js'))
        .pipe(dest('build/'));
}


exports.watch = function(){
    watcher(['src/*.*', 'src/**/*.*'], exports.build);
}

exports.clean = cleanTask;
exports.transpile = parallel(transpileTypescript, transpileSCSS);
exports.build = parallel(build, copyPublic, exports.transpile);
exports.default = series(cleanTask, exports.build);
exports.serve = parallel(exports.build, exports.watch, run('node_modules/.bin/live-server --no-browser --mount=/:build --mount=/:public --watch=build'))
