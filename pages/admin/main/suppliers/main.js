import title from "./title/main.js"
import search from "./search/main.js"
import content from "./content/main.js"

export default function supplier(ss){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:90%;
            margin:7.5vh 0px;
        }
        :responsive{
            width:95%;
        }` 

    const supplier = cE("div", style)
    supplier.appendChild(title())
    supplier.appendChild(search())
    supplier.appendChild(content(ss))
    return(supplier)
}