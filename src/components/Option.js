import React from 'react';
const Option=(props)=>(
    <div>
          <button onClick={(e)=>{
              props.handleRemoveOne(props.content);
          }}>
          Remove
        </button>
         {props.content}
    </div>
  );


export default Option;
