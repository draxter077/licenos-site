export default function detail(a, p){
    let style = `
        {
            font-size:18px;
            color:var(--colorWhite);
            text-align:right;
            margin:5px 0px 0px 0px;
        }
        >span{
            color:var(--colorBlue);
            margin:0px 10px;
        }
        :responsive{
            font-size:12px;
        }`

    const detail = cE("div", style)
    detail.innerHTML = `${p} páginas<span>•</span>${a}`
    return(detail)
}