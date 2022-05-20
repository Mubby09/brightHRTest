import './App.css';
import { Data } from "./Data.js"
import { useState } from "react"
import { Link } from "react-router-dom";

function Home(props) {
  const [searchTerm, setSearchTerm] = useState("")
  const showData = <ul> {
    Data.sort((a, b) => {
      return a.name.localeCompare(b.name)
    }).filter((d) => {
      return d.name.toLowerCase().includes(searchTerm)
    }).map((d) => (
      <li key={d.id}>
        {d.name}
        <Link
          to={{
            pathname: `/view-details/${d.id}`,
            state: { Data: d.id }
          }}
        // state={{ Data }}
        >
          <button>View Details</button>
        </Link>
      </li>
    ))
  } </ul >


  return (
    <div className="App" >
      <h4>JSON DATA IS SORTED ALPHABETICALLY WITH FILENAME</h4>
      <label htmlFor="">FILTER: </label>
      <input type="test"
        placeholder="Search by Filename"
        onChange={
          e => setSearchTerm(e.target.value)} />
      {showData}
    </div >
  );
}

export default Home;