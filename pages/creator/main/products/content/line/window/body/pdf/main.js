export default function pdf(id){
    let style = `
        {
            width:50%;
            height:100%;
            background:var(--colorYellow);
            box-shadow:0px 0px 2px 0px var(--colorYellow);
            border-radius:10px;
            padding:2px;
        }
        :responsive{
            height:50%;
            width:80%;
        }`
    
    const pdf = cE("iframe", style)
    pdf.src = `https://docs.google.com/viewer?url=https://www.licenos.com.br/assets/preview/${id}.pdf&embedded=true`
    return(pdf)
}