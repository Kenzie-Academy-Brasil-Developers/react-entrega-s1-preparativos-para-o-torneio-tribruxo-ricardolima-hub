import { useState, useEffect } from "react"
import './App.css';
import Students from "./components/Student";
import WelcomeScreen from "./components/WelcomeScreen";

function App() {

  const [students, setStudents] = useState([]);
  const [showScreen, setShowScreen] = useState(true);
  const [filteredSorceres, setFilteredSorceres] = useState([])

  useEffect(() => {
    fetch("http://hp-api.herokuapp.com/api/characters/students")
    .then((resp) => resp.json())
    .then((resp) => setStudents(resp))
    .catch((err) => console.log(err));
  }, []);

  const handleShowScreen = () => {
    setShowScreen(false)
  }

  const handleRandom = (element) => {
    return element[Math.floor(Math.random() * element.length)]
  }

  const handleFilter = () => {
    let sorcerer1 = handleRandom(students);
    let sorcerer2 = students.find((item) => item.house !== sorcerer1.house);
    let sorcerer3 = students.find((item) => item.house !== sorcerer1.house && item.house !== sorcerer2.house);

    setFilteredSorceres([sorcerer1, sorcerer2, sorcerer3])
  }

  return (
    <div className="App">
      {showScreen ? <WelcomeScreen handleShowScreen={handleShowScreen} handleFilter={handleFilter}/> : 
      <Students filteredSorceres={filteredSorceres} handleFilter={handleFilter}/>}
    </div>
  );
}

export default App;
