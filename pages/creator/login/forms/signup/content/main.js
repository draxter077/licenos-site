import input from "../../input/main.js"

export default function content(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:100%;
            height:fit-content;
        }`

    const content = cE("div", style)
    content.appendChild(input("Nome"))
    content.appendChild(input("Telefone"))
    return(content)
}