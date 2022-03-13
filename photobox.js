import { display_galerie } from './modules/galleryUI.js';
import { hide } from './modules/lightboxUI.js';
import { prev, next, load, first, last } from './modules/gallery.js';

window.addEventListener('load', async e => {
  // [100,101,102,103,104,100,101,102,103,104].forEach(async id => {
  //   console.log(id);
  //   const picture = await loadPicture(id);
  //   displayImage(picture,id);
  // });
  document.getElementById('load_gallery').addEventListener('click', async () => {
    const gallery = await load();
    display_galerie(gallery);
  });
  document.getElementById('previous').addEventListener('click', async () => {
    const gallery = await prev();
    display_galerie(gallery);
  });
  document.getElementById('next').addEventListener('click', async () => {
    const gallery = await next();
    display_galerie(gallery);
  });
  document.getElementById('first').addEventListener('click', async () => {
    const gallery = await first();
    display_galerie(gallery);
  });
  document.getElementById('last').addEventListener('click', async () => {
    const gallery = await last();
    display_galerie(gallery);
  });
  document.getElementById('lightbox_close').addEventListener('click', hide);
});