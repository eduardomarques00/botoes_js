function tocaSom(IdAudio){
document.querySelector(IdAudio).play();


}
const ListaDeAnimais = document.querySelectorAll('.botao');

let contador =0;

while(contador < ListaDeAnimais.length){

    const SonsAnimais = ListaDeAnimais[contador];
//acessando a segunda classe do button
    const animalclass2 = SonsAnimais.classList[1];
    const audio = `#som_${animalclass2}`;

    SonsAnimais.onclick = function(){
        tocaSom(audio)
    }

    contador++;
}