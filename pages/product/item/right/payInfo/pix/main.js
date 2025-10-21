export default function pix(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            height:40px;
            margin:0px 0px 0px 20px;
        }
        >img{
            margin:0px 10px 0px 0px;
        }
        :responsive{
            height:30px;
            font-size:15px;
        }`

    const pix = cE("div", style)
    pix.title = "Aceitamos pagamento por Pix e cartões de crédito"
    pix.innerHTML = '<img style="height:100%;" src="./assets/elements/pix.png"/> <img style="height:100%;" src="./assets/elements/creditcard.png"/>'
    return(pix)
}