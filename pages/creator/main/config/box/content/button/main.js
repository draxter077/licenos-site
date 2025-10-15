import window from "./window/main.js"

export default function button(data){
    let style = `
        {
            font-size:20px;
            height:40px;
            color:var(--colorWhite);
            background:var(--colorBlue);
            padding:5px 10px;
            border-radius:5px;
            cursor:pointer;
            transition:background 0.5s;
        }
        :hover{
            background:var(--colorBlack);
        }
        :responsive{
            font-size:15px;
            height:35px;
        }`

    const button = cE("button", style)
    button.innerHTML = "Salvar"

    button.addEventListener(
        "click",
        async function a(e){
            e.target.disabled = true
            e.target.innerHTML = "<img style='height:100%;' src='https://portal.ufvjm.edu.br/a-universidade/cursos/grade_curricular_ckan_novo/loading.gif/@@images/image.gif'/>"

            let name = e.target.parentElement.children[0].children[0].children[1].value
            let email = e.target.parentElement.children[0].children[1].children[1].value
            let phone = e.target.parentElement.children[0].children[2].children[1].value
            let pix = e.target.parentElement.children[0].children[3].children[1].value
            let password = e.target.parentElement.children[0].children[4].children[1].value

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

            let tempName = name.toLowerCase().split(" ")
            name = ""
            for(let i = 0; i < tempName.length; i++){
                if(i > 0){name += " "}
                name += String(tempName[i]).charAt(0).toUpperCase() + String(tempName[i]).slice(1)
            }
            if(name != data.name || email != data.email || phone != data.phone || pix != data.pix || (password != data.password && password != "")){
                if(password == ""){password = data.password}
                await axios.post(apiURL + "/creator/changeCreatorData", {name:name, email:email.toLowerCase(), phone:phone, pix:pix, password:password})
                    .then(r => {showWindow("Alteração salva")})
                    .catch(r => {showWindow("Nossos servidores estão em atualização. Aguarde alguns minutos para tentar novamente")})
            }

            e.target.disabled = false
            e.target.innerHTML = "Salvar"
        }
    )
    return(button)
}