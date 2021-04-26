import React from 'react'
import Pet from "./Pet"

function Client(props) {
  console.log("client =", props.data)
  return (
    <div className="Client">
      <p>{props.data.name}</p>
      {props.data.pets.map((pet, i) =>  <Pet petdata={pet} key={i.toString + "-pet"}/>)}
    </div>
  )
}

export default Client
