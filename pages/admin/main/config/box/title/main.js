export default function title(){
    let style = `
        {
            font-size:28px;
            color:var(--colorBlue);
            width:100%;
            padding:0px 5px;
            margin:0px 0px 2.5vh 0px;
        }
        :responsive{
            font-size:22px;
        }`

    const title = cE("div", style)
    title.innerHTML = "Configurações"
    return(title)
}