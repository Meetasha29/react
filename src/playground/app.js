class IndecisionApp extends React.Component{
  constructor(props){
    super(props);
    this.handleRemoveAll=this.handleRemoveAll.bind(this);
    this.handlePick=this.handlePick.bind(this);
    this.handleAdd=this.handleAdd.bind(this);
    this.handleRemoveOne=this.handleRemoveOne.bind(this);
    this.state={
      options: []
    };
  }
  handleRemoveAll(){  this.setState(()=>({options:[]}));}

componentDidMount() {
  console.log("componentDidMount");
  const json1=localStorage.getItem('option');
  const options = JSON.parse(json1);
  this.setState(()=>({options: options}));
}


componentDidUpdate( prevState ) {
  console.log("componentDidUpdate");

  const json=JSON.stringify(this.state.options);
  localStorage.setItem('option',json);

}

componentWillUnmount(){
  console.log("componentWillUnmount");
}

handlePick(){
  const random=Math.floor(Math.random() * this.state.options.length);
  const option = this.state.options[random];
  alert(option);
}

handleAdd(option){
  if(option==='')
    return 'Enter valid string';
  this.setState((prevState)=>({ options: prevState.options.concat(option) }));
}

handleRemoveOne(optionToRemove){
  this.setState((prevState)=>({
    options: prevState.options.filter((option)=>{
      return optionToRemove!==option;
    }
  )
}));
}

  render(){

    const subtitle='Put your life under the hands of computer';
    return(
      <div>
        <Header subtitle={subtitle}/>
        <Action hasoption={this.state.options.length>0} handlePick={this.handlePick}/>
        <Options option={this.state.options} handleRemoveAll={this.handleRemoveAll} handleRemoveOne={this.handleRemoveOne}/>
        <AddOption option={this.state.options} handleAdd={this.handleAdd}/>
      </div>
    );
  }
}
//Use stateless component wherever state is not being used
const Header=(props)=>{
  return(
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
}

Header.defaultProps={
  title: 'Indecision App'
};

const Action=(props)=>{
  return(
    <div>
      <button disabled={!props.hasoption} onClick={props.handlePick}>What to do?</button>
    </div>
  );
}

// class Action extends React.Component{
//
//   render(){
//     return(
//       <div>
//         <button disabled={!this.props.hasoption} onClick={this.props.handlePick}>What to do?</button>
//       </div>
//     );
//   }
// }

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
// class Options extends React.Component{
//
//   render(){
//     let i=0;
//     return(
//       <div>
//         <p>Options here</p>
//         <ol>
//           {
//             this.props.option.map((option)=>{
//               i++;
//               return <Option content={option} key={i}/>;
//             }
//           )
//           }
//         </ol>
//         <button onClick={this.props.handleRemoveAll}>Remove</button>
//       </div>
//     );
//   }
// }

class AddOption extends React.Component{

  constructor(props){
    super(props);
    this.onFormSubmit=this.onFormSubmit.bind(this);
    this.state={
      error: undefined
    };
  }
  onFormSubmit(e){
    e.preventDefault();
    const option=e.target.elements.option.value.trim();

      const error=this.props.handleAdd(option);
      this.setState(()=>({error: error}));


      e.target.elements.option.value=''

  }
  render(){
    return(
      <div>
        {this.state.error && <p>{this.state.error}</p>  }
        <form onSubmit={this.onFormSubmit}>
          <input type="text" name="option" />
          <button>Add more options</button>
        </form>

      </div>
    );
  }
}

const Option=(props)=>{
  return(
    <div>
          <button onClick={(e)=>{
              props.handleRemoveOne(props.content);
          }}>
          Remove
        </button>
         {props.content}
    </div>
  );
}
// class Option extends React.Component{
//   remove(){
//     alert('remove');
//   }
//   render(){
//     return(
//       <div>
//           <button onClick={this.remove}>Remove</button>
//            {this.props.content}
//       </div>
//     );
//   }
// }
const doc=document.getElementById('app');

ReactDOM.render(<IndecisionApp option= {['option1','option2','option3']}/>,doc);
