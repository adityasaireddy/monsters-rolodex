import "../card-list/card-list.style.css";
import CardContainer from "../card-container/card-container.component";

const Cardlist = (props) => {
  const { filterdmonsters } = props;
  return (
    <div className="card-list">
      {filterdmonsters.map((monster) => {
        return <CardContainer mons={monster} />;
      })}
    </div>
  );
};

export default Cardlist;
