import {proxy} from 'valtio';

const state = proxy({
    intro: true, //defines if user is on the home page or not
    color: '#EFBD48',
    isLogoTexture: true, //if logo is being displayed on the shirt or not
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png',
});

export default state;