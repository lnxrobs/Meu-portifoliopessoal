let trilho = document.getElementById('trilho')
let body = document.querySelector('body')


trilho.addEventListener('click', ()=>{

    trilho.classList.toggle('dark')
    body.classList.toggle('dark')



})

window.addEventListener('scroll', () => {
    const secoes = document.querySelectorAll('section');
    secoes.forEach(secao => {
        const rect = secao.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            secao.classList.add('visible');
        } else {
            secao.classList.remove('visible');
        }
    });
});

// Torne a primeira seção visível ao carregar a página
window.addEventListener('load', () => {
    const secoes = document.querySelectorAll('section');
    if (secoes.length > 0) {
        secoes[0].classList.add('visible');
    }
});

function mudarMusica(estilo) {
    const player = document.getElementById('spotifyPlayer');
  
    const playlists = {
      techno: 'https://open.spotify.com/embed/playlist/5fY6zA4VCm9c7FhgNP9TDi?utm_source=generator&theme=0',
      classico: 'https://open.spotify.com/embed/playlist/2t0XNT77MMsJ1SLtQhWojG?utm_source=generator',
      rock: 'https://open.spotify.com/embed/playlist/7mMZKw5TCiyiMhSVhchRHv?utm_source=generator',
      summerEletro: 'https://open.spotify.com/embed/playlist/4gyTJUjV0BgQI14tCCStfo?utm_source=generator',
      jazz: 'https://open.spotify.com/embed/playlist/2mW3RK6QGCjA9AXI8PHTCr?utm_source=generator',
      indie: 'https://open.spotify.com/embed/playlist/6hBQYPiJy70lfVu0ztlqD7?utm_source=generator',
    };
  
    player.src = playlists[estilo];
  }
  