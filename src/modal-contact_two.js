(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open-second]"),
      closeModalBtn: document.querySelector("[data-modal-close-second]"),
      
      modal: document.querySelector("[data-modal-second]"),
     
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      document.body.classList.toggle("modal-open")
      refs.modal.classList.toggle("backdrop_is-hidden");
      
    }
  })();