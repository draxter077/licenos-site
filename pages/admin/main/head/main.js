import config from "./config/main.js"
import logo from "./logo/main.js"
import logout from "./logout/main.js"

export default function head(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-around;
            width:100%;
            padding:10px 0px;
            box-shadow:0px 0px 5px 0px var(--colorBlue);
        }`

    const head = cE("div", style)
    head.appendChild(config())
    head.appendChild(logo())
    head.appendChild(logout())
    return(head)
}