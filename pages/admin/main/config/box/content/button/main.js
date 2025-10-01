import window from "./window/main.js"

export default function button(data){
    let style = `
        {
            font-size:20px;
            color:var(--colorWhite);
            background:var(--colorBlue);
            padding:5px 10px;
            border-radius:5px;
            cursor:pointer;
            transition:background 0.5s;
        }
        :hover{
            background:var(--colorOrange);
        }
        :responsive{
            font-size:15px;
        }`

    const button = cE("button", style)
    button.innerHTML = "Salvar"

    button.addEventListener(
        "click",
        async function a(e){
            e.target.disabled = true

            let password = e.target.parentElement.children[0].children[0].children[1].value

            async function showWindow(t){
                let w = window(t)
                document.getElementById("root").appendChild(w)
                await new Promise(resolve => setTimeout(resolve, 10))
                w.style.opacity = 1
                await new Promise(resolve => setTimeout(resolve, 5000))
                w.style.opacity = 0
                await new Promise(resolve => setTimeout(resolve, 550))
                document.getElementById("root").removeChild(w)
            }

            if(password != data.password && password != ""){
                await axios.post(apiURL + "/admin/post/changeAdminInfo", {password:password})
                    .then(r => {showWindow("Alteração salva")})
                    .catch(r => {showWindow("Nossos servidores estão em atualização. Aguarde alguns minutos para tentar novamente")})
            }

            e.target.disabled = false
        }
    )
    return(button)
}