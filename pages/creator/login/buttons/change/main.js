export default function change(){
    let style = `
        {
            position:relative;

            font-size:18px;
            color:var(--colorWhite);
            padding:2px 5px;
            cursor:pointer;
        }
        ::after{
            position:absolute;
            bottom:0%;
            left:0%;
            content:"";
            width:0%;
            height:1px;
            background:var(--colorYellow);
            transition:width 0.5s;
        }
        :hover::after{
            width:100%;
        }`

    const change = cE("div", style)
    change.innerHTML = "Criar conta"

    change.addEventListener(
        "click",
        function a(e){
            let signupDiv = e.target.parentElement.parentElement.children[1].children[0]
            let submitButton = e.target.parentElement.children[0]
            if(e.target.innerHTML == "Criar conta"){
                e.target.innerHTML = "Entrar em uma conta"
                submitButton.innerHTML = "Criar"
                signupDiv.style.maxHeight = "1000px"
            }
            else{
                e.target.innerHTML = "Criar conta"
                submitButton.innerHTML = "Entrar"
                signupDiv.style.maxHeight = "0px"
            }
        }
    )
    return(change)
}