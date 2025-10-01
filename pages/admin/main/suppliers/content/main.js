import line from "./line/main.js"

export default function content(ss){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:100%;
            height:35svh;
            overflow-y:scroll;
        }
        :responsive{
            overflow-x:scroll;
        }`

    const content = cE("div", style)
    for(let i = 0; i < ss.length; i++){content.appendChild(line(ss[i]))}
    return(content)
}