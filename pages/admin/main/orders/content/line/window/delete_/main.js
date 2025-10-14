import window from "./window/main.js"

export default function delete_(o){
    let style = `
        {
            font-size:20px;
            height:40px;
            color:var(--colorWhite);
            background:red;
            padding:5px 10px;
            border-radius:5px;
            width:fit-content;
            cursor:pointer;
            transition:background 0.5s;
        }
        :responsive{
            font-size:16px;
            height:36px;
        }`

    const delete_ = cE("button", style)
    delete_.innerHTML = "Excluir"

    delete_.addEventListener(
        "click",
        async () => {
            delete_.disabled = true
            delete_.innerHTML = "<img style='height:100%;' src='https://portal.ufvjm.edu.br/a-universidade/cursos/grade_curricular_ckan_novo/loading.gif/@@images/image.gif'/>"

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

            await axios.post(apiURL + "/product/updates", {src:"licenos", action:"deleteOrder", orderID:o.id})
                .then(r => {
                    showWindow("Pedido excluído. Recarregue a página para ver as alterações")
                })
                .catch(r => showWindow("Algum problema foi encontrado"))

            delete_.innerHTML = "Excluir"
            delete_.disabled = false
        }
    )
    return(delete_)
}