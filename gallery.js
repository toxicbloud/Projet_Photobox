import {
    loadResource
} from "./photoloader.js";
export const load = async () => {
    const {
        photos
    } = await loadResource('/www/canals5/phox/api/photos');
    return photos;
}