# npm-scripts-igloo

A build process using npm scripts with Sass compilation.

Igloo is just a silly name, because I've thrown in an igloo icon from Font Awesome.

## How it works

First build CSS:
- compile
- concatenate
- prefix
- compress

```javascript
npm run build-css
```

Then to start dev:

```javascript
npm start
```

For dev, need to keep link to Font Awesome stylesheet. Remove or uncomment for prod.

```html
<link rel="stylesheet" href="dist/css/fontawesome-all.css" />
```

## TODO

- imagemin
- babel
- uglify
- Set up Font Awesome with Sass, so that we don't have to include the entire fontawesome-all.css stylesheet