export default function line(o, total, type){    
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
    let date = datetime(o.time)
    line.innerHTML = `${o.id}<span>•</span>${date.date} às ${date.time}<span>•</span>${o.product}<span>•</span>${stringifyNumber(total)}<span>•</span>${type}<span>•</span>${o.status}`
    return(line)
}