import data from "./data/main.js"

export default function info(f){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-around;
            align-items:center;
            flex-wrap:wrap;
            width:100%;
            height:40%;
            overflow-y:scroll;
        }`

    const info = cE("div", style)
    info.appendChild(data("Título", f.name.replace(".pdf", "")))
    info.appendChild(data("Matéria", ""))
    info.appendChild(data("Descrição", ""))
    info.appendChild(data("Preço", "1234,50"))
    info.appendChild(data("Páginas", "123"))
    return(info)
}