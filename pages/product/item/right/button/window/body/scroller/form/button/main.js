import window from "./window/main.js"

export default function button(b){
    let style = `
        {
            font-size:17px;
            color:var(--colorBlack);
            padding:5px 10px;
            border-radius:5px;
            background:var(--colorWhite);
            cursor:pointer;
            transition:all 0.5s;
        }
        :responsive{
            font-size:14px;
        }
        :hover{
            transform:translateX(5%);
        }`

    const button = cE("button", style)
    button.innerHTML = "Confirmar pedido"

    button.addEventListener(
        "click",
        async (e) => {
            e.target.disabled = true
            e.target.innerHTML = "Carregando"

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
                ipt.style.borderBottom = "1px solid var(--colorBlue)"
            }

            let forms = e.target.parentElement.children[1].children
            let name = forms[0]
            let email = forms[1]
            let phone = forms[2]
            if(name.value.length == 0 || email.value.length == 0 || phone.value.length == 0 || name.value == undefined || email.value == undefined || phone.value == undefined){
                showWindow("Preencha todos os campos")
                inputError(name)
                inputError(email)
                inputError(phone)
            }
            else if(!(email.value.includes("@gmail.com") || email.value.includes("@hotmail.com") || email.value.includes("@outlook.com") || email.value.includes("@yahoo.com") || email.value.includes("@uol.com"))){
                showWindow("Insira um e-mail válido")
                inputError(email)
            }
            else if(phone.value.length < 15){
                showWindow("Insira seu telefone corretamente")
                inputError(phone)
            }
            else{
                await axios.post(apiURL + "/main/post/newOrder", {fileID:b.id, fileTitle:b.title, fileAuthor:b.author, filePrice:b.price, buyerName:name.value, buyerMail:email.value, buyerPhone:phone.value})
                    .then(r => {
                        let pixWindow = e.target.parentElement.parentElement.children[1]
                        pixWindow.children[1].src = `https://api.qrserver.com/v1/create-qr-code/?data=${r.data.pixCode}&amp;size=150x150`
                        //pixWindow.children[2].innerHTML = r.data.pixCode
                        
                        e.target.parentElement.parentElement.style.transform = "translateX(-50%)"
                    })
                    .catch(r => {
                        if(r.response.status == 404){
                            showWindow("Estamos com um problema na geração do pagamento. Aguarde alguns minutos para tentar novamente")
                            inputError(cnpj)
                        }
                        else{
                            showWindow("Nossos servidores estão em atualização. Aguarde alguns minutos para tentar novamente")
                        }
                    })
            }

            e.target.innerHTML = "Confirmar pedido"
            e.target.disabled = false
        }
    )
    return(button)
}