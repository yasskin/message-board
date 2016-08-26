import Ember from 'ember';

export default Ember.Component.extend({

  fullName: Ember.computed('question.firstName', 'question.lastName', function() {
    return this.get('question.firstName') + ' ' + this.get('question.lastName');
  }),

  actions: {
    delete(question) {
      if (confirm('Untermensch, are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
