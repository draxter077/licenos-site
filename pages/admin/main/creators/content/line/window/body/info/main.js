import data from "./data/main.js"

export default function info(c){
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
    info.appendChild(data("ID", c.id))
    info.appendChild(data("Nome", c.name))
    info.appendChild(data("Email", c.email))
    info.appendChild(data("Telefone", c.phone))
    info.appendChild(data("Chave Pix", c.pix))
    info.appendChild(data("Taxa Licenos", c.fee))
    info.appendChild(data("Afiliado", c.afilliate))
    info.appendChild(data("Taxa Afiliado", c.afilliatefee))
    return(info)
}