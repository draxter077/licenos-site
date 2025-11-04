import button from "./button/main.js"

export default function test(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:center;
            width:100%;
            height:100svh;
        }`

    const test = cE("div", style)
    test.appendChild(button())
    return(test)
}