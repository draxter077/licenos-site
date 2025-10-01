export default function sample(id){
    let style = `
        {
            width:100%;
            height:100%;
            background:var(--colorYellow);
            box-shadow:0px 0px 2px 0px var(--colorYellow);
            border-radius:10px;
            padding:2px;
        }`
    
    const sample = cE("iframe", style)
    sample.src = `https://docs.google.com/viewer?url=https://www.licenos.com.br/assets/preview/${id}.pdf&embedded=true`
    return(sample)
}