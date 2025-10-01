export default function input(ph){
    let style = `
        {
            width:100%;
            font-size:18px;
            color:var(--colorWhite);
            padding:2px 5px;
            border-bottom:1px solid var(--colorYellow);
            margin:10px 0px;
            transition:border-bottom 0.5s;
        }
        ::placeholder{
            font-style:italic;
        }`

    const input = cE("input", style)
    input.placeholder = ph

    if(ph == "Senha"){
        input.type = "password"
    }
    return(input)
}