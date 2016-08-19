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
        author: this.get('author') ? this.get('author'):"",
        note: this.get('note') ? this.get('note'):"",
        tag: this.get('tag') ? this.get('tag'):"",
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
