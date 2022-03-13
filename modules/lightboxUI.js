export const displayLightbox = async (data) => {
    const lightbox = document.getElementById('lightbox_container');
    const img = document.getElementById('lightbox_full_img');
    img.src = `https://webetu.iutnc.univ-lorraine.fr${data.url.href}`;
    document.getElementById('lightbox_title').textContent = data.titre;
    document.getElementById('lightbox_description').textContent = data.descr;
    show();
}
const show = () => {
    const lightbox = document.getElementById('lightbox_container');
    lightbox.classList.add('lightbox_container--visible');
    lightbox.classList.remove('lightbox_container--hidden');
}
export const hide = () => {
    const lightbox = document.getElementById('lightbox_container');
    lightbox.classList.add('lightbox_container--hidden');
    lightbox.classList.remove('lightbox_container--visible');
}