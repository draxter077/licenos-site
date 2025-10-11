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
    disclaimer.innerHTML = "Para completar o pedido, insira seu nome, e-mail e telefone. Essas informações são necessárias para podermos enviar o PDF da apostila para você e entrar em contato caso algo dê errado."
    return(disclaimer)
}