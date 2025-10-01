import head from "./head/main.js"
import config from "./config/main.js"
import finance from "./finance/main.js"
import orders from "./orders/main.js"
import products from "./products/main.js"
import afilliates from "./afilliates/main.js"

export default function client(data){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
        }`

    const client = cE("div", style)
    client.appendChild(head())
    client.appendChild(config(data.user))
    client.appendChild(finance(data.user, data.orders, data.products, data.afilliates))
    client.appendChild(orders(data.user, data.orders, data.products, data.afilliates))
    client.appendChild(products(data.orders, data.products))
    client.appendChild(afilliates(data.user, data.afilliates))
    return(client)
}