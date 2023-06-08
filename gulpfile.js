/*
require("gulp") extrae la clave gulp del .json => "gulp": "^4.0.2", su funcionalidad
src para identidicar un archivo
dest para guardarlo
*/
const { src, dest, watch, parallel } = require("gulp");

// CSS
const sass = require("gulp-sass")(require('sass'));
const plumber = require("gulp-plumber");
const autoprefixer = require('autoprefixer'); //funcion en cualquier navegador
const cssnano = require('cssnano'); //Comprimir el código css
const postcss = require('gulp-postcss'); //para aplicar los plugins de postcss con gulp 
const sourcemaps = require('gulp-sourcemaps');

// Imagenes
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const avif = require('gulp-avif');

//JavaScript
const terser = require('gulp-terser-js')


function css( done ) {
    src("src/scss/**/*.scss")     //Identificar el archivo de SASS
        .pipe( sourcemaps.init()) //guarda las referencias antes de comprimir el css
        .pipe( plumber())
        .pipe( sass())       //Compilarlo
        .pipe( postcss([autoprefixer(), cssnano() ]) )
        .pipe( sourcemaps.write('.')) // . Para guardar en la misma hoja de estilos que css
        .pipe( dest("build/css"))        //Almacenarla en el disco duro


    done(); //Callback que avisa a gulp cuando llegamos al final
}

function imagenes( done ) {
    const opciones = {
        optimizationLevel: 3
    }
    src('src/img/**/*.{png,jpg}')
        .pipe( cache( imagemin (opciones) ) )
        .pipe( dest('build/img'))
    done();
}

function versionWebp( done ) {
    const opciones = {
        quality: 50
    };
    
    src('src/img/**/*.{png,jpg}') //Busca todas las imagenes con estos 2 formatos
        .pipe( webp(opciones) )
        .pipe( dest('build/img'))
    done();
}

function versionAvif( done ) {
    const opciones = {
        quality: 50
    };
    
    src('src/img/**/*.{png,jpg}') //Busca todas las imagenes con estos 2 formatos
        .pipe( avif(opciones) )
        .pipe( dest('build/img'))
    done();
}

function javascript( done ) {
    src('src/js/**/*.js')
        .pipe( sourcemaps.init())
        .pipe( terser() )
        .pipe( sourcemaps.write('.'))
        .pipe( dest('build/js') );
    
    done();
}

function dev( done ) {
    watch("src/scss/**/*.scss", css)
    watch("src/js/**/*.js", javascript)
    done();
}

exports.css = css;
exports.js = javascript;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.dev = parallel(imagenes, versionWebp, versionAvif, javascript, dev);