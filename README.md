> _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# Titel
Ontwerp en ontwikkel een server-side website voor de Buurtcampus-oost opdrachtgever.

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Gebruik](#gebruik)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
Voor dit project heb ik een overzichtspagina gebouwd met Node, Express en EJS op de server en gebruik gemaakt van client-side technieken HTML, CSS of JS voor het responsive ontwerp, waarbij buurtbewoners uit Amsterdam-oost kunnen zien welke stekjes momenteel in de stekjes kast zitten, zodat bewoners kan overwegen een stekje om te ruilen. 


## Kenmerken

- HTML STRUCTUUR

Een foreach loop voor stekjes cards waarbij de naam, aanmeldingsdatum, een beschrijving en een reserveerknop worden weergegeven in een article element met een afbeelding en een geordende lijst.


```
 <!-- Stekjes cards in een foreach loop -->
    <% stekjes.forEach(stekjes=> { %>
        <article class="leaf-cards" aria-label="Beschikbaar stekje">
            <ol>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </ol>

            <img src="/" alt>
            <div class="leaf-cards-content">
                <h2>
                    <%= stekjes.naam %>
                </h2>
                <p>
                    <%= stekjes.aanmelddatum %>
                </p>
                <p>hagasgasgasgas</p>
                <button>Reserveer</button>
            </div>


        </article>
        <% }) %>
```

- CSS technieken voor responsive container

Deze CSS-code wordt toegepast op een section-element en zorgt voor een flexibele lay-out. Met "display: flex" wordt de inhoud van de container flexibel geordend. De "flex-wrap: wrap" zorgt ervoor dat ze kaartjes worden verdeeld als ze niet meer in de beschikbare ruimte passen. De "
justify-content center;" Dit zorgt ervoor dat de inhoud van de section horizontaal in het midden komen te staan. 


```
.homepage-plant-container {
  margin: 0 1.5em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5em;
  --width-card: 20em;
}
```
- Server-side

 initialiseren en configureert express, waarbij ejs wordt ingesteld. De public map wordt gebruikt voor statiche bestanden.
 
```
const app = express();
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("./public"));
```


In de onderstaande code wordt een GET-verzoek gedefinieerd voor de indexdroute ('/') van een Express.js applicatie. 
In de callback-functie wordt de res.render() methode gebruikt om de "index" view template te renderen en deze te sturen als een HTML-respons naar de gebruiker. 

Over het algemeen kan deze code worden gebruikt om de "index" pagina van een webapplicatie te renderen met dynamische inhoud op basis van de gegevens die zijn opgeslagen in de data variabele.

```
 Maak een route voor de index
 
app.get("/", function (req, res) {
  res.render("index", data);
});

```

In de onderstaande code Fetch de API (url) in JavaScript om gegevens op te halen van de Buurtcampus Oost API.

Areerst wordt de URL van de API opgeslagen in de url variabele. 

Vervolgens wordt de fetch() functie aangeroepen met de URL als argument om een HTTP-verzoek naar de API te verzenden en de JSON-gegevens op te halen.

De fetch() functie retourneert een Promise die opgelost wordt tot een HTTP-response object.

Met behulp van de methode .then() op de geretourneerde Promise, wordt een callback-functie gedefinieerd die de HTTP-response omzet naar JSON met behulp van de methode .json(). Deze JSON-gegevens worden opgeslagen in de data variabele.

Het gebruik van de await functie betekent dat de code zal wachten totdat de Promise is opgelost voordat het doorgaat naar de volgende regel code, wat ervoor zorgt dat de gegevens pas worden verwerkt nadat ze zijn opgehaald van de API.


```
const url = "https://api.buurtcampus-oost.fdnd.nl/api/v1/stekjes";
const data = await fetch(url).then((response) => response.json());
```

## Installatie


```
installeer de Node ontwikkelomgeving, kies 18.14.0 LTS

Voer in de terminal het commando npm install express, ejs uit om het Express.js framework en de EJS template engine voor een Node.js te installeren 

Voer in de terminal het commando npm start uit om het script te starten. er verschijnt over het opstarten van de server: Application started on http://localhost:8000,
```


## Bronnen

* [Introduction to the server side](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Introduction)
* [Client-side vs. Server-side: what’s the difference?](https://medium.com/@donotapply/client-side-vs-server-side-whats-the-difference-a933341cd60e)
* [Node.js Ultimate Beginner’s Guide in 7 Easy Steps](https://www.youtube.com/watch?v=ENrzD9HAZK4)
* [Learn JSON in 10 Minutes](https://www.youtube.com/watch?v=iiADhChRriM&t=513s)

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
