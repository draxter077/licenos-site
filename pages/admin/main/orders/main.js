import title from "./title/main.js"
import search from "./search/main.js"
import content from "./content/main.js"

export default function orders(os){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:90%;
        }
        :responsive{
            width:95%;
        }` 

    const orders = cE("div", style)
    orders.appendChild(title())
    orders.appendChild(search())
    orders.appendChild(content(os))
    return(orders)
}