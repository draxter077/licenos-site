import title from "./title/main.js"
import value from "./value/main.js"

export default function data(t, v){
    let style = `
        {
            display:flex;
            flex-direction:column;
            background:var(--colorBlue);
            padding:5px 10px;
            border-radius:5px;
            margin:5px;
        }`

    const data = cE("div", style)
    data.appendChild(title(t))
    data.appendChild(value(v))
    return(data)
}