import window from "./window/main.js"

export default function newProduct(){
    let style = `
        {
            font-size:18px;
            padding:5px 10px;
            background:var(--colorYellow);
            color:var(--colorBlack);
            border-radius:5px;
            cursor:pointer;
            transition:background 0.5s;
        }
        :hover{
            background:var(--colorBlue);
        }
        :responsive{
            font-size:12px;
        }`

    const newProduct = cE("div", style)
    newProduct.innerHTML = "Adicionar"

    newProduct.addEventListener(
        "click",
        async function a(){
            const input = document.createElement("input")
            input.type = "file"
            input.name = "file"
            input.click()
            input.addEventListener("change", async function a(){
                const file = input.files[0]
                if(file != undefined){
                    if(file.size > 25000000 || file.type != "application/pdf"){
                        alert("O arquvo deve ser formato PDF e ter até 25MB. Comprima o arquivo e tente novamente")
                    }
                    else{
                        let w = window(file)
                        document.getElementById("root").appendChild(w)
                        await new Promise(resolve => setTimeout(resolve, 100))
                        w.style.transform = "scale(1)"
                    }
                }
            })
        }
    )
    return(newProduct)
}