export default function line(af){    
    let style = `
        {
            font-size:18px;
            text-wrap:nowrap;
            padding:2px 5px;
            border-bottom:1px solid var(--colorBlue);
            min-width:100%;
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
    line.innerHTML = `${af.id}<span>•</span>${af.name}<span>•</span>${af.afilliatefee*100}%`
    return(line)
}