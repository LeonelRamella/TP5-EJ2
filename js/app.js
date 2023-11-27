let persona = null;

function validarImputs() {
  if (
    nombrePersona.value.trim() !== "" &&
    edadPersona.value.trim() !== "" &&
    dniPersona.value.trim() !== "" &&
    sexoPersona.value.trim() !== "" &&
    pesoPersona.value.trim() !== "" &&
    alturaPersona.value.trim() !== "" &&
    anioPersona.value.trim() !== ""
  ) {
    botonEnviar.disabled = false;
  } else if (
    nombrePersona.value.trim() == "" ||
    edadPersona.value.trim() == "" ||
    dniPersona.value.trim() == "" ||
    sexoPersona.value.trim() == "" ||
    pesoPersona.value.trim() == "" ||
    alturaPersona.value.trim() == "" ||
    anioPersona.value.trim() == ""
  ) {
    botonEnviar.disabled = true;
  }
}

class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anioNacimiento = anioNacimiento;
  }

  mostrarGeneracion() {
    if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
      alert(
        this.nombre + " pertenece a la GENERACION Z y su caracteristica es la IRREVERENCIA."
      );
    } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
      alert(
        this.nombre + " pertenece a la GENERACION Y y su caracteristica es la FRUSTRACION."
      );
    } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
      alert(
        this.nombre + " pertenece a la GENERACION X y su caracteristica es la OBSESÍON POR EL ÉXITO."
      );
    } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
      alert(
        this.nombre + " pertenece a la generacion BABY BOOM y su caracteristica es la AMBICIÓN."
      );
    } else if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
      alert(
        this.nombre + " pertenece a la generacion SILENT GENERATION y su caracteristica es la AUSTERIDAD."
      );
    }
  }

  esMayorDeEdad() {
    if (this.edad >= 18) {
      alert(this.nombre + " es mayor de edad");
    } else {
      alert(this.nombre + " es menor de edad");
    }
  }

  sexoDif() {
    if (this.sexo === "M" || this.sexo === "m") {
      return "Mujer";
    } else if (this.sexo === "H" || this.sexo === "h") {
      return "Hombre";
    }
  }

  mostrarDatos() {
    alert(`
        Nombre: ${this.nombre}
        Edad: ${this.edad}
        DNI: ${this.dni}
        Sexo: ${this.sexoDif()}
        Peso: ${this.peso}
        Altura: ${this.altura}
        Año de nacimiento: ${this.anioNacimiento}
        `);
  }
}

const botonEnviar = document.querySelector("button");
botonEnviar.disabled = true;
const nombrePersona = document.getElementById("nombrePersona");
const edadPersona = document.getElementById("edadPersona");
const dniPersona = document.getElementById("dniPersona");
const sexoPersona = document.getElementById("sexoPersona");
const pesoPersona = document.getElementById("pesoPersona");
const alturaPersona = document.getElementById("alturaPersona");
const anioPersona = document.getElementById("anioPersona");
const botonMostrarGeneracion = document.getElementById(`btnMostrarGeneracion`); 
const botonMostrarEdad = document.getElementById(`btnMostrarEdad`);

nombrePersona.addEventListener("keyup", () => {
  validarImputs();
});
edadPersona.addEventListener("keyup", () => {
  validarImputs();
});
dniPersona.addEventListener("keyup", () => {
  validarImputs();
});
sexoPersona.addEventListener("keyup", () => {
  validarImputs();
});
pesoPersona.addEventListener("keyup", () => {
  validarImputs();
});
alturaPersona.addEventListener("keyup", () => {
  validarImputs();
});
anioPersona.addEventListener("keyup", () => {
  validarImputs();
});

botonEnviar.addEventListener("click", () => {
  persona = new Persona(
    nombrePersona.value,
    edadPersona.value,
    dniPersona.value,
    sexoPersona.value,
    pesoPersona.value,
    alturaPersona.value,
    anioPersona.value
  );
});


botonMostrarGeneracion.addEventListener("click", () => {
    persona.mostrarGeneracion();
});


botonMostrarEdad.addEventListener("click", () => {
    persona.esMayorDeEdad();
});