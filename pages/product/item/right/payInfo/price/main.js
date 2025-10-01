export default function price(p){
    let style = `
        {
            font-size:36px;
            color:var(--colorWhite);
        }
        :responsive{
            font-size:27px;
        }`

    const price = cE("div", style)
    price.innerHTML = stringifyNumber(p)
    return(price)
}