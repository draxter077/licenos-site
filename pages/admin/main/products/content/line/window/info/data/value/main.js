export default function value(v, t){
    let style = `
        {
            font-size:20px;
            color:var(--colorWhite);
            ${t == "Título" || t == "Observação" ? "width:40vw;" : "width:150px;"}
        }
        ::placeholder{
            font-style:italic;
            opacity:0.6;
            color:var(--colorWhite);
        }
        :responsive{
            font-size:15px;
            ${t == "Título" || t == "Observação" ? "width:70vw;" : "width:100px;"}
        }`

    let elem = "input"
    if(t == "Título" || t == "Observação"){elem ="textarea"}
    const value = cE(elem, style)
    value.rows = "1"
    if(t == "Título" || t == "Observação"){value.rows = "3"}
    value.value = v
    if(t == "Preço da unidade" || t == "Estoque"){value.type = "number"}
    if(t != "Margem de lucro"){value.disabled = true}
    return(value)
}