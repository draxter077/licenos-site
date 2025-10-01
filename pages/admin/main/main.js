import head from "./head/main.js"
import config from "./config/main.js"
import finance from "./finance/main.js"
import orders from "./orders/main.js"
import products from "./products/main.js"
import clients from "./clients/main.js"
import suppliers from "./suppliers/main.js"

export default function client(log){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
        }`

    const client = cE("div", style)
    console.log(log)
    
    client.appendChild(head())
    client.appendChild(config(log.user))
    client.appendChild(finance(log.orders))
    client.appendChild(orders(log.orders))
    client.appendChild(products(log.products))
    client.appendChild(clients(log.users))
    client.appendChild(suppliers(log.suppliers))
    return(client)
}