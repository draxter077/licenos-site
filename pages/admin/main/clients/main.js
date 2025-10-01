import title from "./title/main.js"
import search from "./search/main.js"
import content from "./content/main.js"

export default function clients(cs){
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

    const clients = cE("div", style)
    clients.appendChild(title())
    clients.appendChild(search())
    clients.appendChild(content(cs))
    return(clients)
}