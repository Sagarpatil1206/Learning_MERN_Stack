import { useState , useEffect} from "react";

const App = () => {
  const [users , setUsers] = useState([]); //we are expecting array this time not string
  const [posts , setPosts] = useState([]);

  //we tell React that your component needs to do something after render.
  // useEffect(()=>{
  //   fetchPostData(); //this useEffect function runs when this fetchpost function mounts on browser
  // } , []); //second argument here is dependancy array
  //if we give users in [] then ehen data in users changes the functio will execute

  const fetchUserData = () => {
    fetch(`http://localhost:8000/api`, {
      //we are fetching data from here
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => setUsers(data.users))
      .catch((err) => console.log(err));
  };

  const fetchPostData =() => {
    fetch('https://jsonplaceholder.typicode.com/posts',{method:"GET",}) //making request to external api
    .then((response) => {
      return response.json();
    })
    .then((data) => setPosts(data))
    .catch((err) => console.log(err));
  }

  /* as json is not supported here 
   so using stringify*/
  return (
    <div className="container"><br />
      {/* <pre>{JSON.stringify(users)}</pre> */}
      {users && users.map((user) => {
          //map function gives one by one user
          return <div className="alert alert-primary" key={user.age}>{user.name} is {user.age} years old </div>  //here we receive the data from localhost:8000 and rendring on our website frontend.
        })}
      <br/>

      <button onClick={fetchUserData} className="btn btn-primary">
        Fetch user data
      </button>
      <button onClick={fetchPostData} className="btn btn-primary">
        post data
      </button>

      {posts && posts.map((element) => {
        return <div className="alert alert-primary">{element.title} is having {element.userId}</div>
      })};
    </div>
  );
};

export default App;
