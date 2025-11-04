export default function photos(f){
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
    photos.innerHTML = `Arquivo ${f.name} (${Math.floor(f.size/100000)/10}MB) selecionado`
    return(photos)
}