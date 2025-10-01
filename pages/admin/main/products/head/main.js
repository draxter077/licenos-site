import search from "./search/main.js"

export default function head(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            align-items:center;
            width:100%;
        }`

    const head = cE("div", style)
    head.appendChild(search())
    return(head)
}