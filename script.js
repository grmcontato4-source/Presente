// Libera o conteúdo do site no início do dia 11/12/2026 (horário de Brasília).
(() => {
const alvo = new Date("2026-12-11T00:00:00-03:00").getTime();
  const bloqueio = document.getElementById("birthday-lock");
  if (!bloqueio) return;

  const campos = {
    dias: document.getElementById("dias"),
    horas: document.getElementById("horas"),
    minutos: document.getElementById("minutos"),
    segundos: document.getElementById("segundos")
  };

  function atualizarContagem() {
    const agora = Date.now();
    const restante = alvo - agora;

    if (restante <= 0) {
      bloqueio.hidden = true;
      document.body.classList.remove("site-bloqueado");
      return;
    }

    campos.dias.textContent = String(Math.floor(restante / 86400000)).padStart(2, "0");
    campos.horas.textContent = String(Math.floor((restante % 86400000) / 3600000)).padStart(2, "0");
    campos.minutos.textContent = String(Math.floor((restante % 3600000) / 60000)).padStart(2, "0");
    campos.segundos.textContent = String(Math.floor((restante % 60000) / 1000)).padStart(2, "0");
  }

  document.body.classList.add("site-bloqueado");
  atualizarContagem();
  const relogio = setInterval(() => {
    atualizarContagem();
    if (Date.now() >= alvo) clearInterval(relogio);
  }, 1000);
})();
