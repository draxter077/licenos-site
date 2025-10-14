import loading from "./loading/main.js"
import confirmed from "./confirmed/main.js"
import error from "./error/main.js"

export default function scroller(orderid){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            width:300%;
            transition:opacity 0.5s;
        }`

    const scroller = cE("div", style)
    scroller.appendChild(loading(orderid))
    scroller.appendChild(confirmed(orderid))
    scroller.appendChild(error(orderid))

    window.addEventListener(
        "load",
        async () => {
            await axios.post(`${apiURL}/product/updates`, {src:"licenos", action:"endOrder", orderID:orderid})
                .then(async r => {
                    scroller.style.opacity = 0
                    await new Promise(r => setTimeout(r, 600))
                    scroller.style.transform = "translateX(-33%)"
                    scroller.style.opacity = 1
                })
                .catch(async r => {
                    scroller.style.opacity = 0
                    await new Promise(r => setTimeout(r, 600))
                    scroller.style.transform = "translateX(-66%)"
                    scroller.style.opacity = 1
                }) 
        }
    )
    return(scroller)
}