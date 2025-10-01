export default function search(){
    let style = `
        {
            width:100%;
            padding:0px 5px;
            color:var(--colorWhite);
            border-bottom:1px solid var(--colorOrange);
            margin:20px 0px 0px;
            font-size:20px;
        }
        ::placeholder{
            font-style:italic;
            opacity:0.8;
        }
        :responsive{
            font-size:15px;
        }`

    const search = cE("input", style)
    search.placeholder = "Pesquise"

    search.addEventListener(
        "input",
        function a(e){
            let value = search.value
            let orders = e.target.parentElement.children[2].children
            for(let i = 0; i < orders.length; i++){
                let o = orders[i]
                if(o.innerHTML.includes(value)){
                    o.style.display = "flex"
                }
                else{o.style.display = "none"}
            }
        }
    )
    return(search)
}