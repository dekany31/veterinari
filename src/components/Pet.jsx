import React, {useState} from 'react'

function Pet(props) {

  const [toggle, setToggle] = useState(props.petdata.isVaccinated)
  const [data, setData] = useState([])
//  const [loading, setLoading] = useState(false)
//  const [ already, setAlready ] = useState(null);
  const [ response, setResponse ] = useState(null);
  const [show, setShow] = useState(false);

const savePats = () => {
  fetch('/api/pets',
  { method: 'POST',
    mode: 'cors',
    headers: {
    'Content-Type': 'application/json'
             },
    body: JSON.stringify({
        name: props.petdata.name,
        isVaccinated: toggle
    })
  })
  .then( (resp) => (setResponse(true)) )
  .then ( (adat) => {console.log(adat); setData(adat) })
  .catch( (err) => {
                    console.log("FetchError=", err);
                    setResponse(false);
                  } 
        )
  .finally( () => setTimeout(() => setShow(false), 0) )
}


  console.log("pets =", props.petdata.isVaccinated)
  return (
    <div className="Pet">
      <p>{props.petdata.name}({props.petdata.animal}) - "Vaccinated:" 
      
        
      <button onClick={() => setToggle(!toggle)}>
         {show ? "..."
                :toggle ? "true"
                        : "false"
         }
      </button>
                              
      
      </p>
      
    </div>
  )
}


export default Pet
