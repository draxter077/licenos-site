export default function line(b){
    let style = `
        {
            font-size:18px;
            text-wrap:nowrap;
            padding:2px 5px;
            border-bottom:1px solid var(--colorBlue);
            width:100%;
            color:var(--colorWhite);
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
    line.innerHTML = `${b.id}<span>•</span>${b.name}<span>•</span>${b.email}<span>•</span>${b.phone}`
    return(line)
}