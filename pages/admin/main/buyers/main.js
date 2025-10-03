import title from "./title/main.js"
import search from "./search/main.js"
import content from "./content/main.js"

export default function buyers(bs){
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

    const buyers = cE("div", style)
    buyers.appendChild(title())
    buyers.appendChild(search())
    buyers.appendChild(content(bs))
    return(buyers)
}