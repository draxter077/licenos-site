import option from "./option/main.js"

export default function questions(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:100%;
        }`

    const questions = cE("div", style)
    questions.appendChild(option("Como receberei meu produto?", "Ele será enviado para o WhatsApp que você indicar no momento da compra assim que seu pagamento for reconhecido (pode levar até 24 horas)"))
    questions.appendChild(option("Como realizo a compra?", "Ao clicar em 'Saiba mais', você abrirá uma janela com informações do produto e um formulário de compra, contendo um PIX. Assim que confirmar o pedido, receberá um e-mail com todas as informações dele"))
    questions.appendChild(option("Há reembolso?", "Caso o produto já tenha sido enviado, o reembolso não é mais possível. Caso contrário, contate-nos"))
    return(questions)
}