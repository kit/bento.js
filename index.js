require('./index.scss');

(function(window, document) {
  'use strict';

  const Tangram = {

    init(images) {
      let _limit = (window.innerWidth <= 600) ? 10 : 6;
      images = images.slice(0, _limit);

      this.$container = document.createElement('div');
      this.$container.className = `kitTangram kitTangram--${images.length}`;

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

      if (images.length < 2) {
        this.$container.className += ' is-loaded';
      }

      imagesLoaded(this.$container, { background: '.kitTangram-item' }, () => {
        this.$container.className += ' is-loaded';
      });

      return this.$container;
    },

    _insertAndCreateWrapper(image) {
      let $wrapper = document.createElement('div');
      $wrapper.className = 'kitTangram-item';

      let $el = document.createElement('div');
      $el.className = 'kitTangram-item-el';
      $el.style.backgroundImage = `url(${image})`;

      $wrapper.appendChild($el);
      this.$container.appendChild($wrapper);
    },

    _insertIntoNextAvailableWrapper(image) {
      let $el = document.createElement('div');
      $el.className = 'kitTangram-item-el';
      $el.style.backgroundImage = `url(${image})`;

      let $items = this.$container.querySelectorAll('.kitTangram-item');
      let $wrapper = Array.prototype.filter.call($items, ($item) => {
        return $item.childNodes.length === 1;
      })[0];

      $wrapper.appendChild($el);
    },

    _insertAndWrapIntoNext(image) {
      let $el = document.createElement('div');
      $el.className = 'kitTangram-item-el';
      $el.style.backgroundImage = `url(${image})`;

      let $items = this.$container.querySelectorAll('.kitTangram-item');
      let $wrapper = Array.prototype.filter.call($items, ($item) => {
        return $item.querySelectorAll('.kitTangram-item-el:not(.kitTangram-item-el--wrapper)').length === 2;
      })[0];

      var $innerWrapper = document.createElement('div');
      $innerWrapper.className = 'kitTangram-item-el kitTangram-item-el--wrapper';

      while ($wrapper.firstChild) {
        $innerWrapper.appendChild($wrapper.firstChild);
      }
      $wrapper.appendChild($innerWrapper);
    },
  };

  window.Tangram = Tangram;
})(window, document);
