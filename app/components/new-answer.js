import Ember from 'ember';

export default Ember.Component.extend({
  addAnswer: false,
  actions: {
    showAnswerForm() {
      this.set('addAnswer', true);
    },
    saveAnswer() {
      var params = {
        author: this.get('author') ? this.get('author'):"",
        content: this.get('content') ? this.get('content'):"",
        question: this.get('question')
      };
      this.set('addAnswer', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
