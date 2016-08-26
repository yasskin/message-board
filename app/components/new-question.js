import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    showQuestionForm() {
      this.set('addNewQuestion', true);
    },
    saveQuestion() {
      var params = {
        content: this.get('content') ? this.get('content'):"",
        firstName: this.get('firstName') ? this.get('firstName'):"",
        lastName: this.get('lastName') ? this.get('lastName'):"",
        note: this.get('note') ? this.get('note'):"",
        tag: this.get('tag') ? this.get('tag'):"",
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
