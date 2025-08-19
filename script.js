// Script para controle da música de fundo
const music = document.getElementById("bg-music");

// Dá play automático (alguns navegadores bloqueiam autoplay com som)
window.addEventListener("load", () => {
  music.volume = 0.5; // volume em 50%
  music.play().catch(() => {
    console.log("Autoplay bloqueado. Clique em qualquer lugar para tocar a música.");
    document.body.addEventListener("click", () => {
      music.play();
    }, { once: true });
  });
});
