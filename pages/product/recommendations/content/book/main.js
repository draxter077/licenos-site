import img from "./img/main.js"
import title from "./title/main.js"
import price from "./price/main.js"
import button from "./button/main.js"

export default function book(b){
    let style = `
        {
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            align-items:center;
            height:100%;
            width:201px;
            margin:0px 5px;
            padding:10px;
            box-shadow:0px 0px 2px 0px var(--colorWhite);
            border-radius:5px;
            cursor:pointer;
            transition:all 0.5s;
        }
        :responsive{
            min-width:150px;
        }
        :hover{
            transform:scale(1.05);
            box-shadow:0px 0px 2px 0px var(--colorYellow);
        }
        :hover>button{
            background:var(--colorYellow);
        }`

    const book = cE("a", style)
    book.id = b.id
    book.title = b.title
    book.href = `https://www.licenos.com.br/apostila?${b.id}_${b.title.replaceAll(" ","_")}`
    book.target = "_self"
    book.appendChild(img(b.src))
    book.appendChild(title(b.title))
    book.appendChild(price(b.price))
    book.appendChild(button())
    return(book)
}