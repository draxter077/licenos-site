export default function disclaimer(){
    let style = `
        {
            font-size:22px;
            color:var(--colorWhite);
            width:80%;
            text-align:center;
        }
        :responsive{
            font-size:17px;
            width:95%;
        }`

    const disclaimer = cE("div", style)
    disclaimer.innerHTML = "Aqui está seu QR Code PIX, que também foi enviado para seu e-mail, junto de um código 'copia e cola' (lembre-se de verificar sua caixa de spam)"
    return(disclaimer)
}