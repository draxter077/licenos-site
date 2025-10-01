import title from "./title/main.js"
import content from "./content/main.js"

export default function box(data){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
            background:var(--colorWhite);
            padding:10px 20px;
            border-radius:5px;
        }`

    const box = cE("div", style)
    box.appendChild(title())
    box.appendChild(content(data))
    return(box)
}