import pdf from "./pdf/main.js"
import info from "./info/main.js"

export default function body(p){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-between;
            width:95%;
            height:90%;
        }
        :responsive{
            flex-direction:column;
        }`

    const body = cE("div", style)
    body.appendChild(pdf(p.id))
    body.appendChild(info(p))
    return(body)
}