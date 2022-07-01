(() => {
  const infoBtnRefs = document.querySelectorAll("[data-info-btn3]");
  const infoContentRef = document.querySelector("[data-info-content3]");

    infoBtnRefs.forEach(btn => btn.addEventListener("click", () => {
        const expanded =
            btn.getAttribute("aria-expanded") === "true" || false;

        btn.classList.toggle("is-open");
        btn.setAttribute("aria-expanded", !expanded);

        infoContentRef.classList.toggle("is-open");
        document.body.classList.toggle("no-scroll");
    }));
})();