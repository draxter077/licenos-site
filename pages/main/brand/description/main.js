export default function description(){
    let style = `
        {
            font-size:20px;
            color:var(--colorBlack);
            margin:20px 0px 0px 0px;
            text-align:center;
        }
        :responsive{
            font-size:14px;
        }`

    const description = cE("div", style)
    description.innerHTML = "Temos o material perfeito para transformar as suas aulas"
    return(description)
}