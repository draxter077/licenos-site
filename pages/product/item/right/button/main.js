export default function button(b){
    let style = `
        {
            display:flex;
            align-items:center;
            justify-content:center;
            width:50%;
            font-size:28px;
            height:48px;
            padding:10px 15px;
            border-radius:10px;
            background:var(--colorBlue);
            color:var(--colorWhite);
            cursor:pointer;
            transition:all 0.5s;
        }
        :hover{
            background:var(--colorWhite);
            color:var(--colorBlack);
        }
        :responsive{
            font-size:17px;
            height:37px;
            margin:40px 0px 0px;
            width:100%;
        }`

    const button = cE("button", style)
    button.innerHTML = "Comprar"

    button.addEventListener(
            "click",
            async () => {
                button.innerHTML = "<img style='height:100%;' src='https://portal.ufvjm.edu.br/a-universidade/cursos/grade_curricular_ckan_novo/loading.gif/@@images/image.gif'/>"
                let w = document.createElement("div")
                w.id = "walletBrick_container"
                w.style.opacity = 0
                w.style.height = 0
                w.style.width = 0
                document.body.appendChild(w)

                await axios.post(`${apiURL}/product/newOrder`, {product:b})
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

                        //https://licenos.com.br/failure?collection_id=null&collection_status=null&payment_id=null&status=null&external_reference=null&payment_type=null&merchant_order_id=null&preference_id=2918162130-a8450aab-468b-4af6-9d6c-9f67563065e2&site_id=MLB&processing_mode=aggregator&merchant_account_id=null
                    })
                    .catch(response => {
                        console.log(response)
                        let status = response.response.status
                        if(status == 502){alert("Ops! Mercado Livre fora do ar")}
                    })
            }
        )
    return(button)
}