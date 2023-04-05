import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: '#EFBD48',
    // color: '#EF2748',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png'
})

export default state