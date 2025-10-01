import line from "./line/main.js"

export default function content(os, ps){
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
    for(let i = 0; i < ps.length; i++){
        let ocs = 0
        for(let j = 0; j < os.length; j++){if(os[j].product == ps[i].id){ocs += 1}}
        content.appendChild(line(ps[i], ocs))
    }
    if(ps.length == 0){content.innerHTML = "<span>Sem produtos ainda! :(</span>"}
    return(content)
}