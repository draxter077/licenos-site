import img from "../img/main.js"
import text from "../text/main.js"

export default function error(orderid){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:33%;
            padding:0px 10px;
        }`

    const error = cE("div", style)
    error.appendChild(img("https://static.vecteezy.com/system/resources/thumbnails/017/178/563/small_2x/cross-check-icon-symbol-on-transparent-background-free-png.png"))
    error.appendChild(text(`Pedido #${orderid}`))
    error.appendChild(text(`Ops! Algo errado aconteceu`))
    error.appendChild(text(`O suporte enviou um e-mail de ajuda para você`))
    error.appendChild(text(`Verifique sua caixa de spam`))
    return(error)
}