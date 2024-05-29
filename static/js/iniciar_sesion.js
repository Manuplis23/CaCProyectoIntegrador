document.getElementById('togglePassword').addEventListener('click', function (e) {
    const passwordInput = document.getElementById('password');
    const passwordIcon = this.querySelector('i');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordIcon.textContent = 'visibility_off';
    } else {
        passwordInput.type = 'password';
        passwordIcon.textContent = 'visibility';
    }
});

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let valid = true;

    const email = document.getElementById('email');
    const password = document.getElementById('password');

    const errorEmail = document.getElementById('error-email');
    const errorPassword = document.getElementById('error-password');

    errorEmail.textContent = '';
    errorPassword.textContent = '';

    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailPattern.test(email.value)) {
        valid = false;
        errorEmail.textContent = 'Por favor, ingresa un correo válido de Gmail.';
    }

    if (password.value.length < 12) {
        valid = false;
        errorPassword.textContent = 'La contraseña debe tener al menos 12 caracteres.';
    }

    if (valid) {
        // Simula un envío exitoso
        alert('Inicio de sesión exitoso');
        // Aquí iría el código para enviar el formulario
        // this.submit();
    }
});