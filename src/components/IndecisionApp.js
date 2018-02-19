import React from 'react';
import AddOption from './AddOption.js';
import Options from './Options.js';
import Action from './Action.js';
import Header from './Header.js';
import OptionModal from './OptionModal.js'

export default class IndecisionApp extends React.Component{
  state={
    options: [],
    selectedOption: undefined
  };

handleRemoveAll=()=>{  this.setState(()=>({options:[]}));}
handleclose=()=>{this.setState(()=>({selectedOption: undefined}));}


handlePick=()=>{
  const random=Math.floor(Math.random() * this.state.options.length);
  const option = this.state.options[random];
  this.setState(()=>({ selectedOption: option }));

}

handleAdd=(option)=>{
  if(option==='')
    return 'Enter valid string';
  this.setState((prevState)=>({ options: prevState.options.concat(option) }));
}

handleRemoveOne=(optionToRemove)=>{
  this.setState((prevState)=>({
    options: prevState.options.filter((option)=>{
      return optionToRemove!==option;
    }
  )
}));
}

  componentDidMount=()=> {
    console.log("componentDidMount");
    const json1=localStorage.getItem('option');
    const options = JSON.parse(json1);
    this.setState(()=>({options: options}));
  }


  componentDidUpdate =(prevState )=> {
    console.log("componentDidUpdate");

    const json=JSON.stringify(this.state.options);
    localStorage.setItem('option',json);

  }

  componentWillUnmount=()=>{
    console.log("componentWillUnmount");
  }

  render(){

    const subtitle='Put your life under the hands of computer';
    return(
      <div>
        <Header subtitle={subtitle}/>
        <Action hasoption={this.state.options.length>0} handlePick={this.handlePick}/>
        <Options option={this.state.options} handleRemoveAll={this.handleRemoveAll} handleRemoveOne={this.handleRemoveOne}/>
        <AddOption option={this.state.options} handleAdd={this.handleAdd}/>
        <OptionModal selectedOption={this.state.selectedOption} handleclose={this.handleclose}/>
      </div>
    );
  }
}
