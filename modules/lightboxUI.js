export const displayLightbox = async (data) => {
    console.log(data);
    console.log(data.photo.original.href);
    const lightbox = document.getElementById('lightbox_container');
    const img = document.getElementById('lightbox_full_img');
    img.src = `https://webetu.iutnc.univ-lorraine.fr${data.photo.original.href}`;
    show();
}
const show = () => {
    const lightbox = document.getElementById('lightbox_container');
    lightbox.classList.add('lightbox_container--visible');
    lightbox.classList.remove('lightbox_container--hidden');
}
const hide = () => {
    const lightbox = document.getElementById('lightbox_container');
    lightbox.classList.add('lightbox_container--hidden');
    lightbox.classList.remove('lightbox_container--visible');
}
document.getElementById('lightbox_close').addEventListener('click', hide);