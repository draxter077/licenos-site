import head from "./head/main.js"
import photos from "./photos/main.js"
import info from "./info/main.js"
import save from "./save/main.js"

export default function window(){
    let style = `
        {
            position:fixed;
            top:5%;
            left:5%;
            
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            align-items:center;
            height:90%;
            width:90%;
            background:var(--colorWhite);
            box-shadow:0px 0px 500px 0px var(--colorBlack);
            padding:5px 10px;
            border-radius:5px;
            transform:scale(0);
            transition:transform 0.5s;
        }`

    const window = cE("div", style)
    window.appendChild(head())
    window.appendChild(photos())
    window.appendChild(info())
    window.appendChild(save())
    return(window)
}