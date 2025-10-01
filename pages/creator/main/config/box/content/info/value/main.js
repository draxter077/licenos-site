import title from "./title/main.js"
import input from "./input/main.js"

export default function value(t, v){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:30%;
            margin:0px 0px 10px 0px;
        }
        :responsive{
            width:100%;
        }`

    const value = cE("div", style)
    value.appendChild(title(t))
    value.appendChild(input(t, v))
    return(value)
}