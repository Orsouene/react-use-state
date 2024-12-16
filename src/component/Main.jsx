// importo il card
import Card from "./Card";
// import la funzione dell buttone
import Button from "./Button";
// importo l'array dell languages
import languages from "../data/languages";
function Main() {
  return (
    <main className="d-flex flex-column">
      <div className="d-flex gap-3 ps-5 pt-5">
        {languages.map((language) => {
          //   console.log(language.title);
          return (
            <div key={language.id} className="l-button">
              <Button title={language.title} />
            </div>
          );
        })}
      </div>
      <div className="ps-5 pt-3">
        <div>
          <Card
            title={languages[0].title}
            description={languages[0].description}
          />
        </div>
      </div>
    </main>
  );
}

export default Main;
