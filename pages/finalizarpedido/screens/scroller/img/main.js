export default function img(src){
    let style = `
        {
            height:80px;
        }`

    const img = cE('img', style)
    img.src = src
    return(img)
}