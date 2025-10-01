import data from "./data/main.js"

export default function info(o, total){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-around;
            align-items:center;
            flex-wrap:wrap;
            width:100%;
        }`

    const info = cE("div", style)
    info.appendChild(data("ID", o.id))
    info.appendChild(data("Data e hora", `${o.date} às ${o.hour}`))
    info.appendChild(data("Cliente", `${o.clientcnpj} - ${o.clientname}`))
    info.appendChild(data("Endereço", o.clientaddress))
    info.appendChild(data("Nº de itens", o.items.length))
    info.appendChild(data("Total", stringifyNumber(total)))
    return(info)
}