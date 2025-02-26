//menu
let menuOpener = document.querySelector('.menu-opener');
//nav
let nav = document.querySelector('header nav');
//ouvinte para o eventoclick do menuOpener
menuOpener.addEventListener('click', ()=>{
    if(nav.classList,contains('opened')){
        nav.classList.remove('opened');
        menuOpener.querySelector('.close-icon').style .display='none';
        menuOpener.querySelector('.hamburguer-icon').style .display='flex';
    }else{
        nav.classList.add('opened');
        menuOpener.querySelector('.close-icon')
        .style .display='flex';
        menuOpener.querySelector('.hamburguer-icon')
        .style .display='none';
    }
});
let testemonials = [
    {quote:' "Mais do que nunca, os animais '+'São tratados como membros da família"' ,origin:'cbs.svg'}, 
    {quote:'"DogDev é um serviço de entrega direto ao '+'consumidor, preparado na hora com ingredientes 100% '+'reais. Ingredientes que humanos reconheceriam"' ,origin:'forbes.svg'},  
    {quote:'"DogDev usa ingredientes simples e limpos em '+'seus produtos."' ,origin:'fox.svg'}, 
    {quote:'Vejo você DogDev como um verdadeiro herói' ,origin:'sharktank.svg'}
];
//captura os elementos do html usando querySelector
let  testemonialQuote = 
document.querySelector('.testemonials .quote');
let  testemonialIcons = 
document.querySelector('.testemonials .icons');

//repetição para criar as imagens
for(let tindex in testemonials){
    let img = document.createElement('img');
    img.setAttribute('src', './assets/images/'+ testemonials[parseInt(tiindex)]);
    img.style.cursor= 'pointer';
    img.addEventListener('click', ()=>fillTestemonial(parseInt(tindex)));
    testemonialIcons.appendChild(img);
    let currentTestemonial = 0;
    let testemonialTimer = 0;
    const fillTestemonial = (index) =>{
        clearTimeout(testemonialTimer);
        currentTestemonial = index;
        testemonialQuote.innerHTML = testemonials[currentTestemonial].quote;
        let imgs = testemonialsIcons.querySelectorAll('img');
        for(let img of imgs) img.style.opacity=0.2;
        imgs[currentTestemonial].style.opacity=1;
        testemonialTimer = setTimeout(nextTestemonials, 3000);
    }
    const nextRestemonial = () =>{
        if(testemonials[currentTestemonial+1]){
            fillTestemonial(currentTestemonial+1);
        }else{
            fillTestemonial(0);
        }
    }
    nextTestemonial();
}