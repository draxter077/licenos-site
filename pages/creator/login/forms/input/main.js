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

    if(ph == "Telefone"){
        input.addEventListener(
            "input",
            function a(e){
                let v = e.target.value.replaceAll("(","").replaceAll(")","").replaceAll("-","").replaceAll(" ","")
                let nS = ""
                for(let i = 0; i < v.length; i++){
                    let c = v[i]
                    if(i == 0){nS += "("}
                    nS += c
                    if(i != v.length - 1){
                        if(i == 1){nS += ") "}
                        else if(i == 6){nS += "-"}
                    }
                    if(i > 10){break}
                    e.target.value = nS
                }
            }
        )
    }
    else if(ph == "Senha"){
        input.type = "password"
    }
    return(input)
}