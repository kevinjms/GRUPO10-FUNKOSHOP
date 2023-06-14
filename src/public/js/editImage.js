
const inputImagen = document.getElementById('editImage');
const imagenVisualizada = document.getElementById('imageNew');


inputImagen.addEventListener('change', function(event) {
  
  const archivo = event.target.files[0];

  
  if (archivo) {
    
    const lector = new FileReader();

   
    lector.onload = function(e) {
      
      imagenVisualizada.src = e.target.result;
    };

    
    lector.readAsDataURL(archivo);
  }
});
