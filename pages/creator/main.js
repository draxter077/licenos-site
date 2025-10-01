import login from "./login/main.js"
import main from "./main/main.js"

export default function creator(data){
    let style = `
        {
            width:100%;
        }`

    const creator = cE("div", style)
    if(data == undefined){
        //creator.appendChild(login())
        construct({page:"creator", data:{
            user:templateUser0Data,
            orders:templateOrdersData,
            products:templateProductsData,
            afilliates:[templateUser1Data]
        }})
    }
    else{
        axios.defaults.headers.common["userAuth"] = data.user.id
        creator.appendChild(main(data))
    }
    return(creator)
}