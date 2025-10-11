import button from "./button/main.js"

export default function head(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:flex-end;
            width:100%;
            height:fit-content;
        }`

    const head = cE("div", style)
    head.appendChild(button())
    return(head)
}