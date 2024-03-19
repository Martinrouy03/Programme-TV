const Program = ({ time, title, type, duration, image, isUnseen, direct }) => {
  return (
    <section>
      <h2>{time}</h2>
      <img src={image} alt="programTV" />
      <div className="description">
        <h1>{title}</h1>
        <p>{type}</p>
        <div className="bottom-description">
          <h3>{duration}</h3>
          <ul>
            {(isUnseen && <li>Inédit</li>) || (direct && <li>Direct</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Program;
