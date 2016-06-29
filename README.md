# Bento.js

![layouts](http://i.imgur.com/lH5ffKZ.gif)

A responsive header library supporting multiple iamges.

## Getting started

Install via npm
```sh
$ npm install bento.js
```

Or, Bower:
```sh
$ bower install bento.js
```

Drop in the script:
```html
<script src="/path/to/bento.js/dist/bento.js"></script>
```

Create a bento element and add it to your page:
```javascript
var images = [
  'https://unsplash.it/300/300/?random=1',
  'https://unsplash.it/300/300/?random=2',
  'https://unsplash.it/300/300/?random=3',
];

var bento = window.Bento.create(images);
document
  .querySelector('.container')
  .appendChild(bento.DOMElement);
```

## Contributing

1. Clone the repo: `https://github.com/kitinc/bento.js.git`
2. Install dev dependencies: `npm install`
3. Make changes and rebuild: `npm run build`
4. Open a PR!

## Attribution

Released under the [MIT License](https://github.com/kitinc/bento.js/blob/master/LICENSE).

✏️ with ❤️ by [![Kit logo](http://dklgc3xuvi2vs.cloudfront.net/images/Kit.91254b07.svg)](http://kit.com)
