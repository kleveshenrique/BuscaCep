    
    
 function buscaPorCep(){
    let cep = (document.getElementById("cep").value).replace("-","")
    
    //Selecionar campos existentes
    const showData = (result)=>{
        for (const campo in result) {
            if (document.querySelector("#"+campo)) {
                document.querySelector("#"+campo).value = result[campo];                
            }
        }
    }
    
    const options = {
        method : "GET",
        mode :"cors",
        cache : "default"        
    }
    fetch(`https://viacep.com.br/ws/${cep}/json/`,options)
        .then(response=>response.json())
        .then(dados=>{
           showData(dados)
        })
        .catch(erro=>console.log(erro))
 }