import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
const Home = ()=>{
  const [data,setData] = useState([]);
  const [gitusers,setGitusers] = useState ([]);
  const gitfunc = ()=>{
    fetch('https://api.github.com/users')
    .then(responce => responce.json())
    .then(json => setGitusers(json))
  }
  const fdata = ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => setData(json))
  }
  useEffect(()=>{
    fdata();
    gitfunc();
  },[]);
  console.log(gitusers);
    return (
        <>
        <h1>This Is Home Page</h1>

        <ul>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to={"/users/"}>Users List</Link>
      </li>
      <li>
        <Link to="/post">Post</Link>
      </li>
    </ul>
    {data.map((item)=>(<h3><Link to={"/users/"+item.id}>{item.name}</Link></h3>))}
    <h1>Git Hub users Data</h1>
    {gitusers.map((items)=>(<h3><Link to={"/about/:un"+items.id} >{items.login}</Link></h3>))}
    </>
    )
}
 export default Home