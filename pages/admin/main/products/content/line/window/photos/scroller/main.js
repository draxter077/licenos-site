import photo from "./photo/main.js"

export default function scroller(srcs){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-around;
            min-width:100%;
        }`

    const scroller = cE("div", style)

    for(let i = 0; i < srcs.length; i++){scroller.appendChild(photo(srcs[i]))}
    return(scroller)
}