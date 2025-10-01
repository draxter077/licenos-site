import window from "./window/main.js"

export default function submit(){
    let style = `
        {
            font-size:20px;
            padding:5px 10px;
            background:var(--colorYellow);
            color:var(--colorBlack);
            border-radius:5px;
            cursor:pointer;
            transition:background 0.5s;
        }
        :hover{
            background:var(--colorWhite);
        }`

    const submit = cE("button", style)
    submit.innerHTML = "Entrar"
    submit.addEventListener(
        "click",
        async function a(e){
            e.target.disabled = true

            let signupDiv = e.target.parentElement.parentElement.children[1].children[0].children[0]
            let name = signupDiv.children[0]
            let phoneNumber = signupDiv.children[1]
            let email = e.target.parentElement.parentElement.children[1].children[1]
            let password = e.target.parentElement.parentElement.children[1].children[2]

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
            
            if(e.target.innerHTML == "Entrar"){
                if(email.value.length == 0 || password.value.length == 0 || email.value == undefined || password.value == undefined){
                    showWindow("Preencha todos os campos")
                    inputError(email)
                    inputError(password)
                }
                else{
                    if(password.value == "esqueciminhasenha"){
                        await axios.post(apiURL + "/creator/forgotPassword", {email:email.value})
                            .then(r => {showWindow("Uma senha temporária foi enviada para o seu email")})
                            .catch(r => {
                                if(r.response.status == 404){
                                    showWindow("CNPJ não encontrado")
                                    inputError(cnpj)
                                }
                                else{
                                    showWindow("Nossos servidores estão em atualização. Aguarde alguns minutos para tentar novamente")
                                }
                            })
                    }
                    else{
                        await axios.post(apiURL + "/creator/log", {email:email.value, password:password.value})
                            .then(r => {construct({page:"creator", data:r.data})})
                            .catch(r => {
                                if(r.response.status == 404){
                                    showWindow("Email não encontrado")
                                    inputError(email)
                                }
                                else if(r.response.status == 403){
                                    showWindow("Senha incorreta. Digite 'esqueciminhasenha' no campo senha para receber uma temporária")
                                    inputError(password)
                                }
                                else{
                                    showWindow("Nossos servidores estão em atualização. Aguarde alguns minutos para tentar novamente")
                                }
                            })
                    }
                }
            }
            else{
                if(name.value.length == 0 || phoneNumber.value.length == 0 || email.value.length == 0 || password.value.length == 0 || name.value == undefined || phoneNumber.value == undefined || email.value == undefined || password.value == undefined){
                    showWindow("Preencha todos os campos")
                    inputError(name)
                    inputError(phoneNumber)
                    inputError(email)
                    inputError(password)
                }
                else{
                    let afilliateID = window.location.href.split("criador?")[1]
                    await axios.post(apiURL + "/creator/sign", {name:name.value, phoneNumber:phoneNumber.value, email:email.value, password:password.value, afilliateID:afilliateID})
                        .then(r => {construct({page:"creator", data:r.data})})
                        .catch(r => {
                            if(r.response.status == 409){
                                showWindow("Email já vinculado a uma conta")
                                inputError(email)
                            }
                            else{
                                showWindow("Nossos servidores estão em atualização. Aguarde alguns minutos para tentar novamente")
                            }
                        })
                }
            }
            
            e.target.disabled = false
        }
    )
    return(submit)
}