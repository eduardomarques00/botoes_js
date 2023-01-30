function tocaSom(IdAudio){
document.querySelector(IdAudio).play();


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

    
}