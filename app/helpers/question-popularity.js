import Ember from 'ember';

export function questionPopularity(params) {
  var question = params[0];

  if (question.get('answers').get('length') == 1) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-user"></span>');
  } else if (question.get('answers').get('length') == 2) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-user"></span>' + '<span class="glyphicon glyphicon-user"></span>')
  } else if (question.get('answers').get('length') == 3) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-user"></span>' + '<span class="glyphicon glyphicon-user"></span>'  + '<span class="glyphicon glyphicon-user"></span>')
  }
}

export default Ember.Helper.helper(questionPopularity);
