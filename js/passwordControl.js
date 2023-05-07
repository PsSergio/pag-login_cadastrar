function mostrarSenha(){
    var inputPass = document.getElementById('valueSenha');
    var showPass = document.getElementById('btn-senha');

    if (inputPass.type === 'password'){
        inputPass.setAttribute ('type', 'text');
        showPass.classList.replace('fa-eye', 'fa-eye-slash');
    }else{
        inputPass.setAttribute ('type', 'password');
        showPass.classList.replace('fa-eye-slash', 'fa-eye');
    }
}
