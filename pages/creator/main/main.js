import head from "./head/main.js"
import config from "./config/main.js"
import finance from "./finance/main.js"
import orders from "./orders/main.js"
import products from "./products/main.js"
import afilliates from "./afilliates/main.js"
import contact from "../../_common/contact/main.js"
import foot from "../../_common/foot/main.js"

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
    main.appendChild(config(data.user))
    main.appendChild(finance(data.user, data.orders, data.products, data.afilliates))
    main.appendChild(orders(data.user, data.orders, data.products, data.afilliates))
    main.appendChild(products(data.orders, data.products))
    main.appendChild(afilliates(data.user, data.afilliates))
    main.appendChild(contact())
    main.appendChild(foot())
    return(main)
}