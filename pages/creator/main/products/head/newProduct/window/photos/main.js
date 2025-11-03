export default function photos(){
    let style = `
        {
            font-size:18px;
            color:var(--colorBlack);
        }
        >a{
            color:var(--colorBlue);
            font-weight:900;
        }
        :responsive{
            font-size:14px;
        }`

    const photos = cE("div", style)
    photos.innerHTML = `Envie o PDF do produto para o email contato@licenos.com.br, usando o título do produto como assunto.<br>O PDF deve ter até 25MB. Recomendamos compressão pela ferramenta <a href="https://www.ilovepdf.com/pt/comprimir_pdf" target="_blank">iLovePDF</a>`
    return(photos)
}