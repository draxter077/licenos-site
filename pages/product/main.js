import head from "./head/main.js"
import item from "./item/main.js"
import recommendations from "./recommendations/main.js"
import faq from "./faq/main.js"
import contact from "./contact/main.js"
import about from "./about/main.js"
import foot from "./foot/main.js"

import books from "../../books.js"

export default function product(id){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
            animation:siuyrw 0.5s linear 0s forwards 1;
        }
        @keyframes siuyrw{
            0%[opacity:0;]
            100%[opacity:1;]
        }`

    const product = cE("div", style)
    let b
    for(let i = 0; i < books.length; i++){if(books[i].id == id){b = books[i];break}}

    product.appendChild(head())
    product.appendChild(item(b))
    product.appendChild(recommendations())
    product.appendChild(contact())
    product.appendChild(faq())
    product.appendChild(about())
    product.appendChild(foot())
    return(product)
}