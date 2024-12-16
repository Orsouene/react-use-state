import { useState } from "react";

// importo il card
import Card from "./Card";
// import la funzione dell buttone
import Button from "./Button";
// importo l'array dell languages
import languages from "../data/languages";
function Main() {
  const [linguaggioSelezionato, setlinguaggioSelezionato] = useState(null);
  function selezionamento(linguaggio) {
    setlinguaggioSelezionato(linguaggio);
    // console.log(linguaggio);
  }
  //   console.log(languages);
  return (
    <main className="d-flex flex-column">
      <div className="d-flex gap-3 ps-5 pt-5">
        {languages.map((language) => {
          //   console.log(language.title);
          return (
            <div key={language.id} className="l-button">
              <Button
                title={language.title}
                seleziono={() => selezionamento(language)}
              />
            </div>
          );
        })}
      </div>
      <div className="ps-5 pt-3">
        <div>
          {linguaggioSelezionato ? (
            <Card
              title={linguaggioSelezionato.title}
              description={linguaggioSelezionato.description}
            />
          ) : (
            "Nessun linguaggio selezionato"
          )}
        </div>
      </div>
    </main>
  );
}

export default Main;
