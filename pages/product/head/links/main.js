import link from "./link/main.js"

export default function links(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
        }`

    const links = cE("div", style)
    links.appendChild(link("FAQ"))
    links.appendChild(link("Contato"))
    links.appendChild(link("Sobre"))
    return(links)
}