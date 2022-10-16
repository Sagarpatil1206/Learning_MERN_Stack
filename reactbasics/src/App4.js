//USING Axios

import { useState, useEffect } from "react";
import axios from "axios";
import Button from "./Components/Button";
import styled from "styled-components";

const App = () => {
  const [users, setUsers] = useState([]); //we are expecting array this time not string
  const [posts, setPosts] = useState([]);

  const fetchUserData = () => {
    axios
      .get(`http://localhost:8000/api`)
      .then((data) => setUsers(data.data.users))
      .catch((err) => console.log(err));
  };

  const fetchPostData = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((data)=>setPosts(data.data))
    .catch((err)=>console.log(err));
  };

  const testFunc=()=>{
    alert("This is a test function");
  }

  /* as json is not supported here 
   so using stringify*/
  return (
    <div className="container">
      <br />
      {/* <pre>{JSON.stringify(users)}</pre> */}
      {users &&
        users.map((user) => {
          //map function gives one by one user
          return (
            <div className="alert alert-primary" key={user.age}>
              {user.name} is {user.age} years old{" "}
            </div>
          ); //here we receive the data from localhost:8000 and rendring on our website frontend.
        })}
      <br />

      <button onClick={fetchUserData} className="btn btn-primary">
        Fetch user data
      </button><br />
      
      <br />

      <Button handleClick={fetchPostData} title="Fetch Post Data"/><br/><br/>
      <Button handleClick={testFunc} title="Test function"/>

      {/* <button onClick={fetchPostData} className="btn btn-primary">
        post data
      </button> */}

      {posts &&
        posts.map((element) => {
          return (
            <PostList className="alert alert-primary" 
            // style={{backgroundColor:"green",color: "white",border:"2px solid black",boxShadow:"5px 3px black",paddingBlock:"10px"}} 
              key={element.id}>
              {element.title} is having {element.userId}
            </PostList>
          );
        })}
    </div>
  );
};

export default App;

//here we are making swparate css for styling div in posts so we created a variable 'PostList' to store this styling and apply at the place of div

const PostList=styled.div`
background-color:green;
color: white;
border:2px solid black;
boxShadow:"5px 3px black";
paddingBlock:"10px";
`;
