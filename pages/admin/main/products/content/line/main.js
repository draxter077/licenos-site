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

    const line = cE("a", style)
    line.target = "_blank"
    line.href = `https://www.licenos.com.br/produto?${p.id}_${p.title.replaceAll(" ", "_")}`
    line.innerHTML = `${p.id}<span>•</span>${p.title}<span>•</span>${stringifyNumber(p.price)}`
    return(line)
}