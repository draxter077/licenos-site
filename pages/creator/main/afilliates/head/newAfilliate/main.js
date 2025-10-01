import window from "./window/main.js"

export default function newAfilliate(u){
    let style = `
        {
            font-size:18px;
            padding:5px 10px;
            background:var(--colorYellow);
            color:var(--colorBlack);
            border-radius:5px;
            cursor:pointer;
            transition:background 0.5s;
        }
        :hover{
            background:var(--colorBlue);
        }
        :responsive{
            font-size:12px;
        }`

    const newAfilliate = cE("div", style)
    newAfilliate.innerHTML = "Adicionar"

    newAfilliate.addEventListener(
        "click",
        async function a(){
            let w = window(u)
            document.getElementById("root").appendChild(w)
            await new Promise(resolve => setTimeout(resolve, 100))
            w.style.transform = "scale(1)"
        }
    )
    return(newAfilliate)
}