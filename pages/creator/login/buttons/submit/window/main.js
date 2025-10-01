export default function window(t){
    let style = `
        {
            position:fixed;
            bottom:5%;
            left:5%;

            max-width:80%;
            font-size:18px;
            color:var(--colorBlack);
            padding:5px 10px;
            background:var(--colorWhite);
            box-shadow:0px 0px 5px 0px var(--colorBlue);
            border-radius:5px;
            opacity:0;
            transition:opacity 0.5s;
        }
        :responsive{
            font-size:12px;
        }`

    const window = cE("div", style)
    window.innerHTML = t
    return(window)
}