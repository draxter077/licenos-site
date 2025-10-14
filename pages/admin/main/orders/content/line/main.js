import window from "./window/main.js"

export default function line(o, b){   
    let style = `
        {
            font-size:18px;
            text-wrap:nowrap;
            padding:2px 5px;
            border-bottom:1px solid var(--colorBlue);
            width:100%;
            ${o.status != "Concluído" ? "color:var(--colorBlack);" : "color:var(--colorWhite);"}
            ${o.status != "Concluído" ? "background:yellow;" : ""}
            cursor:pointer;
            transition:background 0.25s;
        }
        :hover{
            background:var(--colorBlue) !important;
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
    line.innerHTML = `${o.id}<span>•</span>${datetime(o.time).date} às ${datetime(o.time).time}<span>•</span>${o.product}<span>•</span>${o.buyer}<span>•</span>${stringifyNumber(o.price)}<span>•</span>${o.status}`

    line.addEventListener(
        "click",
        async function a(e){
            let w = window(o, b)
            document.getElementById("root").appendChild(w)
            await new Promise(resolve => setTimeout(resolve, 100))
            w.style.transform = "scale(1)"
        }
    )
    return(line)
}