export default function config(){
    let style = `
        {
            height:30px;
            filter:invert(1);
            transition:transform 0.5s;
            cursor:pointer;
        }
        :hover{
            transform:rotate(90deg);
        }
        :responsive{
            height:20px;
        }`

    const config = cE("img", style)
    config.src = "./assets/elements/config.png"
    return(config)
}