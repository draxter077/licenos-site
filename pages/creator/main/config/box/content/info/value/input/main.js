export default function input(ph, v){
    let style = `
        {
            font-size:20px;
            width:100%;
            padding:0px 5px;
            border-bottom:1px solid var(--colorBlue);
        }
        :responsive{
            font-size:15px;
        }`

    const input = cE("input", style)
    input.value = v
    if(ph == "Senha"){input.type = "password"}

    if(ph == "CNPJ"){
        input.addEventListener(
            "input",
            function a(e){
                let v = e.target.value.replaceAll(".","").replaceAll("-","").replaceAll("/","")
                let nS = ""
                for(let i = 0; i < v.length; i++){
                    let c = v[i]
                    nS += c
                    if(i != v.length - 1){
                        if(i == 1 || i == 4){nS += "."}
                        else if(i == 7){nS += "/"}
                        else if(i == 11){nS += "-"}
                    }
                    if(i > 13){break}
                    e.target.value = nS
                }
            }
        )
    }
    else if(ph == "Telefone"){
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
                        if(i == 2){nS += ") "}
                        else if(i == 7){nS += "-"}
                    }
                    if(i > 11){break}
                    e.target.value = nS
                }
            }
        )
    }
    return(input)
}