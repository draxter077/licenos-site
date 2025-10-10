export default function button(b){
    let style = `
        {
            width:50%;
            font-size:28px;
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
            margin:40px 0px 0px;
            width:100%;
        }`

    const button = cE("button", style)
    button.innerHTML = "Comprar"

    button.addEventListener(
            "click",
            async () => {
                let w = document.createElement("div")
                w.id = "walletBrick_container"
                w.style.opacity = 0
                document.getElementById("root").appendChild(w)

                await axios.post(`${apiURL}/product/newOrder`, {product:b})
                    .then(resposta => {
                        console.log(resposta.data)
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
                        renderWalletBrick(bricksBuilder)
                        w.click()
                        w.onsubmit()
                    })
                    .catch(response => {
                        console.log(response.response)
                        let status = response.response.status
                        if(status == 502){alert("Ops! Mercado Livre fora do ar")}
                    })
            }
        )
    return(button)
}