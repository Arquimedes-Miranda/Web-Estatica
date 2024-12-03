function ejecutarConcatenacion() 
{
    let cadena1 = prompt("Ingrese su Nombre..");
    let cadena2 = prompt("Ingrese su Apellido..");

    // Concatenación
    let concatenado = cadena1 + " " + cadena2;

    // Seleccionar el elemento donde mostrar el resultado
    const outputElement = document.getElementById("result-text");

    // Mostrar el resultado en el elemento específico
    outputElement.innerHTML = "Tu nombre completo es:..." + concatenado;
    
   
}
