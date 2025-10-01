export default function bye(){
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

    const bye = cE("div", style)
    bye.innerHTML = "Assim que seu pagamento for reconhecido, você receberá a sua apostila em seu WhatsApp.<br>Quaisquer dúvidas, reclamações ou sugestões, entre em contato pelos links que estão disponíveis ao longo dessa página e no e-mail enviado."
    return(bye)
}