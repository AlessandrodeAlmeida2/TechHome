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

document.querySelectorAll('.faq-question').forEach((button) => {
  button.addEventListener('click', () => {
      const faqItem = button.parentElement;
      faqItem.classList.toggle('active');
  });
});

document.querySelectorAll('.faq-answer').forEach((button) => {

  button.addEventListener('click', () => {
    const faqItem = button.parentElement;
    faqItem.classList.toggle('active');
  });
});
