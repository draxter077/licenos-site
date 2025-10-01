import value from "./value/main.js"

export default function finance(u, os, ps, afs){
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
    let monthYear = "00/00"
    if(os.length > 0){
        monthYear = datetime(os[os.length - 1].time).date.slice(3,10)
    }

    let sales = 0
    for(let i = 0; i < os.length; i++){
        let o = os[i]
        if(datetime(o.time).date.slice(3,10) == monthYear){
            for(let j = 0; j < ps.length; j++){
                let p = ps[j]
                if(o.product == p.id){
                    if(p.creator == u.id){sales += p.price*(1 - u.fee)}
                    else{
                        for(let k = 0; k < afs.length; k++){
                            if(p.creator == afs[k].id){
                                sales += p.price*afs[k].afilliatefee
                                break
                            }
                        }
                    }
                    break
                }
            }
        }
    }

    finance.appendChild(value(`Lucro ${monthYear}`, sales))
    return(finance)
}