 "use strict";
async function buscar(){
    let dado = document.getElementById("cep").value.replace("-","");
   ColetarCep(dado);
 }

async function ColetarCep(dado){
    const cep = await fetch(`https://viacep.com.br/ws/${dado}/json/`).then(
        (response) => response.json()
    );
    DadosTabela(cep);

} 

function DadosTabela(cep){
    console.log(cep);
    document.getElementById("cidade").value = cep.localidade;
    document.getElementById("logradouro").value = cep.logradouro;
    document.getElementById("regiao").value = cep.regiao;
    document.getElementById("complemento").value = cep.complemento;
    document.getElementById("bairro").value = cep.bairro;   
    document.getElementById("uf").value = cep.uf;
;
}
function limpar(){
    console.log(cep);
    document.getElementById("cidade").value = null;
    document.getElementById("logradouro").value = null;
    document.getElementById("regiao").value = null;
    document.getElementById("complemento").value = null;
    document.getElementById("bairro").value = null;   
    document.getElementById("uf").value = null;
    document.getElementById('cep').value = null;
 
}