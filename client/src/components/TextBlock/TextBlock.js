import "./TextBlock.scss";

export default function TextBlock({ className, titleText, subtitleText }) {
  return (
    <div className={`${className}__text-block text-block`}>
      <span className={`${className}__subtitle text-block__subtitle`}>
        {subtitleText}
      </span>
      <h2 className={`${className}__title text-block__title`}>{titleText}</h2>
    </div>
  );
}
