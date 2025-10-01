export default function logo(){
    let style = `   
        {
            height:150px;
        }
        :responsive{
            width:30%;
            height:fit-content;
        }`

    const logo = cE("img", style)
    logo.src = "./assets/brand/logoname.png"
    return(logo)
}