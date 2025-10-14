import head from "./head/main.js"
import brand from "./brand/main.js"
import books from "./books/main.js"
import faq from "../_common/faq/main.js"
import contact from "../_common/contact/main.js"
import about from "../_common/about/main.js"
import foot from "../_common/foot/main.js"

export default function main(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
        }`

    const main = cE("div", style)
    main.appendChild(head())
    main.appendChild(brand())
    main.appendChild(books())
    main.appendChild(faq())
    main.appendChild(contact())
    main.appendChild(about())
    main.appendChild(foot())
    return(main)
}