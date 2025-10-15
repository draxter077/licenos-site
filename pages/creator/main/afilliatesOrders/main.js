import title from "./title/main.js"
import search from "./search/main.js"
import content from "./content/main.js"

export default function afilliatesOrders(afs, os, ps){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:90%;
            margin:7.5svh 0px 0px 0px;
        }
        :responsive{
            width:95%;
        }` 

    const afilliatesOrders = cE("div", style)
    afilliatesOrders.appendChild(title())
    afilliatesOrders.appendChild(search())
    afilliatesOrders.appendChild(content(afs, os, ps))
    return(afilliatesOrders)
}