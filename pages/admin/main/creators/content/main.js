import line from "./line/main.js"

export default function content(cs){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:100%;
            max-height:35svh;
            overflow-y:scroll;
        }
        :responsive{
            overflow-x:scroll;
        }`

    const content = cE("div", style)
    for(let i = 0; i < cs.length; i++){content.appendChild(line(cs[i]))}
    return(content)
}