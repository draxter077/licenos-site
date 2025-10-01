export default function value(v, t){
    let style = `
        {
            font-size:20px;
            color:var(--colorWhite);
            ${t == "Título" || t == "Descrição" || t == "Link" ? "width:40vw;" : "width:150px;"}
            ${t == "Link" ? "user-select:text;" : ""}
        }
        ::placeholder{
            font-style:italic;
            opacity:0.6;
            color:var(--colorWhite);
        }
        :responsive{
            font-size:15px;
            ${t == "Título" || t == "Descrição" || t == "Link" ? "width:70vw;" : "width:100px;"}
        }`

    let elem = "input"
    if(t == "Descrição"){elem ="textarea"}
    const value = cE(elem, style)
    value.rows = "1"
    if(t == "Descrição"){value.rows = "3"}
    value.value = v
    if(t == "Preço"){value.type = "number"}
    else if(t == "ID" || t == "Páginas" || t == "Link"){value.disabled = true}
    return(value)
}