import React from 'react';

export default function Dummybuttons(props) {
  return <div>
  <button className="itemButtons" onClick={ ()=> props.dummyMe(1, "beer",1) } >Add beer</button>
  <button className="itemButtons" onClick={ ()=> props.dummyMe(2, "vodka", 1) }>Add vodka</button>
  <button className="itemButtons" onClick={ ()=> props.dummyMe(3, "gambina", 1) }>Add gambina</button>
  <button className="itemButtons" onClick={ ()=> props.dummyMe(4, "wine", 1) }>Add wine</button>
</div>;
}
