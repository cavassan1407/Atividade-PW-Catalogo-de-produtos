const catalogoProdutos = [
    ['Koi No Yokan Vinil' , 
    "https://m.media-amazon.com/images/I/71nOBG3aVlL._UF1000,1000_QL80_.jpg" ,
    'Alternative Metal',
    'Deftones', 
    "190,50"],
    ['Whole Lotta Red Vinil' , 
    "https://i.scdn.co/image/ab67616d00001e0298ea0e689c91f8fea726d9bb" ,
    'Rage Trap',
    'Playboi Carti',  
    "289,99"],   
    ['In Rainbows Vinil' , 
    "https://upload.wikimedia.org/wikipedia/pt/9/96/Radiohead_-_In_Rainbows.jpg?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original" ,
    'Alternative Rock',
    'Radiohead',  
    "350,00"],
    ['IGOR Vinil' , 
    "https://i.scdn.co/image/ab67616d0000b27330a635de2bb0caa4e26f6abb" ,
    'Alternative R&B', 
    'Tyler, The Creator', 
    "314,99"],   
    ['Who Really Cares Vinil' , 
    "https://preview.redd.it/does-anybody-have-a-high-quality-image-of-the-who-really-v0-5h8hxj0mvtcf1.jpeg?width=1000&format=pjpg&auto=webp&s=3bfb5f15e4d24d7d13209d6699fcb07992084d7d" ,
    'Neo-Psychedelia', 
    'TV Girl', 
    "540,00"],
    ['A Tábua de Esmeralda Vinil' , 
    "https://i.scdn.co/image/ab67616d0000b2733bce213e564b833e4e4be01f" ,
    'MPB Samba', 
    'Jorge Ben Jor', 
    "214,99"],   
    ['chronic Vinil' , 
    "https://i.scdn.co/image/ab67616d0000b273729226a7a01d71e4c28cfe50" ,
    'Digicore', 
    'twikipedia', 
    "139,99"],
    ['O MAGO Vinil' , 
    "https://akamai.sscdn.co/uploadfile/letras/albuns/f/5/e/4/4947491781196959.jpg" ,
    'Jazz Rap', 
    'miseryswin', 
    "139,99"],
    ['Late Registration Vinil' , 
    "https://m.media-amazon.com/images/I/718khrgr5bL._UF1000,1000_QL80_.jpg" ,
    'Pop Rap', 
    'Kanye West', 
    "359,99"],
    ['A Matter of Time Vinil' , 
    "https://i.scdn.co/image/ab67616d0000b2738f68f6e65c1cfd36bb21561c" ,
    'Traditional Pop Bossa Nova', 
    'Laufey', 
    "349,99"],
    ['Brasilian Skies Vinil' , 
    "https://m.media-amazon.com/images/I/61htS1ObxYL.jpg" ,
    'Samba-Jazz', 
    'Masayoshi Takanaka', 
    "189,99"],
    ['Axis: Bold as Love Vinil' , 
    "https://m.media-amazon.com/images/I/814aBtvXsNL.jpg" ,
    'Psychedelic Rock', 
    'Jimi Hendrix', 
    "189,99"],              
];

const divCards = document.getElementById('cards');
const inputPesquisa = document.getElementById('barra-de-pesquisa');

function formatar_texto(texto) {
    return texto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

function pesquisar() {
    const pesquisa = inputPesquisa.value.trim();

    const itensFiltrados = catalogoProdutos.filter((produto) => {
        return [0,2,3,4].some(i => produto[i].toLowerCase().includes(pesquisa.toLowerCase()));
    })

    if(itensFiltrados.length == 0) {
        divCards.innerHTML = "";
        const texto = document.createElement('h1');
        texto.textContent = "Não tem";
        divCards.appendChild(texto);
    }
    else {
        console.log(itensFiltrados);
        renderizarCards(itensFiltrados);
    }
}

function renderizarCards(itensFiltrados) {
    divCards.innerHTML = "";

    itensFiltrados.forEach(item => {

        divCards.innerHTML += `
        <article class="article-card">
            <div class="card">
                <img src="${item[1]}" class="card-img">
                <h1 class="h1-card">${item[0]}</h1>
                <h4>${item[3]}</h4>
                <h3>${item[4]}</h3>
            </div>
        </article>
        `
    });
}

inputPesquisa.addEventListener('input', pesquisar);
renderizarCards(catalogoProdutos);