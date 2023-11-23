function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    var btnInicio = document.getElementById("button-begin");
    btnInicio.addEventListener("click", scrollToTop);
  });

  // Función para almacenar el usuario
  function almacenarUsuario(username, password) {
    usuarios.push({ username: username, password: password });
    
    // Muestra los usuarios almacenados en consola (esto es solo para verificación)
    window.alert("Usuario registrado")
    console.log("Usuarios registrado:", usuarios);
  }
  
  // Asociar la funcionalidad al botón Guardar
  document.addEventListener("DOMContentLoaded", function() {
    var btnGuardar = document.getElementById("submit-button");
    btnGuardar.addEventListener("click", function() {
      var username = document.getElementById("text").value;
      var password = document.getElementById("password").value;
      
  
      almacenarUsuario(username, password);
    });
  });
