export default function name(){
    let style = `
        {
            font-size:40px;
            color:var(--colorYellow);
        }
        :responsive{
            font-size:25px;
        }`

    const name = cE("div", style)
    name.innerHTML = "LICENOS"
    return(name)
}