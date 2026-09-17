//Criação de uma timeline do GSAP com animações sincronizadas com o scroll

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.two',
        start: '0% 95%',
        end: '70% 50%',
        scrub: true,
        markers: true, //DEPURAÇÃO
    },
});

tl.to(
    '#fanta',
    {
        top:'120%', //MOVE O ELEMENTO COM ID FANTA PARA 120% DO TOPO
        left: '0%',
    },
    'orange'
); //Nomeando esse trecho de animação como 'orange' para sincronização

tl.to(
    '#laranja-cortada',
    {
        top:'160%', //MOVE O ELEMENTO COM ID orange-cut PARA 160% DO TOPO
        left: '23%', //move o elemento para 23% da esquerda
    },
    'orange'
); //Nomeando esse trecho de animação como 'orange' para sincronização

tl.to(
    '#laranja',
    {
        width: '15%',
        top:'160%', //MOVE O ELEMENTO COM ID orange-cut PARA 160% DO TOPO
        right: '10%', //move o elemento para 23% da esquerda
    },
    'orange'
); //Nomeando esse trecho de animação como 'orange' para sincronização

tl.to(
    '#folha',
    {
        top:'110%', //MOVE O ELEMENTO COM ID orange-cut PARA 160% DO TOPO
        left: '70%', //move o elemento para 23% da esquerda
        rotate: '130deg',
    },
    'orange'
); //Nomeando esse trecho de animação como 'orange' para sincronização

tl.to(
    '#folha2',
    {
        top:'110%', //MOVE O ELEMENTO COM ID orange-cut PARA 160% DO TOPO
        left: '0%', //move o elemento para 23% da esquerda
        rotate: '530deg',
    },
    'orange'
); //Nomeando esse trecho de animação como 'orange' para sincronização


//CRIANDO OUTRA TL

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.three',
        start: '0% 95%',
        end: '20% 50%',
        scrub: true,
        markers: true, //DEPURAÇÃO
    },
});

tl2.from(
    '.lemon1'
    {
        rotate: '-90deg',
        left: '-100%',
        top: '110%',
    },
    'ca'
);

tl2.from(
    '#pepsi'
    {
        rotate: '-90deg',
        left: '-100%',
        top: '110%',
    },
    'ca'
);
