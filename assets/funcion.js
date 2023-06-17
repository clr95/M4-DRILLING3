
function obtenerCodigoDescuento() {
  var checkbox = document.getElementById('flexCheckDefault');
  if (!checkbox.checked) {
    alert('Debes aceptar los términos y condiciones para obtener el código de descuento.');
    return;
  }
  
  var codigoDescuento = document.getElementById('codigo-descuento');
  codigoDescuento.classList.remove('d-none');
}

var obtenerCodigoTexto = document.getElementById('obtener');
obtenerCodigoTexto.addEventListener('click', obtenerCodigoDescuento);
