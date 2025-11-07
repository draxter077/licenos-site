import window from "./window/main.js"

export default function save(file){
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
                await new Promise(resolve => setTimeout(resolve, 10000))
                w.style.opacity = 0
                await new Promise(resolve => setTimeout(resolve, 550))
                document.getElementById("root").removeChild(w)
            }
            
            if(title.value.length == 0 || category.value.length == 0 || description.value.length == 0 || price.value.length == 0 || pages.value.length == 0
                 || title.value == undefined || category.value == undefined || description.value == undefined || price.value == undefined || pages.value == undefined){
                showWindow("Preencha todos os campos")
            }
            else{
                category.value = category.value.replaceAll(" ","")
                if(category.value == "EnsinoReligioso"){category.value = "Ensino Religioso"}
                
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
                        .then(async r => {
                            showWindow("Arquivo em processamento")

                            let p = {
                                id:r.data.id,
                                title:title.value,
                                description:description,
                                price:price,
                                pages:pages
                            }

                            const formData = new FormData()
                            formData.append("file", file)
                            await axios.post(apiURL + '/creator/uploadNewProduct', formData, {headers:{'Content-Type': 'multipart/form-data', 'fileID':r.data.id}})
                                .then(resolve => {
                                    e.target.parentElement.children[0].children[0].click()
                                    showWindow("Produto salvo com ID " + r.data.id + ". Ele aparecerá aqui assim que passar pela aprovação")
                                })
                                .catch(response => {console.log(response);showWindow("Houve uma falha no processamento do arquivo. Tente novamente mais tarde")})
                        })
                        .catch(r => {console.log(r);showWindow("Houve uma falha no processamento do arquivo. Tente novamente mais tarde")})
                }
            }

            e.target.disabled = false
            e.target.innerHTML = "Salvar"
        }
    )
    return(save)
}