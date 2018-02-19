import React from 'react';

const Action=(props)=>
(
    <div>
      <button disabled={!props.hasoption} onClick={props.handlePick}>What to do?</button>
    </div>
  );

export default Action;
