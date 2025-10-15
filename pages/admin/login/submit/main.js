import window from "./window/main.js"

export default function submit(){
    let style = `
        {
            font-size:20px;
            height:40px;
            padding:5px 10px;
            background:var(--colorBlue);
            color:var(--colorWhite);
            border-radius:5px;
            cursor:pointer;
            transition:all 0.5s;
        }
        :hover{
            background:var(--colorWhite);
            color:var(--colorBlack);
        }`

    const submit = cE("button", style)
    submit.innerHTML = "Entrar"

    submit.addEventListener(
        "click",
        async function a(e){
            e.target.disabled = true
            e.target.innerHTML = "<img style='height:100%;' src='https://portal.ufvjm.edu.br/a-universidade/cursos/grade_curricular_ckan_novo/loading.gif/@@images/image.gif'/>"

            let user = e.target.parentElement.children[1].children[0]
            let password = e.target.parentElement.children[1].children[1]
            
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

            async function inputError(ipt){
                ipt.style.borderBottom = "1px solid red"
                await new Promise(resolve => setTimeout(resolve, 550))
                ipt.style.borderBottom = "1px solid var(--colorYellow)"
            }

            if(user.value.length == 0 || password.value.length == 0
                || user.value == undefined || password.value == undefined){
                showWindow("Preencha todos os campos")
                inputError(user)
                inputError(password)
            }
            else{
                await axios.post(apiURL + "/admin/login", {user:user.value, password:password.value})
                    .then(r => {construct({page:"admin", data:r.data})})
                    .catch(r => {
                        if(r.response.status == 404){
                            showWindow("Dados incorretos")
                            inputError(user)
                            inputError(password)
                        }
                        else{
                            showWindow("Nossos servidores estão em atualização. Aguarde alguns minutos para tentar novamente")
                        }
                    })
            }

            e.target.disabled = false
            e.target.innerHTML = "Entrar"
        }
    )

    return(submit)
}