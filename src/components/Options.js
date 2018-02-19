import React from 'react';
import Option from './Option.js';

const Options=(props)=>{
    let i=0;
  return(
    <div>
      <p>Options here</p>
      <ol>
        {
          props.option.map((option)=>{
            i++;
            return <Option content={option} key={i} handleRemoveOne={props.handleRemoveOne}/>;
          }
        )
        }
      </ol>
      <button onClick={props.handleRemoveAll}>Remove</button>
    </div>
  );
}
export default Options;
