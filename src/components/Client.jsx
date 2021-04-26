import React from 'react'
import Pet from "./Pet"

function Client(props) {
  console.log("client =", props.data)
  return (
    <div>
      <p>{props.data.name}</p>
      {props.data.pets.map((pet, i) =>  <Pet key={i.toString + "-pet"}/>)}
    </div>
  )
}

export default Client
