# Laravel Frontend Template

## Setup

### Laravel installation

Follow the instructions in the laravel documentation.

https://laravel.com/docs/5.8/installation

### View Installation

Delete the contents of the resources folder inside the of the new laravel project.

Copy over the contents of this folder into the empty resources folder.

### Package installation

```$xslt
yarn add dotenv-webpack
yarn add vue-router
yarn add vuelidate
yarn add vuetify
yarn add vuex
yarn install
```

### Webpack

Edit the webpack.mix.js file in the root of the project so it looks like the following

```$xslt
const mix = require('laravel-mix');
const Dotenv = require('dotenv-webpack');

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');

mix.webpackConfig({
    plugins: [
        new Dotenv()
    ]
});
```

### Env

Add the following variable to your .env

```$xslt
TRAFFIC_LIGHTS_DISPLAY=true
```

Turn the variable on or off as desired.