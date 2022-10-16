import { useState } from "react";

//fetch axios http clients to connect to abackend api

//fetchComments returns a promise (probably; it could just be a "thenable"*). A promise is something that will be either resolved or rejected at a later point in time (typically**). then is used to hook up a handler that will be called when the promise is resolved (and optionally when it's rejected, if you pass a second function into then; otherwise you'd use catch).

const App = () => {
  const [user, setUser] = useState(""); //creating state so that when we get the data from backenfd we can put it down here in the set

  const fetchUserData = () => {
    fetch(`http://localhost:8000/api`, { //where do you want to fetch the data from
      method: "GET",                     // it will gice us promise promise 
    })
      .then((response) => {    //if there's a response we can return it
        return response.json();  //convert response into jso data
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));//.then().catch() 
      // if it do not goes in 'then' , so promise is not resolve and its rejected and catch as err
  };

  return (
    <div className="container">
      <br/>
      <button onClick={fetchUserData} className="btn btn-primary">
        Fetch user data
      </button>
    </div>
  );
};

export default App;

//C:\Users\dell\Desktop\C++ programs\MERN\reactbasics