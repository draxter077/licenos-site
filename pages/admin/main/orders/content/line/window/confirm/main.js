import window from "./window/main.js"

export default function confirm(){
    let style = `
        {
            font-size:20px;
            color:var(--colorWhite);
            background:var(--colorBlack);
            padding:5px 10px;
            border-radius:5px;
            width:fit-content;
            cursor:pointer;
            transition:background 0.5s;
        }
        :hover{
            background:var(--colorBlue);
        }
        :responsive{
            font-size:16px;
        }`

    const confirm = cE("button", style)
    confirm.innerHTML = "Finalizar"
    return(confirm)
}