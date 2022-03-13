import { apiURL,domainName } from "./config.js";
import { loadResource } from "./photoloader.js";
/**
 * 
 * @param {Node} node 
 * @returns 
 */
export const load = async (node) => {
    const {
        photo
    } = await loadResource(node.target.dataset.uri);
    return photo;
}