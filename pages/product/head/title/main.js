import logo from "./logo/main.js"
import name from "./name/main.js"

export default function title(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            cursor:pointer;
        }
        :responsive{
            margin:0px 0px 10px 0px;
        }`

    const title = cE("a", style)
    title.href = "https://www.licenos.com.br"
    title.target = "_self"
    title.appendChild(logo())
    title.appendChild(name())
    return(title)
}