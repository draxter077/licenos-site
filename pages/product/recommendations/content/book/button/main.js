export default function button(){
    let style = `
        {
            font-size:15px;
            padding:5px 10px;
            border-radius:5px;
            background:var(--colorWhite);
            color:var(--colorBlack);
            width:100%;
            cursor:pointer;
            transition:all 0.5s;
        }
        :responsive{
            font-size:12px;
        }`

    const button = cE("button", style)
    button.innerHTML = "Saiba mais"
    return(button)
}