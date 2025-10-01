export default function title(t){
    let style = `
        {
            font-size:13px;
            color:var(--colorOrange);
        }
        :responsive{
            font-size:10px;
        }`

    const title = cE("div", style)
    title.innerHTML = t
    return(title)
}