export default function config(){
    let style = `
        {
            height:30px;
            filter:invert(1);
            transition:transform 0.5s;
            cursor:pointer;
        }
        :hover{
            transform:rotate(90deg);
        }
        :responsive{
            height:20px;
        }`

    const config = cE("img", style)
    config.src = "./assets/elements/config.png"

    config.addEventListener(
        "click",
        function a(e){
            let confDiv = e.target.parentElement.parentElement.children[1]
            if(confDiv.style.maxHeight == "1000px"){confDiv.style.maxHeight = "0px"}
            else{confDiv.style.maxHeight = "1000px"}
        }
    )
    return(config)
}