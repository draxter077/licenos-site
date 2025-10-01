import title from "./title/main.js"
import links from "./links/main.js"

export default function head(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-around;
            width:100%;
            padding:10px;
            animation:whbas 0.5s linear 0s forwards 1;
        }
        @keyframes whbas{
            0%[opacity:0; transform:translateY(25%)]
            100%[opacity:1; transform:translateY(0%)]
        }
        :responsive{
            flex-direction:column;
        }`

    const head = cE("div", style)
    head.appendChild(title())
    head.appendChild(links())

    window.addEventListener(
        "load",
        () => {
            head.style.opacity = 1
            head.style.transform = "translateX(0%)"
        },
        {once:true}
    )
    return(head)
}