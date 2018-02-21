import React from 'react';

const Action=(props)=>
(
    <div>
      <button className="big-button" disabled={!props.hasoption} onClick={props.handlePick}>What should I do?</button>
    </div>
  );

export default Action;
