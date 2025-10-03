import head from "./head/main.js"
import finance from "./finance/main.js"
import orders from "./orders/main.js"
import products from "./products/main.js"
import creators from "./creators/main.js"

export default function main(data){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
        }`

    const main = cE("div", style)
    main.appendChild(head())
    main.appendChild(finance(data.creators, data.orders, data.products))
    main.appendChild(orders(data.orders))
    main.appendChild(products(data.products))
    main.appendChild(creators(data.creators))
    return(main)
}