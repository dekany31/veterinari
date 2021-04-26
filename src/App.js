import './App.css'
import React, {useState} from "react"
import LoadingMask from "./components/LoadingMask"


const App = () => {

  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])


  const startF = () => {
    setLoading(true)
    setData([])
    fetch(`/api/clients?search=${search}`)
    .then( (resp) => (resp.json()) )
    .then ( (adat) => (setData(adat)) )
    .catch( (err) => {
                      console.log("FetchError=", err);
                      setData(null);
                    } 
          )
    .finally( () => (setLoading(false)) )
  }

  

  return (
    <div className="App">
      <h1>Veterinari admin</h1>
      <input type="text" onChange={(ev)=>(setSearch(ev.target.value)) }/>
      <button disabled="" onClick={() => (startF())}>Search</button>
      {
        loading ? <LoadingMask />
              : data === null 
                      ? <p>OOppss!</p>
                      : data.map((item) => item.name)  
      }
    </div>
  )
}

export default App
