export default function title(){
    let style = `
        {
            font-size:30px;
            color:var(--colorWhite);
            margin:0px 0px 10px 0px;
        }
        :responsive{
            font-size:21px;
        }`

    const title = cE("div", style)
    title.innerHTML = "Você também vai gostar"
    return(title)
}