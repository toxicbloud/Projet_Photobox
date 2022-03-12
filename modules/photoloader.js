import {
    apiURL
} from './config.js';
/**
 * 
 * @param {Number} id 
 */
export function loadPicture(id) {
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
export function loadResource(uri) {
    return new Promise((resolve, reject) => {
        fetch('https://webetu.iutnc.univ-lorraine.fr' + uri, {
            "credentials": 'include'
        }).then(response => response.json()).then(data => {
            resolve(data);
        }).catch(error => {
            reject(error);
        });
    });
}