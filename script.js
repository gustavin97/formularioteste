const nameInput = document.getElementById('name');
const cpfInput = document.getElementById('cpf');
const passwordInput = document.getElementById('password');
 const form = document.getElementById('formulario');
 const msgSucesso = document.getElementById('mensagem-sucesso')


//name
nameInput.addEventListener('input', () => {
  nameInput.value = nameInput.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
});


//cpf
cpfInput.addEventListener('input', () =>{
    cpfInput.value = cpfInput.value.replace(/[^0-9]/g, "");
});


//senha
passwordInput.addEventListener('input', ()=>{
    passwordInput.value = passwordInput.value.replace(/[^a-zA-Z0-9]/g, "");
});

form.addEventListener('submit', (e)=>{
    const nomeValido = nameInput.value.trim() !== '' ;
    const cpfValido = cpfInput.value.length === 11;
    const senhaValida = passwordInput.value.trim() !== '';

    if(!nomeValido || !cpfValido || !senhaValida) {
        alert("os campos nao fram preenchidos corretamente");
        e.preventDefault();}
        
       
  
    
})

