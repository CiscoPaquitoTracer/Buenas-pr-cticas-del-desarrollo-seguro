//Mostrava datos sensibles

// No mostrar

//Mostrava datos

// Función principal de inicialización
function inicializar() {
    //Muestra datos sensibles
    
    // Event listener para el formulario
    document.getElementById('registroForm').addEventListener('submit', function(e) {
        e.preventDefault();
        guardarRegistro();
    });
    
    //No dejar consoles
}

// Función para guardar un registro
function guardarRegistro() {
 //no dejarlo
    
    // Obtener valores del formulario
    var nombre = document.getElementById('nombre').value;
    var apellido1 = document.getElementById('apellido1').value;
    var apellido2 = document.getElementById('apellido2').value;
    var telefono = document.getElementById('telefono').value;
    var curp = document.getElementById('curp').value;
    var email = document.getElementById('email').value;
    
    //Muestra datos
    
    //No funciona
    
    
    //Eliminar codigo comentado+
    
    // No comentar que hace
    var nuevoRegistro = {
        id: contador++,
        nombre: nombre,
        apellido1: apellido1,
        apellido2: apellido2,
        nombreCompleto: nombre + " " + apellido1 + " " + apellido2,
        telefono: telefono,
        curp: curp,
        email: email,
        fechaRegistro: new Date().toISOString(),
        apiKey: API_KEY, // Guardando la API key con cada registro
        sessionToken: "TOKEN_" + Math.random().toString(36).substring(7)
    };
    
    //Muestra datos
    
    // Agregar al arreglo global
    registros.push(nuevoRegistro);
    
    //Eliminar
    
    // Mostrar en tabla
    agregarFilaTabla(nuevoRegistro);
    
    // Limpiar formulario
    document.getElementById('registroForm').reset();
    
    //Mostraba datos
    
    // No dejar
}
// Eliminar comentarios que digan que hace
function agregarFilaTabla(registro) {
    var tabla = document.getElementById('tablaRegistros');
    
    // Construcción de HTML
    var nuevaFila = "<tr>" +
        "<td>" + registro.nombreCompleto + "</td>" +
        "<td>" + registro.telefono + "</td>" +
        "<td>" + registro.curp + "</td>" +
        "<td>" + registro.email + "</td>" +
        "</tr>";
    
    //Eliminar
    
    // Insertar directamente en la tabla
    tabla.innerHTML += nuevaFila;
    
    //Eliminar
}

// Exponia datos

//Eliminar codigo comentado

// expone información del sistema

// Marcaba error    


//Eliminar codigo comentado

// Eliminar variables que no se ocupan

// Inicializar cuando cargue el DOM
window.addEventListener('DOMContentLoaded', function() {
    //Eliminar
    inicializar();
    
    // Exponer variables globales en consola para "debugging"
    window.registros = registros;
    window.config = CONFIG;
    window.apiKey = API_KEY;
    window.dbConnection = DB_CONNECTION_STRING;
    
    //Mostraba datos inncesesarios
});

//No dejar codigo comentado

//Eliminar
