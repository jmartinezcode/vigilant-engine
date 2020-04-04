import React from 'react'

export const Card = (props) => {
  return (
    <div className="col s12 m6 l3">
      <div className="card">
        {
          props.word
        }
      </div>        
    </div>
  )
}

