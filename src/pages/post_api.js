import { useEffect, useState } from "react"
const Post_api = ()=>{
    const [id,setId] = useState(0);
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    function updateData(){
        const user = {
            id,
            name,
            email,
        };
        console.log(user)
    localStorage.setItem('users',JSON.stringify(user));
        fetch('http://localhost:30001/users',{
            method: "POST",
            headers:{
                "Content-type":"application/json",
            },
            body: JSON.stringify(user),
        })
        .then((res)=>res.json())
        .then((info)=> console.log(info));
    }; 
    useEffect(()=>{
        let namestring = localStorage.getItem('users')
        let lname = JSON.parse(namestring)
        console.log(lname)
    })
    return (
        <>
        <h1>Post API Page </h1>
        <div>
        </div>
        <input onChange={(event1) => setId(event1.target.value)} required="required" /><br></br>
        <input onChange={(event2) => setName(event2.target.value)} required="required"  /><br></br>
        <input onChange={(event3) => setEmail(event3.target.value)} required="required"  /><br></br>
        <button onClick={updateData} >Add User</button>
        </>
    )
}
 export default Post_api