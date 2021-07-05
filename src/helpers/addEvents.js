import { passiveOption } from './passiveOption.js';

export function addEvents(el, obj, preventScrolling) {
  for (var prop in obj) {
    //var option = ['touchstart', 'touchmove'].indexOf(prop) >= 0 && !preventScrolling ? passiveOption : false;
    var option = passiveOption;
    el.addEventListener(prop, obj[prop], option);
  }
}