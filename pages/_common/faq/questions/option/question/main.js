export default function question(q){
    let style = `
        {
            width:100%;
        }`

    const question = cE("div", style)
    question.innerHTML = q
    return(question)
}