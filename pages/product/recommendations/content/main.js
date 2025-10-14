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
    for(let i = 0; i < 20; i++){
        let k = Math.floor((Math.random())*books.length)
        content.appendChild(book(books[k]))
    }
    return(content)
}