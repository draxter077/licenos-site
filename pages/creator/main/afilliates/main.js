import title from "./title/main.js"
import head from "./head/main.js"
import content from "./content/main.js"

export default function afilliates(u, afs){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:90%;
        }
        :responsive{
            width:95%;
        }` 

    const afilliates = cE("div", style)
    afilliates.appendChild(title())
    afilliates.appendChild(head(u))
    afilliates.appendChild(content(afs))
    return(afilliates)
}