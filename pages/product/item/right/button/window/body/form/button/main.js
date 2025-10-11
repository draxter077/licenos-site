import window from "./window/main.js"

export default function button(b){
    let style = `
        {
            display:flex;
            align-items:center;
            justify-content:center;
            font-size:17px;
            height:37px;
            color:var(--colorBlack);
            padding:10px 15px;
            border-radius:5px;
            background:var(--colorWhite);
            cursor:pointer;
            transition:all 0.5s;
        }
        :responsive{
            font-size:14px;
            height:34px;
        }
        :hover{
            transform:translateX(5%);
        }`

    const button = cE("button", style)
    button.innerHTML = "Ir para pagamento"

    button.addEventListener(
        "click",
        async (e) => {
            e.target.disabled = true

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
                button.innerHTML = "<img style='height:100%;' src='https://portal.ufvjm.edu.br/a-universidade/cursos/grade_curricular_ckan_novo/loading.gif/@@images/image.gif'/>"
                let w = document.createElement("div")
                w.id = "walletBrick_container"
                w.style.opacity = 0
                w.style.height = 0
                w.style.width = 0
                document.body.appendChild(w)

                await axios.post(`${apiURL}/product/newOrder`, {product:b, buyer:{name:name.value, email:email.value, phoneNumber:phone.value}})
                    .then(async resposta => {
                        const publicKey = "APP_USR-f596c9c8-5df7-4ede-9df2-70ef05d3b44c";
                        const preferenceId = resposta.data.preferenceID;
                        const mp = new MercadoPago(publicKey);
                        const bricksBuilder = mp.bricks();
                        const renderWalletBrick = async (bricksBuilder) => {
                            await bricksBuilder.create("wallet", "walletBrick_container", {
                                initialization:{
                                    preferenceId:preferenceId,
                                }
                            })
                        }
                        await renderWalletBrick(bricksBuilder)
                        await new Promise(r => setTimeout(r, 500))
                        document.body.children[5].children[0].children[0].children[0].children[0].children[0].children[0].click()
                    })
                    .catch(response => {
                        console.log(response)
                        let status = response.response.status
                        if(status == 502){alert("Ops! Mercado Livre fora do ar")}
                    })
            }

            e.target.innerHTML = "Ir para pagamento"
            e.target.disabled = false
        }
    )
    return(button)
}