export default function text(){
    let style = `
        {
            font-size:21px;
            color:var(--colorWhite);
            text-align:justify;
            width:60%;
        }
        >span{
            padding:5px 10px;
            background:var(--colorYellow);
            color:var(--colorBlack);
            border-radius:5px;
        }
        :responsive{
            width:100%;
            font-size:13px;
            margin:10px 0px 0px 0px;
        }`

    const text = cE("div", style)
    text.innerHTML = "<span>Criado por professores, feito para professores.</span> Nós entendemos os desafios da sala de aula, as noites revisando planos de aula e a busca constante por materiais didáticos que realmente engajem os alunos. Foi exatamente por isso que criamos este marketplace de apostilas: um espaço seguro e prático onde a experiência de um professor se encontra com a necessidade de outro. Somos uma comunidade. Aqui, professores experientes podem compartilhar seu trabalho, transformando suas apostilas em uma fonte de renda extra; enquanto outros encontram recursos de alta qualidade, prontos para uso, economizando tempo precioso. Nossa missão é fortalecer a educação, um material por vez. Todos os recursos em nosso site são criados por profissionais como você, que entendem as nuances do ensino. Nosso objetivo é oferecer não apenas apostilas, mas soluções práticas que tornem sua vida mais fácil e suas aulas mais dinâmicas."
    return(text)
}