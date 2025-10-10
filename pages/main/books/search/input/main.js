export default function input(){
    let style = `
        {
            font-size:20px;
            padding:2px 10px;
            margin:0px 0px 15px 0px;
            width:50%;
            padding:5px 10px;
            border-bottom:1px solid var(--colorYellow);
            color:var(--colorWhite);
        }
        :responsive{
            font-size:15px;
            width:80%;
        }
        ::placeholder{
            font-style:italic;
            color:var(--colorWhite);
            opacity:0.5;
        }`

    const input = cE("input", style)
    input.placeholder = "Pesquise apostilas..."

    function a(e){
        let v = e.target.value
        let books = e.target.parentElement.parentElement.children[2].children
        for(let i = 0; i < books.length; i++){
            let b = books[i]
            if(b.title.toLowerCase().includes(v.toLowerCase())){b.style.display = "flex"}
            else{b.style.display = "none"}
            if(v.length == 0){b.style.display = "flex"}
        }
    }
    input.addEventListener("input", (e) => a(e))
    input.addEventListener("click", (e) => a(e))
    return(input)
}