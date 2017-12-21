import { Horloge } from "./horloge";
import 'core-js/fn/array/from';

const btns = Array.from(document.querySelectorAll('.container > button.btn'));

btns.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    const horloge = new Horloge(event.target);
    horloge.start();
  });
});
