import question from "./question/main.js"
import answer from "./answer/main.js"

export default function option(q, a){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
            margin:10px 0px;
            font-size:19px;
            color:var(--colorWhite);
        }
        :responsive{
            font-size:13px;
        }`

    const option = cE("div", style)
    option.appendChild(question(q))
    option.appendChild(answer(a))
    return(option)
}