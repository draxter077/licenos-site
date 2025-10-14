export default function photo(){
    let style = `
        {
            width:30%;
            box-shadow:0px 0px 5px 0px var(--colorBlack);
            border-radius:5px;
        }
        :responsive{
            width:50%;
        }`

    const photo = cE("img", style)
    photo.src = "./assets/brand/logoname.png"
    return(photo)
}