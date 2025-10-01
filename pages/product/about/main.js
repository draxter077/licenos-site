import text from "./text/main.js"
import photo from "./photo/main.js"

export default function about(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            align-items:center;
            width:90%;
            margin:5svh 0px 0px 0px;
        }
        :responsive{
            flex-direction:column-reverse;
            width:95%;
        }`

    const about = cE("div", style)
    about.id = "Sobre"
    about.appendChild(text())
    about.appendChild(photo())
    return(about)
}