class Context extends React.Component{
  constructor(props){
    super(props);
    this.handleMinus=this.handleMinus.bind(this);
    this.handleAdd=this.handleAdd.bind(this);
    this.handleReset=this.handleReset.bind(this);
    this.state={
      count: 6
  };
}
  componentDidMount(){
    console.log("mount");
    const stringCount = localStorage.getItem('count');
    const num=parseInt(stringCount , 10);
    if(num!=NaN){
    this.setState(()=>({count: num}));
  }
  }
  componentDidUpdate(prevState) {
    console.log(this.state.count);
    if(prevState.count !== this.state.count){
    localStorage.setItem('count',this.state.count);}
  }

  handleMinus(){
    this.setState((prevState)=>{
      return{
        count: prevState.count-1
      };
    });
  }

  handleAdd(){
    this.setState((prevState)=>{
      return{
        count: prevState.count+1
      };
    });
    }

  handleReset(){
    this.setState(()=>{
      return{
        count: 0
      };
    });
  }

  render(){
    return(
      <div>
        <h1>Count : {this.state.count}</h1>
        <button onClick={this.handleMinus}>-1 </button>
        <button onClick={this.handleAdd}>+1 </button>
        <button onClick={this.handleReset}>Reset </button>

         </div>
    );
  }
}

const doc=document.getElementById('app');

ReactDOM.render(<Context />,doc);


// const name="meetasha gaur"
// const firstname=(fname) => fname.split(' ')[0];
// console.log(firstname(name));
//
//
//
// //
// // const template2 =(
// //   <div>
// //     <h1>Meetasha Gaur</h1>
// //     <p>Age : 21</p>
//     <p>Location: jaipur</p>
//   </div>
// );
//
// let count=0;
// const minusOne=()=>{
//
//   console.log("doing minus one");
//   count--;
//   myfunction();
// }
//
// const doc=document.getElementById('app');
//
// const myfunction=()=>{
//   const template3 =(
//     <div>
//       <h1>Count = {count}</h1>
//       <button onClick={minusOne}>-1</button>
//     </div>
//   );
//
//   ReactDOM.render(template3,doc);
//
// };
// myfunction();
