//USING Axios

import { useState, useEffect } from "react";
import axios from "axios";
import Button from "./Components/Button";
import './App.css';
import styled from "styled-components";
import { List } from "antd";
import {LoadingOutlined} from '@ant-design/icons'

const App = () => {
  const [users, setUsers] = useState([]); //we are expecting array this time not string
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    fetchPostData(); //this useEffect function runs when this fetchpost function mounts on browser
  } , []);

  const fetchUserData = () => {
    axios
      .get(`http://localhost:8000/api`)
      .then((data) => setUsers(data.data.users))
      .catch((err) => console.log(err));
  };

  const fetchPostData = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((data)=>{
     setPosts(data.data)
     setLoading(false);  //it's set as false when we load data from posts
    })
    .catch((err)=>console.log(err));
  };

  const testFunc=()=>{
    alert("This is a test function");
  }

  if(loading){
    // return <h1>Loading...</h1>
    return <LoadingOutlined className="display-1 text-center d-flex justify-content-center align-items-center"
    style={{height:"100vh",color:"green"}}
    />
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

      <List
         bordered
         dataSource={posts}
         renderItem={(item)=><List.Item>{item.title} is having {item.userId}</List.Item>} 
      />
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