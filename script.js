document.addEventListener("DOMContentLoaded", function() {
    const openModalButtons = document.querySelectorAll('.open-modal');
    const modalBg = document.getElementById("modalBg");
    const modal = document.getElementById("modal");
    const closeModal = document.getElementById("closeModal");

    openModalButtons.forEach(button => {
        button.addEventListener("click", function() {
            modalBg.style.display = "block";
            modal.style.display = "block";
        });
    });

    closeModal.addEventListener("click", function() {
        modalBg.style.display = "none";
        modal.style.display = "none";
    });
});