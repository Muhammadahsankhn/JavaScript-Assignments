function setupDeleteButtons() {
    const buttons = document.querySelectorAll(".delete-btn");

    buttons.forEach(button => {
      button.addEventListener("click", function () {
        const productCard = this.closest(".product-card");
        productCard.remove(); 
      });
    });
  }

setupDeleteButtons();
