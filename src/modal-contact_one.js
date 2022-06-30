(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open-first]"),
      closeModalBtn: document.querySelector("[data-modal-close-first]"),
      
      modal: document.querySelector("[data-modal-first]"),
     
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      document.body.classList.toggle("modal-open")
      refs.modal.classList.toggle("backdrop_is-hidden");
      
    }
  })();