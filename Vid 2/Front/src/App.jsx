import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css"; // Import your CSS file

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get("/api/jokes")
      .then((res) => {
        setJokes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="app-container"> {/* Use a container div */}
      <h1>Connecting backend with frontend</h1>
      <p>JOKES: {jokes.length}</p>

      {jokes.map((joke, index) => (
        <div key={joke.id} className="joke-container"> {/* Add a class for styling */}
          <h3>{joke.title}</h3>
          <h4>{joke.content}</h4>
        </div>
      ))}
    </div>
  );
}

export default App;
