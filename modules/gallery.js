import {
    loadResource
} from "./photoloader.js";
let nextUrl;
let prevUrl;
let firstUrl;
let lastUrl;
export const load = async () => {
    const data = await loadResource('/www/canals5/phox/api/photos');
    updateUrls(data);
    return data.photos;
}
export const next = async () => {
    console.log('next');
    const data = await loadResource(nextUrl);
    updateUrls(data);
    return data.photos;
}
export const prev = async () => {
    const data = await loadResource(prevUrl);
    updateUrls(data);
    return data.photos;
}
export const first = async () => {
    const data = await loadResource(firstUrl);
    updateUrls(data);
    return data.photos;
}
export const last = async () => {
    const data = await loadResource(lastUrl);
    updateUrls(data);
    return data.photos;
}
const updateUrls = (data) => {
    nextUrl = data.links.next.href;
    prevUrl = data.links.prev.href;
    firstUrl = data.links.first.href;
    lastUrl = data.links.last.href;
}