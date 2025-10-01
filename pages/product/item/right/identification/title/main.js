export default function title(t){
    let style = `
        {
            font-size:32px;
            color:var(--colorWhite);
            text-align:right;
            width:100%;
            border-bottom:1px solid var(--colorYellow);
        }
        :responsive{
            font-size:23px;
        }`

    const title = cE("div", style)
    title.innerHTML = t
    return(title)
}