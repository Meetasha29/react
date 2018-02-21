import React from 'react';
import Option from './Option.js';

const Options=(props)=>{
    let i=0;
  return(
    <div>
      <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button className="button button--link" onClick={props.handleRemoveAll}>Remove All</button>
    </div>
      {props.option.length ==0 && <p className="widget-message">Please add an option to get started!</p>}
      <ol className="option--ol">
        {
          props.option.map((option)=>{
            i++;
            return <Option content={option} key={i} i={i} handleRemoveOne={props.handleRemoveOne}/>;
          }
        )
        }
      </ol>
    </div>
  );
}
export default Options;
