export default function input(ph, v){
    let style = `
        {
            font-size:20px;
            width:100%;
            padding:0px 5px;
            border-bottom:1px solid var(--colorOrange);
        }
        :responsive{
            font-size:15px;
        }`

    const input = cE("input", style)
    input.value = v
    if(ph == "Senha"){input.type = "password"}
    return(input)
}