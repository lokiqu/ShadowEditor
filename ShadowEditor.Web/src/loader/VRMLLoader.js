import BaseLoader from './BaseLoader';

/**
 * VRMLLoader
 * @author tengge / https://github.com/tengge1
 */
function VRMLLoader() {
    BaseLoader.call(this);
}

VRMLLoader.prototype = Object.create(BaseLoader.prototype);
VRMLLoader.prototype.constructor = VRMLLoader;

VRMLLoader.prototype.load = function (url, options) {
    return new Promise(resolve => {
        var loader = new THREE.VRMLLoader();
        loader.load(url, obj => {
            resolve(obj);
        }, undefined, () => {
            resolve(null);
        });
    });
};

export default VRMLLoader;