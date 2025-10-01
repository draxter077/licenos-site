import search from "./search/main.js"
import newProduct from "./newProduct/main.js"

export default function head(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            align-items:center;
            width:100%;
        }`

    const head = cE("div", style)
    head.appendChild(search())
    head.appendChild(newProduct())
    return(head)
}