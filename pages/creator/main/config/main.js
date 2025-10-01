import box from "./box/main.js"

export default function config(data){
    let style = `
        {
            width:80%;
            height:fit-content;
            margin:2.5vh 0px 0px 0px;
            max-height:0px;
            overflow:hidden;
            transition:max-height 0.5s;
        }
        :responsive{
            width:95%;
        }`

    const config = cE("div", style)
    config.appendChild(box(data))
    return(config)
}