function generateClientDatabase() {
    var csvContent = "id,rut,nombre,apellido,fechaNacimiento,direccion,pais,ciudad,codigoPostal,telefono,correo,ocupacion,estadoCivil,centroCosto,promedioCompras\n";
    var id = 1;

    for (var i = 0; i < 5000; i++) {
        var rut = generarNumeroIdentificacion();
        var nombre = generarNombre();
        var apellido = generarApellido();
        var fechaNacimiento = generarFechaNacimiento();
        var direccion = generarDireccion();
        var pais = generarPais();
        var ciudad = generarCiudad(pais);
        var codigoPostal = generarCodigoPostal();
        var telefono = generarTelefono();
        var correo = generarCorreo(nombre, apellido);
        var ocupacion = generarOcupacion();
        var estadoCivil = generarEstadoCivil();
        var centroCosto = generarCentroCosto();
        var promedioCompras = generarPromedioCompras();

        csvContent += id + "," + rut + "," + nombre + "," + apellido + "," + fechaNacimiento + "," + direccion + "," + pais + "," + ciudad + "," + codigoPostal + "," + telefono + "," + correo + "," + ocupacion + "," + estadoCivil + "," + centroCosto + "," + promedioCompras + "\n";
        id++;
    }
  
    return csvContent;
  }

  // Función para generar el número de identificación con guión
// function generarNumeroIdentificacion() {
//     var parteNumerica = generarNumeroAleatorio(9000000, 25000000);
//     var parteGuion = generarNumeroAleatorio(0,9);
//     return parteNumerica + '-' + parteGuion;
//   }

// Función para generar un RUT con dígito verificador de 1 dígito
function generarNumeroIdentificacion() {
    var rutNumerico = generarNumeroAleatorio(9000000, 25000000);
    var digitoVerificador = generarDigitoVerificador(rutNumerico);
    return rutNumerico + '-' + digitoVerificador;
  }
  
  // Función para generar el dígito verificador de un RUT
  function generarDigitoVerificador(rutNumerico) {
    var rutRevertido = String(rutNumerico).split("").reverse().join("");
    var serie = [2, 3, 4, 5, 6, 7, 2, 3];
    var suma = 0;
  
    for (var i = 0; i < rutRevertido.length; i++) {
      suma += parseInt(rutRevertido.charAt(i)) * serie[i];
    }
  
    var resto = suma % 11;
    var digito;
  
    if (resto === 0) {
      digito = "0";
    } else if (resto === 1) {
      digito = "K";
    } else {
      digito = String(11 - resto);
    }
  
    return digito;
  }



  // Función para generar un número aleatorio entre un rango dado, incluyendo los extremos
function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function generarNombre() {
    var nombres = ["Juan", "Carlos", "Pedro", "José", "Miguel", "Alejandro", "Tomás", "Jorge", "Alexis", "María", "Ana", "Luisa", "Laura", "Sofía", "Rafaela", "Patricia", "Carolina", "Alejandra"];
    return nombres[Math.floor(Math.random() * nombres.length)];
}

function generarApellido() {
    var apellidos = ["Gómez", "Rodríguez", "López", "Pérez", "Martínez", "González", "Hernández", "Fernández", "Díaz", "Torres", "Pereira", "Arévalo", "Solis", "Salas"];
    return apellidos[Math.floor(Math.random() * apellidos.length)];
}

function generarFechaNacimiento() {
    var year = Math.floor(Math.random() * 11) + 1980;
    var month = Math.floor(Math.random() * 12) + 1;
    var day = Math.floor(Math.random() * 28) + 1; // Considerando todos los meses con 28 días
    return day + "/" + month + "/" + year;
}

function generarDireccion() {
    var direcciones = ["Calle 1", "Calle 2", "Calle 3", "Calle 4","Calle 5", "Avenida 1", "Avenida 2", "Avenida 3", "Avenida 4", "Avenida 5"];
    return direcciones[Math.floor(Math.random() * direcciones.length)];
}

function generarPais() {
    var paises = ["Chile", "Argentina", "Perú", "México", "Colombia", "Ecuador", "Bolivia", "Uruguay", "Paraguay", "Venezuela"];
    return paises[Math.floor(Math.random() * paises.length)];
}

function generarCiudad(pais) {
    var ciudades = {
        "Chile": ["Santiago", "Valparaíso", "Concepción", "Viña del Mar", "La Serena"],
        "Argentina": ["Buenos Aires", "Córdoba", "Rosario", "Mendoza", "Mar del Plata"],
        "Perú": ["Lima", "Arequipa", "Trujillo", "Cusco", "Piura"],
        "México": ["Ciudad de México", "Guadalajara", "Monterrey", "Puebla", "Tijuana"],
        "Colombia": ["Bogotá", "Medellín", "Cali", "Barranquilla", "Cartagena"],
        "Ecuador": ["Quito", "Guayaquil", "Cuenca", "Santo Domingo", "Machala"],
        "Bolivia": ["La Paz", "Santa Cruz", "Cochabamba", "Sucre", "Potosí"],
        "Uruguay": ["Montevideo", "Salto", "Paysandú", "Maldonado", "Rivera"],
        "Paraguay": ["Asunción", "Ciudad del Este", "San Lorenzo", "Capiatá", "Lambaré"],
        "Venezuela": ["Caracas", "Maracaibo", "Valencia", "Barquisimeto", "Maracay"]
    };
    return ciudades[pais][Math.floor(Math.random() * ciudades[pais].length)];
}

function generarCodigoPostal() {
    return Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;
}

function generarTelefono() {
    var telefono = "";
    for (var i = 0; i < 8; i++) {
        telefono += Math.floor(Math.random() * 10);
    }
    return telefono;
}

// Remueve Caracteres especiales, acentos
function removerCaracteresEspeciales(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function generarCorreo(nombre, apellido) {
    var proveedores = ["gmail.com", "hotmail.com", "yahoo.com", "outlook.com", "aol.com"];
    var nombreCorregido = removerCaracteresEspeciales(nombre.toLowerCase());
    var apellidoCorregido = removerCaracteresEspeciales(apellido.toLowerCase());
    return nombreCorregido + "." + apellidoCorregido + "@" + proveedores[Math.floor(Math.random() * proveedores.length)];
}

function generarOcupacion() {
    var ocupaciones = ["Profesor(a)", "Ingeniero(a)", "Médico(a)", "Abogado(a)", "Trabajador(a) Social", "Analista", "Comunicador(a)", "Chef", "Artista", "Periodista", "Actor/Actriz", "Conductor(a)", "Escritor(a)"];
    return ocupaciones[Math.floor(Math.random() * ocupaciones.length)];
}

function generarEstadoCivil() {
    var estadosCivil = ["Soltero/a", "Casado/a", "Divorciado/a", "Viudo/a", "Unión Civil"];
    return estadosCivil[Math.floor(Math.random() * estadosCivil.length)];
}

function generarCentroCosto() {
    var letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numeros = "0123456789";
    var centroCosto = "";

    for (var i = 0; i < 2; i++) {
        centroCosto += letras.charAt(Math.floor(Math.random() * letras.length));
    }

    for (var j = 0; j < 3; j++) {
        centroCosto += numeros.charAt(Math.floor(Math.random() * numeros.length));
    }

    return centroCosto;
}

function generarPromedioCompras() {
    return Math.floor(Math.random() * 10000001);
}
  
  // Generar la base de datos de 1000 clientes en formato CSV
  var clientDatabase = generateClientDatabase(5000);
  
  // Descargar el archivo CSV
  function downloadCSV() {
    var fileName = "client_database.csv";
    var blob = new Blob([clientDatabase], { type: "text/csv;charset=utf-8;" });
  
    if (navigator.msSaveBlob) {
      // IE 10+
      navigator.msSaveBlob(blob, fileName);
    } else {
      // Otros navegadores
      var link = document.createElement("a");
      if (link.download !== undefined) {
        var url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", fileName);
        link.style.visibility = "hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  }
  
  // Descargar el archivo CSV al hacer clic en el botón
  var downloadButton = document.getElementById("downloadButton");
  downloadButton.addEventListener("click", downloadCSV);