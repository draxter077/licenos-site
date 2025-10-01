import window from "./window/main.js"

export default function button(b){
    let style = `
        {
            width:50%;
            font-size:28px;
            padding:10px 15px;
            border-radius:10px;
            background:var(--colorBlue);
            color:var(--colorWhite);
            cursor:pointer;
            transition:all 0.5s;
        }
        :hover{
            background:var(--colorWhite);
            color:var(--colorBlack);
        }
        :responsive{
            font-size:17px;
            margin:40px 0px 0px;
            width:100%;
        }`

    const button = cE("button", style)
    button.innerHTML = "Comprar"

    button.addEventListener(
            "click",
            async () => {
                let w = window(b)
                document.body.style.overflow = "hidden"
                document.getElementById("root").appendChild(w)
                await new Promise(resolve => setTimeout(resolve, 5))
                w.style.transform = "translateX(0%)"
            }
        )
    return(button)
}