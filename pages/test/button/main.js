export default function button(){
    let style = `
        {
            padding: 5px 10px;
            border-radius: 5px;
            background: blue;
            transition: background 0.5s;
            color: white;
            font-weight: 900;
            margin: 0px 0px 0px 10px;
        }
        :hover{
            background: black;
        }`
        
    const button = cE("button", style)
    button.innerHTML = "Upload"
    button.onclick = function a(){
        const input = document.createElement("input")
        input.type = "file"
        input.name = "file"
        input.click()
        input.addEventListener("change", async function a(){
            const formData = new FormData();
            const file = input.files[0]
            console.log(file)
            if(file.size > 25000000 || file.type != "application/pdf"){console.log("Teria sido rejeitado")}
            if(file != undefined){
                formData.append("file", file);
                //await axios.post(apiURL+'/creator/test', formData, {headers:{'Content-Type': 'multipart/form-data'}})
                //    .then(resolve => console.log("foi"))
                //    .catch(response => console.log(response.response.data))
                let a = new Blob([file])
                console.log(await a.arrayBuffer())
            }
            else{window.alert("Nenhum arquivo selecionado!")}
        })
    }
    return(button)
}