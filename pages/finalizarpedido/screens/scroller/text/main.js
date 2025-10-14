export default function text(t){
    let style = `
        {
            font-size:27px;
            color:var(--colorWhite);
            margin:2.5svh 0px 0px 0px;
            text-align:center;
        }
        :responsive{
            font-size:22px;
        }`

    const text = cE("div", style)
    text.innerHTML = t
    return(text)
}