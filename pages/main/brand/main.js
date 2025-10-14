import title from "./title/main.js"
import description from "./description/main.js"

export default function brand(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
            background:var(--colorYellow);
            padding:7.5svh 10px;
            margin:5svh 0px;
            color:var(--colorBlack);
            opacity:0;
            animation:asjdf 0.5s linear 0.5s forwards 1;
        }
        @keyframes asjdf{
            0%[opacity:0]
            100%[opacity:1]
        }`

    const brand = cE("div", style)
    brand.appendChild(title())
    brand.appendChild(description())
    return(brand)
}