async function dog() {
  const url = "https://api.thedogapi.com/v1/images/search";

  return fetch(url).then((response) => {
    return response.json();
  });
}

async function cat() {
    const url = "https://api.thecatapi.com/v1/images/search"

  return fetch(url).then((response) => {
    return response.json();
  });
}


async function listarDog() {
  const dogs = await dog()
    .then((dados) => {
      return dados[0].url;
    })
    .then((img) => {
      const imagem = document.querySelector("#img");
      imagem.src = img;
    });
  return dogs;
}
listarDog()
async function listarCat() {
    const dogs = await cat()
      .then((dados) => {
        return dados[0].url;
      })
      .then((img) => {
        const imagem = document.querySelector("#imgCat");
        imagem.src = img;
      });
    return dogs;
  }
listarCat()


/* function dogEvent() {
  const buttonDog = document.querySelector("#inputDog");
  buttonDog.addEventListener("click", function (e) {
    e.preventDefault();
    listarDog();
  });
}
dogEvent();

function catEvent() {
    const form = document.querySelector("#inputCat");
    form.addEventListener("click", function (e) {
      e.preventDefault();
      listarCat();
    });
  }
catEvent() */

function handleAnimals(){
    
}
