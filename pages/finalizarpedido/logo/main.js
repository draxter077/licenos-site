export default function logo(){
    let style = `
        {
            height:120px;
            margin:0px 0px 7.5svh 0px;
        }
        :responsive{
            height:80px;
            margin:0px 0px 5svh 0px;
        }`

    const logo = cE("img", style)
    logo.src = "./assets/brand/logoname.png"
    return(logo)
}