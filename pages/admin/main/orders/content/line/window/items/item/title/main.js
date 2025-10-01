export default function title(i){
    let style = `
        {
            text-align:center;
            width:80%;
            margin:5px;
        }
        >span{
            margin:0px 7px;
            color:var(--colorBlue);
        }`

    const title = cE("div", style)
    title.innerHTML = `${i.id}<span>•</span>${i.quantity}kg de ${i.title}<span>•</span>${stringifyNumber(i.price*i.quantity)} (${stringifyNumber(i.price)}/${i.unit})<span>•</span>${i.supplierid}<span>•</span>${i.status}`
    return(title)
}