export default function button(){
    let style = `
        {
            font-size:21px;
            color:var(--colorWhite);
            cursor:pointer;
            transition:transform 0.5s;
        }
        :hover{
            transform:rotate(180deg);
        }`

    const button = cE("button", style)
    button.innerHTML = "✕"
    button.addEventListener(
        "click",
        async (e) => {
            e.target.parentElement.parentElement.style.transform = "translateX(-110%)"
            await new Promise(resolve => setTimeout(resolve, 550))
            document.getElementById('root').removeChild(e.target.parentElement.parentElement)
            document.body.style.overflow = "scroll"
        }
    )
    return(button)
}