import React from 'react';

export default function Buttons(props) {
  return <div>
          <button className="itemButtons" onClick={ ()=> props.clickMe(1) } >Add yeast</button>
          <button className="itemButtons" onClick={ ()=> props.clickMe(2) }>Add sugar</button>
          <button className="itemButtons" onClick={ ()=> props.clickMe(3) }>Add fruits</button>
          <button className="itemButtons" onClick={ ()=> props.clickMe(4) }>Add bucket</button>
  </div>;
}
