//VARIAVEIS FILMES E NOMES
var listaFilmes = [
  {
    imagem:"https://br.web.img3.acsta.net/pictures/15/03/26/16/44/393405.jpg",
    nome:'O castelo Animado',
  },
  {
    imagem:  "https://media.fstatic.com/WGvVZZyQK9dWlucheet3wl67MW0=/322x478/smart/filters:format(webp)/media/movies/covers/2022/02/AAAABbUJCGUKOy7tkODJ1SdIOt31vCfbsei70-yicc2jzys4b-vevv9G44LgZxdoU9_SQI5X5U.jpg",
    nome:'Madea: O retorno',
  },
  {
    imagem:"https://br.web.img3.acsta.net/medias/nmedia/18/89/69/60/20395922.jpg",
    nome:'O Grinch',
  },
  {
    imagem:"https://upload.wikimedia.org/wikipedia/pt/thumb/b/b8/Desventurasemserie0qk.jpg/243px-Desventurasemserie0qk.jpg",
    nome:'Desventura em séries',
  },
  {
    imagem: "https://br.web.img2.acsta.net/r_1280_720/pictures/23/10/16/12/45/0098686.jpg",
    nome: 'Doona',
  },
  {
    imagem: "https://papoaleatorio.com.br/wp-content/uploads/2018/11/DploGqlWsAY4ywW.jpg",
    nome:'A maldição da residência Hill',
  },
  {
    imagem: "https://i.pinimg.com/736x/ef/29/1e/ef291e1758d4aa08259ea254102aadc0.jpg",
    nome:'Tudo bem não ser normal',
  },
  {
    imagem:"https://br.web.img3.acsta.net/pictures/22/09/02/14/41/3125203.jpg",
    nome:'A imperatriz'
  }
];

listarFilmesNaTela();

function newFilme() {
  var result = document.getElementById("msgError");
  var filmeFavorito ={
    imagem: document.getElementById("filme").value,
    nome: document.getElementById("nomeFilme").value,
  };
  if (filmeFavorito.imagem.endsWith(".jpg")) {
    listaFilmes.push(filmeFavorito);
    listarFilmesNaTela();
  } 
  else {
    var result02 = "Endereço de filme inválido ou campo não preenchidos!";
    result.innerHTML = result02;
  }

  document.getElementById("nomeFilme").value = "";
  document.getElementById("filme").value = "";
}

function listarFilmesNaTela() {
  var destino = document.getElementById("listaFilmes");
  var elementos = "";

  listaFilmes.forEach(function (filme) {
    elementos += `<div style='display: inline-block; margin-right: 20px; text-align: center;'>
                    <p style='color: #ffffff; font-family: 'arial;'>
                      ${filme.nome} 
                    </p>
                    <img src="${filme.imagem}">
                   </div>`;
  });

  destino.innerHTML = elementos;
}

function deletFilme() {
  listaFilmes.pop();
  listarFilmesNaTela(listaFilmes);
}
