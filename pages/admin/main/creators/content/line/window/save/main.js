import window from "./window/main.js"

export default function save(c){
    let style = `
        {
            font-size:20px;
            color:var(--colorWhite);
            background:var(--colorBlack);
            padding:5px 10px;
            border-radius:5px;
            width:fit-content;
            cursor:pointer;
            transition:background 0.5s;
        }
        :hover{
            background:var(--colorBlue);
        }
        :responsive{
            font-size:16px;
        }`

    const save = cE("button", style)
    save.innerHTML = "Salvar"

    save.addEventListener(
        "click",
        async function a(e){
            e.target.disabled = true

            let infos = e.target.parentElement.children[1]
            let name = infos.children[1]
            let email = infos.children[2]
            let phonenumber = infos.children[3]
            let fee = infos.children[4]
            let afilliate = infos.children[5]
            let afilliatefee = infos.children[6]

            async function showWindow(t){
                let w = window(t)
                document.getElementById("root").appendChild(w)
                await new Promise(resolve => setTimeout(resolve, 10))
                w.style.opacity = 1
                await new Promise(resolve => setTimeout(resolve, 5000))
                w.style.opacity = 0
                await new Promise(resolve => setTimeout(resolve, 550))
                document.getElementById("root").removeChild(w)
            }

            if(name.value != c.name || email.value != c.email || phonenumber.value != c.phonenumber
                || fee.value != c.fee || afilliate.value != c.afilliate || afilliatefee.value != c.afilliatefee){            
                await axios.post(apiURL + "/admin/changeCreatorData", {id:c.id, name:name.value, email:email.value, phonenumber:phonenumber.value, fee:fee.value, afilliate:afilliate.value, afilliatefee:afilliatefee.value})
                    .then(r => {
                        showWindow("Alterações salvas. Talvez seja preciso atualizar a página para que as alterações sejam mostradas nessa sessão")
                        e.target.parentElement.children[0].children[0].click()
                    })
                    .catch(r => alert("Algum problema foi encontrado"))
            }

            e.target.disabled = false
        }
    )
    return(save)
}