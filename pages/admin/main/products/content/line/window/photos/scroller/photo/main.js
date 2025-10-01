export default function photo(src){
    let style = `
        {
            height:30vh;
            aspect-ratio:1;
            margin:5px;
            box-shadow:0px 0px 1px 0px var(--colorBlue);
            border-radius:5px;
        }`

    const photo = cE("img", style)
    photo.src = src
    return(photo)
}