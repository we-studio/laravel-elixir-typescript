elixir-typescript (forked from laravel-elixir-typescript by [MikeyAlder](https://github.com/MikeyAlder/laravel-elixir-typescript))
========================

## Prerequirement
You have to install [Laravel's Elixir](http://laravel.com/docs/master/elixir)(Version 3.0 or higher) and its dependencies first.

## Installation
Install with Node.js
```
npm install elixir-typescript
```

## Usage
A simple [gulp-typescript](https://github.com/ivogabe/gulp-typescript) wrapper ingredient for Laravel Elixir.

Add it to your Elixir-enhanced Gulpfile, like so:

```
var elixir = require('laravel-elixir');

// import the dependency
var elixirTypscript = require('elixir-typescript');

elixir(function(mix) {
  mix.typescript('app.js');
});
```

This will compile all *.ts files in your `resources/assets/typescript/` folder and concat the compiled content into `public/js/app.js`.

If you'd like to output to a different directory than the default `public/js`, then you may override this as well.

```
mix.typescript('app.js', 'public/js/foo/bar');
```