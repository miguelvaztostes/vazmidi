function TocaSom(idElementAudio){
    document.querySelector(idElementAudio).play();
};

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //Template string
    const idAudio = `#som_${instrumento}`;
    //console.log(idAudio);
    tecla.onclick = function(){
        TocaSom(idAudio);
    };

    
};
