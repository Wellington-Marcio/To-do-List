

const button = document.querySelector('#btn')
const input = document.querySelector('input')
const ul = document.querySelector('list')
const contador = document.querySelector('.contador');
let contadorDeItens = 0;




button.addEventListener('click',() => {
    let valorDigitado = input.value;
    if (valorDigitado === ""){
        return alert('Você não adicionou um item.');
    }
    const tasker = document.createElement("li");
    tasker.innerText= valorDigitado;
    list.appendChild(tasker);
    contadorDeItens++;
    contador.innerText = contadorDeItens;
    input.value = ""; 

    

})

