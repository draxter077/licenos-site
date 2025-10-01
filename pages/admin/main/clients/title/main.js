export default function title(){
    let style = `
        {
            font-size:28px;
            color:var(--colorWhite);
            border-right:1px solid var(--colorOrange);
            border-left:1px solid var(--colorOrange);
            padding:0px 10px;
            width:fit-content;
            margin:0px 0px 10px 20px;
        }
        :responsive{
            font-size:18px;
        }`

    const title = cE("div", style)
    title.innerHTML = "Clientes"
    return(title)
}