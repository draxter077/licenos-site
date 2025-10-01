export default function price(p){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:flex-end;
            font-size:25px;
            color:var(--colorWhite);
        }
        >h1{
            font-size:15px;
            margin:0px 5px 3px 0px;
        }
        >h2{
            font-size:15px;
            margin:0px 0px 10px 0px;
        }`

    const price = cE("div", style)
    let stringPrice = stringifyNumber(p)
    let r$ = stringPrice.split(" ")[0]
    let integer = stringPrice.split(" ")[1].split(",")[0]
    let float = stringPrice.split(" ")[1].split(",")[1]
    price.innerHTML = `<h1>${r$}</h1>${integer}<h2>${float}</h2>`
    return(price)
}