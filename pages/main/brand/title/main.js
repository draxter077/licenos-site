export default function title(){
    let style = `
        {
            font-size:35px;
            color:var(--colorBlack);
            text-align:center;
            font-weight:600;
        }
        :responsive{
            font-size:28px;
        }`

    const title = cE("div", style)
    title.innerHTML = "Criado por professores.<br>Feito para professores."
    return(title)
}