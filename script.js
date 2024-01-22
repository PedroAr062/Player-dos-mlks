let musicas = [
    {titulo:'Colheita', artista:'Ogsanty - Menor da cp, Dr.Orion e McvintecincoDoBf', src:'songs/colheita-part.ogsainty-dr.orion-mc-vinte-cinco-do-bf-menor-da-cp.mp3', img:'imagens/colheita.jpg'},
    {titulo:'Agradeço a Deus', artista:'Mc VinteCincoDoBF e Biel Bronks', src:'songs/y2mate.bz - agradeço-a-deus-biel-bronks-mc-vintecinco-do-bf-v_-deo-clipe.mp3', img:'imagens/abençoado.jpg'},
    {titulo:'Vida de Artista', artista:'Mc Menor da cp - PedreamMc, Mc Pg do Go, Mc Vintecinco do bf ', src:'songs/y2mate.bz - vida-de-artista-menor-da-cp-pedream-mc-mc-pg-do-go-mc-vintecinco-do-bf-prod.mandralab.mp3', img:'imagens/vida de artista.jpg'}
    {titulo:'Sistema Falho', artista:'Dr.Orion', src:'songs/SISTEMA FALHO.mp3', img:'imagens/sistema falho.jpg'},
];

let musica = document.querySelector('audio');
let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(indexMusica);

// Eventos
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0) {
        indexMusica = 2;
    }
    renderizarMusica(indexMusica);
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    if (indexMusica > 2){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
});

// Funções
function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+':'+campoSegundos;
}
