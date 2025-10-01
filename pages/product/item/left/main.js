import disclaimer from "./disclaimer/main.js"
import sample from "./sample/main.js"

export default function left(id){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:25%;
            height:100%;
        }
        :responsive{
            width:95%;
            height:50svh;
        }`

    const left = cE("div", style)
    left.appendChild(disclaimer())
    left.appendChild(sample(id))
    return(left)
}