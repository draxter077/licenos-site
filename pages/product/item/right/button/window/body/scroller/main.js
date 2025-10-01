import form from "./form/main.js"
import pix from "./pix/main.js"

export default function scroller(b){
    let style = `
        {
            display:flex;
            flex-direction:row;
            width:200%;
            height:100%;
            transition:transform 0.5s;
        }`

    const scroller = cE("div", style)
    scroller.appendChild(form(b))
    scroller.appendChild(pix())
    return(scroller)
}