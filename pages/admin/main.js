import login from "./login/main.js"
import main from "./main/main.js"

export default function admin(data){
    let style = `
        {
            width:100%;
        }`

    const admin = cE("div", style)
    if(data == undefined){
        admin.appendChild(login())
    }
    else{
        admin.appendChild(main(data))
    }

    return(admin)
}