export default function title(t){
    let style = `
        {
            font-size:12px;
            color:var(--colorWhite);
        }
        :responsive{
            font-size:9px;
        }`

    const title = cE("div", style)
    title.innerHTML = t
    return(title)
}