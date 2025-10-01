import content from "./content/main.js"

export default function signup(){
    let style = `
        {
            width:100%;
            height:fit-content;

            max-height:0px;
            overflow:hidden;
            transition:max-height 0.5s;
        }`

    const signup = cE("div", style)
    signup.appendChild(content())
    return(signup)
}