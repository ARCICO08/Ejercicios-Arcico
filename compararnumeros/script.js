//Ejercicio 6: Crear una función que tome dos números 
//y devuelva una cadena que indique cuál es mayor utilizando template literals

function compararNumeros(num1, num2) {
    if (num1 > num2) {
      return `El número ${num1} es mayor que el número ${num2}`;
    } else if (num1 < num2) {
      return `El número ${num2} es mayor que el número ${num1}`;
    } else {
      return `Ambos números son iguales: ${num1}`;
    }
  }
  
  console.log(compararNumeros(12, 22)); 
  

