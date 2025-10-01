import window from "./window/main.js"

export default function line(o){   
    let style = `
        {
            font-size:18px;
            text-wrap:nowrap;
            padding:2px 5px;
            border-bottom:1px solid var(--colorBlue);
            width:100%;
            ${o.status == "Aguardando confirmação" ? "color:var(--colorBlack);" : "color:var(--colorWhite);"}
            ${o.status == "Aguardando confirmação" ? "background:var(--colorYellow);" : ""}
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
    line.id = o.id
    
    let total = 0
    for(let i = 0; i < o.items.length; i++){total += o.items[i].price*o.items[i].quantity}
    line.innerHTML = `${o.id}<span>•</span>${o.date} às ${o.hour}<span>•</span>${o.clientcnpj} - ${o.clientname}<span>•</span>${o.items.length} ite${o.items.length > 1 ? "ns" : "m"}<span>•</span>${stringifyNumber(total)}<span>•</span>${o.status}`

    line.addEventListener(
        "click",
        async function a(e){
            let w = window(o, total)
            document.getElementById("root").appendChild(w)
            await new Promise(resolve => setTimeout(resolve, 100))
            w.style.transform = "scale(1)"
        }
    )
    return(line)
}