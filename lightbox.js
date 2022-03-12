/**
 * 
 * @param {Node} node 
 * @returns 
 */
export const load = async (node) => {
    const {
        photos
    } = await loadResource('/www/canals5/phox/api/photos');
    return photos;
}