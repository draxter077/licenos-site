import logo from "./logo/main.js"
import screens from "./screens/main.js"

export default function main(orderid){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            width:100%;
            height:100svh;

            opacity:0;
            animation:qwre 0.5s linear 0.5s 1 forwards;
        }
        @keyframes qwre{
            0%[opacity:0]
            100%[opacity:1]
        }`

    const main = cE("div", style)
    main.appendChild(logo())
    main.appendChild(screens(orderid))
    return(main)
}