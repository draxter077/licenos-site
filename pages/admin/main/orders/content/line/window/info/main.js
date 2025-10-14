import data from "./data/main.js"

export default function info(o, b){
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
    info.appendChild(data("Data e hora", `${datetime(o.time).date} às ${datetime(o.time).time}`))
    info.appendChild(data("Comprador", `${b.id} - ${b.name}`))
    info.appendChild(data("Contato", `${b.email} - ${b.phone}`))
    info.appendChild(data("Produto", `${o.product}`))
    info.appendChild(data("Total", stringifyNumber(o.price)))
    return(info)
}