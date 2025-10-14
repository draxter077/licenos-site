import window from "./window/main.js"

export default function save(c){
    let style = `
        {
            font-size:20px;
            height:40px;
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
            height:36px;
        }`

    const save = cE("button", style)
    save.innerHTML = "Salvar"

    save.addEventListener(
        "click",
        async function a(e){
            save.disabled = true
            save.innerHTML = "<img style='height:100%;' src='https://portal.ufvjm.edu.br/a-universidade/cursos/grade_curricular_ckan_novo/loading.gif/@@images/image.gif'/>"


            let infos = e.target.parentElement.children[1].children[0]
            let fee = infos.children[5]
            let afilliate = infos.children[6]
            let afilliatefee = infos.children[7]

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

            if(fee.value != c.fee || afilliate.value != c.afilliate || afilliatefee.value != c.afilliatefee){            
                await axios.post(apiURL + "/admin/changeCreatorData", {id:c.id, fee:fee.value, afilliate:afilliate.value, afilliatefee:afilliatefee.value})
                    .then(r => {
                        showWindow("Alterações salvas. Talvez seja preciso atualizar a página para que as alterações sejam mostradas nessa sessão")
                        e.target.parentElement.children[0].children[0].click()
                    })
                    .catch(r => showWindow("Algum problema foi encontrado"))
            }

            save.disabled = false
            save.innerHTML = "Salvar"
        }
    )
    return(save)
}