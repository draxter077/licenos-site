export default function n(value){
    let style = `
        {
            font-size:25px;
            color:var(--colorBlack);
        }
        :responsive{
            font-size:17px;
        }`

    const n = cE("div", style)
    n.innerHTML = stringifyNumber(value)
    return(n)
}