export default function photos(){
    let style = `
        {
            font-size:18px;
            color:var(--colorBlack);
        }
        :responsive{
            font-size:14px;
        }`

    const photos = cE("div", style)
    photos.innerHTML = "Envie o PDF do produto para o email contato@licenos.com.br, com o título do produto como assunto"
    return(photos)
}