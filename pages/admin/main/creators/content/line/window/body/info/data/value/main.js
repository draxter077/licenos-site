export default function value(v, t){
    let style = `
        {
            font-size:20px;
            color:var(--colorWhite);
            ${t == "Nome" || t == "Email" || t == "Chave Pix" ? "width:40vw;" : "width:150px;"}
        }
        ::placeholder{
            font-style:italic;
            opacity:0.6;
            color:var(--colorWhite);
        }
        :responsive{
            font-size:15px;
            ${t == "Nome" || t == "Email" || t == "Chave Pix" ? "width:70vw;" : "width:100px;"}
        }`

    let elem = "input"
    const value = cE(elem, style)
    value.rows = "1"
    value.value = v
    if(t == "Taxa Licenos" || t == "Taxa Afiliado"){value.type = "number"}
    else if(t == "ID" || t == "Nome" || t == "Email" || t == "Telefone" || t == "Chave Pix"){value.disabled = true}
    return(value)
}