import logo from "./logo/main.js"
import forms from "./forms/main.js"
import buttons from "./buttons/main.js"

export default function login(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            width:100%;
            height:100svh;
            animation:qfscsd 0.5s linear 0s forwards 1;
        }
        @keyframes qfscsd{
            0%[opacity:0;]
            100%[opacity:1;]
        }`

    const login = cE("div", style)
    login.appendChild(logo())
    login.appendChild(forms())
    login.appendChild(buttons())
    return(login)
}