document.addEventListener("DOMContentLoaded", function () {
    const promoContent = document.querySelector(".promo-content");
  
    // Exibir o pop-up após 3 segundos (exemplo)
    setTimeout(() => {
        promoContent.style.display = "block";
    }, 3000);
  
    // Fechar o pop-up quando clicado fora dele
    document.addEventListener("click", function (e) {
        if (!promoContent.contains(e.target)) {
            promoContent.style.display = "none";
        }
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const promoContent = document.querySelector(".promo-content");
    const closeButton = document.querySelector(".close-btn");
  
    // Exibir o pop-up após 3 segundos
    setTimeout(() => {
        promoContent.style.display = "block";
    }, 3000);
  
    // Fechar o pop-up ao clicar no botão
    closeButton.addEventListener("click", function () {
        promoContent.style.display = "none";
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const countdownTimer = document.getElementById("countdown-timer");
  
    // Defina o tempo final para a contagem regressiva (48 horas a partir de agora)
    const endTime = new Date();
    endTime.setHours(endTime.getHours() + 48);
  
    function updateCountdown() {
      const now = new Date();
      const remainingTime = endTime - now;
  
      if (remainingTime <= 0) {
        countdownTimer.textContent = "Oferta Expirada!";
        clearInterval(timerInterval); // Para a contagem
        return;
      }
  
      const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
      const seconds = Math.floor((remainingTime / 1000) % 60);
  
      countdownTimer.textContent = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }
  
    // Atualiza o contador a cada segundo
    const timerInterval = setInterval(updateCountdown, 1000);
  
    // Executa a primeira atualização imediatamente
    updateCountdown();
  });
  