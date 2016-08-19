import Ember from 'ember';

var questions = [{
  id: 1,
  question: "Who was Nietzsche?",
  author: "Sam",
  note: "biography",
  tag: "bio"
}, {
  id: 2,
  question: "What is his philosophy about?".
  author: "Marty",
  note: "general question",
  tag: "content"
}, {
  id: 3,
  question: "What is the Ubermensch?",
  author: "Tony",
  note: "specific question",
  tag: "concept"
}];

export default Ember.Route.extend({
  model() {
    return questions;
  }
});
