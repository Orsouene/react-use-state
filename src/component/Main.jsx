// import la funzione dell buttone
import Button from "./Button";
// importo l'array dell languages
import languages from "../data/languages";
function Main() {
  return (
    <main>
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
    </main>
  );
}

export default Main;
