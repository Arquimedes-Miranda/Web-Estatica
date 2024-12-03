function ejecutarOperacionesLogicas() 
{
    let a = parseInt(prompt("Ingrese Primer Numero..."));
    let b = parseInt(prompt("Ingrese Segundo Numero..."));

    let suma = a + b;
    let resta = a - b;
    let multiplicacion = a * b;
    let division = a / b;

    const outputElement = document.getElementById("result-text");

    outputElement.innerHTML = `
      <strong>Operaciones Matematicas:</strong><br><br>

      Primer Valor es..: ${a}<br>
      Segundo Valor es..: ${b}<br>
      -------------------------------------<br>
      ${a} + ${b} = ${suma} <br>
      ${a} - ${b} = ${resta}<br>
      ${a} * ${b} = ${multiplicacion} <br>
      ${a} / ${b} = ${division}<br>
    `;
      
}