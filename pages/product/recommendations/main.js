import title from "./title/main.js"
import content from "./content/main.js"

export default function recommendations(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:90%;
        }`

    const recommendations = cE("div", style)
    recommendations.appendChild(title())
    recommendations.appendChild(content())
    return(recommendations)
}