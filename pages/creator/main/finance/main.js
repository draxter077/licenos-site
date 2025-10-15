import value from "./value/main.js"

export default function finance(u, os, afsos, afsps, afs){
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
            sales += o.price*(1 - u.fee)
        }
    }
    for(let i = 0; i < afsos.length; i++){
        let afso = afsos[i]
        if(datetime(afso.time).date.slice(3,10) == monthYear){
            let p
            for(let j = 0; j < afsps.length; j++){if(afso.product == afsps[j].id){p = afsps[j];break}}
            let af
            for(let j = 0; j < afs.length; j++){if(p.creator == afs[j].id){af = afs[j];break}}
            sales += afso.price*af.afilliatefee
        }
    }

    finance.appendChild(value(`Lucro ${monthYear}`, sales))
    return(finance)
}