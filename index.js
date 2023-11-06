const express = require('express');
const app = express();

let Variable = 0;

function cambiar() {
  if (Variable === 0) {
    Variable = 1;
  } else {
    Variable = 0;
  }
}


// Ruta de prueba para ESP32
app.get('/test', (req, res) => {
  const name = Variable === 0 ? 'apagado' : 'encendido';
  console.log(Variable);

  res.json({ 'datos de prueba': `estado ${name}` });
});

// Ruta para cambiar el estado en ESP32
app.get('/change', (req, res) => {
  cambiar();
  res.json({ msg: 'Estado cambiado' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
