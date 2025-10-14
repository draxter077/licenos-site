import value from "./value/main.js"

export default function info(data){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            flex-wrap:wrap;
            width:100%;
        }
        :responsive{
            flex-direction:column;
        }`

    const info = cE("div", style)
    info.appendChild(value("Nome",data.name))
    info.appendChild(value("Email",data.email))
    info.appendChild(value("Telefone",data.phone))
    info.appendChild(value("Chave Pix",data.pix))
    info.appendChild(value("Senha",""))
    return(info)
}