export default function pix(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            height:40px;
            font-size:22px;
            color:var(--colorBlack);
            background:var(--colorWhite);
            border-radius:5px;
            padding:5px;
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
    pix.title = "A chave Pix aparecerá automaticamente durante o processo de compra"
    pix.innerHTML = '<img style="height:100%;" src="./assets/elements/pix.png"/> Pix'
    return(pix)
}