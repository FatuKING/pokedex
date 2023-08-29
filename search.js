const input = document.getElementById('search');
const pokemon = document.getElementById('poke-container');

search.addEventListener('input', () => {
    const filtro = input.value.toLowerCase();
    const elementos = pokemon.getElementsByClassName('pokemon');

    for(let i = 0; i < elementos.length; i++) {
        const textoElemento = elementos[i].textContent.toLowerCase();
        if (textoElemento.includes(filtro)) {
            elementos[i].style.display = 'block';
        } else {
            elementos[i].style.display = 'none';
        }
    }
})