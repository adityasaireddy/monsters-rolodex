import "../search-box/search-box.style.css";

const Searchbox = (props) => {
  const { onchange } = props;
  return (
    <div>
      <input
        type="search"
        placeholder="search monsters"
        className="search-box"
        onChange={onchange}
      />
    </div>
  );
};

export default Searchbox;
