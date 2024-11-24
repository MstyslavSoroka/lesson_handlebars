import galleryTemplate from '../templates/heroes.handlebars';
import items from './heroes.json';

const list = document.querySelector(`.gallery`);
const layout = galleryTemplate(items);
list.innerHTML = layout;
console.log(layout);
