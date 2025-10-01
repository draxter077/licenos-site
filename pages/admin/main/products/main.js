import title from "./title/main.js"
import head from "./head/main.js"
import content from "./content/main.js"

export default function products(pdts){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:90%;
            margin:7.5vh 0px 0px 0px;
        }
        :responsive{
            width:95%;
        }` 

    const products = cE("div", style)
    products.appendChild(title())
    products.appendChild(head())
    products.appendChild(content(pdts))
    return(products)
}