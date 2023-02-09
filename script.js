async function buscaEndereco(cep){
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = ""; //inserir informações dentro do HTML através da div 'erro" criada.
    try{
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json`);
        var consultaCEPConvertida = await consultaCEP.json();
        if(consultaCEPConvertida.erro){
            throw Error ('CEP não existe!');
        }

        var cidade = document.getElementById('cidade');
        var endereco = document.getElementById('endereco');
        var estado = document.getElementById('estado');

        cidade.value = consultaCEPConvertida.localidade;
        endereco.value = consultaCEPConvertida.logradouro;
        estado.value = consultaCEPConvertida.uf;

        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;
    }catch(erro){
        mensagemErro.innerHTML = `<p>CEP Inválido. Tente novamente!</p>`
        console.log(erro);
    }
}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value)); 
//addEventListener -> detectar eventos (focusout) nos elementos buscando o valor digitado no campo cep

//focusout -> quando o foco está ativo ->> tipo preenchendo no campo CEP e sai do campo perdeno o focu


//then quando nossa promessa foi resolvida
//catch quando nossa promise foi rejeitada