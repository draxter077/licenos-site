import signup from "./signup/main.js"
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
    forms.appendChild(signup())
    forms.appendChild(input("Email"))
    forms.appendChild(input("Senha"))
    return(forms)
}