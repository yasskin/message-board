import Ember from 'ember';

export default Ember.Component.extend({

  fullName: Ember.computed('question.firstName', 'question.lastName', function() {
    return this.get('question.firstName') + ' ' + this.get('question.lastName');
  })
});
