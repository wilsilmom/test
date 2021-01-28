
var vetor=[]
var saida 
var resultado
function adicionar(){
    entrada = Number.parseFloat(window.document.querySelector("input#entrada").value)
    if(vetor.indexOf(entrada)!=-1){
        window.alert("o número digitado ja foi adicionado, favor digitar outro!!")
    }else{
        if(entrada<=100 && entrada>=1){
            vetor.push(entrada)
            saida=""
            for(var num=0 in vetor){
                saida+=`<option value='saida'>${vetor[num]}</option><br/>`
            }
            window.document.querySelector('select#saida').innerHTML=saida
            window.document.querySelector('div#Resultado').innerHTML=""
        }else{
            window.alert("numero invalido ou está fora do escopo requisitado.")
        }
    }  
}
function finalizar(){
    var maior=0
    var menor=100
    var media
    var soma=0
    for(var num=0 in vetor){
        if(maior<vetor[num]){
            maior=vetor[num]
        }
        if(menor>vetor[num]){
            menor=vetor[num]
        }
        soma+=vetor[num]
    }
    media=soma/vetor.length
    window.document.querySelector('div#Resultado').innerHTML=`<p>Ao todo, temos ${vetor.length} números cadastrados.</p><p>O maior valor informado foi ${maior}.</p><p>O menor valor informado foi ${menor}.</p><p>Somando todos os valores, temos ${soma}.</p><p>A média dos valores digitados é ${media}.</p>`

}

