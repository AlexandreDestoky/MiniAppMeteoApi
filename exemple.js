let ville = "Tokyo";
recupererMeteo(ville);

let btn = document.querySelector("#changer");
btn.addEventListener("click", () => {
  ville = window.prompt("Nouvelle Ville ?");
  recupererMeteo(ville);
});

function recupererMeteo() {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    ville +
    "&appid=f72aa88ee8f9e3e4eb383c0abd75fc22&units=metric";
  // Créer une requête
  let requete = new XMLHttpRequest(); // Créer un objet
  requete.open("GET", url); // Premier paramètre GET / POST, deuxième paramètr : url
  requete.responseType = "json"; // Nous attendons du JSON
  requete.send(); // Nous envoyons notre requête

  // Dès qu'on reçoit une réponse, cette fonction est executée
  requete.onload = function () {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        let reponse = requete.response; // on stock la réponse

        let villeMeteo = reponse.name;
        document.querySelector("#ville").textContent = villeMeteo;

        let temperature = reponse.main.temp;
        document.querySelector("#temperature_label").textContent = temperature;
      } else {
        alert("Un problème est intervenu, merci de revenir plus tard.");
      }
    }
  };
}
