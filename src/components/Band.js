import React from 'react';

const Band = (props) => {
    // console.log(props)
  return (
    <li>
        <p>{props.band.name}</p>
        <button onClick={() => props.deleteBand(props.band.id)}>Delete Band</button>
    </li>
  )
}

export default Band;
