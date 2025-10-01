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
    line.innerHTML = `${c.id}<span>•</span>${c.cnpj}<span>•</span>${c.businessName}<span>•</span>${c.email}<span>•</span>${c.phoneNumber}<span>•</span>${c.ordersNumber} pedidos`
    return(line)
}