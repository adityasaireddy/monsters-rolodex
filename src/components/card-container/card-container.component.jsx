import "../card-container/card-container.style.css";

const CardContainer = (props) => {
  const { mons } = props;
  return (
    <div className="card-container">
      <img
        alt="monsters"
        src={`https://robohash.org/${mons.id}?set=set2&size=180x180`}
      />
      <h2>{mons.name}</h2>
      <p>{mons.email}</p>
    </div>
  );
};

export default CardContainer;
