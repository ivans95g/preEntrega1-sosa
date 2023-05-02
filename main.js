// preguntar la edad del cliente
let edad =prompt("¿Cuál es tu edad?");

// verificar si la edad es válida
if (edad === null || edad === "") {
  alert("Debes ingresar tu edad para continuar");
} else if (parseInt(edad) < 18) {
  alert("Debes ser mayor de 18 años para continuar");
} else {
  alert("Bienvenido/a a nuestro sitio de seguros");
  // preguntar el nombre y apellido del cliente
  let nombre = prompt("¿Cuál es tu nombre?");
  let apellido = prompt("¿Cuál es tu apellido?");

  // verificar si se ingresó el nombre y apellido
  if (nombre === null || nombre === "" || apellido === null || apellido === "") {
    alert("Debes ingresar tu nombre y apellido para continuar");
   
  }else {
    // Preguntar la marca del vehículo
    let marca = prompt("¿Cuál es la marca de tu vehículo? (Ford, Chevrolet, Peugeot)");

    // verificar si se ingresó una marca válida
    if (marca === null || marca === "" || (marca !== "Ford" && marca !== "Chevrolet" && marca !== "Peugeot")) {
      alert("Debes seleccionar una marca válida para continuar");
    } else {
      // preguntar el modelo y año del vehículo
      let modelo = prompt("¿Cuál es el modelo de tu vehículo?");
      let año = prompt("¿Cuál es el año de tu vehículo?");

      // verificar si se ingresó el modelo y el año del vehículo
      if (modelo === null || modelo === "" || año === null || año === "" ) {
        alert("Debes ingresar el modelo y año de tu vehículo para continuar");
      } else {
        // calcular el precio del vehículo dependiendo de la marca y el año
        var precio = null;

        if (marca === "Ford") {
          if (año >= 2010 && año <= 2015) {
            precio = 70000;
            precioAsegurado= 3000000;
          } else if (año > 2015 && año <= 2020) {
            precio = 10000;
            precioAsegurado=4500000
          } else if (año > 2020 && año <= 2023) {
            precio = 14000;
            precioAsegurado=7000000
          }
        }
        if (marca === "Peugeot") {
          if (año >= 2010 && año <= 2015) {
            precio = 70000;
            precioAsegurado=3500000;
          } else if (año > 2015 && año <= 2020) {
            precio = 10000;
            precioAsegurado= 6000000;
          } else if (año > 2020 && año <= 2023) {
            precio = 14000;
            precioAsegurado =8000000;
          }
        }
        if (marca === "Chevrolet") {
          if (año >= 2010 && año <= 2015) {
            precio = 70000;
            precioAsegurado =3700000;
          } else if (año > 2015 && año <= 2020) {
            precio = 10000;
            precioAsegurado =5100000;
          } else if (año > 2020 && año <= 2023) {
            precio = 14000;
            precioAsegurado =8400000;
          }
        }

        const DESCUENTO = 0.1; // el descuento es del 10%

        let descuento = null;
        
        while (descuento === null || isNaN(descuento) || descuento < 0 || descuento > 100) {
          descuento = prompt("¿Tienes un descuento? Ingrese un porcentaje (0-15)");
          
          if (descuento === null || descuento === "") {
            descuento = 0;
          } else {
            descuento = parseFloat(descuento);
          }
        }
        
        let precioFinal = (precio * (1 - DESCUENTO) * (1 - descuento / 100));
        

        // mostrar un mensaje con los datos del cliente y del vehículo y el precio 
        if (precio !== null) {
         alert(`¡Bienvenido/a, ${nombre} ${apellido}! Tu ${marca} ${modelo} del año ${año} ha sido registrado correctamente. El precio de tu vehículo es $${precioFinal} por mes. ${precioAsegurado}`);
        } else {
          alert("Ingrese los datos nuevamente. gracias.");
        }
      }
    }
  }
}