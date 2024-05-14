document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (email === "admin@admin" || "teste@teste.com" && password === "admin" || "teste") {
        Swal.fire({
            icon: 'success',
            title: 'Login bem-sucedido!',
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
            window.location.href = "../ServletBrinquedo?cmd=listar";
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Credenciais incorretas. Tente novamente.',
            showConfirmButton: false,
            timer: 1500
        });
    }
});
