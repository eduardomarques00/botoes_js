function tocaSom(SeletorAudio){
const elemento = document.querySelector(SeletorAudio);

if(elemento != null && elemento.localName === 'audio'){
   elemento.play()
}else{
     console.log('Elemento não encontrado.')
}


}
const ListaDeAnimais = document.querySelectorAll('.botao');

for(let contador = 0; contador < ListaDeAnimais.length;contador++){

    const SonsAnimais = ListaDeAnimais[contador];
//acessando a segunda classe do button
    const animalclass2 = SonsAnimais.classList[1];
    const audio = `#som_${animalclass2}`;

    SonsAnimais.onclick = function(){
        tocaSom(audio)
    }

    SonsAnimais.onkeydown = function(evento){
console.log(evento.code ==='Space')
        if(evento.code == 'Space' || evento.code === 'Enter' ){
        SonsAnimais.classList.add('ativa')
        }
    }
    SonsAnimais.onkeyup = function(){
        SonsAnimais.classList.remove('ativa')
    }
}