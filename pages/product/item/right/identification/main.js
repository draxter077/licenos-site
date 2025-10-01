import title from "./title/main.js"
import detail from "./detail/main.js"

export default function identification(t, a, p){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:95%;
        }`

    const identification = cE("div", style)
    identification.appendChild(title(t))
    identification.appendChild(detail(a, p))
    return(identification)
}