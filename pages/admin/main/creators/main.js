import title from "./title/main.js"
import search from "./search/main.js"
import content from "./content/main.js"

export default function creators(cs){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:90%;
            margin:7.5vh 0px 0px;
        }
        :responsive{
            width:95%;
        }` 

    const creators = cE("div", style)
    creators.appendChild(title())
    creators.appendChild(search())
    creators.appendChild(content(cs))
    return(creators)
}