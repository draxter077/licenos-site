import window from "./window/main.js"

export default function line(p){
    let style = `
        {
            font-size:18px;
            text-wrap:nowrap;
            padding:2px 5px;
            border-bottom:1px solid var(--colorBlue);
            width:100%;
            color:var(--colorWhite);
            cursor:pointer;
            transition:background 0.25s;
        }
        :hover{
            background:var(--colorBlue);
        }
        >span{
            color:var(--colorBlue);
            margin:0px 5px;
        }
        :responsive{
            font-size:13px;
            width:fit-content;
        }`

    const line = cE("div", style)
    line.innerHTML = `${p.id}<span>•</span>${p.title}<span>•</span>${p.category}<span>•</span>${p.stock} ${p.unit}<span>•</span>${stringifyNumber(p.price)}<span>•</span>${p.revenue*100}%`

    line.addEventListener(
        "click",
        async function a(){
            let w = window(p)
            document.getElementById("root").appendChild(w)
            await new Promise(resolve => setTimeout(resolve, 100))
            w.style.transform = "scale(1)"
        }
    )
    return(line)
}