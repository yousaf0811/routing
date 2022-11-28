import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const About = ()=>{
    const [gitusers,setGitusers] = useState ({});
    const pname = useParams();
    const gitfunc = ()=>{
      fetch('https://api.github.com/users/' + pname.un)
      .then(responce => responce.json())
      .then(json => {setGitusers(json)
        console.log(gitusers)
    }
      )
    }
    useEffect(()=>{
      gitfunc();
    },[]);
    console.log(gitusers);
    return (
        <>
        <h1>This Is About Page</h1>
        <h1>Git Hub users Data</h1>
        <h4>id = {gitusers.login}</h4>
        <h4>name = {gitusers.company}</h4>
        <h4>node_id = {gitusers.node_id}</h4>
        </>
    )
}
 export default About