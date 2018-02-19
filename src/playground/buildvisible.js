class Visibility extends React.Component{
  constructor(){
    super();
    this.handleToggle=this.handleToggle.bind(this);
    this.state={
      temp: 0
    };
  }
  handleToggle(){
      this.setState((prevState)=>{
        if(prevState.temp===0){

        return{
          temp: 1
        };
      }
      else{
        return{
          temp: 0
        };
      }
      });
  }
  render(){
    return(
      <div>
        <h1>Visible Toggle</h1>
        <button onClick={this.handleToggle}>{this.state.temp===1? "Show Details":"Hide details"}</button>
        {this.state.temp===0 && <p>Hello how are you}</p>}
      </div>
    );
  }
}
const doc=document.getElementById('app');

ReactDOM.render(<Visibility />,doc);






//
// const doc=document.getElementById('app');
// let temp=1;
// const toggle=()=>{
//   if(temp===0){
//   temp=1;
//
// }
//   else {
//     temp=0;
//   }
// render();
// }
// const render=()=>{
//   const template=(
//     <div>
//       <h1>Visible Toggle</h1>
//       <button onClick={toggle}>{temp===1? "Show Details":"Hide details"}</button>
//       {temp===0 && <p>Hello how are you}</p>}
//     </div>
//   );
//   ReactDOM.render(template,doc);
//
// };
// render();
