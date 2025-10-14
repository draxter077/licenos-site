import value from "./value/main.js"

export default function finance(cs, os, ps){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-around;
            align-items:center;
            width:80%;
            margin:2.5vh 0px;
        }
        :responsive{
            width:100%;
        }`

    const finance = cE("div", style)
    let monthYear = datetime(os[os.length - 1].time).date.slice(3,10)

    let sales = 0, revenue = 0
    for(let i = 0; i < os.length; i++){
        let o = os[i]
        if(datetime(o.time).date.slice(3,10) == monthYear){
            for(let j = 0; j < ps.length; j++){
                let p = ps[j]
                if(o.product == p.id){
                    for(let k = 0; k < cs.length; k++){
                        if(p.creator == cs[k].id){
                            sales += o.price
                            revenue += o.price*(cs[k].fee - cs[k].afilliatefee)
                            break
                        }
                    }
                    break
                }
            }
        }
    }

    finance.appendChild(value(`Faturamento ${monthYear}`, sales))
    finance.appendChild(value(`Lucro ${monthYear}`, revenue))
    return(finance)
}