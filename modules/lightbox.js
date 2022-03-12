import { apiURL } from "./config.js";
import { loadResource } from "./photoloader.js";
/**
 * 
 * @param {Node} node 
 * @returns 
 */
export const load = async (node) => {
    console.log(node);
    console.log(node.target.dataset.uri);
    const {
        photos
    } = await loadResource(node.target.dataset.uri);
    return photos;
}