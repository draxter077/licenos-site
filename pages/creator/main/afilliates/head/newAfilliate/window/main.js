import head from "./head/main.js"
import info from "./info/main.js"

export default function window(u){
    let style = `
        {
            position:fixed;
            top:20%;
            left:10%;
            
            display:flex;
            flex-direction:column;
            align-items:center;
            width:80%;
            background:var(--colorWhite);
            box-shadow:0px 0px 500px 0px var(--colorBlack);
            padding:10px 15px;
            border-radius:5px;
            transform:scale(0);
            transition:transform 0.5s;
        }`

    const window = cE("div", style)
    window.appendChild(head())
    window.appendChild(info(u))
    return(window)
}