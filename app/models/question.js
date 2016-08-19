import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr(),
  author: DS.attr(),
  note: DS.attr(),
  tag: DS.attr(),
  answers: DS.hasMany('answer', { async: true})
});
