// import Person from './Person';
// Person

// import Order from './order/Order';

// import getMessage from './wx-news/methodOverLoad';
// getMessage

// import './arraylist/ArrayList'

// const a: number = 1;

import MyLocalstorage from './singletonmode/localStorage';
// const store = new MyLocalstorage();

// console.log(store);
// console.dir(MyLocalstorage);

const store1 = MyLocalstorage.getInstance('store1');
const store2 = MyLocalstorage.getInstance('store2');
console.log(store1);
console.log(store2);
console.log(store1 === store2);
console.dir(MyLocalstorage);

// import allvechile from './allvechile/allvechile';

// allvechile;


function delegate(el: HTMLElement, selector: string, eventType: string, fn: (e: Event) => void) {
  el.addEventListener(eventType, e => {
    let target = e.target as HTMLElement;
    let currentTarget = e.currentTarget;
    while (target !== currentTarget) {
      if (target!.matches(selector)) {
        return fn.call(target, e);
      }
      target = target!.parentNode as HTMLElement;
    }
  });
}
