export default function img(t){
    let style = `
        {
            height:50px;
            margin:0px 15px 0px 0px;
            filter:invert(1);
        }
        :responsive{
            height:40px;
        }`

    const img = cE("img", style)
    img.src = `https://www.ph.net.br/assets/${t}.png`
    return(img)
}