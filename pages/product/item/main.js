import left from "./left/main.js"
import right from "./right/main.js"

export default function product(b){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-between;
            width:90%;
            height:600px;
            margin:5vh 0px;
        }
        :responsive{
            flex-direction:column;
            height:fit-content;
        }`

    const product = cE("div", style)
    product.appendChild(left(b.id))
    product.appendChild(right(b))
    return(product)
}