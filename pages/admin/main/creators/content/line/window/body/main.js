import info from "./info/main.js"

export default function body(c){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-between;
            width:95%;
            height:90%;
        }
        :responsive{
            flex-direction:column;
        }`

    const body = cE("div", style)
    body.appendChild(info(c))
    return(body)
}