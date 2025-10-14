export default function answer(a){
    let style = `
        {
            width:90%;
            border-left:1px solid var(--colorWhite);
            padding:0px 0px 0px 10px;
            margin:5px 0px 0px 0px;
            text-align:justify;
        }`

    const answer = cE("div", style)
    answer.innerHTML = a
    return(answer)
}