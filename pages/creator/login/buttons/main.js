import submit from "./submit/main.js"
import change from "./change/main.js"

export default function buttons(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            align-items:center;
            width:25%;
        }
        :responsive{
            width:75%;
        }`

    const buttons = cE("div", style)
    buttons.appendChild(submit())
    buttons.appendChild(change())
    return(buttons)
}