class Person{
  constructor(name = "Anonymous",age=0){  //default the name
    this.name=name;
    this.age=age;
  }
  greetings(){
    return `Hello I am ${this.name}`;
  }

  tellAge(){
    return `My age is ${this.age} years`;
  }
}

class Student extends Person{
  constructor(name,age,major){
    super(name,age);
    this.major = major;
  }

  hasMajor(){
    return !!this.major;
  }

  greetings(){
    super.greetings();
    console.log("hello");
  }
}

const p1=new Student("meetasha",6);
console.log(p1.greetings());
console.log(p1.tellAge());
