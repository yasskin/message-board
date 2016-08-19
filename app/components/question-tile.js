import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    update(question, params) {
      this.sendAction('update', question, params);
    },
    delete(question) {
      if (confirm('Untermensch, are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
