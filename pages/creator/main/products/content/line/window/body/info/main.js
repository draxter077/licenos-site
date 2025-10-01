import data from "./data/main.js"

export default function info(p){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-around;
            align-items:center;
            flex-wrap:wrap;
            width:100%;
            height:100%;
            overflow-y:scroll;
        }
        :responsive{
            height:50%;
        }`

    const info = cE("div", style)
    info.appendChild(data("ID", p.id))
    info.appendChild(data("Título", p.title))
    info.appendChild(data("Descrição", p.description.replaceAll("<br>", "\n")))
    info.appendChild(data("Preço", p.price))
    info.appendChild(data("Páginas", p.pages))
    info.appendChild(data("Link", `https://www.licenos.com.br/produto?${p.id}_${p.title.replaceAll(" ", "_")}`))
    return(info)
}