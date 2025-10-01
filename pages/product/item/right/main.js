import identification from "./identification/main.js"
import disclaimer from "./disclaimer/main.js"
import payInfo from "./payInfo/main.js"
import button from "./button/main.js"

export default function right(b){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:space-between;
            width:75%;
            height:100%;
        }
        :responsive{
            width:100%;
            height:fit-content;
            margin:5svh 0px;
        }`

    const right = cE("div", style)
    right.appendChild(identification(b.title, b.author, b.pages))
    right.appendChild(disclaimer(b.content))
    right.appendChild(payInfo(b.price))
    right.appendChild(button(b))
    return(right)
}