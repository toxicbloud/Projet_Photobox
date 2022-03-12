import {
  loadPicture,loadResource
} from './modules/photoloader.js';
import {display_galerie} from './modules/galleryUI.js';
document.querySelector('#load_gallery')
  .addEventListener('click', e => {

  })

window.addEventListener('load', async e => {
  // [100,101,102,103,104,100,101,102,103,104].forEach(async id => {
  //   console.log(id);
  //   const picture = await loadPicture(id);
  //   displayImage(picture,id);
  // });
  // document.getElementById('gallery_container').innerHTML='Chargement de la galerie';
  document.getElementById('load_gallery').addEventListener('click',display_galerie);
});
const displayImage = (imgObj,id) => {
  const container = document.getElementById('gallery_container');
  const div = document.createElement('div');
  div.className = 'vignette';
  const img = document.createElement('img');
  img.src = `https://webetu.iutnc.univ-lorraine.fr${imgObj.photo.url.href}`;
  img.dataset.uri = `/www/canals5/phox/photos/${id}`;
  div.appendChild(img);
  container.appendChild(div);
}