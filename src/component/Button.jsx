function Button({ title, seleziono }) {
  return (
    <button type="button" className="btn btn-primary" onClick={seleziono}>
      {title}
    </button>
  );
}

export default Button;
