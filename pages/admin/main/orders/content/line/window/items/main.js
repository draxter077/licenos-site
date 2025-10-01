import item from "./item/main.js"

export default function items(o){
    let style = `
        {
            width:100%;
            height:100%;
            overflow-y:scroll;
        }`

    const items = cE("div", style)
    let is = o.items
    for(let i = 0; i < is.length; i++){items.appendChild(item(is[i], o))}
    return(items)
}