export default function input(t){
    let style = `
        {
            width:100%;
            border-bottom:1px solid var(--colorBlue);
            padding:5px 10px;
            font-size:17px;
            color:var(--colorWhite);
            margin:5px 0px;
            transition:border-bottom 0.5s;
        }
        :responsive{
            font-size:14px;
        }
        :hover,:focus{
            border-bottom:1px solid var(--colorYellow) !important;
        }
        ::placeholder{
            font-style:italic;
            color:var(--colorWhite);
        }`

    const input = cE("input", style)
    input.placeholder = t
    if(t == "Telefone"){
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
    return(input)
}