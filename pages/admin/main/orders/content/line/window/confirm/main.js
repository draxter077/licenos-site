import window from "./window/main.js"

export default function confirm(o){
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

    const confirm = cE("button", style)
    confirm.innerHTML = "Finalizar"

    confirm.addEventListener(
        "click",
        async (e) => {
            confirm.disabled = true
            confirm.innerHTML = "<img style='height:100%;' src='https://portal.ufvjm.edu.br/a-universidade/cursos/grade_curricular_ckan_novo/loading.gif/@@images/image.gif'/>"

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

            await axios.post(apiURL + "/product/updates", {src:"licenos", action:"endOrder", orderID:o.id})
                .then(r => {
                    showWindow("Pedido enviado. Recarregue a página para ver as alterações")
                    e.target.parentElement.children[0].children[0].click()
                })
                .catch(r => showWindow("Algum problema foi encontrado"))

            confirm.innerHTML = "Finalizar"
            confirm.disabled = false
        }
    )
    return(confirm)
}