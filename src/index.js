import galleryTemplate from '../templates/gallery-item.handlebars';
import items from './countries.json';

const list = document.querySelector(`.gallery`);
const layout = galleryTemplate(items);
list.innerHTML = layout;
console.log(layout);
