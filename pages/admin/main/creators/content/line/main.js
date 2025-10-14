import window from "./window/main.js"

export default function line(c){
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
    line.innerHTML = `${c.id}<span>•</span>${c.name}<span>•</span>${c.email}<span>•</span>${c.phone}`

    line.addEventListener(
        "click",
        async function a(e){
            let w = window(c)
            document.getElementById("root").appendChild(w)
            await new Promise(resolve => setTimeout(resolve, 100))
            w.style.transform = "scale(1)"
        }
    )
    return(line)
}