import line from "./line/main.js"

export default function content(os, bs){
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
    os = os.reverse()
    for(let i = 0; i < os.length; i++){
        let b
        for(let j = 0; j < bs.length; bs++){
            if(bs[j].id == os[i].buyer){b = bs[j]; break}
        }
        content.appendChild(line(os[i], b))
    }
    return(content)
}