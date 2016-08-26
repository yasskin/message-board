import Ember from 'ember';

export function productCost(params/*, hash*/) {
  var productPrice = params[0].get('cost');

  if (productCost >= 50){
    return '$$$$';
  } else if (productPrice >= 20){
    return '$$$';
  } else if (productPrice >= 10){
    return '$$';
  } else if (productPrice <= 9){
    return '$';
  }
}

export default Ember.Helper.helper(productCost);
