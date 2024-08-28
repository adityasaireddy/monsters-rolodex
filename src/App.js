import { useEffect, useState } from "react";
import "./App.css";
import Searchbox from "./components/search-box/search-box.component";
import Cardlist from "./components/card-list/card-list.component";

const App = () => {
  const [monsters, setmonsters] = useState([]);
  const [searchfield, setsearchfield] = useState("");
  const [filterdm, setfilteredm] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setmonsters(users));
  }, []);

  useEffect(() => {
    const filteredmonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchfield);
    });

    setfilteredm(filteredmonsters);
  }, [monsters, searchfield]);

  const onsearchchange = (event) => {
    const searchfieldstring = event.target.value.toLowerCase();
    setsearchfield(searchfieldstring);
  };

  return (
    <div className="App">
      <h2 className="title">Monsters Rolodex</h2>
      <Searchbox onchange={onsearchchange} />
      <Cardlist filterdmonsters={filterdm} />
    </div>
  );
};

export default App;
