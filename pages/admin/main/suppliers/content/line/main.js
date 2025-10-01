export default function line(s){
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
    line.innerHTML = `${s.id}<span>•</span>${s.cnpj}<span>•</span>${s.businessName}<span>•</span>${s.email}<span>•</span>${s.phoneNumber}<span>•</span>${s.productsNumber} produtos`
    return(line)
}