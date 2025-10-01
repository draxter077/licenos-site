export default function title(){
    let style = `
        {
            font-size:32px;
            color:var(--colorWhite);
            text-align:left;
            width:fit-content;
            margin:0px 0px 2.5svh 0px;
            padding:2px 5px;
        }
        :responsive{
            font-size:21px;
        }`

    const title = cE("div", style)
    title.innerHTML = "➜ Conheça nossas apostilas"
    return(title)
}