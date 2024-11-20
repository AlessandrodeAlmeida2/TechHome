$(document).ready(function () {
    $(".burger").on("click", function () {
        $(this).toggleClass("active");
        // Toggle the navigation menu
        $("nav ul").slideToggle(); // Update the selector here
    });
});

$(document).ready(function () {
    // Cria a estrutura do pop-up
    const popupOverlay = $('<div class="popup-overlay"></div>');
    const popup = $(`
      <div class="popup">
        <p id="popup-text"></p>
        <span class="popup-close">Fechar</span>
      </div>
    `);
    $("body").append(popupOverlay).append(popup);
  
    // Mostra o pop-up com o texto correspondente
    $(".popup-trigger").on("click", function () {
      const description = $(this).data("description");
      $("#popup-text").text(description);
      popupOverlay.fadeIn();
      popup.fadeIn();
    });
  
    // Fecha o pop-up
    $(".popup-close, .popup-overlay").on("click", function () {
      popupOverlay.fadeOut();
      popup.fadeOut();
    });
});

$(document).ready(function () {
  // Função para rolagem suave ao clicar no link
  $("#topo").on("click", function (event) {
      event.preventDefault(); // Previne o comportamento padrão do link
      $("html, body").animate({ scrollTop: 0 }, "slow"); // Rola suavemente para o topo
  });
});

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

document.querySelectorAll('.faq-question').forEach((button) => {
  button.addEventListener('click', () => {
      const faqItem = button.parentElement;
      faqItem.classList.toggle('active');
  });
});
