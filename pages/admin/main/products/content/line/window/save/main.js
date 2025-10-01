import window from "./window/main.js"

export default function save(p){
    let style = `
        {
            font-size:20px;
            color:var(--colorWhite);
            background:var(--colorOrange);
            padding:5px 10px;
            border-radius:5px;
            width:fit-content;
            cursor:pointer;
            transition:background 0.5s;
        }
        :hover{
            background:var(--colorBlack);
        }
        :responsive{
            font-size:16px;
        }`

    const save = cE("div", style)
    save.innerHTML = "Salvar"

    save.addEventListener(
        "click",
        async function a(e){
            let revenue = e.target.parentElement.children[2].children[5].children[1]

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

            revenue = (Math.round(Number(revenue.value.replaceAll("%","").replaceAll(",",".").replaceAll(" ",""))*100)/100)/100
            
            if(revenue != p.revenue){                
                await axios.post(apiURL + "/admin/post/changeProductInfo", {id:p.id, revenue:revenue})
                    .then(r => {
                        showWindow("Alterações salvas. Talvez seja preciso atualizar a página para que as alterações sejam mostradas nessa sessão")
                        e.target.parentElement.children[0].children[0].click()
                    })
                    .catch(r => alert("Algum problema foi encontrado"))
            }
        }
    )
    return(save)
}