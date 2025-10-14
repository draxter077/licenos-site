import title from "./title/main.js"
import search from "./search/main.js"
import content from "./content/main.js"

export default function books(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:90%;
            margin:7.5vh 0px;
            opacity:0;
            animation:ergbd 0.5s linear 1s forwards 1;
        }
        @keyframes ergbd{
            0%[opacity:0]
            100%[opacity:1]
        }
        :responsive{
            width:95%;
            margin:2.5vh 0px;
        }`

    const books = cE("div", style)
    books.id = "Apostilas"
    books.appendChild(title())
    books.appendChild(search())
    books.appendChild(content())
    return(books)
}