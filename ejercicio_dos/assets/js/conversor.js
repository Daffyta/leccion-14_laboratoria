function convertToCelsius() { // Convertir a Celsius
  var gradosFahrenheit = parseInt(document.getElementById("fahrenheit").value);
  var resultadoFahrenheit = document.getElementById("celsius");
  var celsius = (gradosFahrenheit - 32) * (5 / 9);

  resultadoFahrenheit.value = celsius;
}

function convertToFahrenheit() { // Convertir a fahrenheit
  var gradosCelsius = parseInt(document.getElementById("celsius").value);
  var resultadoCelsius = document.getElementById("fahrenheit");
  var fahrenheit = ((gradosCelsius * 1.8) + 32);

  resultadoCelsius.value = fahrenheit;
}



    // var x;
    // if (degree == "C") {
    //     x = document.getElementById("celsius").value * 9 / 5 + 32;
    //     document.getElementById("fahrenheit").value = Math.round(x);
    // } else {
    //     x = (document.getElementById("f").value -32) * 5 / 9;
    //     document.getElementById("celsius").value = Math.round(x);
    // }
