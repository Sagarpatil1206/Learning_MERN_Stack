//for creating a react app write npx create-react-app app_name in command_prompt
//write npm start (in command_prompt) to run your react app
//we write className instead of class here
//mb-3 meanse margin bottom 3
//forn control makes these btful input fields

import { useState } from "react";

function App() {
  const [email, setEmail] = useState(""); //Returns a stateful value, and a function to update it.
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => { /* every event handler can access the event */
    event.preventDefault();
    console.log("state => ", email, password);
  };

  return (
    <div className="container">
      <h1 className="display-4 text-center">Hello React</h1>
      <br />
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <p>
                Enter name :{" "}
                <input type="text" className="form-control"></input>
              </p>
            </div>
            <p>
              Enter your email Address :{" "}
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="form-control"
                type="email"
              />
            </p>
            <p>
              Enter your Password :{" "}
              <input
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="form-control"
                type="password"
              ></input>
            </p>
            {/* onChange and all this function is event handling and we are grabbing event here on change and executing function */}
            <button type="submit" className="btn btn-primary">
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default App;

/* HTML events are "things" that happen to HTML elements. When JavaScript is used in HTML pages, JavaScript can "react" on these events. */
