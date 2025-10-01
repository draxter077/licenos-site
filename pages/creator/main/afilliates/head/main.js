import search from "./search/main.js"
import newAfilliate from "./newAfilliate/main.js"

export default function head(u){
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
    head.appendChild(newAfilliate(u))
    return(head)
}