
let formArr = [];


class contato {
    
    constructor(nome,sobrenome,email,cpf,telefone,contato){

        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.contato = contato;

    }
}

 function Post(form) {

    event.preventDefault();

  let data = new contato(form.elements.namedItem("nome").value,
            form.elements.namedItem("sobrenome").value, 
            form.elements.namedItem("email").value, 
            form.elements.namedItem("cpf").value, 
            form.elements.namedItem("telefone").value, 
            form.elements.namedItem("contato").value);

            console.log(data);

            Enviar(data.nome);

            form.reset();

            ativarButao();
  
}

function Enviar(nome) {


    if (nome && nome.trim() !== "") {
        alert('Obrigado Sr(a) ' + nome + ', os seus dados foram encaminhados com sucesso!');
    }
}


function ativarButao () {
    const termos = document.getElementById ("termos");
    const novidades = document.getElementById ("novidades");
    const btnEnviar = document.getElementById ("btnEnviar");

    if (termos.checked){
        novidades.disabled = false;
        btnEnviar.disabled = false;

    } else {
        novidades.checked = false;
        novidades.disabled = true;
        btnEnviar.disabled = true;
    }
}



