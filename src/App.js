import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [nasaData, setNasaData] = useState([]);
  useEffect(()=>{
  axios.get('https://api.nasa.gov/planetary/apod?api_key=2qD76VUzXC8HEKzqNzrdKGTx0AIuSrrUEYREqewj')
    .then((response)=>{
    console.log(response.data);
    })
    .catch((error) =>{
    console.log(error);
  })  
  },[])

  return (
  
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      </div>
  );
}

export default App;
