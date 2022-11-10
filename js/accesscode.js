//meus doms
let escolher = document.querySelector('.select');
let keyCypher = document.getElementById('chaveCont');
let btnRadio = document.querySelector('.radiobtn');
let codificar = document.getElementById('codificar');
let decodificar = document.getElementById('decodificar');
let resultadoBotao = document.getElementById('resultbtn');
let texto = document.getElementById('textocode');
let output = document.getElementById('output');


// quando for escolhida a cifra de cesar, a chave numerica vai aparecer
function selecao() {
    escolher.addEventListener("click", function () {
        if (escolher.value === "cifra") {
            keyCypher.style.display = "block";
        } else {
            keyCypher.style.display = "none";
        }
    });
}

// mudar as mensagens do botão de resultado quando for escolhido o botao radio pra codificar ou decodificar
btnRadio.addEventListener("click", function () {
    if (codificar.checked) {
        resultadoBotao.innerHTML = "Codificar Mensagem!";
    } else if (decodificar.checked) {
        resultadoBotao.innerText = "Decodificar Mensagem!";
    }
});

// a criptografia da base64
function base64() {
    let texto = document.getElementById('textocode').value;

    if (codificar.checked) {
        let encodeBase64 = btoa(texto)
        return encodeBase64;
    } else if (decodificar.checked) {
        let decodeBase64 = atob(texto)
        return decodeBase64;
    }   
}

// aqui é a criptografia da cifra de cesar
function cifraDeCesar() {
    let texto = document.querySelector('#textocode').value;
    let chave = parseInt(document.querySelector('#rangenumber').value);
    let saida = '';
  
    if (codificar.checked) {
      for (let i = 0; i < texto.length; i++) {
        if (texto[i] === texto[i].toUpperCase()) {
          saida += String.fromCharCode((texto.charCodeAt(i) + chave - 65) % 26 + 65); 
        } else {
          saida += String.fromCharCode((texto.charCodeAt(i) + chave - 97) % 26 + 97);
        }
      }
      return saida;
  
    } else if (decodificar.checked) {
      for (let i = 0; i < texto.length; i++) {
        if (texto.charCodeAt(i) >= 97 && texto.charCodeAt(i) <= 122) {
          saida += String.fromCharCode((texto.charCodeAt(i) - 97 -  chave + 26) % 26 + 97);
        } else if (texto.charCodeAt(i) >= 65 && texto.charCodeAt(i) <= 90) {
          saida += String.fromCharCode((texto.charCodeAt(i) - 65 - chave + 26) % 26 + 65);
        } else {
          saida += String.fromCharCode(texto.charCodeAt(i));
        }
      }
      return saida;
    }
  }

// o resultado das duas criptografias que vai aparecer na textarea 
resultadoBotao.addEventListener("click", function (event) {
    event.preventDefault();
    if (escolher.value == "cifra") {
        output.value = cifraDeCesar();
    } else if (escolher.value == 'base64') {
        output.value = base64();
    }
});
