// Importeert express uit de node_modules map
import express, { response } from "express";
// console.log(express);

// Maak een nieuwe express app aan
const app = express();

// De URL haalt gegevens op van de REST API en fetch gegevens op van de opgegeven URL en stuurt deze als JSON en wijst het resultaat toe aan de variabele "data".
const url = "https://api.buurtcampus-oost.fdnd.nl/api/v1/stekjes";
const data = await fetch(url).then((response) => response.json());

// Stel ejs in als template engine en geef de 'views' map door
app.set("view engine", "ejs");
app.set("views", "./views");
// console.log(set);

// Gebruik de map 'public' voor statische resources
app.use(express.static("public"));
// console.log(url, data);

//  Maak een route voor de index
app.get("/", function (req, res) {
  // res.send('Hello World!')
  res.render("index", data);
});

// start de server en geeft het poortnummer door waarnaar de server luisterd
// Stel het poortnummer in waar express op gaat luisteren
app.set("port", process.env.PORT || 8000);

// Start express op, haal het ingestelde poortnummer op
app.listen(app.get("port"), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get("port")}`);
});
// console.log(listen)
