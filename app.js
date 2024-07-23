function caesarCipher(texto, shift) {
    const alfabeto = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';

    for (let i = 0; i < texto.length; i++) {
        const char = texto[i];
        const isUpperCase = char === char.toUpperCase();
        const charLower = char.toLowerCase();

        if (alfabeto.includes(charLower)) {
            let index = alfabeto.indexOf(charLower);
            index = (index + shift + 26) % 26; // Adiciona 26 para garantir valores positivos
            const newChar = alfabeto[index];
            result += isUpperCase ? newChar.toUpperCase() : newChar;
        } else {
            result += char; // Adiciona caracteres não alfabéticos sem alteração
        }
    }

    return result;
}

function getText(classe) {
    const textarea = document.querySelector(classe);
    return textarea.value
}


function criptografar(){
    let texto = getText('.apresentacao__conteudo__entrada__input')
    let textoEncriptado = caesarCipher(texto, 4);
    console.log(textoEncriptado)

    //div com imagem, enquanto não há texto pra encriptar/decriptar
    const divNenhumConteudo = document.getElementById('sem_texto');
    divNenhumConteudo.classList.add('hidden');

    const divConteudo = document.getElementById('com_texto');
    divConteudo.classList.remove('hidden');
    
    const textareaSaida = document.getElementById('texto_saida');
    textareaSaida.value = textoEncriptado;

}

function descriptografar(){
    let texto = getText('.apresentacao__conteudo__entrada__input')

    const textareaSaida = document.getElementById('texto_saida');
    textareaSaida.value = texto;

}

function copiar(){
    const textareaSaida = document.getElementById('texto_saida');

    navigator.clipboard.writeText(textareaSaida.value)
    alert('Texto copiado para a área de transferência!');
}