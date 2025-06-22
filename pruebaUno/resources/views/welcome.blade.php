<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Prueba envío de código</title>
</head>
<body>
    <h2>Enviar código de verificación</h2>
    <form id="verificacionForm">
        <input type="email" id="email" placeholder="Correo electrónico" required>
        <button type="submit">Enviar</button>
    </form>
    <div id="respuesta"></div>

    <script>
        document.getElementById('verificacionForm').addEventListener('submit', async function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const respuestaDiv = document.getElementById('respuesta');
            respuestaDiv.innerText = 'Enviando...';

            try {
                const resp = await fetch('/api/send-verification', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({ email })
                });
                const data = await resp.json();
                respuestaDiv.innerText = JSON.stringify(data, null, 2);
            } catch (err) {
                respuestaDiv.innerText = 'Error al enviar: ' + err;
            }
        });
    </script>
</body>
</html>