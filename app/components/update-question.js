import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },
    update(question) {
      var params = {
        content: this.get('content'),
        firstName: this.get('firstName'),
        lastName: this.get('lastName'),
        note: this.get('note'),
        tag: this.get('tag')
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    }
  }
});
