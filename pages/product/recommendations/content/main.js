import books from "../../../../books.js"
import book from "./book/main.js"

export default function content(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            overflow-x:scroll;
            width:100%;
            height:40svh;
            padding:10px 0px;
        }`

    const content = cE("div", style)
    for(let i = 0; i < books.length; i++){content.appendChild(book(books[books.length - i - 1]))}
    return(content)
}