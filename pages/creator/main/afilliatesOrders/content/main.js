import line from "./line/main.js"

export default function content(afs, os, ps){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:100%;
            max-height:35svh;
            overflow-y:scroll;
        }
        :responsive{
            overflow-x:scroll;
        }
        >span{
            color:var(--colorWhite);
            font-size:20px;
            padding:5svh;
            width:100%;
            text-align:center;
        }`

    const content = cE("div", style)

    for(let i = os.length - 1; i >= 0; i--){
        let o = os[i]
        let p
        for(let j = 0; j < ps.length; j++){if(o.product == ps[j].id){p = ps[j];break}}
        let af
        for(let j = 0; j < afs.length; j++){if(p.creator == afs[j].id){af = afs[j];break}}
        content.appendChild(line(o, o.price*af.afilliatefee))
    }

    if(os.length == 0){content.innerHTML = "<span>Sem pedidos ainda! :(</span>"}
    return(content)
}