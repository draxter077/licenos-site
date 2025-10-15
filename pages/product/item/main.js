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
        >span{
            width:100%;
            height:100%;
            display:flex;
            align-items:center;
            justify-content:center;
            text-align:center;
            border:1px solid var(--colorWhite);
            border-radius:10px;
            color:var(--colorWhite);
        }
        :responsive{
            flex-direction:column;
            height:fit-content;
        }`

    const product = cE("div", style)
    if(b == undefined){
        product.innerHTML = "<span>Produto indisponível :(<br>Aguarde alguns instantes e tente novamente</span>"
    }
    else{
        product.appendChild(left(b.id))
        product.appendChild(right(b))
    }
    return(product)
}