import disclaimer from "./disclaimer/main.js"
import qrCode from "./qrCode/main.js"
import copy from "./copy/main.js"
import bye from "./bye/main.js"

export default function pix(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:space-around;
            width:50%;
            height:100%;
            overflow-y:scroll;
        }`

    const pix = cE("div", style)
    pix.appendChild(disclaimer())
    pix.appendChild(qrCode())
    //pix.appendChild(copy())
    pix.appendChild(bye())
    return(pix)
}