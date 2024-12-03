
// Manejo del formulario y actualización del encabezado
document.getElementById("registration-form")     // Selecciona el elemento HTML con el ID "registration-form"
  .addEventListener("submit", 

   function (e)                                  // Añade un evento de escucha que se activa cuando el formulario se envía
   {
      e.preventDefault();                        // Detiene el comportamiento predeterminado del formulario (que recargaría la página)

      // Obtener valores del formulario
      const name = document.getElementById("name").value;    // Selecciona el campo con ID "name" y obtiene su valor
      const email = document.getElementById("email").value;  // Selecciona el campo con ID "email" y obtiene su valor
      const age = document.getElementById("age").value;      // Selecciona el campo con ID "age" y obtiene su valor

      // Actualizar el encabezado con los datos del usuario
      const userInfo = document.getElementById("user-info");       // Selecciona el elemento con ID "user-info", donde se mostrará la información
      const userDetails = document.getElementById("user-details"); // Selecciona el elemento con ID "user-details" para actualizar los detalles del usuario

      userDetails.textContent = `Nombre: ${name}, Correo: ${email}, Edad: ${age}`;   // Modifica el texto del elemento con los valores del formulario
      userInfo.classList.remove("hidden");                                           // Quita la clase "hidden" para hacer visible la sección de información del usuario

      // Ocultar el formulario y mostrar las secciones de botones y resultados
      document.getElementById("form-section")       // Selecciona la sección del formulario por su ID "form-section"
      .classList.add("hidden");                     // Añade la clase "hidden" para ocultar el formulario
      document.getElementById("buttons-section")    // Selecciona la sección de botones por su ID "buttons-section"
      .classList.remove("hidden");                  // Quita la clase "hidden" para hacer visible la sección de botones
      document.getElementById("result-display")     // Selecciona la sección de resultados por su ID "result-display"
      .classList.remove("hidden");                  // Quita la clase "hidden" para mostrar la sección de resultados
    } );


// Función para cargar y ejecutar funciones JS externas
function executeFunction(file, resultText = '')  // Define una función que recibe el archivo JS y texto opcional como parámetros
{ 
   // Cargar el archivo JS externo
   const script = document.createElement("script");    // Crea un nuevo elemento <script> en el DOM
   script.src = file;                                  // Especifica la ruta o nombre del archivo JS externo a cargar

   script.onload = () => // Define qué hacer cuando el archivo se haya cargado correctamente
   {
      if (file === 'function1.js')       // Comprueba si el archivo cargado es "function1.js"
      {  ejecutarOperacionesLogicas();   // Llama a la función principal definida en "function1.js"
      }

      if (file === 'function2.js')       // Comprueba si el archivo cargado es "function2.js"
      {   ejecutarConcatenacion();       // Llama a la función principal definida en "function2.js"
      }

      // Puedes añadir más condiciones para otros archivos aquí
   };

    document.body.appendChild(script); // Añade el elemento <script> al <body> para cargarlo dinámicamente

    // Actualizar el texto de la sección (si aplica)
    if (resultText)  // Comprueba si se ha proporcionado un texto para mostrar
    {   const resultDisplay = document.getElementById("result-text");  // Selecciona el elemento con ID "result-text"
        resultDisplay.textContent = resultText;                        // Actualiza el texto visible con el contenido del resultado
    }
}
