(function(window, document) {
  'use strict';

  require('./index.scss');

  const Bento = {

    create(images, options) {
      const bento = Object.create(Bento);
      bento._init(images, options);
      return bento;
    },

    destroy() {
      if (this.DOMElement && this.DOMElement.parentNode) {
        this.DOMElement.parentNode.removeChild(this.DOMElement);
      }
    },

    get DOMElement() {
      return this.$container;
    },

    _init(images, options) {
      if (!images || !images.length) {
        console.warn('[Bento] No images given.');
        return;
      }

      options = options || {};

      const opts = {
        breakpoint: 600,
        maxImagesLarge: options.maxImagesLarge || 10,
        maxImagesSmall: options.maxImagesSmall || 6,
      };

      let _limit = (window.innerWidth <= opts.breakpoint) ? opts.maxImagesLarge : opts.maxImagesSmall;
      images = images.slice(0, _limit);

      this.$container = document.createElement('div');
      this.$container.className = `bento bento--${images.length}`;

      images.forEach((image, i) => {
        switch(i) {
          case 0:
          case 1:
            this._insertAndCreateWrapper(image);
            break;
          case 2:
          case 3:
            this._insertIntoNextAvailableWrapper(image);
            break;
          case 4:
          case 5:
          case 6:
            this._insertAndCreateWrapper(image);
            break;
          case 7:
            this._insertIntoNextAvailableWrapper(image);
            break;
          case 8:
          case 9:
            this._insertAndWrapIntoNext(image);
            break;
          default:
            break;
        }
      });
    },

    _insertAndCreateWrapper(image) {
      let $wrapper = document.createElement('div');
      $wrapper.className = 'bento-item';

      let $el = document.createElement('div');
      $el.className = 'bento-item-el';
      $el.style.backgroundImage = `url(${image})`;

      $wrapper.appendChild($el);
      this.$container.appendChild($wrapper);
    },

    _insertIntoNextAvailableWrapper(image) {
      let $el = document.createElement('div');
      $el.className = 'bento-item-el';
      $el.style.backgroundImage = `url(${image})`;

      let $items = this.$container.querySelectorAll('.bento-item');
      let $wrapper = Array.prototype.filter.call($items, ($item) => {
        return $item.childNodes.length === 1;
      })[0];

      $wrapper.appendChild($el);
    },

    _insertAndWrapIntoNext(image) {
      let $el = document.createElement('div');
      $el.className = 'bento-item-el';
      $el.style.backgroundImage = `url(${image})`;

      let $items = this.$container.querySelectorAll('.bento-item');
      let $wrapper = Array.prototype.filter.call($items, ($item) => {
        return $item.querySelectorAll('.bento-item-el:not(.bento-item-el--wrapper)').length === 2;
      })[0];

      var $innerWrapper = document.createElement('div');
      $innerWrapper.className = 'bento-item-el bento-item-el--wrapper';

      while ($wrapper.firstChild) {
        $innerWrapper.appendChild($wrapper.firstChild);
      }
      $wrapper.appendChild($innerWrapper);
      $wrapper.appendChild($el);
    },
  };

  window.Bento = Bento;
})(window, document);
