//JSX-React

const app ={
  title: "React app",
  subtitle: "This is the info of react app",
  options: ['one' , 'two']
};

const onFormSubmit=(e)=>{
  e.preventDefault();
  i=0;
  const option=e.target.elements.option.value;
  if(option){
    app.options.push(option);
    e.target.elements.option.value='';
    formFunct();
  }
}

const removeAll=()=>{
  i=0;
  app.options=[];
  formFunct()
}

const whatDo=()=>{
  const random=Math.floor(Math.random() * app.options.length);
  const option = app.options[random];
  alert(option);
}
const doc=document.getElementById('app');
let i=0;
const formFunct=()=>{
  const template=(
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options && app.options.length>0 ? "Here are your options" : "NO options"}
      <br/>
          {app.options.length}
      </p>
      <ol>
        {
          app.options.map((option)=>{
            i++;
            return <li key={i}>{i} = {option}</li>;
          }
        )
        }
      </ol>
      <button onClick={removeAll}>Remove all</button>
      <button disabled={app.options.length===0} onClick={whatDo}>What to do?</button>

      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add more options</button>
      </form>
    </div>
  );
  ReactDOM.render(template,doc);

};
formFunct();
