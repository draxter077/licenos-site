export default function link(t){
    let style = `
        {
            position:relative;
            font-size:20px;
            color:var(--colorWhite);
            margin:0px 20px;
            cursor:pointer;
            transition:all 0.5s;
        }
        :responsive{
            font-size:15px;
        }
        :hover{
            transform:translateY(10%);
            color:var(--colorYellow);
        }`

    const link = cE("div", style)
    link.innerHTML = t
    link.addEventListener("click", () => document.getElementById(t).scrollIntoView({behavior:"smooth"}))
    return(link)
}