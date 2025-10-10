import img from "./img/main.js"
import title from "./title/main.js"

export default function link(type, t, url){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:center;
            width:30%;
            aspect-ratio:2;
            border-radius:10px;
            box-shadow:0px 0px 2px 0px var(--colorWhite);
            cursor:pointer;
            transition:box-shadow 0.5s;
        }
        :responsive{
            width:80%;
            margin:5px 0px;
        }
        :hover{
            box-shadow:0px 0px 10px 0px var(--colorYellow);
        }`

    const link = cE("a", style)
    link.target = "_blank"
    link.href = url
    link.appendChild(img(type))
    link.appendChild(title(t))
    return(link)
}