import main from "./pages/main/main.js"
import product from "./pages/product/main.js"
import creator from "./pages/creator/main.js"
import admin from "./pages/admin/main.js"

window.cE = function cE(t, stl){
    function addClass(){
        function randomName(names){
            const chars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
                            "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
            let name = ""
            while(true){
                for(let k = 0; k < 5; k++){
                    let n = Math.floor((chars.length)*Math.random())
                    name += chars[n]
                }
                for(let l = 0; l < names.length; l++){
                    if(name == names[l]){
                        name = ""
                        break
                    }
                }
                if(name != ""){
                    break
                }
            }
            return(name)
        }

        // Formata os styles já adicionados à tag style
        let stylesTag = document.getElementsByTagName("style")[0].innerHTML
        let styles = stylesTag
                        .replaceAll("\n", "")
                        .replaceAll("  ", "")
                        .split("}") // Retorna array com elementos do tipo .nome{atr: value,...
        // Formata o style do argumento
        let stylesGotten = stl.split("}") // Retorna array com elementos do tipo {atr: value,...
        stl = stylesGotten[0] + "}" // O primeiro estilo tem a chave fechada
        let style = stylesGotten[0]
                        .replaceAll("\n", "")
                        .replaceAll("  ", "")
                        .replace("{", "")
                        .replace("}", "")
                        .split(";") // Retorna uma array com elementos 'atr: value', ....
        // Cria e popula arrays relevantes
        let stylesNames = []
        let stylesNamesObject = []
        let styleAtr = []
        // Adiciona o nome e os atributos dos styles criados
        for(let i = 0; i < styles.length; i++){
            let s = styles[i].split("{") // Divide em nome e atributos os estilos da tag
            let n = s[0]
            let b = s[1]
            if(n[0] == "."){
                stylesNames.push(n) // adiciona a uma lista de nomes de estilos já criados se não for um estilo de tag html
            }
            if(b != undefined && b != ""){
                let bs = b.split(";")
                let atrValues = []
                for(let j = 0; j < bs.length; j++){
                    let ats = bs[j].split(": ")
                    if(ats[0] != undefined && ats[0] != ""){
                        atrValues.push([ats[0], ats[1]])
                    }
                }
                stylesNamesObject.push([n, atrValues]) // Adiciona a uma lista de estilos o nome e sua lista de atributos, formatada acima
            }
        }
        // Adiciona os atributos do style do argumento
        for(let j = 0; j < style.length; j++){
            let s = style[j].split(": ")
            if (s[0] != ""){
                styleAtr.push([s[0], s[1]]) // Cria uma lista com os atributos do estilo fornecido
            }
        }
        // Verifica se existe algum estilo com os mesmos atributos
        let className = ""
        for(let k = 0; k < stylesNamesObject.length; k++){ // Para cada estilo já criado, verifica se pode reutilizar o nome
            let sN = stylesNamesObject[k]
            let es = 0;
            for(let l = 0; l < sN[1].length; l++){
                let atrN = sN[1][l][0]
                let atrA = sN[1][l][1]
                for(let m = 0; m < styleAtr.length; m++){
                    if(styleAtr[m][0] == atrN && styleAtr[m][1] == atrA){
                        es += 1
                        break
                        }
                }
            }   
            if(es == styleAtr.length && es == sN[1].length){
                className = sN[0].replace(".", "")
                break
            }
        }

        if(t == "root"){
            document.getElementsByTagName("style")[0].innerHTML += `.${className}${stl.replaceAll("\n", "").replaceAll("  ","")}`
            for(let p = 1; p < stylesGotten.length; p++){
                let inst = stylesGotten[p]
                let insN = inst.split("{")[0].replaceAll("\n", "").replaceAll("  ", "")
                let insA = inst.split("{")[1]
                if(insA != undefined){document.getElementsByTagName("style")[0].innerHTML += `${insN}{${insA.replaceAll("\n", "").replaceAll("  ","")}}`}
            }
        }
        // Caso não tenha adicionado nome (ou seja, não foi encontrado estilo com atributos similares), adiciona-se
        else if(className == ""){
            className = randomName(stylesNames)
            document.getElementsByTagName("style")[0].innerHTML += `.${className}${stl.replaceAll("\n", "").replaceAll("  ","")}`
            for(let p = 1; p < stylesGotten.length; p++){
                let inst = stylesGotten[p]
                let insN = inst.split("{")[0].replaceAll("\n", "").replaceAll("  ", "")
                let insA = inst.split("{")[1]
                if(insN == ":responsive"){
                    document.getElementsByTagName("style")[0].innerHTML += `@media screen and (max-width: 1000px){.${className}{${insA.replaceAll("\n", "").replaceAll("  ","")}}}`
                }
                else if(insN.split(" ")[0] == "@keyframes"){ // Em vez de { e }, será usado [ e ] no argumento
                    document.getElementsByTagName("style")[0].innerHTML += `${insN}{${insA.replaceAll("\n", "").replaceAll("  ","").replaceAll("[", "{").replaceAll("]", "}")}}`
                }
                else if(insN != undefined && insN != ""){
                    document.getElementsByTagName("style")[0].innerHTML += `.${className}${insN}{${insA.replaceAll("\n", "").replaceAll("  ","")}}`
                }
            }
        }
        return(className)
    }

    const el = document.createElement(t)
    if(stl != undefined){
        el.className = addClass()
    }
    return(el)
}

window.construct = function construct(d){
    const root = document.getElementById("root")
    root.innerHTML = ""
    if(d == undefined){
        if(window.location.href.split("br/")[1] != undefined && window.location.href.split("br/")[1] != ""){
            let path = window.location.href.split("br/")[1]
            if(path.split("?")[0] == "produto"){
                root.appendChild(product(path.split("?")[1].split("_")[0]))
            }
            if(path == "criador"){
                root.appendChild(creator())
            }
            else if(path == "admin"){
                root.appendChild(admin())
            }
            else{
                root.appendChild(main())
            }
        }
        else{
            root.appendChild(main())
        }
    }
    else{
        if(d.page == "creator"){root.appendChild(creator(d.data))}
        if(d.page == "admin"){root.appendChild(admin(d.data))}
    }
}

window.apiURL = "https://ace-chimp-merry.ngrok-free.app/licenos"

axios.defaults.headers.common["ngrok-skip-browser-warning"] = "69420"
document.getElementsByTagName("head")[0].appendChild(document.createElement("style"))
cE("root", `html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big, 
    cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,
    dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article, 
    aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,
    time,mark,audio,video,button,input,textarea{
        display:block;
        background:none;
        margin:0px;
        padding:0px;
        border:none;
        font-size:100%;
        font:inherit;
        vertical-align:baseline;
        text-decoration:none;
        font-weight:none;
        outline: none;
        -webkit-tap-highlight-color: transparent;
        box-sizing: border-box;
    }
    span{display:inline-block;}
    input:focus, button:focus{outline: none;border: auto;}
    button{cursor: pointer;}
    body {line-height: 1.3;}
    ol, ul {list-style: none;}
    blockquote, q {quotes: none;}
    blockquote:before, blockquote:after, q:before, q:after {content: '';content: none;}
    table {border-collapse: collapse;border-spacing: 0;}
    :root{
    	--colorWhite:rgb(210, 210, 210);
    	--colorBlack:rgb(20,30,45);
        --colorBlue:rgb(80,130,190);
        --colorYellow:rgb(244,227,44);
    	--transitionTime:0.5s;
    	--animationDelay0:0s;
    }
    body{
    	box-sizing:border-box;
    	font-family:"Montserrat";
    	background:var(--colorBlack);
    	cursor:default;
	    user-select:none;
    }
    ::-webkit-scrollbar{
    	height:3px;
        width:3px;
    	background:none;
    }
    ::-webkit-scrollbar-track{
        background:none;
    	margin:0px;
    }
    ::-webkit-scrollbar-thumb{
        background:var(--colorBlue);
        border-radius:20px;
    }
    ::-webkit-scrollbar-button{
        height:0px;
	    width:0px;
    	background:none;
        padding:0px;
        margin:0px;
    }`)

window.stringifyNumber = function stringifyNumber(n){
    let numberParts = n.toString().split(".")
    let integerPart = numberParts[0]
    integerPart = integerPart.split("").reverse().join(""); // 1234 => 4321, para ficar mais fácil adicionar os pontos nas centenas
    let newIntegerPart = "", newFractionalPart = ""    
        
    for(let i = 0; i < integerPart.length; i++){
        newIntegerPart += integerPart[i]
        if((i + 1)%3 == 0 && i != integerPart.length - 1 && n > 0){newIntegerPart += "."}
    }
    
    if(numberParts.length > 1){ // Verifica se há casa decimal
        newFractionalPart = (Math.floor(Number("0." + numberParts[1])*100)).toString() // Formata para dois algarismos significativos
        if(newFractionalPart.length == 1){newFractionalPart = "0" + newFractionalPart} // Adciona o zero a esquerda caso menor do que 10
    }
    else{newFractionalPart = "00"} // Não havendo, atribui 00
        
    return(`R$ ${newIntegerPart.split("").reverse().join("")},${newFractionalPart}`)
}

window.datetime = function datetime(ms){
    const dat = new Date(ms)
    let day = dat.getDate()
    let month = dat.getMonth()
    let year = dat.getFullYear()
    let newDay, newMonth

    if(day < 10){newDay = "0" + day}
    else{newDay = day}

    if(month < 9){newMonth = "0" + (month + 1)}
    else{newMonth = month + 1}

    let date = `${newDay}/${newMonth}/${year}`

    let hour = dat.getHours()
    let minutes = dat.getMinutes()
    let newHour, newMinute

    if(hour < 10){newHour = "0" + hour}
    else{newHour = hour}

    if(minutes < 10){newMinute = "0" + minutes}
    else{newMinute = minutes}

    let time = `${newHour}:${newMinute}`

    return({date:date, time:time})
}




window.templateUser0Data = {
    id:"c123",
    name:"Licenos Licenos",
    email:"contato@licenos.com.br",
    phonenumber:"(41) 99999-9999",
    password:"1234321",
    fee:0.6,
    afilliate:"",
    afilliatefee:0
}

window.templateUser1Data = {
    id:"c124",
    name:"Rodrigo Licenos",
    email:"rodrigo@licenos.com.br",
    phonenumber:"(41) 99999-9999",
    password:"1234321",
    fee:0.6,
    afilliate:"c123",
    afilliatefee:0.1
}

window.templateBuyerData = {
    id:"b123",
    name:"Buyer Licenos",
    email:"contato@licenos.com.br",
    phonenumber:"(41) 99999-9999"
}

window.templateProductsData = [
    {
        id:"p123",
        creator:"c123",
        title:"Produto número 1",
        description:"Alguma coisa alguma coisa alguma coisa",
        price:11.5,
        pages:350,
    },
    {
        id:"p124",
        creator:"c124",
        title:"Produto número 2",
        description:"Alguma coisa alguma coisa alguma coisa",
        price:11.75,
        pages:350,
    }
]

window.templateOrdersData = [
    {
        id:"o123",
        status:"Finalizada",
        buyer:"b123",
        product:"p123",
        price:11.5,
        time:123785321
    },
    {
        id:"o124",
        status:"Finalizada",
        buyer:"b123",
        product:"p124",
        price:11.75,
        time:123785321
    }
]
    
construct()