import { useEffect, useState } from "react";
import "./styles/main.css";

interface AboutData {
  printSalutation: string;
  printName: string;
  printAge: string;
  printLocation: string;
  printHobbies: string;
  printFarewell: string;
}

function App() {
  const [data, setData] = useState<AboutData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("http://localhost:3011/")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data: AboutData) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error: ", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (!data) {
    return <div className="error">No data available.</div>;
  }

  return (
    <div className="container">
      <h1>About Me</h1>
      <div className="info">{data.printSalutation}</div>
      <div className="info">{data.printName}</div>
      <div className="info">{data.printAge}</div>
      <div className="info">{data.printLocation}</div>
      <div className="info">{data.printHobbies}</div>
      <div className="info">{data.printFarewell}</div>
    </div>
  );
}

export default App;
