import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

  add(item) {
    this.get('items').pushObject(item);
    this.get('updateTotal')(this);
  },

  remove(item) {
    this.get('items').removeObject(item);
    this.get('updateTotal')(this);
  },

  empty() {
    this.get('items').clear();
    this.get('updateTotal')(this);
  },

  updateTotal: function(context) {
    var total = 0;
    context.get('items').forEach(function(item) {
      total += parseInt(item.get('cost'));
    }.bind(total));
    context.set('currentTotal', total);
  }

});
