// importo css module
import style from "./Color.module.css";

function Button({ title, seleziono, premere }) {
  console.log(premere);
  return (
    <button
      type="button"
      className={`${premere ? style.buttonBg : "btn btn-primary"} `}
      onClick={seleziono}
    >
      {title}
    </button>
  );
}

export default Button;
