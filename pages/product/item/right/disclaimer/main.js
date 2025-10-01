export default function disclaimer(c){
    let style = `
        {
            height:40%;
            width:85%;
            color:var(--colorWhite);
            font-size:18px;
            overflow-y:scroll;
            text-align:justify;
            padding:10px;
            background:rgb(255,255,255,0.2);
            border-radius:5px;
        }
        :responsive{
            height:20svh;
            font-size:12px;
            margin:20px 0px 40px;
        }`

    const disclaimer = cE("div", style)
    disclaimer.innerHTML = c
    return(disclaimer)
}