export default function logout(){
    let style = `
        {
            height:29px;
            filter:invert(1);
            transition:transform 0.5s;
            cursor:pointer;
        }
        :hover{
            transform:translateX(20%);
        }
        :responsive{
            height:20px;
        }`

    const logout = cE("img", style)
    logout.src = "./assets/elements/logout.png"

    logout.addEventListener("click" , () => window.open("/", "_self"))
    return(logout)
}