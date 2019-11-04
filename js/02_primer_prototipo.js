function crearConsulta(paciente, especialidad, consulta) {
  var consulta = {
    paciente: paciente,
    especialidad: especialidad,
    consulta: consulta,
    estado: 'pendiente',
    diagnostico: {},
    responderConsulta: function(diagnostico) {
      this.diagnostico = diagnostico;
      this.estado = 'resuelto'
    }
  };

  return consulta;
}

var consultaDePaciente1 = crearConsulta('Juan', 'Clinica', 'Tengo fiebre y me duele la garganta');
var consultaDePaciente2 = crearConsulta('Pedro', 'Traumatologia', 'Me doble el tobillo jugando al futbol');

console.log(consultaDePaciente1);
console.log(consultaDePaciente2);

// Ahora completemos el siguiente codigo para obtener el mismo resultado utilizando prototipos

var Consulta = function(paciente, especialidad, consulta) {

};

var consultaDePaciente3 = new Consulta('Florencia', 'Odontologia', 'Tengo mucha sensibilidad en este diente');

console.log(consultaDePaciente3);

// Ahora, agreguemos al prototipo de Consulta, un metodo llamado asignarDoctor que recibe como parametro un doctor, guarda el doctor en una propiedad llamada doctor del objeto Consulta, y cambia el estado de la consulta a 'asignado'.



// y podemos invocar esa funcion para la consulta del paciente 3

consultaDePaciente3.asignarConsulta('Dr. Ramiro');
console.log(consultaDePaciente3);
