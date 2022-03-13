import * as lightbox from "./lightbox.js"
import { displayLightbox } from "./lightboxUI.js";
export const display_galerie = async (gallery) => {
    document.getElementById('gallery_container').innerHTML = '';
    gallery.forEach(element => {
        displayImage(element, element.photo.id);
    });
}
const displayImage = (imgObj, id) => {
    const container = document.getElementById('gallery_container');
    const div = document.createElement('div');
    div.className = 'vignette';
    const img = document.createElement('img');
    img.src = `https://webetu.iutnc.univ-lorraine.fr${imgObj.photo.original.href}`;
    img.dataset.uri = `/www/canals5/phox/api/photos/${id}`;
    div.appendChild(img);
    div.addEventListener('click', async (img) => {
        const data = await lightbox.load(img);
        displayLightbox(data);
    });
    container.appendChild(div);
}