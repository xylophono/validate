const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'docs')
    .sass('resources/scss/app.scss', 'docs');