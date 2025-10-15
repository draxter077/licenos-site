import head from "./head/main.js"
import finance from "./finance/main.js"
import orders from "./orders/main.js"
import products from "./products/main.js"
import creators from "./creators/main.js"
import buyers from "./buyers/main.js"
import contact from "../../common/contact/main.js"
import foot from "../../common/foot/main.js"

export default function main(data){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
        }`

    const main = cE("div", style)
    let logProducts = []
    let pdts = data.products
    let cs = data.creators
    for(let i = 0; i < pdts.length; i++){
        let p = pdts[i]
        let c
        for(let j = 0; j < cs.length; j++){if(cs[j].id == p.creator){c = cs[j];break}}
        logProducts.push(
            {
                id:p.id,
                src:`./assets/face/${p.id}.png`,
                title:p.title,
                description:p.description,
                author:c.name,
                pages:p.pages,
                price:p.price
            }
        )
    }
    console.log(logProducts)

    main.appendChild(head())
    main.appendChild(finance(data.creators, data.orders, data.products))
    main.appendChild(orders(data.orders, data.buyers))
    main.appendChild(products(data.products))
    main.appendChild(creators(data.creators))
    main.appendChild(buyers(data.buyers))
    main.appendChild(contact())
    main.appendChild(foot())
    return(main)
}