import title from "./title/main.js"
import questions from "./questions/main.js"

export default function faq(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:70%;
            background:var(--colorBlue);
            border-radius:10px;
            padding:20px 30px;
            box-shadow:0px 0px 2px 1px var(--colorBlue);
        }
        :responsive{
            width:90%;
        }`

    const faq = cE("div", style)
    faq.id = "FAQ"
    faq.appendChild(title())
    faq.appendChild(questions())
    return(faq)
}