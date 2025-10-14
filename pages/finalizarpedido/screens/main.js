import scroller from "./scroller/main.js"

export default function screens(orderid){
    let style = `
        {
            width:100%;
        }`

    const screens = cE("div", style)
    screens.appendChild(scroller(orderid))
    return(screens)
}