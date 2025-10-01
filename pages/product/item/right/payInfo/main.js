import price from "./price/main.js"
import pix from "./pix/main.js"

export default function payInfo(p){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
        }`

    const payInfo = cE("div", style)
    payInfo.appendChild(price(p))
    payInfo.appendChild(pix())
    return(payInfo)
}