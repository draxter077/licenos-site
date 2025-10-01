import img from "./img/main.js"
import title from "./title/main.js"

export default function item(i, o){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            align-items:center;
            font-size:18px;
            color:var(--colorWhite);
            padding:5px 10px;
            border-radius:5px;
            margin:0px 0px 2px 0px;
            background:var(--colorBlack);
            width:100%;
            cursor:pointer;
        }
        :responsive{
            font-size:12px;
        }`

    const item = cE("div", style)
    item.appendChild(img(i.srcs[0]))
    item.appendChild(title(i))
    item.addEventListener("click", () => window.open(`/produtos?${i.id}`, "_blank"))
    return(item)
}