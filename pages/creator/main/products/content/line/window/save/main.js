import window from "./window/main.js"

export default function save(p){
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

            let infos = e.target.parentElement.children[1].children[1]
            let title = infos.children[1]
            let description = infos.children[2]
            let price = infos.children[3]

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

            price = Math.round(Number(price.value)*100)/100
            description = description.value.replaceAll("\n", "<br>")
            
            if(title.value != p.title || price != p.price || description != p.description){                
                await axios.post(apiURL + "/creator/changeProductInfo", {id:p.id, title:title.value, price:price, description:description})
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