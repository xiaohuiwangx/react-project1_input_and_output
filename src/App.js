import React from "react";
import "./style.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends React.Component {
  state={
    username: "SuperDavid"
  };

  userNameChangeHandler = (event)=>{
    this.setState({username:event.target.value});
  };
  render(){
      return (
        <div>
          <UserInput 
            changed={this.userNameChangeHandler}
            currentName ={this.state.username}
          />
          <UserOutput userName="David"/>
          <UserOutput userName={this.state.username}/>
        </div>
      );
  }
}

export default App;
