import disclaimer from "./disclaimer/main.js"
import inputs from "./inputs/main.js"
import button from "./button/main.js"

export default function form(b){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:space-around;
            width:50%;
            height:100%;
        }`

    const form = cE("div", style)
    form.appendChild(disclaimer())
    form.appendChild(inputs())
    form.appendChild(button(b))
    return(form)
}