import line from "./line/main.js"

export default function content(u, os, ps, afs){
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
        let total, type
        let o = os[i]
        for(let j = 0; j < ps.length; j++){
            let p = ps[j]
            if(o.product == p.id){
                if(p.creator == u.id){
                    total = o.price*(1 - u.fee)
                    type = "Próprio"
                }
                else{
                    for(let k = 0; k < afs.length; k++){
                        if(p.creator == afs[k].id){
                            total = o.price*afs[k].afilliatefee
                            type = "Afiliado"
                            break
                        }
                    }
                    break
                }
            }
        }
        content.appendChild(line(o, total, type))
    }

    if(os.length == 0){content.innerHTML = "<span>Sem pedidos ainda! :(</span>"}
    return(content)
}