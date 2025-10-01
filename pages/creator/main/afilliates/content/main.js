import line from "./line/main.js"

export default function content(afs){
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
    for(let i = 0; i < afs.length; i++){content.appendChild(line(afs[i]))}
    if(afs.length == 0){content.innerHTML = "<span>Sem afiliados ainda! :(</span>"}
    return(content)
}