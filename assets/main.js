function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    var btnInicio = document.getElementById("button-begin");
    btnInicio.addEventListener("click", scrollToTop);
  });