import {
    apiURL
} from './config.js';
/**
 * 
 * @param {Number} id 
 */
export const loadPicture = (id)=>{
    // return fetch(`${apiURL}${id}`, {
    //     "credentials": 'include'
    // }).then(response => response.json());
    return new Promise((resolve, reject) => {
        fetch(`${apiURL}${id}`, {
            "credentials": 'include'
        }).then(response => response.json()).then(data => {
            resolve(data);
        }).catch(error => {
            reject(error);
        });
    });
}
/**
 * 
 * @param {String} uri uri to the api to load the resource
 * @returns {Promise} a promise that resolves to the resource
 */
export const loadResource = (uri)=>{
    return new Promise(async (resolve, reject) => {
        const res = await fetch('https://webetu.iutnc.univ-lorraine.fr' + uri, {
            "credentials": 'include'
        });
        try {
            if (res.ok)
                resolve(res.json());
            else
                reject(res.status);
        } catch (error) {
            reject(error);
        }
    });
}