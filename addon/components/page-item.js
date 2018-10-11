import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/page-item';

export default Component.extend({
  layout,

  tagName: 'li',
  classNameBindings: ['isActive:active', 'disabled'],
  seperator: '…',
  selected: null,

  url: computed('urlTemplate', 'page', function () {
    let urlTemplate = this.get('urlTemplate');
    let current = this.get('page');

    urlTemplate = urlTemplate.replace('{current}', current);

    return urlTemplate;
  }),

  isActive: computed('page', 'selected', function () {
    try {
      return this.get('page') === Number(this.get('selected'));
    } catch(e) {
      return false;
    }
  }),

  isDots: computed('page', function () {
    let seperator = this.get('seperator');
    let page = this.get('page');

    return page === seperator;
  }),

  actions: {
    select() {
      if (this.get('disabled')) {
        return;
      }

      let last = this.get('selected');
      let page = this.get('page');

      if (page !== last) {
        this.sendAction('pageSet', page, last); // eslint-disable-line ember/closure-actions
      }
    }
  }
});
