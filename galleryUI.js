import {
    load
} from "./gallery.js"
export const display_galerie = async () => {
    const gallery = await load();
    console.log(gallery);
    gallery.forEach(element => {
        displayImage(element, element.id);
    });
}
const displayImage = (imgObj, id) => {
    const container = document.getElementById('gallery_container');
    const div = document.createElement('div');
    div.className = 'vignette';
    const img = document.createElement('img');
    img.src = `https://webetu.iutnc.univ-lorraine.fr${imgObj.photo.original.href}`;
    img.dataset.uri = `/www/canals5/phox/photos/${id}`;
    div.appendChild(img);
    container.appendChild(div);
}