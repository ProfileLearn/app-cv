import './App.css';
import req from "./components/req.js"


function App() {
  const request = req("https://raw.githubusercontent.com/ProfileLearn/dataForTest/main/objetosArr.json");
  request.then(e=>console.log(e))
  return (
    <p>hola munsd</p>
  );
}

export default App;
