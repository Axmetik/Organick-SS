import "./button.scss";

export default function Button({ className, buttonText, onClick, type }) {
  return (
    <button
      className={`button ${className}__button`}
      onClick={onClick}
      type={type ? type : "submit"}
    >
      <p className="button__text">{buttonText}</p>
      <span className="button__arrow">{">"}</span>
    </button>
  );
}
