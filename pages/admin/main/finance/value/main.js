import title from "./title/main.js"
import n from "./n/main.js"

export default function value(t, v){
    let style = `
        {
            display:flex;
            flex-direction:column;
            padding:10px 20px;
            border-radius:5px;
            background:var(--colorWhite);
            box-shadow:0px 0px 5px 0px var(--colorBlue);
            width:40%;
        }
        :responsive{
            width:48%;
        }`

    const value = cE("div", style)
    value.appendChild(title(t))
    value.appendChild(n(v))
    return(value)
}