import input from "./input/main.js"

export default function forms(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:30%;
            padding:5vh;
        }
        :responsive{
            width:100%;
        }`
    
    const forms = cE("div", style)
    forms.appendChild(input("Usuário"))
    forms.appendChild(input("Senha"))
    return(forms)
}