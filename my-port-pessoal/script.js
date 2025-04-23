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
  

  
  const galeriaModal = document.getElementById("galeriaModal");
  const imagemGaleria = document.getElementById("imagemGaleria");
  const fecharGaleria = document.querySelector(".fechar-galeria");
  const setaEsquerda = document.querySelector(".seta-esquerda");
  const setaDireita = document.querySelector(".seta-direita");
  
  const imagensPorAlbum = {
    album1: ["Fotos postfolio/Centro urbano noturno/IMG_1750.jpg", "Fotos postfolio/Centro urbano noturno/IMG_1798.jpg", "Fotos postfolio/Centro urbano noturno/IMG_9864.jpg", 
        "Fotos postfolio/Centro urbano noturno/IMG_6408.jpg", "Fotos postfolio/Centro urbano noturno/IMG_3293.jpg", "Fotos postfolio/Centro urbano noturno/IMG_6411.jpg"],


    album2: ["Fotos postfolio/Centro urbano Diurno/IMG_1017.jpg", "Fotos postfolio/Centro urbano Diurno/IMG_1597.jpg", "Fotos postfolio/Centro urbano Diurno/IMG_1590.jpg", "Fotos postfolio/Centro urbano Diurno/IMG_2643.jpg",
        "Fotos postfolio/Centro urbano Diurno/IMG_9283.jpg", "Fotos postfolio/Centro urbano Diurno/IMG_5416.jpg", "Fotos postfolio/Centro urbano Diurno/IMG_1786.jpg",
    ],

    album3: [ "Fotos postfolio/fotos Eclipse/posta 4.JPEG", "Fotos postfolio/fotos Eclipse/IMG_3959(1).jpg", "Fotos postfolio/fotos Eclipse/posta que ta dahopra.jpg", "Fotos postfolio/fotos Eclipse/vai tu tbm.jpg"],

    album4: ["Fotos postfolio/Outros/IMG_1110.jpg", "Fotos postfolio/Outros/IMG_4122.jpg", "Fotos postfolio/Outros/IMG_8051.jpg","Fotos postfolio/Outros/IMG_3228.jpg", "Fotos postfolio/Outros/IMG_1731.jpg", ],


    album5: ["Fotos postfolio/fotos cybershot/DSC02020.JPEG", "Fotos postfolio/fotos cybershot/DSC02016.JPEG", "Fotos postfolio/fotos cybershot/DSC01764.JPEG", "Fotos postfolio/fotos cybershot/DSC02027.JPEG",
        "Fotos postfolio/fotos cybershot/DSC01761.JPEG", "Fotos postfolio/fotos cybershot/DSC01964.JPEG",
    ],
  };
  
  let imagensAtuais = [];
  let indiceAtual = 0;
  
  document.querySelectorAll('.album').forEach(album => {
    album.addEventListener('click', () => {
      const id = album.dataset.album;
      imagensAtuais = imagensPorAlbum[id] || [];
      indiceAtual = 0;
      abrirGaleria(imagensAtuais[indiceAtual]);
    });
  });
  
  function abrirGaleria(src) {
    imagemGaleria.src = src;
    galeriaModal.style.display = "flex";
    document.body.style.overflow = "hidden"; // evita scroll do fundo
  }
  
  function fechar() {
    galeriaModal.style.display = "none";
    document.body.style.overflow = "auto";
  }
  
  function trocarImagem(indice) {
    imagemGaleria.style.opacity = 0;
    setTimeout(() => {
      imagemGaleria.src = imagensAtuais[indice];
      imagemGaleria.style.opacity = 1;
    }, 200);
  }
  
  fecharGaleria.addEventListener("click", fechar);
  
  setaEsquerda.addEventListener("click", () => {
    if (imagensAtuais.length > 0) {
      indiceAtual = (indiceAtual - 1 + imagensAtuais.length) % imagensAtuais.length;
      trocarImagem(indiceAtual);
    }
  });
  
  setaDireita.addEventListener("click", () => {
    if (imagensAtuais.length > 0) {
      indiceAtual = (indiceAtual + 1) % imagensAtuais.length;
      trocarImagem(indiceAtual);
    }
  });
  
  document.addEventListener("keydown", (e) => {
    if (galeriaModal.style.display === "flex") {
      if (e.key === "Escape") {
        fechar();
      } else if (e.key === "ArrowLeft") {
        indiceAtual = (indiceAtual - 1 + imagensAtuais.length) % imagensAtuais.length;
        trocarImagem(indiceAtual);
      } else if (e.key === "ArrowRight") {
        indiceAtual = (indiceAtual + 1) % imagensAtuais.length;
        trocarImagem(indiceAtual);
      }
    }
  });
  