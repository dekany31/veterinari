import React, {useState} from 'react'

function Pet(props) {

  const [toggle, setToggle] = useState(false)

  console.log("pets =", props.petdata.isVaccinated)
  return (
    <div className="Pet">
      <p>{props.petdata.name}({props.petdata.animal}) - "Vaccinated:" 
      
        
      <button onClick={() => setToggle(!setToggle)}>
         {props.petdata.isVaccinated ? "true"
                                    : "false"
         }
      </button>
                              
      
      </p>
      
    </div>
  )
}

export default Pet
