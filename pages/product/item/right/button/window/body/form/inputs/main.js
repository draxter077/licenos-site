import input from "./input/main.js"

export default function inputs(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:50%;
        }
        :responsive{
            width:80%;
        }`

    const inputs = cE("div", style)
    inputs.appendChild(input("Nome"))
    inputs.appendChild(input("E-mail"))
    inputs.appendChild(input("Telefone"))
    return(inputs)
}