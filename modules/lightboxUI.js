import {
    load
} from "./lightbox.js";
import {
    next as galleryNext
} from "./gallery.js";
import {
    prev as galleryPrev
} from "./gallery.js";
import {
    display_galerie
} from "./galleryUI.js";
import {domainName} from "./config.js";
let last;
export const displayLightbox = async (data) => {
    last = document.querySelector(`img[src='${domainName}${data.url.href}']`).parentElement;
    console.log(last);
    const img = document.getElementById('lightbox_full_img');
    img.src = `https://webetu.iutnc.univ-lorraine.fr${data.url.href}`;
    document.getElementById('lightbox_title').textContent = data.titre;
    document.getElementById('caption').textContent = data.descr;
    show();
}
const show = () => {
    // last = document.getElementById('gallery_container').firstChild;
    document.getElementById("myModal").style.display = "block";
    document.body.style.overflow = 'hidden';
}
export const hide = () => {
    document.getElementById("myModal").style.display = "none";
    document.body.style.overflow = 'auto';
}
export const next = async (event) => {
    const img = document.getElementById('lightbox_full_img');
    const next = last?.nextSibling?.firstChild;
    if (next) {
        img.src = next.src;
        document.getElementById('lightbox_title').textContent = next.title;
        document.getElementById('caption').textContent = next.alt;
        last = last?.nextSibling;
    }else{
        const gallery = await galleryNext();
        await display_galerie(gallery);
        last = document.getElementById('gallery_container').firstChild;
    }
}

export const prev = async () => {
    const img = document.getElementById('lightbox_full_img');
    const prev = last?.previousSibling?.firstChild;
    if (prev) {
        img.src = prev.src;
        document.getElementById('lightbox_title').textContent = prev.title;
        document.getElementById('caption').textContent = prev.alt;
        last = last?.previousSibling;
    }else{
        const gallery = await galleryPrev();
        await display_galerie(gallery);
        last = document.getElementById('gallery_container').firstChild;
    }
}

// j'utilise "?" pour éviter d'avoir une erreur si la variable n'est pas définie