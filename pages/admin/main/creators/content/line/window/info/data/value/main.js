export default function value(v){
    let style = `
        {
            font-size:22px;
            color:var(--colorWhite);
        }
        :responsive{
            font-size:15px;
        }`

    const value = cE("div", style)
    value.innerHTML = v
    return(value)
}