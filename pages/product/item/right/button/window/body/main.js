import scroller from "./scroller/main.js"

export default function body(b){
    let style = `
        {
            width:100%;
            height:100%;
            overflow-x:hidden;
        }`
    
    const body = cE("div", style)
    body.appendChild(scroller(b))
    return(body)
}