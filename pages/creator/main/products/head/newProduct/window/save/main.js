import line from "../../../../content/line/main.js"
import window from "./window/main.js"

export default function save(){
    let style = `
        {
            font-size:20px;
            height:40px;
            color:var(--colorWhite);
            background:var(--colorBlue);
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
            height:36px;
        }`

    const save = cE("button", style)
    save.innerHTML = "Salvar"

    save.addEventListener(
        "click",
        async function a(e){
            e.target.disabled = true
            e.target.innerHTML = "<img style='height:100%;' src='https://portal.ufvjm.edu.br/a-universidade/cursos/grade_curricular_ckan_novo/loading.gif/@@images/image.gif'/>"

            let title = e.target.parentElement.children[2].children[0].children[1]
            let category = e.target.parentElement.children[2].children[1].children[1]
            let description = e.target.parentElement.children[2].children[2].children[1]
            let price = e.target.parentElement.children[2].children[3].children[1]
            let pages = e.target.parentElement.children[2].children[4].children[1]

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
            
            if(title.value.length == 0 || category.value.length == 0 || description.value.length == 0 || price.value.length == 0 || pages.value.length == 0
                 || title.value == undefined || category.value == undefined || description.value == undefined || price.value == undefined || pages.value == undefined){
                showWindow("Preencha todos os campos")
            }
            else{
                if(category.value != "Português" && category.value != "Redação"
                    && category.value != "História" && category.value != "Geografia"
                    && category.value != "Sociologia" && category.value != "Filosofia"
                    && category.value != "Ensino Religioso" && category.value != "Biologia"
                    && category.value != "Física" && category.value != "Química" && category.value != "Matemática"
                ){
                    showWindow("A matéria deve ser alguma destas: Português, Redação, História, Geografia, Sociologia, Filosofia, Ensino Religioso, Biologia, Física, Química ou Matemática")
                }
                else{
                    price = Math.round(Number(price.value)*100)/100
                    description = description.value.replaceAll("\n", "<br>")

                    await axios.post(apiURL + "/creator/addProduct", {title:title.value, category:category.value, description:description, price:price, pages:pages.value})
                        .then(r => {
                            showWindow("Produto salvo com ID " + r.data.id + ". Mais informações em seu e-mail")
                            e.target.parentElement.children[0].children[0].click()
                            let p = {
                                id:r.data.id,
                                title:title.value,
                                description:description,
                                price:price,
                                pages:pages
                            }
                            document.getElementById("root").children[0].children[0].children[4].children[2].appendChild(line(p))
                        })
                        .catch(r => alert("Algum problema foi encontrado"))
                }
            }

            e.target.disabled = false
            e.target.innerHTML = "Salvar"
        }
    )
    return(save)
}