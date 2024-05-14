let numjugadas = parseInt(
  prompt("Ingresa cuántas veces quieres jugar al cachipún")
);
let contadorMaquina = 0;
let contadorUsuario = 0;
for (let i = 1; i <= numjugadas; i++) {
  let respuesta = prompt("Juega piedra, papel o tijera");
  let maquina = Math.floor(Math.random() * 3);
  if (respuesta == "piedra" || respuesta == "Piedra") {
    if (maquina === 0) {
      alert("El computador jugó piedra, Empataron!");
    } else if (maquina === 1) {
      alert("computador jugó papel, Perdiste ! :(");
      contadorMaquina++;
    } else if (maquina === 2) {
      alert("computador jugó tijeras,Ganaste!!!");
      contadorUsuario++;
    }
  } else if (respuesta == "papel" || respuesta == "Papel") {
    if (maquina === 0) {
      alert("computador jugó piedra,Ganaste!!!");
      contadorUsuario++;
    } else if (maquina === 1) {
      alert("computador jugó papel, Empataron!");
    } else if (maquina === 2) {
      alert("computador jugó tijeras, Perdiste ! :(");
      contadorMaquina++;
    }
  } else if (respuesta == "tijera" || respuesta == "Tijera") {
    if (maquina === 0) {
      alert("computador jugó piedra, Perdiste ! :(");
      contadorMaquina++;
    } else if (maquina === 1) {
      alert("computador jugó papel,Ganaste!!!");
      contadorUsuario++;
    } else if (maquina === 2) {
      alert("computador jugó tijeras, Empataron!");
    }
  }
}
if (contadorMaquina > contadorUsuario) {
  alert("El computador ganó  y tu perdiste :( " +contadorMaquina +"-"+contadorUsuario);
} else if (contadorUsuario > contadorMaquina) {
  alert("Le ganaste a la computadora, Felicidades!! " +contadorMaquina +"-"+contadorUsuario);
} else if (contadorUsuario == contadorMaquina) {
  alert(
    "Empataron " +
      "Puntaje computador: " +
      contadorMaquina +
      " Puntaje usuario: " +
      contadorUsuario
  );
}


