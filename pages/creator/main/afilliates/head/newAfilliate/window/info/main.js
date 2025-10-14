export default function info(u){
    let style = `
        {
            width:100%;
            height:40%;
            text-align:center;
            font-size:21px;
            margin:20px 0px 0px 0px;
        }
        >span{
            user-select:all;
        }
        :responsive{
            font-size:15px;
        }`

    const info = cE("div", style)
    info.innerHTML = `Para conquistar mais afiliados, envie este link: <span>https://www.licenos.com.br/criador?${u.id}</span><br>Vendas de criadores que criaram conta usando o seu link renderão uma porcentagem de lucro para você (valor mínimo de 2,5% e máximo de 20%)`
    return(info)
}